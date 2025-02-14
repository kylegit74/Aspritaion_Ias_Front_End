import axiosInstance from "../Instance";

async function EditNotice(id,text)
{
    try{
        const res=await axiosInstance.put(`https://aspirationias.onrender.com/api/v1/notice/edit/${id}`,{text})
        return res.data;

    }catch(error)
    {
        throw error;
    }

}
export default EditNotice;