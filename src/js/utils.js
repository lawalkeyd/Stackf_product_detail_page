/**
 * Subtracts or adds one to a given value based on the specified operation
 * @param {Int} valueToModify number to be decreased or increased
 * @param {String} operation value to determine if value will be decreased or increased by one
 *
 * @returns updated value to be displayed
 */
function adjustQuantity(valueToModify, operation) {
    if (isNaN(valueToModify)) {
        return 0
    } else {
        if (operation === '-') {
            valueToModify -= 1
        } else if (operation === '+') {
            valueToModify += 1
        }

        if (valueToModify >= 0) {
            return valueToModify
        } else {
            return 0
        }
    }
}

// Quantity controllers event listeners
let changeEvent = new Event('input')

document.querySelector('#quantity-decrease-button').addEventListener('click', function () {
    let quantityElement = document.getElementById('product-quantity')
    let currentQuantity = parseInt(quantityElement.value)
    quantityElement.value = adjustQuantity(currentQuantity, '-')
    quantityElement.dispatchEvent(changeEvent)
})

document.querySelector('#quantity-increase-button').addEventListener('click', function () {
    let quantityElement = document.getElementById('product-quantity')
    let currentQuantity = parseInt(quantityElement.value)
    quantityElement.value = adjustQuantity(currentQuantity, '+')
    quantityElement.dispatchEvent(changeEvent)
})

// Quantity value checks - some redundancy here "temporary" lol
document.querySelector('#product-quantity').addEventListener('input', function () {
    let quantityElement = document.getElementById('product-quantity')
    let currentQuantity = parseInt(quantityElement.value)
    let plusElement = document.getElementById('quantity-increase-button')
    let minusElement = document.getElementById('quantity-decrease-button')

    if (isNaN(currentQuantity)) {
        quantityElement.value = 0
    } else if (currentQuantity <= 0) {
        minusElement.classList.remove('active-button')
        minusElement.classList.add('inactive-button')
    } else if (currentQuantity > 0) {
        minusElement.classList.remove('inactive-button')
        minusElement.classList.add('active-button')
    } else if (currentQuantity >= 999999) {
        plusElement.classList.remove('active-button')
        plusElement.classList.add('inactive-button')
    }
})

document.querySelector('#hide-stackfill-section').addEventListener('click', function () {
    let productContainer = document.getElementById('product-container')
    productContainer.style.display = 'none'
})

document.querySelector('#stackfill-button').addEventListener('click', function () {
    let productContainer = document.getElementById('product-container')

    // Toggle info section display
    if (productContainer.style.display !== 'none') {
        productContainer.style.display = 'none'
    } else {
        productContainer.style.display = 'block'
    }
})

document.querySelector('.more-info-text').addEventListener('click', function () {
    console.log('Showing the more info message box now!!')
})

/**
 *  Automatically adjust the content of the iframe contaning the stackfill popup to match the content
 *
 */
const autoAdjustHeight = setInterval(function () {
    let iframe = document.getElementById('stackill_frame_3006')
    let reviewsContainer = document.getElementById('product-evaluation')

    if (iframe !== null) {
        // clearInterval(checkIfExists);
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px'
        iframe.style.width = iframe.contentWindow.document.body.scrollWidth + 'px'
    }

}, 100)
