const categoryDB = require('./../databaseConnectionSqlServer/categoryDB');

class CategoriesController {
  static getAllCategories(request, response) {
    categoryDB.getAllCategories((err, results) => {
      if (err) {
        console.error(`Error al ejecutar la consulta ${err}`);
        response.status(500).send("Error en el servidor");
      } else response.status(200).send(results);
    });
  }

  static getCategory(request, response) {
    const { id } = request.params;
    categoryDB.getCategory(id, (err, results) => {
      if (err) {
        console.error(`Error al ejecutar la consulta ${err}`);
        response.status(500).send("Error en el servidor");
      } else response.status(200).send(results);
    });
  }

  static addCategory(request, response) {
    const { detail } = request.body;
    categoryDB.addCategory(detail, (err, results) => {
      if (err) {
        console.error(`Error al ejecutar la consulta ${err}`);
        response.status(500).send('Error en el servidor');
      } else response.status(200).send(results);
    });
  }

  static editCategory(request, response) {
    const { id } = request.params;
    const { detail } = request.body;
    categoryDB.editCategory(id, detail, (err, results) => {
      if (err) {
        console.error(`Error al ejecutar la consulta ${err}`);
        response.status(500).send('Error en el servidor');
      } else response.status(200).send(results);
    });
  }

  static deleteCategory(request, response) {
    const { id } = request.params;
    categoryDB.deleteCategory(id, (err, results) => {
      if (err) {
        console.error(`Error al ejecutar la consulta ${err}`);
        response.status(500).send('Error en el servidor');
      } else response.status(200).send(results);
    });
  }
}

module.exports = CategoriesController;
