import MyCard from "./card";    
// function MyCard(props) {
    //    const {image, title, description, price, category} = data  -->reference hei ye only
//     const data = props.data
//     return (
//         <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between">
//             <img className="w-full h-60 object-cover rounded-xl" src={`${data.image}.jpeg`} alt="Black Hooded shirt" />
//             <h2 className="text-xl font-semibold text-gray-900 mt-4"> {data.title}</h2>
//             <p className="text-gray-500 text-sm">{data.category}</p>
//             <p className="text-gray-700 mt-2 text-sm">{data.description}</p>
//             <div className="mt-4 flex justify-between items-center">
//                 <span className="text-lg font-bold text-gray-900">$ {data.price}</span>
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Add to cart</button>
//             </div>
//         </div>
//     )
// }

export default MyCard;

const RenderAllCardProps = () => {
    const CardsArray = [
        {
            title: "Nightshade Running Shoes",
            price: 110,
            description: "Built for speed and daily wear",
            category: "Athletic Footwear",
            image: "https://i.imgur.com/cSytoSD"
        },
        {
            title: "Ocean Mist Hoodie",
            price: 135,
            description: "Soft fabric with a relaxed fit for cool evenings",
            category: "Hoodies",
            image: "https://i.imgur.com/cSytoSD"
        },
        {
            title: "Vintage Brown Leather Watch",
            price: 85,
            description: "Timeless design with adjustable straps",
            category: "Watches",
            image: "https://i.imgur.com/penhRli.jpeg"
        },
        {
            title: "Explorer Laptop Bag",
            price: 105,
            description: "Spacious interior with anti-theft zipper",
            category: "Travel Gear",
            image: "https://i.imgur.com/cSytoSD"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-blue-200 p-6">
         {
            CardsArray.map((object, index) => {
                return(
                    <MyCard data={object} key={index}/>
                )
            })
        }
       </div>
    )
}

export default RenderAllCardProps;
