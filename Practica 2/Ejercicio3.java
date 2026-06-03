app.get("/categorias/:id", async (req, res) => {
    try {

        const { id } = req.params;

        const [categoria] = await db.query(
            "SELECT * FROM categorias WHERE id = ?",
            [id]
        );

        const [productos] = await db.query(
            "SELECT * FROM productos WHERE categoriaId = ?",
            [id]
        );

        res.json({
            categoria: categoria[0],
            productos: productos
        });

    } catch (error) {
        res.status(500).json(error);
    }
});
