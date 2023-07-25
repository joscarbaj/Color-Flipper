// Colores primarios
const coloresPrimarios = [
    "#FF0000", // Rojo
    "#0000FF", // Azul
    "#FFFF00"  // Amarillo
  ];
  
  // Colores secundarios
  const coloresSecundarios = [
    "#00FF00", // Verde
    "#FFA500", // Naranja
    "#8A2BE2"  // Violeta
  ];
  
  // Colores terciarios
  const coloresTerciarios = [
    "#ADFF2F", // Amarillo verdoso
    "#FFBF00", // Amarillo anaranjado
    "#FF4500"  // Rojo anaranjado
  ];
  
  function generarColorHexadecimal() {
    const letrasHex = '0123456789ABCDEF';
    let colorHex = '#';
  
    // Generar seis dígitos hexadecimales aleatorios
    for (let i = 0; i < 6; i++) {
      colorHex += letrasHex[Math.floor(Math.random() * 16)];
    }
  
    return colorHex;
  }
  



document.addEventListener("DOMContentLoaded", function() {
    const mainNav = document.querySelector(".main__nav");
    const elementosHijos = mainNav.children;
    const flexContainer = document.querySelector(".flex-container");
    const flexChildren = flexContainer.children;
    const body = document.querySelector(".body");
    
  
    function changeColor(color) {
      if (color === "primary") {
        var randomColor = String(  coloresPrimarios[Math.floor(Math.random() * (parseInt(coloresPrimarios.length) ) )])


      }

      else if (color === "second") {
        var randomColor = String(  coloresSecundarios[Math.floor(Math.random() * (parseInt(coloresSecundarios.length) ) )])

      }

      else if (color === "third") {
        var randomColor = String(  coloresTerciarios[Math.floor(Math.random() * (parseInt(coloresTerciarios.length) ) )])

      }


      else if (color === "hex") {
        var randomColor = generarColorHexadecimal()

      }

      flexContainer.children[0].style.backgroundColor = randomColor;
      flexContainer.style.backgroundColor = randomColor
      body.style.backgroundColor = randomColor;
      for( i = 0; i < flexChildren.length; i++) {
          flexChildren[i].style.backgroundColor = randomColor;
          console.log(flexChildren[i])
      }

      flexChildren[1].children[0].innerHTML = `This Hex-Value color is:  ${randomColor}`

    }
  
    elementosHijos[0].addEventListener("click", function() {
      changeColor("primary");
    });

    elementosHijos[1].addEventListener("click", function() {
        changeColor("second");
      })

      elementosHijos[2].addEventListener("click", function() {
        changeColor("third");
      })
      elementosHijos[3].addEventListener("click", function() {
        changeColor("hex");
      })


  });
