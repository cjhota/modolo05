const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
  
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}

const input = document.querySelector('input[name="price"]')
input.addEventListener("keydown", function(e) {
    setTimeout(function() {
        let {value} = e.target

        value = value.replace(/\D/g, "")

        e.target.value = value
    }, 1)
})