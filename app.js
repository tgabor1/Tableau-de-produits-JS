// Déclaration des produits
let product1 = new Product('MICHAËL GREGORIO', 'Spectacles Rodez', '43,00 €', 'Non', 'Non')
let product2 = new Product('DANIEL GUICHARD', 'Spectacles Rodez', '43,00 €', 'Non', '20%')
let product3 = new Product('PC Portable Gaming MSI GL75 Leopard 10SFK- 457FR 17,3" Intel Core i7 16 Go RAM 256 Go SSD + 1 To SATA Noir', 'Ordinateurs portables', '1999,99 €', 'Oui', '20%')
let product4 = new Product('PC Portable Gaming Asus TUF505DV- HN232T 15.6" AMD Ryzen 7 16 Go RAM 512 Go SSD Noir', 'Ordinateurs portables', '1499,99 €', 'Oui', '33%')
let product5 = new Product('PC Portable Gaming Acer Predator Triton 700 PT715-51- 76D4 15.6" Gaming Intel Core i7 32 Go RAM 256 Go SSD + 256 Go SATA Noir', 'Ordinateurs portables', '3499,99 €', 'Non', 'Non')
let productTest = new Product('Produit test', 'Spectacles Rodez', '40,00 €', 'Non', '70%')

// Déclaration des catégories
let category1 = new Category('Spectacles Rodez')
let category2 = new Category('Ordinateurs portables')

// Création du tableau de produits
let tableProduct = [product1, product2, product3, product4, product5, productTest]

// Association du tableau à l'élément du DOM
let listProduct = document.querySelector('#prod')

// Je trie les éléments du tableau par ordre alphabétique
// tabProduit.sort((a, b) => a.name.localeCompare(b.name))

// Je crée une variable comprenant tous les produits
let allProduct = ''
tableProduct.forEach(product => allProduct += '<tr><td>' + product.name + '</td><td>' + product.category + '</td><td>' + product.price + '</td><td>' + product.promotion + '</td><td>' + product.discount + '</td></tr>')
listProduct.innerHTML = allProduct





// PARTIE CHECKBOX PROMOTION
let checkboxPromotion = document.querySelector('#checkboxProm')
// Je crée un listener sur lequel un clic active la fonction 
checkboxPromotion.addEventListener('click', function () {
    if (checkboxPromotion.checked) {
        listProduct.innerHTML = ''
        // Boucle d'affichage des produits en promotion à partir du tableau "tabProduit"
        tableProduct.forEach(produit => showPromotion(produit))
    }
    else {
        listProduct.innerHTML = allProduct
    }
})

// La fonction ajoute uniquement les produits en promotion dans la variable "listeProduit" puis les affiche grâce à innerHTML
function showPromotion(product) {
    if (product.promotion !== 'Non') {
        listProduct.innerHTML += '<tr><td>' + product.name + '</td><td>' + product.category + '</td><td>' + product.price + '</td><td>' + product.promotion + '</td><td>' + product.discount + '</td></tr>'
    }
}
// FIN DE LA PARTIE CHECKBOX PROMOTION





// PARTIE CHECKBOX REMISE
let checkboxDiscount = document.querySelector('#checkboxDisc')

checkboxDiscount.addEventListener('click', function () {
    if (checkboxDiscount.checked) {
        listProduct.innerHTML = ''
        tableProduct.forEach(produit => showDiscount(produit))
    }
    else {
        listProduct.innerHTML = allProduct
    }
})

function showDiscount(product) {
    if (product.discount !== 'Non') {
        listProduct.innerHTML += '<tr><td>' + product.name + '</td><td>' + product.category + '</td><td>' + product.price + '</td><td>' + product.promotion + '</td><td>' + product.discount + '</td></tr>'
    }
}
// FIN DE LA PARTIE CHECKBOX REMISE





// PARTIE TRI CATEGORIE PAR ORDRE ALPHATBETIQUE
let checkboxCategory = document.querySelector('#checkboxCat')

checkboxCategory.addEventListener('click', function () {
    if (checkboxCategory.checked) {
        listProduct.innerHTML = ''
        allProduct = ''
        tableProduct.sort((a, b) => a.category.localeCompare(b.category))
        tableProduct.forEach(product => allProduct += '<tr><td>' + product.name + '</td><td>' + product.category + '</td><td>' + product.price + '</td><td>' + product.promotion + '</td><td>' + product.discount + '</td></tr>')
        listProduct.innerHTML = allProduct
    }
    else {
        listProduct.innerHTML = allProduct
    }
})
// FIN DE LA PARTIE TRI CATEGORIE PAR ORDRE ALPHATBETIQUE