const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
  
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}

// const input = document.querySelector('input[name="price"]')
// input.addEventListener("keydown", function(e) {
//     setTimeout(function() {
//         let {value} = e.target

//         value = value.replace(/\D/g, "")

//         value = new Intl.NumberFormat('pt-BR', {
//             style: 'currency',
//             currency: 'BRL'
//         }).formatToParts(value/100)

//         e.target.value = value
//     }, 1)
// })

const Mask = {
    apply(input, func) {
        setTimeout(function() {
            input.value = Mask[func](input.value)
        },1)

    },
    FormatBRL(value) {
        value = value.replace(/\D/g, "")

        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).formatToParts(value/100)
    }
}
