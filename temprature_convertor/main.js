const celciusInput = document.querySelector( '#celcius > input');
const fahreheitInput = document.querySelector( '#fahreheit > input');
const kelvinInput = document.querySelector( '#kelvin > input');


function roundNum(num){
    return Math.round(num*100)/100;
}

 function celciusToFahrenheitAndKelvin(){
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahreheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);

 }

function fahreheitToCelciusAndKelvin() {
    const fTemp = parseFloat(fahreheitInput.value);
    const cTemp = (fTemp-32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9;
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);

}

function kelvinToCelciusAndFahreheit() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273) + 32;
    celciusInput.value =  roundNum(cTemp);
    fahreheitInput.value =  roundNum(fTemp);


}
function main(){
    celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin);
    fahreheitInput.addEventListener('input', fahreheitToCelciusAndKelvin);
    kelvinInput.addEventListener('input', kelvinToCelciusAndFahreheit);

} main();
