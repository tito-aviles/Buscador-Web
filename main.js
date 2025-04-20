// script.js

let data = [
    { url: 'https://web.whatsapp.com', content: 'whatsapp web' },
    { url: 'https://gmail.com/', content: 'correo electrónico, gmail' },
    { url: 'https://example.com', content: 'Negocios, actualidad, desarrollo personal, marketing y liderazgo.' },
    { url: 'https://elcomercio.es', content: 'Noticias de política, economía, tecnología, cultura y deportes.' },
    { url: 'https://xataka.com', content: 'Gadgets, inteligencia artificial, ciberseguridad, realidad aumentada y programación.' },
    { url: 'https://marca.com', content: 'Fútbol, baloncesto, tenis, ciclismo, atletismo y eSports.' },
    { url: 'https://tutorialesprogramacionya.com/', content: 'Tutoriales de Python, JavaScript, Java, C++, SQL y desarrollo web.' },
    { url: 'https://viajeselcorteingles.es/', content: 'Destinos exóticos, viajes económicos, guías turísticas y aventuras extremas.' },
    { url: 'https://healthylife.com', content: 'Nutrición, dietas saludables, ejercicios, bienestar y salud mental.' },
    { url: 'https://financeguru.com', content: 'Inversiones, criptomonedas, planificación financiera, seguros y trading.' },
    { url: 'https://netflix.com', content: 'Estrenos de cine, plataformas de streaming, series populares y críticas.' },
    { url: 'https://gamingworld.com', content: 'Videojuegos de consola y PC, análisis de juegos, eSports y tecnología gaming.' },
    { url: 'https://cookingrecipes.com', content: 'Recetas de postres, platos veganos, cocina tradicional y comida rápida.' },
    { url: 'https://historyfacts.com', content: 'Curiosidades históricas, historia, biografías, descubrimientos arqueológicos y mitología.' },
    { url: 'https://artanddesign.com', content: 'Fotografía, diseño gráfico, arte moderno, escultura y ilustraciones.' },
    { url: 'https://spaceexploration.com', content: 'Misiones espaciales, Marte, telescopios, agujeros negros y ciencia del universo.' },
    { url: 'https://environmentalnews.com', content: 'Energías renovables, conservación ambiental, reciclaje y cambio climático.' },
    { url: 'https://educationhub.com', content: 'Cursos online, formación universitaria, recursos educativos y plataformas de aprendizaje.' },
    { url: 'https://automotivenews.com', content: 'Autos eléctricos, tecnología automotriz, autos deportivos y movilidad sostenible.' },
    { url: 'https://fashiontrends.com', content: 'Moda masculina y femenina, accesorios, alta costura y estilos urbanos.' },
    { url: 'https://mentalhealthmatters.com', content: 'Mindfulness, meditación, terapia cognitiva y superación personal.' },
    { url: 'https://cryptoinvesting.com', content: 'Bitcoin, Ethereum, blockchain, DeFi, tokens y estrategias de inversión.' },
    { url: 'https://parentingadvice.com', content: 'Consejos para padres, educación infantil, actividades familiares y crianza positiva.' },
    { url: 'https://diyprojects.com', content: 'Bricolaje, decoración, manualidades, proyectos para el hogar y reparaciones.' },
    { url: 'https://gardeningtips.com', content: 'Jardinería urbana, cuidado de plantas, huertos en casa y paisajismo.' },
    { url: 'https://fitnessgoals.com', content: 'Entrenamiento funcional, rutinas de gimnasio, yoga y ejercicios para principiantes.' },
    { url: 'https://petsandanimals.com', content: 'Mascotas exóticas, perros, gatos, cuidado de animales y adopción responsable.' },
    { url: 'https://photographytips.com', content: 'Fotografía profesional, cámaras, técnicas de edición y paisajes impresionantes.' },
    { url: 'https://homeimprovement.com', content: 'Renovación de interiores, diseño de cocinas, decoración y construcción sostenible.' },
    { url: 'https://startupguide.com', content: 'Cómo emprender, modelos de negocio, marketing digital y financiación de startups.' },
    { url: 'https://scienceexplained.com', content: 'Física, biología, química, avances científicos y divulgación educativa.' },
    { url: 'https://booklovers.com', content: 'Recomendaciones de libros, críticas literarias, novelas y poesía clásica.' },
    { url: 'https://careerboost.com', content: 'Carreras profesionales, búsqueda de empleo, entrevistas y habilidades laborales.' },
    { url: 'https://luxurytravel.com', content: 'Viajes de lujo, hoteles exclusivos, yates y experiencias únicas alrededor del mundo.' },
    { url: 'https://climatechange.com', content: 'Soluciones climáticas, sostenibilidad, energías limpias y descarbonización.' },
    { url: 'https://psychologytoday.com', content: 'Psicología, comportamiento humano, neurociencia y desarrollo emocional.' },
    { url: 'https://linux.com', content: 'sistemas operativos, linux, funciones de linux'},
    { url: 'https://youtube.com', content: 'videos, youtube, canal del videos'},
    { url: 'https://techcrunch.com', content: 'Noticias de tecnología, startups, gadgets y análisis de mercado.' },
    { url: 'https://stackoverflow.com', content: 'Preguntas y respuestas sobre programación, desarrollo y tecnología.' },
    { url: 'https://github.com', content: 'Repositorios de código, proyectos open source y colaboración en desarrollo.' },
    { url: 'https://medium.com', content: 'Artículos sobre tecnología, diseño, emprendimiento y desarrollo personal.' },
    { url: 'https://cnn.com', content: 'Noticias internacionales, política, economía y eventos globales.' },
    { url: 'https://bbc.com', content: 'Noticias del mundo, análisis, cultura y ciencia.' },
    { url: 'https://forbes.com', content: 'Negocios, finanzas, liderazgo, tecnología y estilo de vida.' },
    { url: 'https://ted.com', content: 'Charlas inspiradoras, innovación, ciencia y desarrollo personal.' },
    { url: 'https://coursera.org', content: 'Cursos online, certificaciones y aprendizaje en diversas áreas.' },
    { url: 'https://udemy.com', content: 'Cursos online sobre programación, diseño, negocios y más.' },
    { url: 'https://khanacademy.org', content: 'Educación gratuita, matemáticas, ciencias, programación y más.' },
    { url: 'https://wikipedia.org', content: 'Enciclopedia libre, información sobre cualquier tema.' },
    { url: 'https://nasa.gov', content: 'Exploración espacial, ciencia del universo y misiones espaciales.' },
    { url: 'https://hbr.org', content: 'Artículos sobre negocios, liderazgo, innovación y estrategia.' },
    { url: 'https://wired.com', content: 'Tecnología, cultura digital, ciencia y tendencias.' },
    { url: 'https://nationalgeographic.com', content: 'Naturaleza, ciencia, historia y exploración.' },
    { url: 'https://unsplash.com', content: 'Fotografías de alta calidad, inspiración visual y diseño.' },
    { url: 'https://pexels.com', content: 'Imágenes y videos gratuitos para proyectos creativos.' },
    { url: 'https://behance.net', content: 'Portafolios de diseño, arte digital, fotografía y creatividad.' },
    { url: 'https://dribbble.com', content: 'Inspiración en diseño gráfico, UI/UX y creatividad visual.' },
    { url: 'https://linkedin.com', content: 'Red profesional, empleo, networking y desarrollo de carrera.' },
    { url: 'https://twitter.com', content: 'Red social, noticias en tiempo real y tendencias globales.' },
    { url: 'https://instagram.com', content: 'Fotografía, redes sociales, estilo de vida y creatividad.' },
    { url: 'https://pinterest.com', content: 'Inspiración visual, diseño, moda, recetas y más.' },
    { url: 'https://twitch.tv', content: 'Streaming en vivo, videojuegos, música y entretenimiento.' },
    { url: 'https://spotify.com', content: 'Música, podcasts y listas de reproducción personalizadas.' },
    { url: 'https://apple.com', content: 'Tecnología, productos Apple, innovación y diseño.' },
    { url: 'https://microsoft.com', content: 'Tecnología, software, servicios en la nube y dispositivos.' },
    { url: 'https://amazon.com', content: 'Compras online, tecnología, libros, moda y más.' },
    { url: 'https://ebay.com', content: 'Subastas online, compras de productos nuevos y usados.' },
    { url: 'https://aliexpress.com', content: 'Compras internacionales, productos económicos y gadgets.' },
    { url: 'https://booking.com', content: 'Reservas de hoteles, viajes y experiencias únicas.' },
    { url: 'https://airbnb.com', content: 'Alojamientos únicos, experiencias locales y viajes.' },
    { url: 'https://expedia.com', content: 'Viajes, vuelos, hoteles y paquetes vacacionales.' },
    { url: 'https://skyscanner.com', content: 'Comparación de vuelos, hoteles y alquiler de coches.' },
    { url: 'https://tripadvisor.com', content: 'Opiniones de viajes, restaurantes, hoteles y actividades.' },
    { url: 'https://zillow.com', content: 'Bienes raíces, compra y alquiler de propiedades.' },
    { url: 'https://realtor.com', content: 'Casas en venta, alquiler y bienes raíces.' },
    { url: 'https://pluralsight.com', content: 'Cursos de tecnología, desarrollo de software y habilidades técnicas.' },
    { url: 'https://codecademy.com', content: 'Aprende a programar en línea con cursos interactivos.' },
    { url: 'https://freecodecamp.org', content: 'Cursos gratuitos de programación y desarrollo web.' },
    { url: 'https://edx.org', content: 'Cursos en línea de universidades y empresas líderes.' },
    { url: 'https://w3schools.com', content: 'Tutoriales de desarrollo web, HTML, CSS, JavaScript y más.' },
    { url: 'https://mdn.mozilla.org', content: 'Documentación para desarrolladores web.' },
    { url: 'https://css-tricks.com', content: 'Recursos y tutoriales sobre CSS y diseño web.' },
    { url: 'https://smashingmagazine.com', content: 'Artículos sobre diseño web, desarrollo y UX.' },
    { url: 'https://awwwards.com', content: 'Inspiración en diseño web y premios a sitios destacados.' },
    { url: 'https://pixabay.com', content: 'Imágenes y videos gratuitos para uso personal y comercial.' },
    { url: 'https://angular.io', content: 'Framework para desarrollo de aplicaciones web.' },
    { url: 'https://reactjs.org', content: 'Biblioteca para construir interfaces de usuario.' },
    { url: 'https://vuejs.org', content: 'Framework progresivo para construir interfaces de usuario.' },
    { url: 'https://svelte.dev', content: 'Framework para construir aplicaciones web rápidas.' },
    { url: 'https://nextjs.org', content: 'Framework React para aplicaciones web estáticas y dinámicas.' },
    { url: 'https://nuxtjs.org', content: 'Framework Vue para aplicaciones web estáticas y dinámicas.' },
    { url: 'https://tailwindcss.com', content: 'Framework CSS para diseño rápido y moderno.' },
    { url: 'https://bootstrap.com', content: 'Framework CSS para diseño responsivo y componentes.' },
    { url: 'https://material.io', content: 'Diseño y componentes basados en Material Design.' },
    { url: 'https://chakra-ui.com', content: 'Biblioteca de componentes React accesibles y modernos.' },
    { url: 'https://ant.design', content: 'Framework de diseño para aplicaciones empresariales.' },
    { url: 'https://d3js.org', content: 'Biblioteca para visualización de datos con JavaScript.' },
    { url: 'https://chartjs.org', content: 'Biblioteca para gráficos interactivos en JavaScript.' },
    { url: 'https://threejs.org', content: 'Biblioteca para gráficos 3D en la web.' },
    { url: 'https://p5js.org', content: 'Biblioteca para arte generativo y visualización creativa.' },
    { url: 'https://tensorflow.org', content: 'Framework para aprendizaje automático y redes neuronales.' },
    { url: 'https://pytorch.org', content: 'Framework para aprendizaje profundo y redes neuronales.' },
    { url: 'https://scikit-learn.org', content: 'Biblioteca para aprendizaje automático en Python.' },
    { url: 'https://keras.io', content: 'API para construir y entrenar modelos de aprendizaje profundo.' },
    { url: 'https://flask.palletsprojects.com', content: 'Framework ligero para desarrollo web en Python.' },
    { url: 'https://django.com', content: 'Framework completo para desarrollo web en Python.' },
    { url: 'https://fastapi.tiangolo.com', content: 'Framework moderno para APIs en Python.' },
    { url: 'https://expressjs.com', content: 'Framework minimalista para aplicaciones web en Node.js.' },
    { url: 'https://nestjs.com', content: 'Framework para construir aplicaciones escalables en Node.js.' },
    { url: 'https://adonisjs.com', content: 'Framework para desarrollo web en Node.js.' },
    { url: 'https://laravel.com', content: 'Framework PHP para desarrollo web moderno.' },
    { url: 'https://symfony.com', content: 'Framework PHP para aplicaciones empresariales.' },
    { url: 'https://rubyonrails.org', content: 'Framework para desarrollo web en Ruby.' },
    { url: 'https://spring.io', content: 'Framework para desarrollo de aplicaciones en Java.' },
    { url: 'https://quarkus.io', content: 'Framework para aplicaciones Java nativas en la nube.' },
    { url: 'https://micronaut.io', content: 'Framework para microservicios en Java.' },
    { url: 'https://kubernetes.io', content: 'Orquestación de contenedores para aplicaciones escalables.' },
    { url: 'https://docker.com', content: 'Plataforma para contenedores y despliegue de aplicaciones.' },
    { url: 'https://terraform.io', content: 'Herramienta para infraestructura como código.' },
    { url: 'https://ansible.com', content: 'Automatización de configuración y despliegue.' },
    { url: 'https://jenkins.io', content: 'Automatización de integración y despliegue continuo.' },
    { url: 'https://circleci.com', content: 'Plataforma para integración y despliegue continuo.' },
    { url: 'https://travis-ci.org', content: 'Herramienta para integración continua.' },
    { url: 'https://github.com/actions', content: 'Automatización de flujos de trabajo en GitHub.' },
    { url: 'https://gitlab.com', content: 'Plataforma DevOps para repositorios y CI/CD.' },
];

