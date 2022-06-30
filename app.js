// Déclaration des produits
let product1 = new Product('MICHAËL GREGORIO', 'Spectacles Rodez', '43,00 €', 'Non', 'Non')
let product2 = new Product('DANIEL GUICHARD', 'Spectacles Rodez', '43,00 €', 'Non', '20%')
let product3 = new Product('PC Portable Gaming MSI GL75 Leopard 10SFK- 457FR 17,3" Intel Core i7 16 Go RAM 256 Go SSD + 1 To SATA Noir', 'Ordinateurs portables', '1999,99 €', 'Oui', '20%')
let product4 = new Product('PC Portable Gaming Asus TUF505DV- HN232T 15.6" AMD Ryzen 7 16 Go RAM 512 Go SSD Noir', 'Ordinateurs portables', '1499,99 €', 'Oui', '33%')
let product5 = new Product('PC Portable Gaming Acer Predator Triton 700 PT715-51- 76D4 15.6" Gaming Intel Core i7 32 Go RAM 256 Go SSD + 256 Go SATA Noir', 'Ordinateurs portables', '3499,99 €', 'Non', 'Non')
// Création du tableau de produits
let tableProducts = [product1, product2, product3, product4, product5]
// Association du tableau à l'élément du DOM, ce qui correspond à ce qu'il y aura d'affiché dans le tableau
let elementProducts = document.querySelector('#products')
// Déclaration des catégories
let category1 = new Category('Spectacles Rodez')
let category2 = new Category('Ordinateurs portables')
// Je crée une variable qui contiendra le tableau d'origine tel que présenté sur l'énoncé
let originalProducts = ''
// Déclaration des checkbox
let checkboxPromotion = document.querySelector('#checkboxPromotion')
let checkboxDiscount = document.querySelector('#checkboxDiscount')
let checkboxName = document.querySelector('#checkboxName')
let checkboxCategory = document.querySelector('#checkboxCategory')
// Je crée une variable qui contiendra le tableau trié
let sortProducts = ''
// Je crée une variable lié au bouton "Modifier" qui validera les changements
let buttonModify = document.querySelector('#modify')

let indexModify = 0;

// Affichage du tableau
let index = 0;
tableProducts.forEach(product => { originalProducts += '<tr><td>' + product.name + '</td><td>' + product.category + '</td><td>' + product.price + '</td><td id="cellPromotion' + index + '">' + product.promotion + '</td><td id="cellPercent' + index + '">' + product.discount + '</td><td><button id="buttonPromotion' + index + '" onclick="showDiscountPromotion(' + index + ')">Modifier une promotion</button></td></tr>'; index++; })
elementProducts.innerHTML = originalProducts

// CHECKBOX PROMOTION
// Je crée un listener sur lequel un clic active la fonction 
checkboxPromotion.addEventListener('click', function () {
    // Si la checkbox "Promotion" est cochée
    if (checkboxPromotion.checked) {
        // Je vide le tableau
        elementProducts.innerHTML = ''
        // Boucle d'affichage des produits en promotion à partir du tableau "tableProduct"
        tableProducts.forEach(product => showPromotion(product))
    }
    else {
        elementProducts.innerHTML = originalProducts
    }
})

// La fonction ajoute uniquement les produits en promotion dans la variable "elementProducts" puis les affiche grâce à innerHTML
function showPromotion(product) {
    if (product.promotion !== 'Non') {
        elementProducts.innerHTML += '<tr><td>' + product.name + '</td><td>' + product.category + '</td><td>' + product.price + '</td><td>' + product.promotion + '</td><td>' + product.discount + '</td></tr>'
    }
}

// CHECKBOX REMISE
checkboxDiscount.addEventListener('click', function () {
    if (checkboxDiscount.checked) {
        elementProducts.innerHTML = ''
        tableProducts.forEach(product => showDiscount(product))
    }
    else {
        elementProducts.innerHTML = originalProducts
    }
})

function showDiscount(product) {
    if (product.discount !== 'Non') {
        elementProducts.innerHTML += '<tr><td>' + product.name + '</td><td>' + product.category + '</td><td>' + product.price + '</td><td>' + product.promotion + '</td><td>' + product.discount + '</td></tr>'
    }
}

// TRI PAR ORDRE ALPHABETIQUE
checkboxName.addEventListener('click', function () {
    if (checkboxName.checked) {
        elementProducts.innerHTML = ''
        // Je remets à zéro la variable "sortProducts" qui contient mes éléments triés pour éviter le problème d'accumulation lorsque l'on décochera/recochera
        sortProducts = ''
        // Je trie les éléments du tableau par ordre alphabétique
        tableProducts.sort((a, b) => a.name.localeCompare(b.name))
        tableProducts.forEach(product => sortProducts += '<tr><td>' + product.name + '</td><td>' + product.category + '</td><td>' + product.price + '</td><td>' + product.promotion + '</td><td>' + product.discount + '</td></tr>')
        elementProducts.innerHTML = sortProducts
    }
    else {
        elementProducts.innerHTML = originalProducts
    }
})

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
        elementProducts.innerHTML = originalProducts
    }
})

// MODIFIER UNE REMISE OU UNE PROMOTION
function showDiscountPromotion(index) {
    indexModify = index
    if (document.querySelector('#cellPromotion' + index).innerHTML == "Non") {
        document.querySelector('#promotion').checked = false
    } else {
        document.querySelector('#promotion').checked = true
    }
    if (document.querySelector('#cellPercent' + index).innerHTML == "Non") {
        document.querySelector('#percent').value = "0"
    } else {
        document.querySelector('#percent').value = document.querySelector('#cellPercent' + index).innerHTML.replace('%', '')
    }
}

buttonModify.addEventListener('click', function () {
    if (document.querySelector('#promotion').checked == true) {
        document.querySelector('#cellPromotion' + indexModify).innerHTML = "Oui"
        tableProducts[indexModify].promotion = "Oui"
    } else {
        document.querySelector('#cellPromotion' + indexModify).innerHTML = "Non"
        tableProducts[indexModify].promotion = "Non"
    }

    if (document.querySelector('#percent').value == "0") {
        document.querySelector('#cellPercent' + indexModify).innerHTML = "Non"
        tableProducts[indexModify].discount = "Non"
    } else {
        document.querySelector('#cellPercent' + indexModify).innerHTML = document.querySelector('#percent').value + '%'
        tableProducts[indexModify].discount = document.querySelector('#percent').value + '%'
    }
})