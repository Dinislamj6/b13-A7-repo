import Friends from "./Friends";
import FriendsCard from "./FriendsCard";

const YourFriends = async() => {
    const res = await fetch("https://keenkeeper-my-app.vercel.app/data.json")
    const AllData = await res.json();

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {
                AllData.map((data,idx) =>  <FriendsCard key={idx} data={data}></FriendsCard>)
            }
        </div>
    );
};

export default YourFriends;