// Eliminar URLs duplicadas
data = Array.from(new Set(data.map(item => item.url)))
  .map(url => data.find(item => item.url === url));

// Nuevas URLs para añadir a la lista
const newUrls = [
    { url: 'https://stackoverflow.com', content: 'Preguntas y respuestas sobre programación y desarrollo.' },
    { url: 'https://github.com', content: 'Repositorios de código y proyectos open source.' },
    { url: 'https://medium.com', content: 'Artículos sobre tecnología, diseño y desarrollo personal.' },
    { url: 'https://coursera.org', content: 'Cursos en línea de universidades y empresas líderes.' },
    { url: 'https://udemy.com', content: 'Cursos en línea sobre tecnología, diseño y más.' },
    { url: 'https://khanacademy.org', content: 'Educación gratuita en matemáticas, ciencias y más.' },
    { url: 'https://edx.org', content: 'Cursos en línea de instituciones educativas reconocidas.' },
    { url: 'https://pluralsight.com', content: 'Cursos de tecnología y desarrollo de software.' },
    { url: 'https://freecodecamp.org', content: 'Cursos gratuitos de programación y desarrollo web.' },
    { url: 'https://codecademy.com', content: 'Cursos interactivos para aprender a programar.' },
    { url: 'https://canva.com', content: 'Diseño gráfico y creación de contenido visual.' },
    { url: 'https://figma.com', content: 'Diseño colaborativo de interfaces y prototipos.' },
    { url: 'https://dribbble.com', content: 'Inspiración en diseño gráfico y UI/UX.' },
    { url: 'https://behance.net', content: 'Portafolios de diseño y creatividad visual.' },
    { url: 'https://unsplash.com', content: 'Fotografías gratuitas para proyectos creativos.' },
    { url: 'https://pexels.com', content: 'Imágenes y videos gratuitos para uso comercial.' },
    { url: 'https://pixabay.com', content: 'Banco de imágenes y videos gratuitos.' },
    { url: 'https://shutterstock.com', content: 'Imágenes, videos y música de stock.' },
    { url: 'https://gettyimages.com', content: 'Fotografías y videos de alta calidad.' },
    { url: 'https://istockphoto.com', content: 'Imágenes y videos de stock para proyectos creativos.' },
    { url: 'https://themeforest.net', content: 'Plantillas para sitios web y aplicaciones.' },
    { url: 'https://codecanyon.net', content: 'Scripts y plugins para desarrollo web.' },
    { url: 'https://elements.envato.com', content: 'Recursos ilimitados para diseño y desarrollo.' },
    { url: 'https://fontawesome.com', content: 'Iconos vectoriales para diseño y desarrollo.' },
    { url: 'https://flaticon.com', content: 'Iconos gratuitos y premium para proyectos creativos.' },
    { url: 'https://fonts.google.com', content: 'Fuentes gratuitas para diseño web.' },
    { url: 'https://w3schools.com', content: 'Tutoriales de desarrollo web y programación.' },
    { url: 'https://mdn.mozilla.org', content: 'Documentación para desarrolladores web.' },
    { url: 'https://css-tricks.com', content: 'Recursos y tutoriales sobre CSS y diseño web.' },
    { url: 'https://smashingmagazine.com', content: 'Artículos sobre diseño web y desarrollo.' },
    { url: 'https://angular.io', content: 'Framework para desarrollo de aplicaciones web.' },
    { url: 'https://reactjs.org', content: 'Biblioteca para construir interfaces de usuario.' },
    { url: 'https://vuejs.org', content: 'Framework progresivo para construir interfaces de usuario.' },
    { url: 'https://svelte.dev', content: 'Framework para construir aplicaciones web rápidas.' },
    { url: 'https://nextjs.org', content: 'Framework React para aplicaciones web estáticas y dinámicas.' },
    { url: 'https://nuxtjs.org', content: 'Framework Vue para aplicaciones web estáticas y dinámicas.' },
    { url: 'https://tailwindcss.com', content: 'Framework CSS para diseño rápido y moderno.' },
    { url: 'https://bootstrap.com', content: 'Framework CSS para diseño responsivo y componentes.' },
    { url: 'https://material.io', content: 'Diseño y componentes basados en Material Design.' },
    { url: 'https://chakra-ui.com', content: 'Biblioteca de componentes React accesibles y modernos.' },
    { url: 'https://d3js.org', content: 'Biblioteca para visualización de datos con JavaScript.' },
    { url: 'https://chartjs.org', content: 'Biblioteca para gráficos interactivos en JavaScript.' },
    { url: 'https://threejs.org', content: 'Biblioteca para gráficos 3D en la web.' },
    { url: 'https://tensorflow.org', content: 'Framework para aprendizaje automático y redes neuronales.' },
    { url: 'https://pytorch.org', content: 'Framework para aprendizaje profundo y redes neuronales.' },
    { url: 'https://scikit-learn.org', content: 'Biblioteca para aprendizaje automático en Python.' },
    { url: 'https://flask.palletsprojects.com', content: 'Framework ligero para desarrollo web en Python.' },
    { url: 'https://django.com', content: 'Framework completo para desarrollo web en Python.' },
    { url: 'https://fastapi.tiangolo.com', content: 'Framework moderno para APIs en Python.' },
];

