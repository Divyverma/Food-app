'use client'
import { useRouter } from "next/navigation";
import { useState } from "react"

const EditFoodItem = (props) => {

    const router = useRouter();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [path, setPath] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(false);

    const handleEditFoodItem = async () => {
        // console.log(name, price, path, description);
        if(!name || !path | !price || !description){
            setError(true);
            return false;
        }else{
            setError(false);
        }
    }
    return (
        <div className="container">
            <h1>Update food Item</h1>

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
                <button className="button" onClick={handleEditFoodItem}>Update food Item</button>
            </div>
            <div className="input-wrapper">
                <button className="button" onClick={()=>router.push('/restaurant/dashboard')}>Back to FoodList</button>
            </div>
        </div>
    )
}

export default EditFoodItem