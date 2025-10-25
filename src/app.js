class categoria{
    constructor(sku, nome){
       this.sku = sku;
       this.nome = nome;
    }
}

class produto {
    constructor(_sku, _nome, _preco){
        this._sku = _sku;
        this._nome = _nome;
        this._preco = _preco;
    }

    get sku() {
        return this._sku;
    }

    set sku(valor){
        if(valor && valor.length > 0){
            this._sku = valor;
        } else{
            console.error("SKU inválido!");
        }
    }

    get nome(){
        return this._nome;
    }
    set nome(valor){
        if (valor.length > 1) {
            this._nome = valor;
        } else {
            console.error("Nome muito curto!");
        }
    }

    get preco(){
        return this._preco;
    }
    set preco(valor){
        if(valor > 0){
            this._preco = valor;
        } else{
             console.error("Preço deve ser maior que zero!");
        }
    }
}