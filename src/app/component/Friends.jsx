import { FaPlus } from "react-icons/fa";

const Friends = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center space-y-5 mt-10">
                <h2 className="font-bold text-5xl text-[#1F2937]">Friends to keep close in your life</h2>
                <p className="text-[#64748B] text-center">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
                <div>
                    <button className="btn text-white bg-[#244D3F]"><FaPlus />Add a Friend</button>
                </div>
            </div>

            {/* card */}

            <div className="grid grid-cols-1 md:grid-cols-4 max-w-4xl mx-auto mt-10 gap-3">
                <div>
                    <div className="card card-border bg-base-100 w-full shadow-lg">
                        <div className="card-body py-5">
                            <h2 className="text-[#64748B] text-center text-xl font-bold">10</h2>
                            <p className="text[#64748B] text-center">Total Friends</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-border bg-base-100 w-full shadow-lg">
                        <div className="card-body py-5">
                            <h2 className="text-[#64748B] text-center text-xl font-bold">3</h2>
                            <p className="text[#64748B] text-center">On Track</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-border bg-base-100 W- h-full shadow-lg">
                        <div className="card-body py-5">
                            <h2 className="text-[#64748B] text-center text-xl font-bold">6</h2>
                            <p className="text[#64748B] text-center">Need Attention</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-border bg-base-100 w-full shadow-lg">
                        <div className="card-body py-5">
                            <h2 className="text-[#64748B] text-center text-xl font-bold">12</h2>
                            <p className="text[#64748B] text-center">Interactions This Month</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Friends;