import "./index.css";
import MY_IMAGE from './image/NXslL.png';

// Создаем элементы
const header = document.createElement("h1");
header.innerText = "I love JavaScript!";

const img = document.createElement("img");
img.src = MY_IMAGE;

// Создаем контейнер и добавляем заголовок и изображение
const container = document.createElement("div");
container.classList.add("container");
container.append(header); // Заголовок добавляется первым
container.append(img); // Изображение добавляется после заголовка


// Устанавливаем стили для изображения
img.style.width = '200px'; // Установите нужную ширину
img.style.height = 'auto'; // Автоматическая высота для сохранения пропорций
img.style.display = 'block'; // Чтобы изображение было блочным элементом
img.style.margin = '0 auto'; // Центрируем изображение

// Добавляем контейнер в body
document.body.append(container);






