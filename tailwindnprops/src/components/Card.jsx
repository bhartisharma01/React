
const Card = ({ musicObj }) => {
    return (
        <>
            <div className="border  w-[350px] glass rounded-xl flex">
                <img
                    src="https://media4.giphy.com/media/BKv6EPd7ZCgmMg0iQK/giphy.gif?cid=ecf05e47dwh9vdr5bezeb3lbg1bqy8y3kfe61f2oopjxa2jw&rid=giphy.gif&ct=g"
                    alt="music"
                    width="150"
                    height="150"
                    className="rounded-2xl p-2"
                />
                <div className="px-4 py-4 ">
                    <div className="font-outerSans py-3">
                        <h1>{musicObj.name}</h1>
                        <p className="text-xs">{musicObj.desc}</p>
                    </div>
                    <div className="flex w-full justify-evenly  ">
                        <button className=" border rounded-full border-gray-500 p-1">
                            <svg
                                width="30"
                                height="30"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="PlayArrowRoundedIcon"
                            >
                                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path>
                            </svg>


                        </button>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Card