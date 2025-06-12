const RenderCards = () => {
    const CardsArray = [
        {
            title: "Classic Black Hooded Shirt",
            price: 89,
            description: "ready to wear",
            category: "Clothes",
            image: { img1 }
        },
        {
            title: "Classic Black Hooded Shirt",
            price: 89,
            description: "ready to wear",
            category: "Clothes",
            image: { img1 }
        }, {
            title: "Classic Black Hooded Shirt",
            price: 89,
            description: "ready to wear",
            category: "Clothes",
            image: { img1 }
        }, {
            title: "Classic Black Hooded Shirt",
            price: 89,
            description: "ready to wear",
            category: "Clothes",
            image: { img1 }
        }
    ]

    return (        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between">
                <img className="w-full h-60 object-cover rounded-xl" src={img1} alt="Black Hooded shirt" />
                <h2 className="text-xl font-semibold text-gray-900 mt-4"> classic black</h2>
                <p className="text-gray-500 text-sm">Clothes </p>
                <p className="text-gray-700 mt-2 text-sm"> regular wear ehh ffhfh Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem aliquam maiores illum consequatur perferendis qui, fuga autem cumque ad quod, eveniet officiis quis! Iste pariatur quas quos illum. Inventore.</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">$89</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Add to cart</button>
                </div>
            </div>         
        </div>
    )

}
