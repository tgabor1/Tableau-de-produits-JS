// Déclaration des produits
let product1 = new Product('MICHAËL GREGORIO', 'Spectacles Rodez', '43,00 €', 'Non', 'Non')
let product2 = new Product('DANIEL GUICHARD', 'Spectacles Rodez', '43,00 €', 'Non', '20%')
let product3 = new Product('PC Portable Gaming MSI GL75 Leopard 10SFK- 457FR 17,3" Intel Core i7 16 Go RAM 256 Go SSD + 1 To SATA Noir', 'Ordinateurs portables', '1999,99 €', 'Oui', '20%')
let product4 = new Product('PC Portable Gaming Asus TUF505DV- HN232T 15.6" AMD Ryzen 7 16 Go RAM 512 Go SSD Noir', 'Ordinateurs portables', '1499,99 €', 'Oui', '33%')
let product5 = new Product('PC Portable Gaming Acer Predator Triton 700 PT715-51- 76D4 15.6" Gaming Intel Core i7 32 Go RAM 256 Go SSD + 256 Go SATA Noir', 'Ordinateurs portables', '3499,99 €', 'Non', 'Non')
// Déclaration des catégories
let category1 = new Category('Spectacles Rodez')
let category2 = new Category('Ordinateurs portables')
// Déclaration des checkbox
let checkboxPromotion = document.querySelector('#checkboxProm')
let checkboxDiscount = document.querySelector('#checkboxDisc')
let checkboxName = document.querySelector('#checkboxNam')
let checkboxCategory = document.querySelector('#checkboxCat')
// Création du tableau de produits
let tableProducts = [product1, product2, product3, product4, product5]
// Association du tableau à l'élément du DOM
let elementProducts = document.querySelector('#prod')
// Je crée une variable avec le tableau d'origine tel que présenté sur l'énoncé
let allProducts = ''
// Je crée une variable qui trie le tableau
let sortProducts = 0

// Affichage du tableau
tableProducts.forEach(product => allProducts += '<tr><td>' + product.name + '</td><td>' + product.category + '</td><td>' + product.price + '</td><td>' + product.promotion + '</td><td>' + product.discount + '</td></tr>')
elementProducts.innerHTML = allProducts

// CHECKBOX PROMOTION
// Je crée un listener sur lequel un clic active la fonction 
checkboxPromotion.addEventListener('click', function () {
    // Si la checkbox "Promotion" est cochée
    if (checkboxPromotion.checked) {
        // Je vide le tableau
        elementProducts.innerHTML = ''
        // Boucle d'affichage des produits en promotion à partir du tableau "tabProduit"
        tableProducts.forEach(product => showPromotion(product))
    }
    else {
        elementProducts.innerHTML = allProducts
    }
})

// La fonction ajoute uniquement les produits en promotion dans la variable "listeProduit" puis les affiche grâce à innerHTML
function showPromotion(product) {
    if (product.promotion !== 'Non') {
        elementProducts.innerHTML += '<tr><td>' + product.name + '</td><td>' + product.category + '</td><td>' + product.price + '</td><td>' + product.promotion + '</td><td>' + product.discount + '</td></tr>'
    }
}
// FIN CHECKBOX PROMOTION

// CHECKBOX REMISE
checkboxDiscount.addEventListener('click', function () {
    if (checkboxDiscount.checked) {
        elementProducts.innerHTML = ''
        tableProducts.forEach(product => showDiscount(product))
    }
    else {
        elementProducts.innerHTML = allProducts
    }
})

function showDiscount(product) {
    if (product.discount !== 'Non') {
        elementProducts.innerHTML += '<tr><td>' + product.name + '</td><td>' + product.category + '</td><td>' + product.price + '</td><td>' + product.promotion + '</td><td>' + product.discount + '</td></tr>'
    }
}
// FIN CHECKBOX REMISE

// TRI PAR ORDRE ALPHABETIQUE
checkboxName.addEventListener('click', function () {
    if (checkboxName.checked) {
        elementProducts.innerHTML = ''
        sortProducts = ''
        // Je trie les éléments du tableau par ordre alphabétique
        tableProducts.sort((a, b) => a.name.localeCompare(b.name))
        tableProducts.forEach(product => sortProducts += '<tr><td>' + product.name + '</td><td>' + product.category + '</td><td>' + product.price + '</td><td>' + product.promotion + '</td><td>' + product.discount + '</td></tr>')
        elementProducts.innerHTML = sortProducts
    }
    else {
        elementProducts.innerHTML = allProducts
    }
})
// FIN TRI PAR ORDRE ALPHABETIQUE

// TRI PAR CATEGORIE
checkboxCategory.addEventListener('click', function () {
    if (checkboxCategory.checked) {
        elementProducts.innerHTML = ''
        sortProducts = ''
        tableProducts.sort((a, b) => a.category.localeCompare(b.category))
        tableProducts.forEach(product => sortProducts += '<tr><td>' + product.name + '</td><td>' + product.category + '</td><td>' + product.price + '</td><td>' + product.promotion + '</td><td>' + product.discount + '</td></tr>')
        elementProducts.innerHTML = sortProducts
    }
    else {
        elementProducts.innerHTML = allProducts
    }
})
// FIN TRI PAR CATEGORIE








// function tabFilter(tabName, property){
//     tabName.sort((a, b) => a[property].localeCompare(b[property]))
// }

// tabFilter(tableProducts, category)
// console.log(tabFilter(tableProducts, category));