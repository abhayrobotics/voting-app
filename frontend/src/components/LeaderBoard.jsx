
const LeaderBoard = ({ data }) => {
    return (<>
        <div className=" w-1/3 m-4 p-2 bg-[#2e2e2e] rounded-xl " >
            <p className="text-2xl text-amber-300">LeaderBoard</p>
            <hr className="mb-4" />

            <div><div className="flex  m-1 text-amber-300">

                <div className=" w-52 mx-1">  Name</div>
                <div className=" w-12 text-center mx-1">Party</div>
                <div className=" w-4 text-center mx-1"> Votes</div>
            </div>
                <hr className="" />
                {data.map((item => {
                    return (<>
                        <div className="flex  m-1 ">

                            <div className=" w-52 mx-1">  {item.name}</div>
                            <div className=" w-12 text-center mx-1">{item.party}</div>
                            <div className=" w-8 text-center mx-1"> {item.votes}</div>
                        </div>
                        <hr className="" />
                    </>)
                }))}</div>
        </div>
    </>
    )
}

export default LeaderBoard