import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item))
    }

    // console.log("line 4", items)
    return (
        <div >
            {items ? items.map((item) => (
                <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2 border-none rounded-md border-gray-400 text-left shadow-lg bg-slate-100 flex justify-between items-center">

                    <div className="w-10/12">
                        <div className="mb-3">
                            <span className="font-bold">{item.card.info.name}</span>
                            <span className="px-2 font-bold">- ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100} </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>

                    <div className="w-2/12 mr-3 flex flex-col" >
                        <img className="rounded-lg mx-1" src={CDN_URL + item.card.info.imageId} alt="" />
                        <button className="px-1 mt-1 rounded-md bg-slate-700 text-white shadow-lg" onClick={() => {
                            handleAddItem(item)
                        }}>Add +</button>
                    </div>


                </div>
            )) :
                <h1 className="font-bold">Coming soon</h1>
            }
        </div>
    );
}

export default ItemList;