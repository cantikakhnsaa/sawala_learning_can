let articles = [
    {
        id: 1,
        title: "Belajar Node.js",
        content: "Node.js digunakan untuk menjalankan JavaScript di sisi server."
    },
    {
        id: 2,
        title: "Belajar Express",
        content: "Express membantu membuat server dan REST API dengan Node.js."
    }
];

export const getArticles = (req, res) => {
    res.json(articles);
};

export const getArticleById = (req, res) => {
    const id = Number(req.params.id);

    const article = articles.find(article => article.id === id);

    if (!article) {
        return res.status(404).json({
            message: "Artikel tidak ditemukan"
        });
    }

    res.json(article);
};

export const createArticle = (req, res) => {
    const { title, content } = req.body;

    const newArticle = {
        id: articles.length + 1,
        title,
        content
    };

    articles.push(newArticle);

    res.status(201).json(newArticle);
};

export const updateArticle = (req, res) => {
    const id = Number(req.params.id);

    const article = articles.find(article => article.id === id);

    if (!article) {
        return res.status(404).json({
            message: "Artikel tidak ditemukan"
        });
    }

    const { title, content } = req.body;

    article.title = title;
    article.content = content;

    res.json(article);
};

export const deleteArticle = (req, res) => {
    const id = Number(req.params.id);

    const articleIndex = articles.findIndex(article => article.id === id);

    if (articleIndex === -1) {
        return res.status(404).json({
            message: "Artikel tidak ditemukan"
        });
    }

    articles.splice(articleIndex, 1);

    res.json({
        message: "Artikel berhasil dihapus"
    });
};