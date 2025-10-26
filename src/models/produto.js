class Produto {
  constructor(_sku, _nome, _qntd, _preco, _codcat) {
    this._sku = _sku;
    this._nome = _nome;
    this._preco = _preco;
    this._qntd = _qntd;
    this._codcat = _codcat;
  }

  get sku() {
    return this._sku;
  }

  set sku(valor) {
    if (valor && valor.length <= 10) {
      this._sku = valor;
    } else {
      console.error("SKU inválido!");
    }
  }

  get nome() {
    return this._nome;
  }
  set nome(valor) {
    if (valor && valor.length > 1) {
      this._nome = valor;
    } else {
      console.error("Nome muito curto!");
    }
  }

  get qtde() {
    return this._qntd;
  }
  set qtde(valor) {
    if (valor >= 0) {
      this._qntd = valor;
    } else {
      console.error("Precisa de no minimo 1 volume");
    }
  }

  get preco() {
    return this._preco;
  }
  set preco(valor) {
    if (valor > 0) {
      this._preco = valor;
    } else {
      console.error("Preço deve ser maior que zero!");
    }
  }

  get codcat() {
    return this._codcat;
  }
  set codcat(valor) {
    if (valor.length > 3) return;
    if (valor && valor.length > 1) {
      this._codcat = valor;
    } else {
      console.error("erro no codigo");
    }
  }
}