// Añadir las nuevas URLs a la lista existente
data = [...data, ...newUrls];

const socialMediaUrls = [
    { url: 'https://www.facebook.com', content: 'Red social para conectar con amigos y familiares.' },
    { url: 'https://www.instagram.com', content: 'Plataforma para compartir fotos y videos.' },
    { url: 'https://www.twitter.com', content: 'Red social para noticias y tendencias en tiempo real.' },
    { url: 'https://www.linkedin.com', content: 'Red profesional para networking y empleo.' },
    { url: 'https://www.snapchat.com', content: 'Plataforma para compartir fotos y videos efímeros.' },
    { url: 'https://www.tiktok.com', content: 'Plataforma para compartir videos cortos y creativos.' },
    { url: 'https://www.pinterest.com', content: 'Red social para inspiración visual y proyectos creativos.' },
    { url: 'https://www.reddit.com', content: 'Plataforma de foros y comunidades sobre diversos temas.' },
    { url: 'https://www.youtube.com', content: 'Plataforma para compartir y ver videos.' },
    { url: 'https://www.twitch.tv', content: 'Plataforma de streaming en vivo para videojuegos y entretenimiento.' },
    { url: 'https://www.discord.com', content: 'Plataforma de comunicación para comunidades y gamers.' },
    { url: 'https://www.whatsapp.com', content: 'Aplicación de mensajería instantánea.' },
    { url: 'https://www.telegram.org', content: 'Aplicación de mensajería segura y rápida.' },
    { url: 'https://www.wechat.com', content: 'Plataforma de mensajería y redes sociales popular en Asia.' },
    { url: 'https://www.vk.com', content: 'Red social popular en Rusia y Europa del Este.' },
    { url: 'https://www.line.me', content: 'Aplicación de mensajería y redes sociales popular en Japón.' },
    { url: 'https://www.quora.com', content: 'Plataforma para preguntas y respuestas sobre diversos temas.' },
    { url: 'https://www.tumblr.com', content: 'Plataforma para blogs y contenido creativo.' },
    { url: 'https://www.flickr.com', content: 'Plataforma para compartir y explorar fotografías.' },
    { url: 'https://www.meetup.com', content: 'Plataforma para organizar y asistir a eventos y reuniones.' },
    { url: 'https://www.myspace.com', content: 'Red social clásica para música y entretenimiento.' },
    { url: 'https://www.badoo.com', content: 'Plataforma para conocer personas y citas en línea.' },
    { url: 'https://www.okcupid.com', content: 'Plataforma de citas en línea.' },
    { url: 'https://www.match.com', content: 'Plataforma de citas y relaciones.' },
    { url: 'https://www.onlyfans.com', content: 'Plataforma para contenido exclusivo de creadores.' },
    { url: 'https://www.patreon.com', content: 'Plataforma para apoyar a creadores de contenido.' },
    { url: 'https://www.clubhouse.com', content: 'Plataforma de audio en vivo para conversaciones y debates.' },
    { url: 'https://www.kik.com', content: 'Aplicación de mensajería para jóvenes.' },
    { url: 'https://www.viber.com', content: 'Aplicación de mensajería y llamadas gratuitas.' },
    { url: 'https://www.signal.org', content: 'Aplicación de mensajería segura y cifrada.' },
    { url: 'https://www.weibo.com', content: 'Red social popular en China.' },
    { url: 'https://www.douyin.com', content: 'Versión china de TikTok.' },
    { url: 'https://www.qq.com', content: 'Plataforma de mensajería y redes sociales en China.' },
    { url: 'https://www.renren.com', content: 'Red social popular en China.' },
    { url: 'https://www.mix.com', content: 'Plataforma para descubrir contenido interesante.' },
    { url: 'https://www.deviantart.com', content: 'Plataforma para artistas y creadores visuales.' },
    { url: 'https://www.goodreads.com', content: 'Red social para amantes de los libros.' },
    { url: 'https://www.last.fm', content: 'Plataforma para descubrir música y artistas.' },
    { url: 'https://www.soundcloud.com', content: 'Plataforma para compartir y descubrir música.' },
    { url: 'https://www.bandcamp.com', content: 'Plataforma para apoyar a músicos independientes.' },
];

