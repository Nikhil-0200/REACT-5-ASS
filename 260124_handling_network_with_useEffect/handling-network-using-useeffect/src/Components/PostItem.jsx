function PostItem(prop){

    return(
        <>
        <button onClick={prop.PaginationNext}> Next</button>
        <p>{prop.Page}</p>
        <button onClick={prop.PaginationPrevious}>Previous</button>
        {
            prop.Array.map((ele)=>(
                <div key={ele.id} style={{border: "2px solid Black", margin: "20px"}}>
                    <p>User Id: {ele.id}</p>
                    <p>Title: {ele.title}</p>
                    <p>Body: {ele.body}</p>
                </div>
            ))
        }
        </>
    )
}

export default PostItem;