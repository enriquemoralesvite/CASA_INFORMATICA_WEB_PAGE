import { Router } from "express"

const router= Router()

router.get('/',(req,res)=> res.render('index',{title: 'La Casa Informática' } ))

router.get('/about',(req,res)=> res.render('about',{title: 'Sobre Nosotros' }))

router.get('/catalogoCursos',(req,res)=> res.render('catalogoCursos',{title: 'Catálogo' }))
router.get('/promociones',(req,res)=> res.render('promociones',{title: 'Promociones' }))
router.get('/Servicios',(req,res)=> res.render('Servicios',{title: 'Servicios' }))
router.get('/Productos',(req,res)=> res.render('Productos',{title: 'Productos' }))
router.get('/informacionPython',(req,res)=> res.render('informacionPython',{title: 'Python' }))
router.get('/informacionJava',(req,res)=> res.render('informacionJava',{title: 'Java' }))
router.get('/informacionJavascript',(req,res)=> res.render('informacionJavascript',{title: 'Javascript' }))
router.get('/informacionReact',(req,res)=> res.render('informacionReact',{title: 'React' }))


export default router