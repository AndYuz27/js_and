let pryamougolnik = {
    sideA: 23,
    sideB: 85,
    getPerimetr: function() {
        let p = 2 * (this.sideA + this.sideB);
        return p 
    },
    getArea: function(){
        let S = this.sideA * this.sideB
        return S
    },
    info: function() {
        console.log(`${this.sideA} 000 ${this.sideB} 0000 ${pryamougolnik.getArea()} 0000 ${pryamougolnik.getPerimetr()}`)
        pryamougolnik.getArea
        pryamougolnik.getPerimetr
    }
}

pryamougolnik.info()
    