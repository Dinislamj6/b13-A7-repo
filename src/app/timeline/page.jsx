"use client"
import { createContext, useContext, useState } from "react";
import { TimelineContext } from "../context/context";
import Image from "next/image";
import call from "../../assets/call.png"
import video from "../../assets/video.png"
import massage from "../../assets/text.png"


const TimelinePage = () => {
    const { timeline, setTimeline } = useContext(TimelineContext);
    const [filterData, setFilterData] = useState(timeline)
    console.log(timeline);
    const filterDate = (item) => {
        const data = timeline.filter(el => el.type === item)
        setFilterData(data)
    }
    return (
        <div className="max-w-5xl mx-auto mt-10">
            <div>
                <h2 className="font-bold text-2xl">Timeline </h2>
                {/* card part */}
                <select onChange={(e) => filterDate(e.target.value)} defaultValue="Filter timeline" className="select select-ghost border shadow-3xl border-gray-300 mt-2">
                    <option disabled={true}>Filter timeline</option>
                    <option value={"call"}>call</option>
                    <option value={"video"}>video</option>
                    <option value={"text"}>text</option>
                </select>

                {
                    filterData.map((friend,ind) => <div key={ind}>
                        <div className="card w-full bg-base-100 card-xs shadow-sm mt-4 p-2">
                            <div className="flex gap-3">
                                <div>
                                    <Image src={friend.type === "call" ? call : friend.type === "video" ? video : massage} alt="friend images"></Image>
                                </div>
                                <div>
                                    <h2>{friend.name} with {friend.type}</h2>
                                    <h2>{friend.date.toLocaleDateString()}</h2>
                                </div>
                            </div>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TimelinePage;