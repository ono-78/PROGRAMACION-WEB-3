app.get("/categorias", async (req, res) => {
    try {

        const [datos] = await db.query(
            "SELECT * FROM categorias"
        );

        res.json(datos);

    } catch (error) {
        res.status(500).json(error);
    }
});
