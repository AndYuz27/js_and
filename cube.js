let rectangle = {
    sideA: 80,
    sideB: 40,
    getPerimetr: function(){
      let Perim = 2 * this.sideA + 2 * this.sideB;
      return Perim;
    },
    getArea: function(){
      let Area = this.sideA * this.sideB;
      return Area;
    },
    info: function(){
      console.log(` сторона A прямоугольника равна ${this.sideA}, сторона B прямоугольника равна ${this.sideB}. периметр прямоугольника равен ${rectangle.getPerimetr()}, площадь прямоугольника равна: ${rectangle.getArea()}`)
      rectangle.getPerimetr();
      rectangle.getArea();
    }
  };

  
  rectangle.info();