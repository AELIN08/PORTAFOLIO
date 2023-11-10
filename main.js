let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web y proyectos de de electrónica con calidad, y diseños bonitos :3')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  