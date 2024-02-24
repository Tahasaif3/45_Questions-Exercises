function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city('karachi'); // default sentence
describe_city('france', 'europe');
describe_city('lahore', 'is in punjab');
