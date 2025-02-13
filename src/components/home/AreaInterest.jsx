import React, { useEffect, useState } from "react";
import { BiArrowBack, BiChevronRight } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import FetchAllCourses from "../../Services/Course/FetchAllCourse";

const AreaInterest = () => {
  const [Courses, SetCourses] = useState([]);
  async function FetchCouse() {
    try {
      const courses = await FetchAllCourses();
      SetCourses(courses);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    FetchCouse();
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ background: "#fff0b2" }}>
      <div className="container max-w-7xl px-4 mx-auto my-10">
        <h4 className="text-center font-bold text-xl">
          Pick Course as per your Area of Interest
        </h4>
        <h2 className="text-center mt-3 mb-10 text-4xl font-bold">
          Top Ranked <span className="pb_text_red">Courses</span>
        </h2>
        {/* front */}
        <div className="container mx-auto px-4">
          {Courses.slice(0, 1)?.map((course) => (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6 rounded-s-3xl pb_bg_red z-10">
                <div className="flex flex-col items-start gap-3">
                  <img className="rounded-3xl" src={course.image} />

                  <div className="flex justify-between w-full">
                    <h5 className="text-2xl font-bold text-white">
                      {course.heading}
                    </h5>
                    {/* <span className="mt-2 flex space-x-1 text-yellow-500">
                           {[...Array(5)].map((_, index) => (
                             <FaStar key={index} />
                           ))}
                         </span> */}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex space-x-4 flex-col items-start gap-3">
                  <span>
                    {/* <FaGraduationCap className='p-4 w-20 rounded-full h-20 pb_bg_ylw'/> */}
                  </span>

                  <div>
                    <p className="mt-2">{course.description}</p>
                    <h4 className="font-bold mt-3 mb-2">Explore Courses: </h4>
                    <ol className="font-medium text-gray-600 text-sm">
                      <ol className="font-medium text-gray-600 text-sm">
                        {
                          course.Explore_Courses?.map((Explore, index) => (
                            <li key={index}>{Explore}</li>
                          ))}
                      </ol>
                    </ol>

                    <div className="flex gap-4 mt-4">
                      <button className="pb_bg_red rounded-full px-4 py-2 flex gap-2 text-white items-center font-medium">
                        Enroll Now <BiChevronRight className="text-2xl" />{" "}
                      </button>
                      <button className="px-4 py-2 flex gap-2 items-center font-medium">
                        Explore Course{" "}
                        <span>
                          {" "}
                          <BiArrowBack className="rotate-180 text-xl" />{" "}
                        </span>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pb_bg_ylw h-8 w-[90%] block rounded-se-2xl rounded-es-2xl relative my-10 mx-auto">
          <span className="absolute left-0 -top-16 h-16 w-8 block pb_bg_ylw"></span>
          <span className="absolute right-0 -bottom-16 h-16 w-8 block pb_bg_ylw"></span>
        </div>

        {/* reverse */}
        <div className="container mx-auto px-4">
          {Courses?.slice(1, 2)?.map((course) => (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6">
                <div className="flex space-x-4 flex-col items-start gap-3">
                  <span>
                    {/* <FaGraduationCap className='p-4 w-20 rounded-full h-20 pb_bg_ylw'/> */}
                  </span>

                  <div>
                    <p className="mt-2">{course?.description}</p>
                    <h4 className="font-bold mt-3 mb-2">Explore Courses: </h4>
                    <ol className="font-medium text-gray-600 text-sm">
                      {course.Explore_Courses?.map((Explore, index) => (
                        <li key={index}>{Explore}</li>
                      ))}
                    </ol>
                    <div className="flex gap-4 mt-4">
                      <button className="pb_bg_red rounded-full px-4 py-2 flex gap-2 text-white items-center font-medium">
                        Enroll Now <BiChevronRight className="text-2xl" />{" "}
                      </button>
                      <button className="px-4 py-2 flex gap-2 items-center font-medium">
                        Explore Course{" "}
                        <span>
                          {" "}
                          <BiArrowBack className="rotate-180 text-xl" />{" "}
                        </span>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-e-3xl pb_bg_red z-10">
                <div className="flex flex-col items-start gap-3">
                  <img className="rounded-3xl" src={course?.image} />

                  <div className="flex justify-between w-full">
                    <h5 className="text-2xl font-bold text-white">
                      {course?.heading}
                    </h5>
                    {/* <span className="mt-2 flex space-x-1 text-yellow-500">
                           {[...Array(5)].map((_, index) => (
                             <FaStar key={index} />
                           ))}
                         </span> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pb_bg_ylw h-8 w-[90%] block rounded-ss-2xl rounded-ee-2xl relative my-10 mx-auto">
          <span className="absolute right-0 -top-16 h-16 w-8 block pb_bg_ylw"></span>
          <span className="absolute left-0 -bottom-16 h-16 w-8 block pb_bg_ylw"></span>
        </div>

        {/* front */}
        <div className="container mx-auto px-4">
          {Courses.slice(2, 3)?.map((course) => (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6 rounded-s-3xl pb_bg_red z-10">
                <div className="flex flex-col items-start gap-3">
                  <img className="rounded-3xl" src={course.image} />

                  <div className="flex justify-between w-full">
                    <h5 className="text-2xl font-bold text-white">
                      {course.heading}
                    </h5>
                    {/* <span className="mt-2 flex space-x-1 text-yellow-500">
                           {[...Array(5)].map((_, index) => (
                             <FaStar key={index} />
                           ))}
                         </span> */}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex space-x-4 flex-col items-start gap-3">
                  <span>
                    {/* <FaGraduationCap className='p-4 w-20 rounded-full h-20 pb_bg_ylw'/> */}
                  </span>

                  <div>
                    <p className="mt-2">{course.description}</p>
                    <h4 className="font-bold mt-3 mb-2">Explore Courses: </h4>
                    <ol className="font-medium text-gray-600 text-sm">
                      <ol className="font-medium text-gray-600 text-sm">
                        {
                          course.Explore_Courses?.map((Explore, index) => (
                            <li key={index}>{Explore}</li>
                          ))}
                      </ol>
                    </ol>

                    <div className="flex gap-4 mt-4">
                      <button className="pb_bg_red rounded-full px-4 py-2 flex gap-2 text-white items-center font-medium">
                        Enroll Now <BiChevronRight className="text-2xl" />{" "}
                      </button>
                      <button className="px-4 py-2 flex gap-2 items-center font-medium">
                        Explore Course{" "}
                        <span>
                          {" "}
                          <BiArrowBack className="rotate-180 text-xl" />{" "}
                        </span>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-8 w-[90%] block rounded-se-2xl rounded-es-2xl relative my-10 mx-auto">
          <span className="absolute left-0 -top-16 h-36 w-8 block pb_bg_red"></span>
          {/* <span className='absolute right-0 -bottom-16 h-16 w-8 block pb_bg_ylw'></span> */}
        </div>
      </div>
    </div>
  );
};

export default AreaInterest;
