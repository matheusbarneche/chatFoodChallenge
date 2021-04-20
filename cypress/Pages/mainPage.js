export class MainPage{
    navigateToMainPage(){
        cy.visit('https://www.themoviedb.org/')
    }

    clickOnMoviesDropDown(){
        cy.get('.dropdown_menu > :nth-child(1) > .no_click').trigger('mouseover')
    }
    
    clickOnTopRatedMovies(){
        cy.get('.k-animation-container > .k-group > .k-last > .k-link').click()
    }
    
}