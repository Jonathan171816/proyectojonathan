// JavaScript para la rotación de imágenes en cada casilla
document.addEventListener("DOMContentLoaded", function() {
    const productos = document.querySelectorAll(".producto");
    const images = [
       
        ["essenze/img/importado/IMG-20240809-WA0070.jpg", "essenze/img/importado/Imagen de WhatsApp 2024-08-09 a las 09.56.32_cbd84654.jpg", "essenze/img/importado/IMG-20240809-WA0063.jpg"],
        ["essenze/img/perfumes/initio.jpg", "essenze/img/perfumes/299196382_3369814103254363_487380469330976135_n.jpg", "essenze/img/perfumes/S2r5dnM5jFil18RYKW1tC7j_VpwfVYWy3tqXAI1iSEg=_plaintext_638246358531349177.jpg"],
        ["essenze/img/nacional/IMG-20240809-WA0039.jpg", "essenze/img/nacional/IMG-20240809-WA0003.jpg", "essenze/img/nacional/IMG-20240809-WA0008.jpg"]
    ];

    productos.forEach((producto, index) => {
        let imgElement = producto.querySelector(".rotating-img");
        let imgIndex = 0;
        setInterval(() => {
            imgIndex = (imgIndex + 1) % images[index].length;
            imgElement.src = images[index][imgIndex];
        }, 4000); // Cambia la imagen cada 3 segundos
    });
});
