/* eslint-disable quotes */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/// <reference types= "cypress" />

import { FilteredDocumentary } from '../Pages/filteredDocumentary';
import { MainPage } from '../Pages/mainPage';
import { TopRated } from '../Pages/topRated';

describe('Acceptance Tests', () => {
  const mainPage = new MainPage();
  const topRatedMoviesPage = new TopRated();
  const documentaryPage = new FilteredDocumentary();

  beforeEach(() => {
    mainPage.navigateToMainPage();
  });

  it('Filter a documentary on the top rated section', () => {
    {
      mainPage.clickOnMoviesDropDown();
      mainPage.clickOnTopRatedMovies();
      topRatedMoviesPage.clickOnSortArrowDown();
      topRatedMoviesPage.mouseOverDateAsceding();
      topRatedMoviesPage.clickOnDateAsceding();
      topRatedMoviesPage.clickOnTopRatepSearch();
      topRatedMoviesPage.clickOnFilterArrowDown();
      topRatedMoviesPage.chooseDocumentaryFilter();
      topRatedMoviesPage.searchFilteredDocumentary();
      topRatedMoviesPage.chooseFilteredFirstDocumentary();
      documentaryPage.barScrollerMediaArrowDownMouseOver();
      documentaryPage.barScrollerMediaVideosMouseOver();
      documentaryPage.barScrollerVideoValueValidate();
      documentaryPage.pageMediaSectionVideos();
      documentaryPage.pageMediaSectionVideoValueValidate();
    }
  });
});
