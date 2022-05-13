const { db } = require('../db/index');

exports.getCoisas = async (req,res) => {
    const query = "SELECT * FROM coisas";

    try {
        const coisas = await db.query(query);
        if(envelopes.rowCount < 1) {
            return res.status(404).send({
                message: "Records not found."
            })
        res.status(200).send({
            status:'Success',
            message: 'Todas as coisas a enviar',
            data: coisas.rows
        })
        }
    }catch(err){
        return res.status(500).send({
            error:err.message
        });
    }
}