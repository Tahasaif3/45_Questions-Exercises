function describe_city(city: string, country: string = 'Pakistan'): void{
    console.log(`${city} is in ${country}`)
}


describe_city('karachi') // default sentence
describe_city('france', 'europe')
describe_city('lahore', 'is in punjab')