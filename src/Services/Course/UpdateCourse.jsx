import axiosInstance from "../Instance";

async function UpdateCourse(id, formdata)
{
    try{
        const res=await axiosInstance.put(`/api/v1/courses/edit/${id}`,formdata);
        return res.data;

    }catch(error)
    {
        throw error;
    }

}
export default UpdateCourse;