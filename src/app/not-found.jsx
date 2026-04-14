import Link from "next/link";

const NotFound = () => {
    return (
     <div className="flex flex-col items-center justify-center min-h-screen px-6">
            <div className="text-center space-y-5">
                <h1 className="font-bold text-5xl">404</h1>
                <p className="text-5xl">page not found</p>
                <p className="text-[#64748B]">Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.</p>
                <Link href={"/"}><button className="btn btn-primary">Back to Home</button></Link>
            </div>
     </div>
    );
};

export default NotFound;