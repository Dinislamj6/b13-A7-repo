"use client"
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FaArchive } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { IoMdText } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { RiNotificationSnoozeFill } from "react-icons/ri";
import { TimelineContext } from "../context/context";
import { toast } from "react-toastify";


const BlogPage = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get("id")

 
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://keenkeeper-my-app.vercel.app/data.json")
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    const singleFriend = data.find(i => i.id === Number(id));


        //  handler
        const {timeline, setTimeline} = useContext(TimelineContext)
    
    const callHandler = (singleFriend,type) => {
        toast.success(`${type} with ${singleFriend?.name}!`)
        setTimeline([...timeline,{...singleFriend,type,date:new Date()},])
        console.log(timeline);
    }
    

    return (
        <div>

            <div className="grid grid-cols-12  max-w-4xl mx-auto mt-10 gap-4">
                {/* card image  */}
                {
                    singleFriend && <div className="md:col-span-4 col-span-12">
                        <div className="card bg-base-100 card-sm shadow-sm">
                            <div className="card-body">
                                <div className="flex justify-center items-center">
                                    <Image className="rounded-full" src={singleFriend && singleFriend.picture} alt="this is single friend picture" width={50} height={50} />
                                </div>

                                <div className='flex flex-col items-center justify-center'>
                                    <h2 className="card-title text-center">{singleFriend?.name}</h2>
                                    {
                                        singleFriend?.status === "overdue" && <div className="badge badge-error">{singleFriend?.status}</div>
                                    }
                                    {
                                        singleFriend?.status === "on-track" && <div className="badge badge-success">{singleFriend?.status}</div>
                                    }
                                    {
                                        singleFriend?.status === "almost due" && <div className="badge badge-warning">{singleFriend?.status}</div>
                                    }

                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    {
                                        singleFriend?.tags.map((tag, ind) => <div key={ind}>
                                            <div className="badge badge-soft badge-success">{tag}</div>
                                        </div>)
                                    }
                                </div>

                                <p className="text-center">{singleFriend?.bio}</p>
                                <p className="text-center">Preferred: {singleFriend?.email}</p>

                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-3">
                            <button className="btn"><RiNotificationSnoozeFill /> Snooze 2 weeks</button>
                            <button className="btn"> <FaArchive /> Archive</button>
                            <button className="btn text-red-500"><MdDelete /> Delete</button>
                        </div>
                    </div>
                }





                {/* card text */}

                <div className="md:col-span-8 col-span-12">
                    <div className="grid grid-cols-3 gap-3">
                        <div className="card  bg-base-100 card-xs shadow-sm">
                            <div className="card-body">
                                <div className="flex justify-center items-center text-[#64748B]">
                                    <h2 className="card-title text-center font-bold text-3xl">{singleFriend?.days_since_contact}</h2>
                                </div>
                                <p className="text-center text-[#64748B]">Days Since Contact</p>

                            </div>
                        </div>

                        <div className="card bg-base-100 card-xs shadow-sm">
                            <div className="card-body">
                                <div className="flex justify-center items-center text-[#64748B]">
                                    <h2 className="card-title text-center font-bold text-3xl">{singleFriend?.goal}</h2>
                                </div>
                                <p className="text-center text-[#64748B]">Goal (Days)</p>

                            </div>
                        </div>

                        <div className="card bg-base-100 card-xs shadow-sm">
                            <div className="card-body">
                                <div className="flex justify-center items-center text-[#64748B]">
                                    <h2 className="card-title text-center font-bold text-2xl">{singleFriend?.next_due_date}</h2>
                                </div>
                                <p className="text-center text-[#64748B]">Next Due</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="card bg-base-100 card-xs shadow-sm">
                            <div className="card-body">
                                <div className="flex justify-between">
                                    <h2 className="text-[#64748B] bold text-xl">Relationship Goal</h2>
                                    <button className="btn btn-sm ">Edit</button>
                                </div>
                                <p className="text-[#64748B]">Connect every <span className="font-bold text-black">{singleFriend?.goal} days</span></p>
                            </div>
                        </div>

                    </div>


                    <div>
                        <div className="card bg-base-100 card-xs shadow-sm">
                            <div className="card-body">
                                <h2 className="text-semibold text-xl text-[#64748B]">Quick Check-In</h2>
                                {/* call video text */}
                                <div className="grid gap-3 grid-cols-1 md:grid-cols-3">

                                    <button onClick={()=>callHandler(singleFriend,"call")}>
                                        <div className="card w-full bg-gray-100 card-xs shadow-sm">

                                            <div className="flex flex-col justify-center items-center p-5 text-xl">
                                                <IoCall />
                                                <p>Call</p>

                                            </div>
                                        </div>
                                    </button>

                                    <button onClick={()=> callHandler(singleFriend,"text")}>
                                         <div className="card w-full bg-gray-100 card-xs shadow-sm">

                                            <div className="flex flex-col justify-center items-center p-5 text-xl">
                                                <IoMdText />
                                                <p>Text</p>

                                            </div>
                                        </div>
                                    </button>
                                    
                                 <button onClick={() => callHandler(singleFriend,"video")}>
                                      <div className="card w-full bg-gray-100 card-xs shadow-sm">

                                            <div className="flex flex-col justify-center items-center p-5 text-xl">
                                                <FaVideo />
                                                <p>Video</p>

                                            </div>
                                        </div>
                                 </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BlogPage;