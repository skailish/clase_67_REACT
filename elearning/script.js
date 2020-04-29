const root = document.getElementById('root');
const e = React.createElement;

const Texto = () =>
{
  return e('p', null, 'Esto es un texto')
}


const Titulo = () =>
{
  return e('h3', null, Texto)
}


const Duracion = () =>
{
  return e('p', null, new Date())
}


const Subtitulo = () =>
{
  return e('span', null, Texto)
}


const Imagen = () =>
{
  return e('img')
}


const Icono = () =>
{
  return e('i')
}


const BotonAccion = () =>
{
  return e('button')
}


const Input = () =>
{
  return e('input')
}


const Saludo = () =>
{
  return e('p', null, "Hola")
}


const NombreUsuario = () =>
{
  return e('h2', null, "Pedro García")
}


const InfoUsuario = () =>
{
  return e('section', null, [Saludo, NombreUsuario, Icono])
}


const Busqueda = () =>
{
  return e('section', null, [Input, Icono, Texto])
}

const Publicidad = () =>
{
  return e('section', null, [Imagen, Texto, BotonAccion])
}

const ResumenCurso = () =>
{
  return e('section', null, [Titulo, Duracion])
}

const Curso = () =>
{
  return e('article', null, [Icono, ResumenCurso, BotonAccion,])
}


const ListadoUltimosCursosVistos = () =>
{
  return e('ul', null, [Curso, Curso, Curso, Curso,])
}

const UltimosCursosVistos = () =>
{
  return e('section', null, [Texto, ListadoUltimosCursosVistos])
}

const CardUsuario = () =>
{
  return e('div', null, [InfoUsuario, Busqueda, Publicidad, UltimosCursosVistos])
}


const InfoCurso = () =>
{
  return e('section', null, [Icono, Icono, Titulo, Subtitulo])
}


const IlustracionCurso = () =>
{
  // ACÁ QUÉ ME CONVIENE HACER? PASAR UN COMPONENTE CON PARÁMETROS SEGÚN NECESIDAD (componente "Imagen") O CREAR UN ELEMENTO??
  return e(Imagen)
}


const DescripcionCurso = () =>
{
  // MISMA PREGUNTA QUE ARRIBA
  return e(Subtitulo)
}


const DetallesCurso = () =>
{
  return e('section', null, [DescripcionCurso, Titulo, Duracion])
}


const PalabraClaveCurso = () =>
{
  return e('div', null, [Icono, Texto])
}


const ResumenModulo = () =>
{
  return e('article', null, [PalabraClaveCurso, Titulo, Duracion, BotonAccion])
}

const LeccionesCurso = () =>
{
  return e('section', null, [ResumenModulo, ResumenModulo])

}


const CardCurso = () =>
{
  return e('div', null, [InfoCurso, IlustracionCurso, DetallesCurso, LeccionesCurso])
}



/// LAUNCH
const App = () =>
{
  return e('main', null, [CardUsuario, CardCurso])
}

ReactDOM.render(e(App), root)
