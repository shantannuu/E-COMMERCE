import React, { useState, useContext } from 'react'
import axios from 'axios';
import { GlobalState } from '../../../GlobalState'
import Loading from '../utils/loading/Loading'

const initialState = {
    product_id: '',
    title: '',
    price: 0,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nihil minus id harum omnis totam similique veniam. Quia, maxime ducimus.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nihil minus id harum omnis totam similique veniam. Quia, maxime ducimus.',
    category: ''
}

function CreateProduct() {
    const state = useContext(GlobalState);
    const [categories] = state.categoryAPI.categories;
    const [product, setProduct] = useState(initialState)
    const [images, setImages] = useState(false);
    const [loading, setLoading] = useState(false)
    console.log(product.description)
    const [isAdmin] = state.userAPI.isAdmin;
    const [token] = state.token

    const handleUpload = async e => {
        e.preventDefault();
        try {
            if (!isAdmin) return alert("you are not admin")
            const file = e.target.files[0]
            console.log(file)

            if (!file) return alert("files not exist")

            if (file.size > 1024 * 1024) return alert("Size too large !")

            if (file.type !== 'image/jpeg' && file.type !== 'image/png')
                return alert("files format incorrect")

            let formData = new FormData();
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload', formData, {
                headers: { 'content-type': 'multipart/form-data', Authentication: token }
            });

            setLoading(false)
            setImages(res.data)
            console.log(res.data)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy = async () => {
        try {
            if (!isAdmin) return alert("you are not admin")
            setLoading(true)
            const res = await axios.post('/api/destroy', { public_id: images.public_id }, {
                headers: {
                    Authentication: token
                }
            });
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }


    const styleUpload = {
        display: images ? "block" : "none"
    }
    console.log(images)
    return (
        <div className="create_product">
            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload} />
                {
                    loading ? <div id="file_img"><Loading /></div>
                        : <div id="file_img" style={styleUpload}>
                            <img src={images ? images.url : ''} alt="" />
                            <span onClick={handleDestroy}>X</span>
                        </div>
                }


            </div>

            <form>
                <div className="row">
                    <label htmlFor="product_id">Product ID</label>
                    <input type="text" name="product_id" id="porduct_id" required value={product.product_id} />
                </div>
                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" required value={product.title} />
                </div>
                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" required value={product.price} />
                </div>
                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" required value={product.description} row="5" />
                </div>
                <div className="row">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" name="content" id="content" required value={product.content} row="7" />
                </div>
                <div className="row">
                    <label htmlFor="categories">Categories : </label>
                    <select name="categories" value={product.category}>
                        <option value="">Please Select a category</option>
                        {
                            categories.map(category => (
                                <option value={category._id} key={category._id}>
                                    { category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreateProduct
