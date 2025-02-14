import axiosInstance from "../Instance";
async function UpdateOrder(notices)
{

    try{
        const updated=await axiosInstance.put('/api/v1/notice/edit-order',notices)
        console.log('updated',updated)
        return updated
    }
    catch(error)
    {
        return error;
    }
}
export default UpdateOrder;