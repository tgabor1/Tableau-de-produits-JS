// Déclaration des produits
let prod1 = new Product('MICHAËL GREGORIO', '43,00 €', 'Non', 'Non')
let prod2 = new Product('DANIEL GUICHARD', '43,00 €', 'Non', '20%')
let prod3 = new Product('PC Portable Gaming MSI GL75 Leopard 10SFK- 457FR 17,3" Intel Core i7 16 Go RAM 256 Go SSD + 1 To SATA Noir', '1999,99 €', 'Oui', '20%')
let prod4 = new Product('PC Portable Gaming Asus TUF505DV- HN232T 15.6" AMD Ryzen 7 16 Go RAM 512 Go SSD Noir', '1499,99 €', 'Oui', '33%')
let prod5 = new Product('PC Portable Gaming Acer Predator Triton 700 PT715-51- 76D4 15.6" Gaming Intel Core i7 32 Go RAM 256 Go SSD + 256 Go SATA Noir', '3499,99 €', 'Non', 'Non')

// Déclaration des catégories
let spectacles = new Category('Spectacles Rodez')
let pc = new Category('Ordinateurs Portables')

// Création du tableau de produits
let tabProduit = [prod1, prod2, prod3, prod4, prod5]

// Association du tableau à l'élément du DOM
let listeProduit = document.querySelector('#produit')

// Je crée une variable comprenant tous les produits
let tousProduit = ''
tabProduit.forEach(product => tousProduit += '<tr><td>' + product.name + '</td><td>' + product.price + '</td><td>' + product.promotion + '</td><td>' + product.discount + '</td></tr>')
listeProduit.innerHTML = tousProduit




// PARTIE CHECKBOX PROMOTION
let checkboxPromo = document.querySelector('#checkboxProm')
// Je crée un listener sur lequel un clic active la fonction 
checkboxPromo.addEventListener('click', function () {
    if (checkboxPromo.checked) {
        listeProduit.innerHTML = ''
        // Boucle d'affichage des produits en promotion à partir du tableau "tabProduit"
        tabProduit.forEach(produit => affichePromo(produit))
    }
    else {
        listeProduit.innerHTML = tousProduit
    }
})

// La fonction ajoute uniquement les produits en promotion dans la variable "listeProduit" puis les affiche grâce à innerHTML
function affichePromo(product) {
    if (product.promotion !== 'Non') {
        listeProduit.innerHTML += '<tr><td>' + product.name + '</td><td>' + product.price + '</td><td>' + product.promotion + '</td><td>' + product.discount + '</td></tr>'
    }
}
// FIN DE LA PARTIE CHECKBOX PROMOTION




// PARTIE CHECKBOX REMISE
// Je reproduis la même chose que pour la promotion en changeant les noms
let checkboxRemise = document.querySelector('#checkboxRem')

checkboxRemise.addEventListener('click', function () {
    if (checkboxRemise.checked) {
        listeProduit.innerHTML = ''

        tabProduit.forEach(produit => afficheRemise(produit))
    }
    else {
        listeProduit.innerHTML = tousProduit
    }
})

function afficheRemise(product) {
    if (product.discount !== 'Non') {
        listeProduit.innerHTML += '<tr><td>' + product.name + '</td><td>' + product.price + '</td><td>' + product.promotion + '</td><td>' + product.discount + '</td></tr>'
    }
}
// FIN DE LA PARTIE CHECKBOX REMISE