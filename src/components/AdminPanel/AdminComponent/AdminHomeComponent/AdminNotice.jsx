import { useEffect, useState } from "react";
import { Plus, Trash2, MessageSquare, Edit2, Save } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import FetchallNotice from "../../../../Services/Notice/FetchAllNotice";

import Dialog from "./AdminDialog";
import AddNotice from "../../../../Services/Notice/AddNotice";
import DeleteNotice from "../../../../Services/Notice/DeleteNotice";
import EditNotice from "../../../../Services/Notice/EditNotice";
import UpdateOrder from "../../../../Services/Notice/SetNoticeOrder";

function AdminNotice() {
  const [Notices, SetNotices] = useState([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [NewTextToAdd, SetNewTextToAdd] = useState();
  const [isEdit, setisEdit] = useState(false);
  const [Values, setValues] = useState({});
  const [EditIndex, setEditIndex] = useState();

  async function FetchNotices() {
    try {
      const res = await FetchallNotice();
      let initial = {};
      res?.forEach((notice, index) => {
        initial[index] = notice.text;
      });
      setValues(initial);
      SetNotices(res);
    } catch (error) {
      console.log("error", error);
    }
  }

  async function handleAdd() {
    try {
      await AddNotice(NewTextToAdd);
      FetchNotices();
      SetNewTextToAdd("");
      setIsAddDialogOpen(false);
    } catch (error) {
      console.log("error", error);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this notice?")) return;
    try {
      await DeleteNotice(id);
      FetchNotices();
    } catch (error) {
      console.log("error", error);
    }
  }

  async function handleSave(id, index) {
    try {
      await EditNotice(id, Values[index]);
      FetchNotices();
    } catch (error) {
      console.log("error", error);
    }
  }

 async  function handleDragEnd(result) {
    if (!result.destination) return;
    const reorderedNotices = Array.from(Notices);
    const [movedItem] = reorderedNotices.splice(result.source.index, 1);
    reorderedNotices.splice(result.destination.index, 0, movedItem);
    SetNotices(reorderedNotices);
    
    // Update order in the database
    await UpdateOrder(reorderedNotices.map((notice, index) => ({ id: notice._id, order: index })))
      .catch(error => console.log("Error updating order", error));
  }

  useEffect(() => {
    FetchNotices();
  }, []);

  return (
    <>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Notice Management</h2>
          <button
            onClick={() => setIsAddDialogOpen(true)}
            className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors w-full sm:w-auto"
          >
            <Plus className="w-4 h-4" />
            Add Notice
          </button>
        </div>
        
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="notices">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                {Notices.map((notice, index) => (
                  <Draggable key={notice._id} draggableId={notice._id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="group relative flex flex-col sm:flex-row items-start gap-4 p-4 border rounded-lg hover:border-indigo-200 transition-colors"
                      >
                        <MessageSquare className="w-5 h-5 text-indigo-600 mt-1 hidden sm:block" />
                        <div className="flex-1 w-full sm:w-auto">
                          <input
                            type="text"
                            value={Values[index]}
                            onChange={(e) => setValues({ ...Values, [index]: e.target.value })}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all"
                          />
                        </div>
                        <div className="flex items-center gap-2 w-full sm:w-auto justify-end mt-4 sm:mt-0">
                          <button className="p-2 hover:bg-indigo-50 rounded-md transition-colors">
                            {isEdit && index === EditIndex && Values[index] !== notice.text ? (
                              <Save className="w-5 h-5 text-green-600" onClick={() => handleSave(notice._id, index)} />
                            ) : (
                              <Edit2 className="w-5 h-5 text-indigo-600" />
                            )}
                          </button>
                          <button className="p-2 hover:bg-red-50 rounded-md transition-colors" onClick={() => handleDelete(notice._id)}>
                            <Trash2 className="w-5 h-5 text-red-500" />
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      <Dialog isOpen={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)} title="Add New Notice">
        <div className="space-y-4">
          <textarea
            placeholder="Enter notice text..."
            value={NewTextToAdd}
            onChange={(e) => SetNewTextToAdd(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none resize-none"
          />
          <div className="flex justify-end gap-2">
            <button onClick={() => setIsAddDialogOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors">Cancel</button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors" onClick={handleAdd}>Add Notice</button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default AdminNotice;
