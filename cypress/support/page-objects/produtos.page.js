class ProdutosPage{

    visitarUrl(){
        cy.visit('produtos')
    }
    buscarProduto(){
        // codigo
    }

    buscarProdduto(nomeProduto){
         cy.get('.products > .row')
         .contains(nomeProduto)
            .click()

    }

    VisitarProduto(){

    }

    addProdutocarrinho(){

    }

}
export default new ProdutosPage()