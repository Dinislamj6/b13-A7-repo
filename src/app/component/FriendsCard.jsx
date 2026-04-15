import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendsCard = ({ data }) => {
    return (
        <Link href={`/blog?id=${data.id}`}>
            <div className="mt-5">
                <div className="card  bg-base-100 card-sm shadow-sm">
                    <div className="card-body">
                        <div className='flex justify-center items-center'>
                            <Image className='rounded-full' src={data.picture} alt='friends picture' width={50} height={50}/>
                        </div>
                        <div className='text-center'>
                            <h2 className='font-semibold text-xl'>{data.name}</h2>
                            <p>{data.days_since_contact}d ago</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            {
                                data.tags.map((tag, ind) => <div key={ind}>
                                    <div className="badge badge-soft badge-success">{tag}</div>
                                </div>)
                            }
                        </div>

                        <div className='flex justify-center'>
                            {
                                data.status === "overdue" && <div className="badge badge-error">{data.status}</div>
                            }
                            {
                                data.status === "on-track" && <div className="badge badge-success">{data.status}</div>
                            }
                            {
                                data.status === "almost due" && <div className="badge badge-warning">{data.status}</div>
                            }
                        </div>


                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FriendsCard;