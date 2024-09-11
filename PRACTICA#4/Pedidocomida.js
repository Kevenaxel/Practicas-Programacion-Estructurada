
function procesarPedido(pedido) {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        const exito = Math.random() < 0.8; 
  
        if (exito) {
          resolve("Pedido procesado correctamente. ¡Buen provecho!");
        } else {
          reject("Error al procesar el pedido. Por favor, inténtalo de nuevo más tarde.");
        }
      }, 2000); // 2000 ms = 2 segundos
    });
  }
  

  const miPedido = {
    comida: "Pizza",
    cantidad: 2,
    direccion: "Calle Principal #123"
  };
  
  procesarPedido(miPedido)
    .then((mensaje) => {
      console.log(mensaje);
    })
    .catch((error) => {
      console.error(error);
    });
  