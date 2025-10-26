class Categoria{
    constructor(_codigo, _titulo){
       this._codigo = _codigo;
       this._titulo = _titulo;
    }

    get codigo(){
        return this._codigo;
    }

    set codigo(valor){
        if(valor && valor.length > 0){
            this._codigo = valor;
        }else{
            console.error("codigo inválido!");
        }
    }

    get titulo(){
        return this._titulo;
    }

    set titulo(valor){
        if(valor && valor.length > 1){
            this._titulo = valor;
        }else{
            console.error("titulo inválido!");
        }
    }
}