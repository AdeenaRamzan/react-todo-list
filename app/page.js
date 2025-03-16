"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  let deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) {
      alert("Title and Description cannot be empty!");
      return;
    }
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  let renderTask = <h2 className="text-white font-bold text-xl text-center">No Task Available!!</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <>
        
        <ul
         
          key={i}
          className="flex flex-wrap md:flex-nowrap justify-between items-center border border-opacity-50 rounded-lg px-5 mb-3  bg-opacity-30 bg-[#1c78be]  w-full max-w-[90%] md:max-w-2xl lg:max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between w-full">
            <h5 className="flex-1 text-left text-white   text-md  px-2 min-w-0 break-words">{t.title}</h5>
            <h6 className="flex-1 text-left text-white  text-sm  px-2 min-w-0 break-words">{t.desc}</h6>
          </div>
          <button
            className="text-white font-bold p-2 sm:p-5 hover:text-red-700"
            onClick={() => {
              deleteHandler(i);
            }}
          >
            Delete
          </button>
        </ul></>
      );
    });
  }

  return (
    <>
      <div className="px-4 py-10   rounded-lg ">
        <h1 className="font-extrabold text-3xl sm:text-3xl md:text-3xl lg:text-4xl text-center text-white">TO DO LIST</h1>
        <form onSubmit={submitHandler} className="flex flex-wrap justify-center py-10 gap-4 sm:gap-10 w-full max-w-[90%] md:max-w-2xl lg:max-w-4xl mx-auto">
          <input
            type="text"
            className="w-full sm:w-[48%] bg-[#1c78be] bg-opacity-65 px-5 sm:px-10 py-3 rounded-lg placeholder-white placeholder-opacity-35 placeholder:text-lg placeholder:font-bold border-none focus:outline-none text-white"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="w-full sm:w-[48%]  bg-[#1c78be] bg-opacity-65 px-5 sm:px-10  py-3 rounded-lg placeholder-white placeholder-opacity-35 placeholder:text-lg placeholder:font-bold focus:outline-none text-white"
            placeholder="Enter description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className="w-full sm:w-[48%] border p-3 sm:p-5 bg-[#1c78be] border-none rounded-lg font-bold text-white transition duration-300 ease-in-out transform hover:bg-[#3790d3] hover:scale-100 hover:shadow-lg">
            Add Task
          </button>
        </form>
        <table cellPadding="10px" className="text-xl  flex-wrap md:flex-nowrap justify-between items-center text-white px-5 mb-3 bg-opacity-30 bg-[#1e84d1] w-full max-w-[90%] hidden lg:flex lg:max-w-4xl mx-auto">
  <tr className="flex gap-[9rem] text-center ">
            <td className="w-52">Title</td>
            <td className="w-52">Description</td>
            <td className="w-52">Delete</td>
          </tr>
        </table>
        <div className="overflow-x-auto">{renderTask}</div>
      </div>
    </>
  );
};

export default Page;
