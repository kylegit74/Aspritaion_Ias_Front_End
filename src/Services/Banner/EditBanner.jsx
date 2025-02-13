import axiosInstance from "../Instance";

async function EditBanner(formdata,id)
{
    console.log('formdata',formdata);
    try{
        const res=await axiosInstance.put(`https://aspirationias.onrender.com/api/v1/banner/edit/${id}`,formdata);
        console.log('res',res)
        return res.data
    }catch(error)
    {
        return error;
    }

}
export default EditBanner;