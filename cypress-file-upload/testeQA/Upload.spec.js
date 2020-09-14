describe('Handing file upload', function () {

    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/upload')
    })
    it('upload files', function () {

        const fileName = 'example.json'
        cy.fixture('example').then(function (fileContent,) {
            cy.get('#file-upload').upload({ fileContent, fileName, mimetype: 'application/json' })
            cy.get('#file-submit').click

        })

    })
})