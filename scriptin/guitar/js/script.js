/**
 * Created by Carmen on 12/04/2016.
 */

var Guitar = function (theName, theBrand, theModel) {

    //propiedades publicas
    this.guitarName = theName;
    this.guitarBrand = theBrand;
    this.guitarModel = theModel;

    //metodo publico
    this.describeGuitar = function () {
        var description = this.guitarName + " - " + this.guitarModel + " - " + this.guitarBrand;

        return description;
    };
};

