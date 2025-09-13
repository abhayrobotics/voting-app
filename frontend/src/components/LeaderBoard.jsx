
const LeaderBoard = ({ data,allData,title }) => {

    const handleHighlight =(item)=>{
        const document = item.target
        // only highlight in case of admin page
        !allData ? document.classList.add("text-amber-300"):""

        // send the data to updaterequest for finidng the id

    }
    return (<>
        <div className=" w-1/3 m-4 p-2 bg-[#2e2e2e] rounded-xl " >
            <p className="text-2xl text-amber-300">{title}</p>
            <hr className="mb-4" />

            <div><div className="flex  m-1 text-amber-300">

                <div className=" w-52 mx-1">  Name</div>
                 {allData &&
                            <>
                    <div className=" w-12 text-center mx-1">Party</div>
                    <div className=" w-4 text-center mx-1"> Votes</div>
                </>}
            </div>
                <hr className="" />
                {data.map((item, index) => {
                    return (<div key={index}>
                        <div className="flex  m-1 ">

                            <div className=" w-52 px-1 "  onClick={handleHighlight}>  {item.name}</div>
                            {allData &&
                            <>
                            <div className=" w-12 text-center mx-1">{item.party}</div>
                            <div className=" w-8 text-center mx-1"> {item.votes}</div>
                            </>}
                        </div>
                        <hr className="" />
                    </div>)
                })}</div>
        </div>
    </>
    )
}

export default LeaderBoard