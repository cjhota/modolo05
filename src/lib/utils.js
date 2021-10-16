module.exports = {
    date(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()  //yyyy
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)   //mm
        const day = `0${date.getUTCDate()}`.slice(-2)    //dd

        // return `${year}-${month}-${day}`   //return yyyy-mm-dd iso
        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay:`${day}/${month}`,
            format:`${day}/${month}/${year}`,
        }
    },
    formatPrice(price) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price/100)
    }
}