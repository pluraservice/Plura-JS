# Plura JS

PluraJS è una libreria JavaScript progettata per semplificare lo sviluppo di applicazioni web consentendo agli sviluppatori di scrivere meno codice. Con PluraJS, gli sviluppatori possono concentrarsi maggiormente sulla logica dell'applicazione piuttosto che sull'implementazione dettagliata delle interfacce utente e delle funzionalità di base.


## Plura JS | Installation

```js
import { PluraJS } from "plurajs";
```
    
```js
<script type="module">
    import { PluraJS } from "https://pluraservice.github.io/Plura-JS/source/dist/PluraJS.cjs.js";
</script>
```

## Plura JS | Usage

```js
import { PluraJS } from "plurajs";

// Categoria UI
const UI = PluraJS.UI;

// Categoria Variable
const Variable = PluraJS.Variable;

// Categoria WBFunctions
const WBFunctions = PluraJS.WBFunctions;

// Categoria Number
const NumberUtil = PluraJS.Number;

// Categoria Generate
const Generate = PluraJS.Generate;

// Categoria GET
const GET = PluraJS.GET;

// Categoria Window
const WindowUtil = PluraJS.Window;

// Categoria Browser
const Browser = PluraJS.Browser;

// Categoria Cache
const Cache = PluraJS.Cache;

// Categoria Is
const Is = PluraJS.Is;

// Categoria Cookie
const Cookie = PluraJS.Cookie;

// Categoria JSON
const JSONUtil = PluraJS.JSON;

// Categoria Storage
const Storage = PluraJS.Storage;

// Categoria Conversion
const Conversion = PluraJS.Conversion;

// Categoria Math
const MathUtil = PluraJS.Math;

// Categoria String
const StringUtil = PluraJS.String;

// Categoria Colors
const Colors = PluraJS.Colors;

// Categoria Events
const Events = PluraJS.Events;

// Categoria Audio
const Audio = PluraJS.Audio;

// Categoria File
const File = PluraJS.File;

// Categoria Arrays
const Arrays = PluraJS.Arrays;

// Categoria Objects
const Objects = PluraJS.Objects;
```

## PluraJS | Example

```js
import { PluraJS } from "plurajs";

// Categoria UI
const UI = PluraJS.UI;
const newElement = UI.createElement('div', 'my-class', 'my-element-id');
console.log(newElement); // Output: <div class="my-class" id="my-element-id"></div>

// Categoria Variable
const Variable = PluraJS.Variable;
Variable.createGlobalVariable('myVariable', 'myValue');
console.log(Variable.getGlobalVariable('myVariable')); // Output: myValue

// Categoria WBFunctions
const WBFunctions = PluraJS.WBFunctions;
WBFunctions.newLog('Hello World!', 'color: blue', true); // Stampa "Hello World!" in blu e pulisce la console

// Categoria Number
const NumberUtil = PluraJS.Number;
console.log(NumberUtil.randomNumber(1, 100)); // Output: Numero casuale compreso tra 1 e 100

// Categoria Generate
const Generate = PluraJS.Generate;
console.log(Generate.generateGUID()); // Output: Una stringa UUID generata casualmente

// Categoria GET
const GET = PluraJS.GET;
console.log(GET.getWindowSize()); // Output: Oggetto con larghezza e altezza della finestra

// Categoria Window
const WindowUtil = PluraJS.Window;
console.log(WindowUtil.getOperatingSystem()); // Output: Sistema operativo dell'utente

// Categoria Browser
const Browser = PluraJS.Browser;
console.log(Browser.getBrowserName()); // Output: Nome del browser dell'utente

// Categoria Cache
const Cache = PluraJS.Cache;
Cache.toggleBrowserCache(true); // Abilita la cache del browser

// Categoria Is
const Is = PluraJS.Is;
console.log(Is.Number(42)); // Output: true, il valore è un numero

// Categoria Cookie
const Cookie = PluraJS.Cookie;
Cookie.setCookie('myCookie', 'cookieValue', 7); // Imposta un cookie con scadenza di 7 giorni
console.log(Cookie.getCookie('myCookie')); // Output: cookieValue

// Categoria JSON
const JSONUtil = PluraJS.JSON;
const obj = { name: 'John', age: 30 };
const jsonString = JSONUtil.toJsonString(obj);
console.log(jsonString); // Output: '{"name":"John","age":30}'

// Categoria Storage
const Storage = PluraJS.Storage;
Storage.localStorageSetItem('myKey', 'myValue'); // Salva un valore nel localStorage
console.log(Storage.localStorageGetItem('myKey')); // Output: myValue

// Categoria Conversion
const Conversion = PluraJS.Conversion;
console.log(Conversion.convertToBase64('hello')); // Output: aGVsbG8=

// Categoria Math
const MathUtil = PluraJS.Math;
console.log(MathUtil.clamp(5, 0, 10)); // Output: 5

// Categoria String
const StringUtil = PluraJS.String;
console.log(StringUtil.capitalizeFirstLetter('hello')); // Output: Hello

// Categoria Colors
const Colors = PluraJS.Colors;
console.log(Colors.rgbToHex(255, 0, 0)); // Output: #ff0000

// Categoria Events
const Events = PluraJS.Events;
Events.addEvent('myElement', 'click', () => {
    console.log('Element clicked');
});

// Categoria Audio
const Audio = PluraJS.Audio;
Audio.playSound('sound.mp3'); // Riproduce un suono dal file sound.mp3

// Categoria File
const File = PluraJS.File;
File.downloadFile('file.txt', 'myfile.txt'); // Scarica il file file.txt con nome myfile.txt

// Categoria Arrays
const Arrays = PluraJS.Arrays;
console.log(Arrays.reverseArray([1, 2, 3])); // Output: [3, 2, 1]

// Categoria Objects
const Objects = PluraJS.Objects;
console.log(Objects.getKeys({ a: 1, b: 2 })); // Output: ["a", "b"]
```
