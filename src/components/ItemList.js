import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    // console.log(items)

    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.card.info.id} className="p-2 m-2 border-none rounded-md border-gray-400 text-left shadow-lg bg-slate-100">
                        <div className="flex justify-between mb-2 py-2">
                            <div>
                                <div className="mb-3">
                                    <span className="font-bold">{item.card.info.name}</span>
                                    <span className="px-2 font-bold">- ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100} </span>
                                </div>
                                <p className="text-xs">{item.card.info.description}</p>
                            </div>
                            <img className="w-[auto] h-[75px] rounded-md mx-2" src={CDN_URL + item.card.info.imageId} alt="" />
                        </div>

                    </div>
                ))}
        </div>
    );
}

export default ItemList;