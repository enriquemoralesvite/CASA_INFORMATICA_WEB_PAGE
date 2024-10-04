import { Router } from "express"
import { guardarPelicula, TraerPeliculas } from "../services/conexion.mjs"

const router= Router()

router.get('/',(req,res)=> res.render('index',{title: 'La Casa Informática' } ))

router.get('/about',(req,res)=> res.render('about',{title: 'Sobre Nosotros' }))

router.get('/catalogo',(req,res)=> res.render('catalogo',{title: 'Catálogo' }))


export default router