// Añadir las nuevas URLs de redes sociales a la lista existente
data = [...data, ...socialMediaUrls];

const videoPlatformsUrls = [
    { url: 'https://www.youtube.com', content: 'Plataforma para compartir y ver videos.' },
    { url: 'https://www.vimeo.com', content: 'Plataforma para videos de alta calidad y creativos.' },
    { url: 'https://www.dailymotion.com', content: 'Plataforma para compartir y descubrir videos.' },
    { url: 'https://www.twitch.tv', content: 'Streaming en vivo para videojuegos y entretenimiento.' },
    { url: 'https://www.netflix.com', content: 'Plataforma de streaming para series y películas.' },
    { url: 'https://www.hulu.com', content: 'Streaming de series, películas y TV en vivo.' },
    { url: 'https://www.amazon.com/primevideo', content: 'Streaming de series, películas y contenido exclusivo.' },
    { url: 'https://www.disneyplus.com', content: 'Streaming de contenido de Disney, Pixar, Marvel y más.' },
    { url: 'https://www.hbomax.com', content: 'Streaming de series y películas de HBO y Warner Bros.' },
    { url: 'https://www.apple.com/apple-tv-plus', content: 'Streaming de series y películas originales de Apple.' },
    { url: 'https://www.crunchyroll.com', content: 'Streaming de anime y contenido asiático.' },
    { url: 'https://www.funimation.com', content: 'Streaming de anime doblado y subtitulado.' },
    { url: 'https://www.peacocktv.com', content: 'Streaming de series, películas y deportes.' },
    { url: 'https://www.paramountplus.com', content: 'Streaming de contenido de Paramount y CBS.' },
    { url: 'https://www.plex.tv', content: 'Streaming de contenido gratuito y organización de medios.' },
    { url: 'https://www.tubi.tv', content: 'Streaming gratuito de series y películas.' },
    { url: 'https://www.pluto.tv', content: 'Streaming gratuito de TV en vivo y contenido bajo demanda.' },
    { url: 'https://www.roku.com', content: 'Streaming de contenido gratuito y premium.' },
    { url: 'https://www.shudder.com', content: 'Streaming de películas y series de terror.' },
    { url: 'https://www.fubo.tv', content: 'Streaming de deportes en vivo y TV.' },
    { url: 'https://www.sling.com', content: 'Streaming de TV en vivo y contenido bajo demanda.' },
    { url: 'https://www.crackle.com', content: 'Streaming gratuito de series y películas.' },
    { url: 'https://www.vevo.com', content: 'Plataforma para videos musicales.' },
    { url: 'https://www.drakor.id', content: 'Streaming de dramas coreanos y asiáticos.' },
    { url: 'https://www.vlive.tv', content: 'Streaming de contenido de celebridades y K-pop.' },
    { url: 'https://www.kocowa.com', content: 'Streaming de dramas y programas coreanos.' },
    { url: 'https://www.bilibili.com', content: 'Plataforma de videos y streaming popular en Asia.' },
    { url: 'https://www.ustream.tv', content: 'Streaming en vivo para eventos y contenido.' },
    { url: 'https://www.metacafe.com', content: 'Plataforma para videos cortos y entretenimiento.' },
    { url: 'https://www.videoland.com', content: 'Streaming de series y películas en los Países Bajos.' },
];

