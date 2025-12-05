class ProdutosPage{

    visitarUrl(){
        cy.visit('produtos')
    }
    buscarProduto(nomeProduto){
        cy.get('[name="S"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProddutoLista(nomeProduto){
         cy.get('.products > .row')
         .contains(nomeProduto)
            .click()

    }

    VisitarProduto(nomeProduto) {
       // cy.visit(`produtos/${nomeProduto}`)

       const urlFormatada = nomeProduto.replace(/ /g, '-')
       cy.visit(`produtos/${urlFormatada}`)

    }

    addProdutocarrinho(){

    }

}
export default new ProdutosPage()