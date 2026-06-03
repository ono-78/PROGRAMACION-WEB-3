app.delete("/categorias/:id", async (req, res) => {
    try {

        const { id } = req.params;

        await db.query(
            "DELETE FROM productos WHERE categoriaId = ?",
            [id]
        );

        await db.query(
            "DELETE FROM categorias WHERE id = ?",
            [id]
        );

        res.json({
            mensaje: "Categoría y productos eliminados"
        });

    } catch (error) {
        res.status(500).json(error);
    }
});
