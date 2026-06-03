app.patch("/categorias/:id", async (req, res) => {
    try {

        const { id } = req.params;
        const { nombre, descripcion } = req.body;

        await db.query(
            `UPDATE categorias
             SET nombre = ?, descripcion = ?
             WHERE id = ?`,
            [nombre, descripcion, id]
        );

        res.json({
            mensaje: "Categoría actualizada"
        });

    } catch (error) {
        res.status(500).json(error);
    }
});
