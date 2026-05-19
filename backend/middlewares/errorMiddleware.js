const errorMiddleware = (error, req, res, next) => {

  if (error.issues) {
    return res.status(400).json({
      message: error.issues[0].message
    });
  }

  if (error.code === "P2002") {
    return res.status(409).json({
      message: "Já existe um voluntário com este email"
    });
  }

  console.error(error);

  return res.status(500).json({
    message: "Erro interno do servidor"
  });
};

module.exports = errorMiddleware;