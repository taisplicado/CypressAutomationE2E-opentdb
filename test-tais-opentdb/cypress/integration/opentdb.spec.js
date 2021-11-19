import openTrivia from '../support/pages/index'

describe('Testes Opentdb (Banco de questões)', () => {
    beforeEach(() => {
        cy.visit('https://opentdb.com/') 
    })

    afterEach(() => {
  
    })
    it('Busca no banco por questão inexistente', () => {
        
        openTrivia.acessarBrowse();
        openTrivia.inserirTxtCampoBusca();
        openTrivia.clicarPesquisar();
        openTrivia.validarAlerta();
    })
    it('Busca no banco por questão existente', () => {
    
        openTrivia.acessarBrowse();
        openTrivia.inserirTxtCampoBusca();
        openTrivia.selecionarCategoria();
        openTrivia.clicarPesquisar();
        openTrivia.validarQtdadeItens();
        openTrivia.validarPaginacao();
    })

})

describe('Testes Opentdb (Login)', () => {
    beforeEach(() => {
        cy.visit('https://opentdb.com/') 
    })

    afterEach(() => {
  
    })

    it('Efetuar login', () => {

        openTrivia.acessarLogin();
        openTrivia.preencherLogin();
        openTrivia.clicarEntrar();
        openTrivia.validarNomeUsuarioMenu();

    })


    it('Vizualizar perfil do usuário', () => {

        openTrivia.acessarLogin();
        openTrivia.preencherLogin();
        openTrivia.clicarEntrar();
        openTrivia.validarNomeUsuarioMenu();
        openTrivia.clicarMenuUsuario();
        openTrivia.visualizarPerfilUsuario();
        openTrivia.validarDataPerfil();

    })

})