import img1 from "../assets/img.jpeg"

const RenderSingleCard = () => {
    const cardDataObj = {
        title: "Classic Black Hooded Shirt",
        price: 89,
        description: "ready to wear",
        category: "Clothes",
        //In image we can give url OR path too
        // image1: "https://teetall.pk/cdn/shop/files/IMG-20230519-WA0002.jpg?crop=center&height=999&v=1684458048&width=750",
        // image2: { img1 } 
        image3: "https://i.imgur.com/cSytoSD.jpeg",
        image4: "https://i.imgur.com/cSytoSD"
    }
    //Destructing Object - Unpacking of Object Keys
    const { title,
        price,
        description,
        category,
        image4} = cardDataObj

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-blue-200 p-6">
            <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between">
                <img className="w-full h-60 object-cover rounded-xl" src={`${image4}.jpeg`} alt="Black Hooded shirt" />
                <h2 className="text-xl font-semibold text-gray-900 mt-4"> {title}</h2>
                <p className="text-gray-500 text-sm">{category}</p>
                <p className="text-gray-700 mt-2 text-sm">{description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">$ {price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default RenderSingleCard;
