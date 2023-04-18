//coisas.controller.js
const { db } = require('../db/index');

exports.getCoisas = async (req,res) => {
    const query = "SELECT * FROM items";

    try {
        const coisas = await db.query(query);
        if (coisas.rowCount < 1) {
            return res.status(404).send({
                message: "Records not found."
            })
        }
        res.status(200).send({
            status:'Success',
            message: 'Todas as coisas a enviar',
            data: coisas.rows
        })
        
    }catch(err){
        console.log(err);
        return res.status(500).send({
            error:err.message
        });
    }
}

exports.addCoisa = async (req, res) => {
	const { nome, origem, quantidade, destino } = req.body;
  
	// Check if origem and destino are valid cidades based on the Cidade enum
	const enumQuery = `SELECT * FROM pg_type WHERE typname = 'cidade'`;
	const { rows: enumRows } = await db.query(enumQuery);
	const enumLabels = enumRows[0].enumlabels;
	if (!enumLabels.includes(origem) || !enumLabels.includes(destino)) {
	  return res.status(400).send({
		error: "Origem or destino is not a valid cidade."
	  });
	}
  
	const query = "INSERT INTO items(nome, origem, quantidade, destino) VALUES($1, $2, $3, $4) RETURNING *";
	
	try {
	  const newCoisa = await db.query(query, [nome, origem, quantidade, destino]);
	  res.status(201).send({
		status: 'Success',
		message: 'New envelope created',
		data: newCoisa.rows[0],
	  });
	} catch (err) {
	  return res.status(500).send({
		error: err.message
	  });
	}
  };
  

exports.updateCoisa = async (req, res) => {
	const { nome, origem, quantidade, destino } = req.body;
	const { id } = req.params;
	const query =
			"UPDATE items SET nome = $1, origem = $2, quantidade = $3, destino = $4 WHERE id = $5 RETURNING *";
	
	try {
		const updatedCoisa = await db.query(query, [nome, origem, quantidade, destino, id]);
		res.status(200).send(updatedCoisa.rows[0]);
	} catch (err) {
		return res.status(500).send({
				error: err.message
			});
	}
};

exports.getcoisaById = async (req, res) => {
	const query = "SELECT * FROM items WHERE id = $1";
		const { id } = req.query;
	try {
			const coisa = await db.query(query, [id]);
		if (coisa.rowCount < 1) {
		return res.status(404).send({
			message: "No coisa information found",
		});
			}
			res.status(200).send({
				status: 'Success',
				message: 'Coisa Information retrieved',
				data: coisa.rows[0],
				});
	} catch (err) {
		return res.status(500).send({
				error: err.message
			});
	}
};

exports.deletecoisa = async (req, res) => {
	const { coisaId } = req.query;
	const coisasQuery = "SELECT * FROM items WHERE id=$1"
	const deleteCoisaQuery = "DELETE FROM items WHERE id=$1";
	
	try {
		const record = await db.query(coisasQuery, [coisaId]);

		if (record.rowCount < 1) {
			return res.status(404).send({
				message: "Record not found"
			})
		};
		await db.query(deleteCoisaQuery, [coisaId]);
		res.sendStatus(204);
	} catch (err) {
		return res.status(500).send({
				error: err.message
			});
	}
};

exports.getCidades = async (req, res) => {
	const query = `SELECT unnest(enum_range(NULL::Cidade)) AS nome`;
	try {
	  const { rows } = await db.query(query);
	  res.status(200).send(rows);
	} catch (err) {
	  console.log(err);
	  res.status(500).send({
		error: err.message,
	  });
	}
  };
  

