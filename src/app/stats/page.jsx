"use client"
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimelineContext } from "../context/context";
import { useContext } from "react";


const StatsPage = (type) => {
    const {timeline, setTimeline} = useContext(TimelineContext)
    
    const data = [
        { name: 'call', value: timeline.filter(item => item.type === "call").length, fill: '#7E35E1' },
        { name: 'video', value: timeline.filter(item => item.type === "video").length, fill: '#37A163' },
        { name: 'text', value: timeline.filter(item => item.type === "text").length, fill: '#FFBB28' },

    ];
    return (
        <div className="max-w-5xl mx-auto mt-10">
              <h2 className="text-bold text-3xl">Friendship Analytics</h2>
            <div className="shadow p-8 rounded-md border border-slate-300 my-10">
                <p className="text-[#244D3F] font-extrabold">By Interaction Type</p>
                <PieChart style={{
                    width: '100%',
                    maxWidth: '500px',
                    maxHeight: '80vh',
                    margin: "auto",
                    aspectRatio: 1
                }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Legend></Legend>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default StatsPage;