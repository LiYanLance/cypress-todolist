/// <reference types="cypress" />

describe("todolist", () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it('loads', () => {
        cy.contains("todo list")
    })

    it('starts with zero items', () => {
        cy.get('li').should('have.length', 0)
    })

    /**
     * Adds a todo item
     * @param {string} text
     */

    const addItem = text => {
        cy.get('.inner input').type(`${text}{enter}`)
    }

    it('can add multiple items', () => {
        // assumes there are no items at the beginning
        const N = 5
        for (let k = 0; k < N; k += 1) {
            addItem(`item ${k}`)
        }
        // check number of items
        cy.get('li').should('have.length', 5)
    })


    it('can mark items as completed', () => {
        addItem('simple')
        cy.contains('li', 'simple')
            .click()
        cy.contains("p", "simple")
            .invoke("css", "text-decoration")
            .should("contain", "line-through")
    })

    it('can delete item', () => {
        addItem('tobeDeleted')
        cy.contains("li", "tobeDeleted").should("be.visible")
        cy.contains('li', 'tobeDeleted').find("span").click()
        cy.contains('li', 'tobeDeleted').should('not.exist')
    })

    it("can only show active items after click active filter", () => {
        addItem("active")
        addItem("completed")
        cy.contains("li", "completed").click()

        cy.contains("Active").click()

        cy.get("li")
            .should("have.length", 1)
            .and("contain", "active")
    })

    it("can only show completed items after click completed filter", () => {
        addItem("active")
        addItem("completed")
        cy.contains("li", "completed").click()

        cy.contains("Completed").click()

        cy.get("li")
            .should("have.length", 1)
            .and("contain", "completed")
    })
})