// Añadir las nuevas URLs de plataformas de video a la lista existente
data = [...data, ...videoPlatformsUrls];

const onlineStoresUrls = [
    { url: 'https://www.amazon.com', content: 'Tienda online para todo tipo de productos.' },
    { url: 'https://www.ebay.com', content: 'Plataforma de subastas y compras online.' },
    { url: 'https://www.aliexpress.com', content: 'Tienda online de productos económicos y gadgets.' },
    { url: 'https://www.walmart.com', content: 'Tienda online de productos para el hogar, tecnología y más.' },
    { url: 'https://www.target.com', content: 'Tienda online de ropa, hogar y tecnología.' },
    { url: 'https://www.bestbuy.com', content: 'Tienda online de electrónica y electrodomésticos.' },
    { url: 'https://www.newegg.com', content: 'Tienda online de hardware y componentes de PC.' },
    { url: 'https://www.etsy.com', content: 'Tienda online de productos hechos a mano y vintage.' },
    { url: 'https://www.shopify.com', content: 'Plataforma para crear y gestionar tiendas online.' },
    { url: 'https://www.zara.com', content: 'Tienda online de ropa y accesorios de moda.' },
    { url: 'https://www.hm.com', content: 'Tienda online de ropa y moda para todas las edades.' },
    { url: 'https://www.shein.com', content: 'Tienda online de ropa y accesorios económicos.' },
    { url: 'https://www.asos.com', content: 'Tienda online de moda y accesorios para jóvenes.' },
    { url: 'https://www.nike.com', content: 'Tienda online de ropa y calzado deportivo.' },
    { url: 'https://www.adidas.com', content: 'Tienda online de ropa y accesorios deportivos.' },
    { url: 'https://www.decathlon.com', content: 'Tienda online de productos deportivos y de aventura.' },
    { url: 'https://www.apple.com', content: 'Tienda online de productos Apple y accesorios.' },
    { url: 'https://www.microsoft.com', content: 'Tienda online de software, hardware y servicios de Microsoft.' },
    { url: 'https://www.samsung.com', content: 'Tienda online de productos electrónicos y electrodomésticos.' },
    { url: 'https://www.lenovo.com', content: 'Tienda online de laptops, PCs y accesorios.' },
    { url: 'https://www.dell.com', content: 'Tienda online de computadoras y accesorios.' },
    { url: 'https://www.hp.com', content: 'Tienda online de impresoras, laptops y accesorios.' },
    { url: 'https://www.toysrus.com', content: 'Tienda online de juguetes y productos para niños.' },
    { url: 'https://www.lego.com', content: 'Tienda online de sets de LEGO y juguetes creativos.' },
    { url: 'https://www.ikea.com', content: 'Tienda online de muebles y decoración para el hogar.' },
    { url: 'https://www.wayfair.com', content: 'Tienda online de muebles y decoración para el hogar.' },
    { url: 'https://www.homedepot.com', content: 'Tienda online de herramientas y productos para el hogar.' },
    { url: 'https://www.lowes.com', content: 'Tienda online de productos para el hogar y jardinería.' },
    { url: 'https://www.chewy.com', content: 'Tienda online de productos para mascotas.' },
    { url: 'https://www.petco.com', content: 'Tienda online de alimentos y accesorios para mascotas.' },
    { url: 'https://www.sephora.com', content: 'Tienda online de maquillaje y productos de belleza.' },
    { url: 'https://www.ulta.com', content: 'Tienda online de cosméticos y productos de cuidado personal.' },
    { url: 'https://www.lush.com', content: 'Tienda online de productos de baño y cuidado personal.' },
    { url: 'https://www.costco.com', content: 'Tienda online de productos al por mayor.' },
    { url: 'https://www.samsclub.com', content: 'Tienda online de productos al por mayor y para el hogar.' },
    { url: 'https://www.bhphotovideo.com', content: 'Tienda online de cámaras, audio y tecnología.' },
    { url: 'https://www.adorama.com', content: 'Tienda online de cámaras y equipos de fotografía.' },
    { url: 'https://www.guitarcenter.com', content: 'Tienda online de instrumentos musicales y accesorios.' },
    { url: 'https://www.sweetwater.com', content: 'Tienda online de equipos de audio y música.' },
    { url: 'https://www.rei.com', content: 'Tienda online de productos para actividades al aire libre.' },
    { url: 'https://www.patagonia.com', content: 'Tienda online de ropa y accesorios para actividades al aire libre.' },
    { url: 'https://www.nordstrom.com', content: 'Tienda online de ropa y accesorios de lujo.' },
    { url: 'https://www.macys.com', content: 'Tienda online de ropa, hogar y accesorios.' },
    { url: 'https://www.bloomingdales.com', content: 'Tienda online de ropa y productos de lujo.' },
    { url: 'https://www.overstock.com', content: 'Tienda online de muebles, decoración y más.' },
    { url: 'https://www.gap.com', content: 'Tienda online de ropa casual para toda la familia.' },
    { url: 'https://www.oldnavy.com', content: 'Tienda online de ropa económica y casual.' },
    { url: 'https://www.uniqlo.com', content: 'Tienda online de ropa básica y moderna.' },
    { url: 'https://www.zappos.com', content: 'Tienda online de calzado y accesorios.' },
    { url: 'https://www.allbirds.com', content: 'Tienda online de calzado sostenible y cómodo.' },
];

