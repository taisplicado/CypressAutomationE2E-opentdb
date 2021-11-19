//Elementos
const el = {
btBrowse: '.col-lg-8 > [href="https://opentdb.com/browse.php"]',
btLogin: ':nth-child(5) > [href="https://opentdb.com/login.php"]',
tfcampoBusca: '[id="query"]',
btPesquisar: '[class="btn btn-sm btn-default"]',
txtAlerta: '[class="alert alert-danger"]',
btCategoria: '[id="type"]',
elPaginacao: '[class="pagination pagination-lg"]',
tfUsername: '[id="username"]',
tfPassword: '[id="password"]',
btEntrar: ':nth-child(9) > .btn',
txtNomeUsuarioMenu: '[class="dropdown-toggle"]',
btMenuUsuario: '[class="dropdown-toggle"]',
txtDataUsuario: 'tbody > tr > :nth-child(4)',

}

//Ações
class openTrivia {

    acessarBrowse(){
        cy.get(el.btBrowse).click();
    }
    acessarLogin(){
        cy.get(el.btLogin).click();
    }
    preencherLogin(){
        cy.get(el.tfUsername).type('tais');
        cy.get(el.tfPassword).type('senhateste');
    }
    inserirTxtCampoBusca(){
        cy.get(el.tfcampoBusca).type('Science: Computers');
    }
    clicarPesquisar(){
        cy.get(el.btPesquisar).click();
    }
    clicarEntrar(){
        cy.get(el.btEntrar).click();
    }
    validarAlerta(){
        cy.get(el.txtAlerta).should('have.text','No questions found.');
    }
    selecionarCategoria(){
        cy.get(el.btCategoria).select('Category').should('have.value', 'Category');
    }
    validarQtdadeItens(){
        cy.get('tbody > tr').its('length').should('be.gte', 25);
    }
    validarPaginacao(){
        cy.get(el.elPaginacao).should('exist');
    }
    validarNomeUsuarioMenu(){
        cy.get(el.txtNomeUsuarioMenu).should('have.text',' tais ');
    }
    clicarMenuUsuario(){
        cy.get(el.btMenuUsuario).click();
    }
    visualizarPerfilUsuario(){
        cy.get(el.btMenuUsuario).click({force:true}).get('[class="dropdown-menu"]').contains('View User Profile').click({force:true})
    }
    validarDataPerfil(){
        cy.get(el.txtDataUsuario).should('have.text', 'Thursday, November 18th, 2021');
    }

    
}  
export default new openTrivia();