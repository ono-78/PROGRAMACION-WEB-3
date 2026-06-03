app.post("/categorias", async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;

        const [resultado] = await db.query(
            "INSERT INTO categorias(nombre, descripcion) VALUES(?, ?)",
            [nombre, descripcion]
        );

        res.json({
            mensaje: "Categoría registrada",
            id: resultado.insertId
        });

    } catch (error) {
        res.status(500).json(error);
    }
});
