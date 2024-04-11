import { useState } from "react"

const AddFoodItem = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [path, setPath] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(false);

    const handleAddFoodItem = async () => {
        // console.log(name, price, path, description);
        if(!name || !path | !price || !description){
            setError(true);
            return false;
        }else{
            setError(false);
        }
        let resto_id;
        const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
        if (restaurantData) {
            resto_id = restaurantData._id;
        }
        let response = await fetch("http://localhost:3000/api/restaurant/foods", {
            method: "POST",
            body: JSON.stringify({ name, price, img_path: path, description, resto_id })
        })
        response = await response.json();
        if (response.success) {
            alert("food item added");
        }else{
            alert("food item not added");
        }
    }
    return (
        <div>
            <h1>Add New food Item</h1>

            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter food Name"
                    value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            {
                error && !name && <span className="input-error">Please enter valid name</span>
            }
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter food Price"
                    value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            {
                error && !price && <span className="input-error">Please enter valid Price</span>
            }
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter image path"
                    value={path} onChange={(e) => setPath(e.target.value)} />
            </div>
            {
                error && !path && <span className="input-error">Please enter valid Path</span>
            }
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter description"
                    value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            {
                error && !description && <span className="input-error">Please enter valid Description</span>
            }

            <div className="input-wrapper">
                <button className="button" onClick={handleAddFoodItem}>Add food Item</button>
            </div>
        </div>
    )
}

export default AddFoodItem