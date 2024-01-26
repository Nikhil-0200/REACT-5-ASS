function DataDisplay(data){
return(
    <>
    <p>{data.Load == false ? "Data Not Loaded" : "Data Loaded"}</p>
    <p>{data.Error}</p>
    <div>
        {data.Array.map((ele)=>(
            <div key={ele.id} style={{border: "2px solid black", margin: "20px"}}>
                <p>User Id: {ele.id}</p>
            <p>Title: {ele.title}</p>
            </div>
        ))}
    </div>
    </>
)
}

export default DataDisplay;