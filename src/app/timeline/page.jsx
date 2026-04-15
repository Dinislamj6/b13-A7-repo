"use client"
import { createContext, useContext } from "react";
import { TimelineContext } from "../context/context";
import Image from "next/image";
import call from "../../assets/call.png"
import video from "../../assets/video.png"
import massage from "../../assets/text.png"


const TimelinePage = () => {
    const { timeline, setTimeline } = useContext(TimelineContext);
    return (
        <div className="max-w-5xl mx-auto mt-10">
            <div>
                <h2 className="font-bold text-2xl">Timeline </h2>

                  {/* card part */}

                  {
                    timeline.map(friend => <div key={friend.id}>
                        <div className="card w-full bg-base-100 card-xs shadow-sm mt-4">
                         <Image src={friend.type === "call"? call: friend.type === "video"? video: massage } alt="friend images"></Image>
                          <h2>{friend.name}</h2>   
                          <h2>{friend.date.toLocaleDateString()}</h2>   
                          <h2>{friend.type}</h2>   
                        </div>
                </div>)
                  }

              
               




                
            </div>
        </div>
    );
  };

export default TimelinePage;