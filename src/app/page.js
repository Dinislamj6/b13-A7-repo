import Friends from "./component/Friends";
import YourFriends from "./component/YourFriends";


export default function Home() {
  return (
    <div >
      <Friends></Friends>
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className='font-bold text-2xl'>Your Friends</h2>
        <YourFriends></YourFriends>
      </div>

    </div>
  );
}