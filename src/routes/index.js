const { Router } = require("express");
const {crearPerito, peritos, traerTodosLosPeritos, traerTodosLosCasos, crearCasos, modificarperito, modificarCaso, eliminarCaso, eliminarperito} = require('../Controllers/llamados')
const router = Router();


///Todas las rutas acá: 

//traer todos los  peritos
router.get("/peritos", peritos);
router.get("/peritosfirebase", traerTodosLosPeritos);
router.get("/casosfirebase", traerTodosLosCasos);
router.get("/casos", traerTodosLosCasos);

// //***POSTS*****/

router.post('/perito',crearPerito);
router.post('/caso',crearCasos);

// //***PUT --> (UPDATE)***/
router.put('/perito/:id',modificarperito);
router.put('/caso/:id',modificarCaso);

// DELETE
 router.delete('/caso/:id',eliminarCaso);
 router.delete('/perito/:id',eliminarperito);

//****************************************************/

module.exports = router;
