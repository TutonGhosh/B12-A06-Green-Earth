const loadAllBtn = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((resp) => resp.json())
    .then((data) => displayAllBtn(data.categories));
};
// id	1
// category_name	"Fruit Tree"
// small_description	"Trees that bear edible fruits like mango, guava, and jackfruit."
const displayAllBtn = (data) => {

    const allCatBtn = document.getElementById("all-cat-btn");
    allCatBtn.innerHTML = `
    <button class="btn btn-ghost bg-[#15803d] text-white font-medium border-none shadow-none">All Categories</button>
    `;

    data.forEach(item => {
        console.log(item.category_name)

        const catBtn = document.createElement("div");
        catBtn.innerHTML = `
        <button onclick = "loadCatTree(${item.id})" class="btn btn-ghost hover:bg-[#15803d] hover:text-white font-medium border-none shadow-none">${item.category_name}</button>
        `;

        allCatBtn.appendChild(catBtn);
    });
}

const loadAllCard = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then((resp) => resp.json())
    .then((data) => displayAllCard(data.plants))
}
// id	1
// image	"https://i.ibb.co.com/cSQdg7tf/mango-min.jpg"
// name	"Mango Tree"
// description	"A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals."
// category	"Fruit Tree"
// price	500
const displayAllCard = (data) => {

    const allCatCards = document.getElementById("all-cat-cards");
    allCatCards.innerHTML = "";

    data.forEach(item => {
        console.log(item.name)

        const card = document.createElement("div");
        card.innerHTML = `
        <div class="card bg-base-100 max-w-96 shadow-sm rounded-xl">
                            <figure class="p-5 pb-0">
                                <img class="rounded-xl h-[250px] w-full object-cover object-center" src="${item.image}" alt="Shoes" />
                            </figure>
                            <div class="card-body space-y-1">
                                <h2 class="card-title">${item.name}</h2>
                                <p>${item.description}</p>
                                <div class="flex items-center justify-between px-2">
                                    <button class="btn btn-soft btn-success border-none shadow-none">${item.category}</button>
                                    <h1 class = "text-xl font-semibold">৳ ${item.price}</h1>
                                </div>
                                <div class="card-actions">
                                    <button class="btn btn-ghost text-[#15803d] hover:bg-[#15803d] hover:text-white font-medium border-[#15803d] shadow-none rounded-full w-full">Add to Cart</button>
                                </div>
                            </div>
                        </div>
        `;
        
        allCatCards.appendChild(card);
    });
}


const loadCart = () => {
    
    const cart = document.getElementById("carts");
    cart.innerHTML = "";
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
    <div class="bg-base-100 w-72 p-5 min-h-96 rounded-xl">
                            <h1 class="text-xl font-semibold mb-5">Your Cart</h1>
                            <div class="mt-2 flex items-center justify-between bg-[#f0fdf4] px-3 py-2 rounded-md">
                                <div class="space-y-2">
                                    <h1 class="text-base font-semibold">Mango Tree</h1>
                                    <p class="text-gray-400 font-normal">৳ 500 x 1</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div class="flex items-center justify-between mt-10">
                                <h1 class="text-xl font-semibold">Total: </h1>
                                <p class="text-gray-500 text-xl font-semibold">৳ 10000</p>
                            </div>
                        </div>
    `;

    cart.appendChild(cartItem)
}


loadCart()
loadAllCard()
loadAllBtn();













































// const loadAllTrees = () => {
//   fetch("https://openapi.programming-hero.com/api/categories")
//     .then((resp) => resp.json())
//     .then((json) => displayAllCatBtn(json.categories));
// };
// // {
// // "id": 1,
// // "category_name": "Fruit Tree",
// // "small_description": "Trees that bear edible fruits like mango, guava, and jackfruit."
// // }
// const displayAllCatBtn = (allCat) => {

//     const allCatBtn = document.getElementById("all-cat-btn");
//     allCatBtn.innerHTML = `
//     <h1 class="mb-5 text-xl font-semibold">Categories</h1>
//     <button class="btn text-white font-medium bg-[#15803d] border-none shadow-none">All Categories</button>
//     `;

//     const allCards = document.getElementById("all-cards");
//     allCards.innerHTML = "";

//     allCat.forEach(cat => {
//         const catBtn = document.createElement("div");
//         catBtn.innerHTML = `
//         <button onclick = "loadCatTree(${cat.id})" class="btn btn-ghost font-medium border-none shadow-none">${cat.category_name}</button>
//         `;

//         const allCategoriesCard = document.createElement("div");
//         allCategoriesCard.innerHTML = `
//         <div class="card bg-base-100 w-96 shadow-sm rounded-xl">
//                             <figure class="p-5">
//                                 <img class="rounded-xl" src="${cat}" alt="Shoes" />
//                             </figure>
//                             <div class="card-body space-y-2">
//                                 <h2 class="card-title">Card Title</h2>
//                                 <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//                                 <div class="flex items-center justify-between px-2">
//                                     <button class="btn btn-soft btn-success border-none shadow-none">fruit tree</button>
//                                     <h1>$1500</h1>
//                                 </div>
//                                 <div class="card-actions">
//                                     <button class="btn text-white font-medium bg-[#15803d] border-none shadow-none rounded-full w-full">Add to Cart</button>
//                                 </div>
//                             </div>
//                         </div>
//         `;

//         allCatBtn.appendChild(catBtn)
//         allCards.appendChild(allCategoriesCard);
//     });
// }

// loadAllTrees();
