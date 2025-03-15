const RenderDynamicList = () => {
    let arr = [3, 4, 5, 'aliza', 100, 7, 8];

    return (
        <ul style={{ background: "red", fontSize: 22 }}>
            {
                // prints single array element
                // <li> 1</li> 

                //To print all elements dynamically
                arr.map((value, index) => (
                    // console.log(value, index);
                    <li key={index}>{value}</li>
                ))
            }
        </ul>
    )
}

export default RenderDynamicList;
