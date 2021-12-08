function obterParams (){
    const query = new URLSearchParams(window.location.search);
    const params = {
        carro: query.get("carro"),
        modelo: query.get("modelo"),
        versao: query.get("versao"),
        ano: query.get("ano"),
        km: query.get("km"),
        local: query.get("local"),
        preco: query.get("preco"),
        imagem: query.get("imagem") 
    }
    
    return params;
}