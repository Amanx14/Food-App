import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    // console.log("----------", data.itemCards, data.title);
    const {title , itemCards} = data;

    return (
        <div>
            <div className="w-6/12 bg-gray-50 shadow-lg mx-auto my-4 p-4 rounded-lg">
                <div className="flex justify-between">
                    <span className="font-bold text-md">{title}</span>
                    <span> <i className="fa-solid fa-angle-down"></i> </span>
                </div>

                <ItemList items={itemCards} />

            </div>
        </div>
    );
}

export default RestaurantCategory;