// Añadir las nuevas URLs de tiendas online a la lista existente
data = [...data, ...onlineStoresUrls];

const musicWebsitesUrls = [
    { url: 'https://www.spotify.com', content: 'Plataforma de streaming de música y podcasts.' },
    { url: 'https://www.apple.com/music', content: 'Servicio de música en streaming de Apple.' },
    { url: 'https://www.soundcloud.com', content: 'Plataforma para compartir y descubrir música.' },
    { url: 'https://www.bandcamp.com', content: 'Plataforma para apoyar a músicos independientes.' },
    { url: 'https://www.pandora.com', content: 'Radio en línea y servicio de música personalizada.' },
    { url: 'https://www.deezer.com', content: 'Plataforma de streaming de música y podcasts.' },
    { url: 'https://www.tidal.com', content: 'Streaming de música en alta calidad.' },
    { url: 'https://www.last.fm', content: 'Plataforma para descubrir música y artistas.' },
    { url: 'https://www.iheart.com', content: 'Radio en línea y podcasts.' },
    { url: 'https://www.amazon.com/music', content: 'Servicio de música en streaming de Amazon.' },
    { url: 'https://www.youtube.com/music', content: 'Plataforma de música de YouTube.' },
    { url: 'https://www.napster.com', content: 'Servicio de música en streaming.' },
    { url: 'https://www.audiomack.com', content: 'Plataforma para descubrir y compartir música.' },
    { url: 'https://www.mixcloud.com', content: 'Plataforma para DJs y programas de radio.' },
    { url: 'https://www.shazam.com', content: 'Aplicación para identificar canciones.' },
    { url: 'https://www.musixmatch.com', content: 'Plataforma para buscar letras de canciones.' },
    { url: 'https://www.allmusic.com', content: 'Base de datos de música, artistas y álbumes.' },
    { url: 'https://www.pitchfork.com', content: 'Reseñas y noticias sobre música.' },
    { url: 'https://www.rollingstone.com/music', content: 'Noticias y artículos sobre música y cultura.' },
    { url: 'https://www.billboard.com', content: 'Listas de éxitos, noticias y tendencias musicales.' },
    { url: 'https://www.jango.com', content: 'Radio en línea personalizada.' },
    { url: 'https://www.slacker.com', content: 'Radio en línea y servicio de música personalizada.' },
    { url: 'https://www.qobuz.com', content: 'Streaming de música en alta resolución.' },
    { url: 'https://www.beatport.com', content: 'Plataforma para DJs y música electrónica.' },
    { url: 'https://www.traxsource.com', content: 'Plataforma para DJs y música house.' },
    { url: 'https://www.residentadvisor.net', content: 'Noticias y eventos de música electrónica.' },
    { url: 'https://www.discogs.com', content: 'Base de datos y mercado de música en vinilo y CDs.' },
    { url: 'https://www.hypem.com', content: 'Plataforma para descubrir música popular en blogs.' },
    { url: 'https://www.8tracks.com', content: 'Plataforma para crear y compartir listas de reproducción.' },
    { url: 'https://www.music.apple.com', content: 'Servicio de música en streaming de Apple.' },
];

// Añadir las nuevas URLs de páginas de música a la lista existente
data = [...data, ...musicWebsitesUrls];

