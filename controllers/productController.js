module.exports = {
    detail : (req,res) =>{
        return res.render("productDetail", {
            title : "Detalle"
        })
    }
}