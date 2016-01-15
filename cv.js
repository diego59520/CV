angular.module('curri', []);

angular.module('curri').controller('ControladorEstudio', function($scope) {
    
  $scope.estudios = [{gacademico: "TÉCNICO SUPERIOR UNIVERSITARIO", carrera: "Tecnologías de la Información y Comunicación Área Sistemas Informáticos", institucion: "Universidad Tecnológica de Nezahualcóyotl", lugar: "México, D.F.", periodo: "2011-2012"},
                      {gacademico: "PROFESIONAL TÉCNICO", carrera: "Sistemas Computacionales", institucion: "Centro de Computación Profesional de México", lugar: "México, D.F.", periodo:  "2009-2010"},
                      {gacademico: "PROFESIONAL TÉCNICO ", carrera:  "Diseño Gráfico Digital", institucion: "Centro de Computación Profesional de México", lugar: "México, D.F.", periodo: "2008-2009"}];
});

angular.module('curri').controller('ControladorExperiencia', function($scope) {

  $scope.experiencias = [{compania: "MxdSolutions", area: "TI", posicion: "Desarrollador y Analista Web", actividades: "Desarrollo de sistema para la empresa de afores Sura con el objetivo de administrar a sus clientes, empleados y proyectos", herramientas: "Java Enterprise con framework Struts, WebSphere, Ibatis, HTML, CSS3, Javascript, Ajax,UML",  periodo: "Marzo 2013 – Noviembre 2015"},
                         {compania: "IOFractal ", area: "TI", posicion: "Desarrollador y Analista Web", actividades: "Desarrollo de un sistema con el objetivo de mejorar y facilitar la administración empresarial en general.", herramientas: "Linux(Ubuntu), PHP, HTML5, CSS3, Javascript, Ajax, MySQL, UML.", periodo: "Septiembre 2012 – Febrero 2013"},
                         {compania: "Distribuidora Unión", area: "Departamento de Sistemas", posicion: "Desarrollador y Analista Web", actividades: "Desarrollo de página web para mostrar catálogo de la imprenta con terminal punto de venta.", herramientas: "Windows 7,HTML5, CSS3, MySql, Joomla.", periodo: "Enero 2012 – Agosto 2012"}];
});