const gamingWebsitesUrls = [
    { url: 'https://www.steampowered.com', content: 'Plataforma de distribución de videojuegos para PC.' },
    { url: 'https://www.epicgames.com', content: 'Plataforma de videojuegos y creador de Fortnite.' },
    { url: 'https://www.gog.com', content: 'Plataforma de videojuegos sin DRM.' },
    { url: 'https://www.origin.com', content: 'Plataforma de videojuegos de Electronic Arts.' },
    { url: 'https://www.ubisoft.com', content: 'Plataforma de videojuegos de Ubisoft.' },
    { url: 'https://www.riotgames.com', content: 'Desarrollador de League of Legends y Valorant.' },
    { url: 'https://www.blizzard.com', content: 'Desarrollador de World of Warcraft, Overwatch y más.' },
    { url: 'https://www.minecraft.net', content: 'Página oficial de Minecraft.' },
    { url: 'https://www.roblox.com', content: 'Plataforma de juegos y creación de contenido.' },
    { url: 'https://www.twitch.tv', content: 'Streaming en vivo de videojuegos y entretenimiento.' },
    { url: 'https://www.itchio.com', content: 'Plataforma de videojuegos indie.' },
    { url: 'https://www.kongregate.com', content: 'Plataforma de juegos en línea gratuitos.' },
    { url: 'https://www.miniclip.com', content: 'Juegos en línea gratuitos para navegador.' },
    { url: 'https://www.addictinggames.com', content: 'Juegos en línea gratuitos y adictivos.' },
    { url: 'https://www.newgrounds.com', content: 'Plataforma de juegos, animaciones y arte.' },
    { url: 'https://www.coolmathgames.com', content: 'Juegos educativos y de matemáticas.' },
    { url: 'https://www.pogo.com', content: 'Juegos en línea gratuitos y clásicos.' },
    { url: 'https://www.armor games.com', content: 'Plataforma de juegos en línea gratuitos.' },
    { url: 'https://www.crazygames.com', content: 'Juegos en línea gratuitos para navegador.' },
    { url: 'https://www.y8.com', content: 'Plataforma de juegos en línea gratuitos.' },
    { url: 'https://www.gamespot.com', content: 'Noticias, reseñas y análisis de videojuegos.' },
    { url: 'https://www.ign.com', content: 'Noticias, reseñas y análisis de videojuegos y entretenimiento.' },
    { url: 'https://www.pcgamer.com', content: 'Noticias y análisis de videojuegos para PC.' },
    { url: 'https://www.metacritic.com/game', content: 'Reseñas y puntuaciones de videojuegos.' },
    { url: 'https://www.nintendo.com', content: 'Página oficial de Nintendo y sus juegos.' },
    { url: 'https://www.playstation.com', content: 'Página oficial de PlayStation y sus juegos.' },
    { url: 'https://www.xbox.com', content: 'Página oficial de Xbox y sus juegos.' },
    { url: 'https://www.ea.com', content: 'Página oficial de Electronic Arts y sus juegos.' },
    { url: 'https://www.rockstargames.com', content: 'Página oficial de Rockstar Games y sus juegos.' },
    { url: 'https://www.bethesda.net', content: 'Página oficial de Bethesda y sus juegos.' },
    { url: 'https://www.square-enix.com', content: 'Página oficial de Square Enix y sus juegos.' },
    { url: 'https://www.capcom.com', content: 'Página oficial de Capcom y sus juegos.' },
    { url: 'https://www.sega.com', content: 'Página oficial de SEGA y sus juegos.' },
    { url: 'https://www.bandainamcoent.com', content: 'Página oficial de Bandai Namco y sus juegos.' },
    { url: 'https://www.cdprojektred.com', content: 'Página oficial de CD Projekt Red y sus juegos.' },
    { url: 'https://www.epicgamesstore.com', content: 'Tienda de videojuegos de Epic Games.' },
    { url: 'https://www.humblebundle.com', content: 'Plataforma de videojuegos y bundles solidarios.' },
    { url: 'https://www.greenmangaming.com', content: 'Tienda de videojuegos digitales.' },
    { url: 'https://www.fanatical.com', content: 'Tienda de videojuegos digitales y bundles.' },
];

// Añadir las nuevas URLs de páginas de juegos a la lista existente
data = [...data, ...gamingWebsitesUrls];

const aiWebsitesUrls = [
    { url: 'https://openai.com', content: 'Organización de investigación en inteligencia artificial.' },
    { url: 'https://www.tensorflow.org', content: 'Framework de aprendizaje automático de Google.' },
    { url: 'https://pytorch.org', content: 'Framework de aprendizaje profundo desarrollado por Facebook.' },
    { url: 'https://huggingface.co', content: 'Plataforma para modelos de lenguaje y aprendizaje automático.' },
    { url: 'https://www.kaggle.com', content: 'Plataforma para competiciones y datasets de aprendizaje automático.' },
    { url: 'https://www.ibm.com/watson', content: 'Plataforma de inteligencia artificial de IBM.' },
    { url: 'https://www.microsoft.com/en-us/ai', content: 'Soluciones de inteligencia artificial de Microsoft.' },
    { url: 'https://www.deeplearning.ai', content: 'Cursos y recursos sobre aprendizaje profundo.' },
    { url: 'https://www.fast.ai', content: 'Cursos y herramientas para aprendizaje profundo accesible.' },
    { url: 'https://www.datarobot.com', content: 'Plataforma de aprendizaje automático automatizado.' },
    { url: 'https://www.aitoptools.com', content: 'Herramientas y recursos de inteligencia artificial.' },
    { url: 'https://www.research.google', content: 'Investigación en inteligencia artificial de Google.' },
    { url: 'https://www.deepmind.com', content: 'Investigación avanzada en inteligencia artificial.' },
    { url: 'https://www.nvidia.com/en-us/deep-learning-ai', content: 'Hardware y software para inteligencia artificial.' },
    { url: 'https://www.opencv.org', content: 'Biblioteca de visión por computadora de código abierto.' },
    { url: 'https://www.anthropic.com', content: 'Investigación en IA centrada en la seguridad.' },
    { url: 'https://www.stability.ai', content: 'Plataforma de generación de imágenes con IA.' },
    { url: 'https://www.runwayml.com', content: 'Herramientas creativas impulsadas por inteligencia artificial.' },
    { url: 'https://www.perplexity.ai', content: 'Motor de búsqueda basado en inteligencia artificial.' },
    { url: 'https://www.midjourney.com', content: 'Plataforma para generación de arte con IA.' },
    { url: 'https://www.dalle.ai', content: 'Generación de imágenes a partir de texto con IA.' },
    { url: 'https://www.chatgpt.com', content: 'Interacción conversacional con modelos de lenguaje.' },
    { url: 'https://www.copy.ai', content: 'Herramienta de escritura asistida por inteligencia artificial.' },
    { url: 'https://www.jasper.ai', content: 'Plataforma de generación de contenido con IA.' },
    { url: 'https://www.synthesia.io', content: 'Creación de videos con avatares generados por IA.' },
    { url: 'https://www.replicastudios.com', content: 'Generación de voces realistas con IA.' },
    { url: 'https://www.lumen5.com', content: 'Creación de videos automatizados con IA.' },
    { url: 'https://www.descript.com', content: 'Edición de audio y video asistida por IA.' },
    { url: 'https://www.grammarly.com', content: 'Asistente de escritura impulsado por inteligencia artificial.' },
    { url: 'https://www.scribehow.com', content: 'Documentación automática de procesos con IA.' },
];

