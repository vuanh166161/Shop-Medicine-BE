const ProductService = require('../services/ProductService')

const createProduct = async (req, res) => {
    try {
        const { name, image, type, price, countInStock, rating, description, discount } = req.body
        if(!name || !image || !type || !price || !countInStock || !rating || !description || !discount) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        
        const response = await ProductService.createProduct(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const productID = req.params.id
        const data = req.body
        if(!productID){
            return res.status(200).json({
                status: 'OK',
                message: 'The productID is required'
            })
        }
        const response = await ProductService.updateProduct(productID, data)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e
        })
    }
}
const detailsProduct = async (req, res) => {
    try {
        const productID = req.params.id
        if(!productID){
            return res.status(200).json({
                status: 'OK',
                message: 'The productID is required'
            })
        }
        const response = await ProductService.detailsProduct(productID)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e
        })
    }
}
const deleteProduct = async (req, res) => {
    try {
        const productID = req.params.id
        if(!productID){
            return res.status(200).json({
                status: 'OK',
                message: 'The productID is required'
            })
        }
        const response = await ProductService.deleteProduct(productID)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e
        })
    }
}
const deleteMany= async (req, res) => {
    try {
        const IDs = req.body.IDs
        if(!IDs){
            return res.status(200).json({
                status: 'OK',
                message: 'The productID is required'
            })
        }
        const response = await ProductService.deleteManyProduct(IDs)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e
        })
    }
}
const allProduct = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await ProductService.allProduct(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await ProductService.getAllType()
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e
        })
    }
}   


module.exports = {
    createProduct, updateProduct, detailsProduct, deleteProduct, allProduct, deleteMany, getAllType
}