module.exports = async (req, res, next) => {
    try {
        const accessToken = req.cookies["Role"];

        if (accessToken) {
            if (accessToken === "Admin") {
                req.user = "ADMIN"
            } else if (accessToken === "Hairdressers") {
                req.user = "Hairdressers";
            } else if (accessToken === "Personnel") {
                req.user = "PERSONNEL";
            } else if (accessToken === "User") {
                req.user = "USER";
            }
            next();
        } else {
            return res.redirect('/auth/login');
        }

    } catch (err) {
        return res.redirect("/auth/login");
    }
};
