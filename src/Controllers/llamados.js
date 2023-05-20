const{Peritos, Casos}=require('../db.js')
const { getPer, getCases } = require('./llamadosFirebase.js')
//GET
const traerTodosLosPeritos=async(req, res, next)=>{
      const peritosFirebase= await getPer()
      const cantidadPeritos=peritosFirebase.length
      console.log('peritos de firebase=>', cantidadPeritos);
      const peritoCreado = await Peritos.bulkCreate(
        peritosFirebase.map(e=>{
          return{
            nombre:e.nombre,
            email:e.email,
            rol: e.rol,
            celular: e.celular
          }

      }));
      console.log('enviados a la BD', peritoCreado);
      res.status(201).send({ message: "Perito creado con exito!" });
      
}
const traerTodosLosCasos=async(req, res, next)=>{
      const casosFirebase= await getCases()
      const cantidadCasos=casosFirebase.length
      console.log('casos de firebase=>', casosFirebase);
      const casoCreado = await Casos.bulkCreate(
        casosFirebase.map(e=>{
          return{
           localidad:e.localidad,
            Vencimiento:e.Vencimiento,
            notas: e.notas,
            celular: e.celular,
            direccion: e.direccion,
            Marca:e.Marca,
            Patente:e.Patente,
            Nombre: e.Nombre,
            perito: e.perito,
            Compañia: e.Compañia,
            estado: e.estado,
            Numero: e.Numero,
            taller:e.taller
          }

      }));
      console.log('enviados a la BD', cantidadCasos);
      res.status(201).send({ message: "Casos creado con exito!" });
      
}
const peritos = async (req, res, next)=>{
    try {
      console.log('llamado a peritos');
        const peritos = await Peritos.findAll({})
        console.log('PERITOS===>',peritos);
        if (peritos.length === 0){
          return res
            .status(404)
            .send({ message: "No se encontraron peritos" });
        }
      res.status(200).send(peritos);
    } catch (error) {
        next(error)
    }
}
const casos = async (req, res, next)=>{
    try {
        const casos = await Casos.findAll({})
        const cases=casos.filter(e=>e.bandera!=='true')
        // console.log('cases==>', cases.length);
        if (casos.length === 0)
        return res
          .status(404)
          .send({ message: "No se encontraron casos" });
      res.status(200).send(cases);
    } catch (error) {
        next(error)
    }
}

//POST
const crearCasos= async (req, res, next) => {
    console.log("body crear usuario===>>>", req.body);
    try {
      
      const casoCreado = await Casos.create({
        ...req.body,
      });
  
      if (!casoCreado)
        return res.status(418).send({ message: "El caso no se pudo crear" });
      res.status(201).send({ message: "Caso creado con exito!" });
    } catch (e) {
      next(e);
    }
  };
const crearPerito= async (req, res, next) => {
    console.log("body crear perito===>>>", req.body);
    try {
      console.log('peritos1=>');
      
      const peritoCreado = await Peritos.create({
        ...req.body,
      });
       res.status(201).send({ message: "Perito creado con exito!" });
      console.log('peritos2=>', peritoCreado);
  
      if (!peritoCreado)
        return res.status(418).send({ message: "El perito no se pudo crear" });
    } catch (e) {
      console.log('error=>', error);
      next(e);
    }
  };
//UPDATE
const modificarCaso= async(req, res, next) => {
    try {
        const {id} = req.params
        const caso =await Casos.findOne({where:{id}})
        caso.set(req.body) 
        await caso.save()
        res.status(201).send({ message: "Caso modificado con exito!" });
    } catch (error) {
        next(error)
    }
}
const modificarperito= async(req, res, next) => {
    try {
        const {id} = req.params
        const perito =await Peritos.findOne({where:{id}})
        perito.set(req.body) 
        await perito.save()
        res.status(201).send({ message: "Perito modificado con exito!" });
    } catch (error) {
        next(error)
    }
}
//DELETE
const eliminarperito= async(req, res, next) => {
    try {
      const {id} = req.params
      console.log('llego id a eliminar=>', id);
        const perito =await Peritos.destroy({where:id==={id}})
        console.log('perito a eliminar=>', perito);
        res.status(201).send({ message: "Perito eliminado con exito!" });
    } catch (error) {
        next(error)
    }
}
const eliminarCaso= async(req, res, next) => {
    try {
        const {id} = req.params
        const caso =await Casos.destroy({where:{id}})
        res.status(201).send({ message: "Caso eliminado con exito!"});
    } catch (error) {
        next(error)
    }
}
module.exports ={
  crearPerito,
  peritos,
  casos,
  crearCasos,
  modificarCaso,
  modificarperito,
  eliminarCaso,
  eliminarperito,
  traerTodosLosPeritos,
  traerTodosLosCasos
}
