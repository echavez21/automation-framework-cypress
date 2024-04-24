
// Función para generar una contraseña aleatoria con longitud específica


//Generar un usuario random para usarlo en el registro
function generateRandomEmail(prefix) {
  const username = prefix + Math.floor(Math.random() * 100000); // Genera un nombre de usuario aleatorio con un prefijo
  const domain = 'test.com'; // 
  const email = `${username}@${domain}`; // Concatena el nombre de usuario con el dominio
  return email;
}
//Url para usarla como parametro
const url = 'https://demo.casino/';

//username para usarla como parametro
const user = 'testing@test.com';

//password para usarla como parametro
const contra = 'Admin123';



// Exportar la función para que pueda ser utilizada en otras clases
module.exports = {

  generateRandomEmail,
  url,
  user,
  contra

};

