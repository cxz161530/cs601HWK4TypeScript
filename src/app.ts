/**
 * MET CS601 - Assignment 4
 * Country Management System
 */

// an interface accepting html and with name property
interface ICountry {
    name: string;
    getInfo(element: HTMLElement): HTMLElement;
  }

//rainy country
  
class RainyCountry implements ICountry {
    name: string;
    rainLevel: number;
  
    constructor(name: string, rainLevel: number) {
      this.name = name;
      this.rainLevel = rainLevel;
    }
  
    getInfo(element: HTMLElement): HTMLElement {
      element.textContent = `${this.name} has a rain level of ${this.rainLevel} inches.`;
      return element;
    }
}

//SnowyCountry country
  
class SnowyCountry implements ICountry {
    name: string;
    snowLevel: number;
  
    constructor(name: string, snowLevel: number) {
      this.name = name;
      this.snowLevel = snowLevel;
    }
  
    getInfo(element: HTMLElement): HTMLElement {
      element.textContent = `${this.name} has a snow level of ${this.snowLevel} inches.`;
      return element;
    }
  }
  

//IslandCountry country
  class IslandCountry implements ICountry {
    name: string;
    landSize: number;
  
    constructor(name: string, landSize: number) {
      this.name = name;
      this.landSize = landSize;
    }
  
    getInfo(element: HTMLElement): HTMLElement {
      element.textContent = `${this.name} has a land size of ${this.landSize} square miles.`;
      return element;
    }
  }
  
  const countries: ICountry[] = [
    new RainyCountry("United States", 28),
    new SnowyCountry("Norway", 20),
    new RainyCountry("Brazil", 40),
    new IslandCountry("Japan", 145937),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 2968464)
  ];
  
//4. Empty list store snowycountry
  let snowyCountriesList: SnowyCountry[] = [];

//5. Filter SNowy countries
    
  function filterSnowyCountry(country: ICountry): ICountry | null {
    if ((country as SnowyCountry).snowLevel !== undefined) {
      return country; 
    }
    return null; 
  }
  

//6. Loop countries and find snowycountries


// Loop through countries and add snowy countries to the snowyCountriesList
countries.forEach(country => {
  const snowyCountry = filterSnowyCountry(country);
  if (snowyCountry !== null) {
    snowyCountriesList.push(snowyCountry as SnowyCountry);
  }
});

// Render all countries
function renderCountryInfo(countries: ICountry[]): void {
  const output = document.getElementById('output');
  if (output) {
    const titleElement = document.createElement('h2');
    titleElement.textContent = "All Countries";
    output.appendChild(titleElement);
    // Render all countries
    countries.forEach(country => {
      const element = document.createElement('p');
      country.getInfo(element);
      output.appendChild(element);
    });
  }
}

// Render snowy countries and their total snow level
function renderSnowyCountryInfo(countries: SnowyCountry[]): void {
  const output = document.getElementById('output');
  if (output) {
    const titleElement = document.createElement('h2');
    titleElement.textContent = "Snow Countries";
    output.appendChild(titleElement);
    // Render snowy countries and calculate the total snow level
    let totalSnowLevel = 0;
    countries.forEach(country => {
      const element = document.createElement('p');
      country.getInfo(element);
      output.appendChild(element);
      totalSnowLevel += country.snowLevel;
    });

    // Render the total snow level
    const totalElement = document.createElement('p');
    totalElement.textContent = `Total annual snow level: ${totalSnowLevel} inches.`;
    output.appendChild(totalElement);
  }
}

// Ensure everything is loaded before rendering
document.addEventListener('DOMContentLoaded', () => {
    
  renderCountryInfo(countries);  // Render all countries first
  renderSnowyCountryInfo(snowyCountriesList);  // Then render snowy countries
});