// Añadir las nuevas URLs de páginas de IA a la lista existente
data = [...data, ...aiWebsitesUrls];

const softwareDownloadUrls = [
    { url: 'https://www.softpedia.com', content: 'Descargas de software, drivers y juegos.' },
    { url: 'https://www.filehippo.com', content: 'Descargas de software gratuito y actualizado.' },
    { url: 'https://www.cnet.com/download', content: 'Descargas de software, aplicaciones y herramientas.' },
    { url: 'https://www.majorgeeks.com', content: 'Descargas de utilidades y herramientas para PC.' },
    { url: 'https://www.softonic.com', content: 'Descargas de software y aplicaciones para múltiples plataformas.' },
    { url: 'https://www.uptodown.com', content: 'Descargas de aplicaciones y software para PC y móviles.' },
    { url: 'https://www.ninite.com', content: 'Instalación automática de múltiples programas.' },
    { url: 'https://www.snapfiles.com', content: 'Descargas de software gratuito y shareware.' },
    { url: 'https://www.filehorse.com', content: 'Descargas de software para Windows y Mac.' },
    { url: 'https://www.downloadcrew.com', content: 'Descargas de software y herramientas de seguridad.' },
    { url: 'https://www.portableapps.com', content: 'Aplicaciones portátiles para llevar en USB.' },
    { url: 'https://www.fosshub.com', content: 'Descargas de software gratuito y de código abierto.' },
    { url: 'https://www.sourceforge.net', content: 'Plataforma para proyectos de software de código abierto.' },
    { url: 'https://www.getintopc.com', content: 'Descargas de software y herramientas para PC.' },
    { url: 'https://www.fileplanet.com', content: 'Descargas de juegos y software.' },
    { url: 'https://www.techspot.com/downloads', content: 'Descargas de software, drivers y herramientas.' },
    { url: 'https://www.download.cnet.com', content: 'Descargas de software y aplicaciones para Windows y Mac.' },
    { url: 'https://www.apkmirror.com', content: 'Descargas de APKs para dispositivos Android.' },
    { url: 'https://www.apkpure.com', content: 'Descargas de aplicaciones y juegos para Android.' },
    { url: 'https://www.oldversion.com', content: 'Descargas de versiones antiguas de software.' },
    { url: 'https://www.filehippo.com/es', content: 'Descargas de software gratuito en español.' },
    { url: 'https://www.malavida.com', content: 'Descargas de software y aplicaciones para PC y móviles.' },
    { url: 'https://www.tucows.com', content: 'Descargas de software y herramientas para PC.' },
    { url: 'https://www.downloadastro.com', content: 'Descargas de software y aplicaciones para múltiples plataformas.' },
    { url: 'https://www.opensourcemac.org', content: 'Software de código abierto para Mac.' },
    { url: 'https://www.macupdate.com', content: 'Descargas de software para macOS.' },
    { url: 'https://www.microsoft.com/en-us/store/apps', content: 'Descargas de aplicaciones y software de Microsoft.' },
    { url: 'https://www.adobe.com/downloads', content: 'Descargas de software de Adobe.' },
    { url: 'https://www.oracle.com/java/technologies/javase-downloads.html', content: 'Descargas de Java y herramientas de desarrollo.' },
    { url: 'https://www.python.org/downloads', content: 'Descargas del lenguaje de programación Python.' },
];

// Añadir las nuevas URLs de páginas de descargas de programas a la lista existente
data = [...data, ...softwareDownloadUrls];

// Elementos de la interfaz
const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');

// Función para buscar coincidencias
function search(query) {
  const queryLower = query.toLowerCase();
  return data.filter(item => 
    item.content.toLowerCase().includes(queryLower) || 
    item.url.toLowerCase().includes(queryLower)
  );
}

function toggleMenu() {
  const menu = document.getElementById("bookmarkList");
  menu.classList.toggle("show");
}


// Función para renderizar resultados
function renderResults(results) {
  resultsDiv.innerHTML = ''; // Limpiar resultados previos

  if (results.length === 0) {
    resultsDiv.innerHTML = '<p>No se encontraron resultados.</p>';
    return;
  }

  results.forEach(item => {
    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';

    resultItem.innerHTML = `
      <a href="${item.url}" target="_blank">${item.url}</a>
      <p>${item.content}</p>
    `;

    resultsDiv.appendChild(resultItem);
  });
}

// Evento de búsqueda
searchButton.addEventListener('click', () => {
  const query = searchBar.value.trim();
  if (!query) return;

  const results = search(query);
  renderResults(results);
});

// Soporte para Enter en la barra de búsqueda
searchBar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchButton.click();
  }
});
