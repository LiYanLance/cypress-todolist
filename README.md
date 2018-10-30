# cypress-todolist
![gif](/pic.gif)

## 如何执行
```
git clone https://github.com/LiYanLance/cypress-todolist.git

cd cypress-todolist && npm install

npm run dev
```
#### 打开浏览器浏览 http://localhost:3000/




# Cypress Set Up

安装

```
npm install cypress --save-dev
```

打开 Cypress GUI 的三种方式
```
./node_modules/.bin/cypress open

npx cypress open

npm run cy:open
```
最后一种方式需要加 script 
```
"cy:open" : "cypress open"
```

# First Test
```
it('loads', () => {
  cy.visit('localhost:3000')
})
```

## Magic lines
```
/// <reference types="cypress" />
// @ts-check
```

# Basic Test

```
it('loads', () => {
  cy.visit('localhost:3000')
  cy.contains('h2', 'todo app')
})
```

## Command docs
For contains : 
https://on.cypress.io/contains


# Run Test

open -> run

```
npm run cypress

npx cypress run
```

第一条对应 script 见 package.json

# Integration Test

## config

cypress.config
```
"baseUrl": "http://localhost:3000"
```

## beforeEach
```
describe("todolist", () => {

  beforeEach(() => {
    cy.visit("/")
  })

  it('loads', () => {
    cy.contains('h2', 'todo list')
  })
  
})
```

## add new action
```
it('add new action', () => {
  cy.get("input")
    .type("new action{enter}")
  cy.contains("new action")
})
```

or

```
it('add new action', () => {
  cy.get("input")
    .type("new action")
  cy.get("[data-cy='submit']")
    .click()
  cy.contains("new action")
})
```