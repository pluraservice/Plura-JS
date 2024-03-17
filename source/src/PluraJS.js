let globalVariable = {};

export const PluraJS = {
    "UI": {
        createElement(elementTag, setClassName, id) {
            const newElement = document.createElement(elementTag);
            newElement.className = setClassName;
            newElement.id = id;
            return newElement;
        },

        deleteElement(elementID) {
            document.getElementById(elementID).remove();
        },

        appendElementToParent(childElement, parentElement) {
            parentElement.appendChild(childElement);
        },

        removeAllChildElements(parentElement) {
            while (parentElement.firstChild) {
                parentElement.removeChild(parentElement.firstChild);
            }
        },

        elementExists(elementID) {
            return document.getElementById(elementID) !== null;
        },

        isElementVisible(elementID) {
            const element = document.getElementById(elementID);
            return element !== null && element.offsetParent !== null;
        },

        copyToClipboard(elementID) {
            const element = document.getElementById(elementID);
            if (element) {
                const range = document.createRange();
                range.selectNode(element);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                document.execCommand('copy');
                window.getSelection().removeAllRanges();
            }
        },

        addClickEventToElement(elementID, callback) {
            document.getElementById(elementID).addEventListener('click', callback);
        },

        removeClickEventFromElement(elementID, callback) {
            document.getElementById(elementID).removeEventListener('click', callback);
        },

        addChangeEventToElement(elementID, callback) {
            document.getElementById(elementID).addEventListener('change', callback);
        },

        removeChangeEventFromElement(elementID, callback) {
            document.getElementById(elementID).removeEventListener('change', callback);
        },

        addFocusEventToElement(elementID, callback) {
            document.getElementById(elementID).addEventListener('focus', callback);
        },

        removeFocusEventFromElement(elementID, callback) {
            document.getElementById(elementID).removeEventListener('focus', callback);
        },

        addBlurEventToElement(elementID, callback) {
            document.getElementById(elementID).addEventListener('blur', callback);
        },

        removeBlurEventFromElement(elementID, callback) {
            document.getElementById(elementID).removeEventListener('blur', callback);
        },

        addKeyDownEventToElement(elementID, callback) {
            document.getElementById(elementID).addEventListener('keydown', callback);
        },

        removeKeyDownEventFromElement(elementID, callback) {
            document.getElementById(elementID).removeEventListener('keydown', callback);
        },

        addKeyUpEventToElement(elementID, callback) {
            document.getElementById(elementID).addEventListener('keyup', callback);
        },

        removeKeyUpEventFromElement(elementID, callback) {
            document.getElementById(elementID).removeEventListener('keyup', callback);
        },

        addSubmitEventToElement(elementID, callback) {
            document.getElementById(elementID).addEventListener('submit', callback);
        },

        removeSubmitEventFromElement(elementID, callback) {
            document.getElementById(elementID).removeEventListener('submit', callback);
        }
    },
    "Variable": {
        createGlobalVariable(variableName, variableValue) {
            globalVariable = {
                [variableName]: variableValue
            }
        },

        setGlobalVariable(variableName, variableValue) {
            globalVariable = {
                [variableName]: variableValue
            }
        },

        getGlobalVariable(variableName) {
            return globalVariable[variableName];
        }
    },
    "WBFunctions": {
        newLog(string, styles, clearConsole) {
            if (clearConsole) {
                console.clear();
            }
            console.log("%c " + string, styles);
        },

        setDocumentTitle(title) {
            document.title = title;
        },

        onContextMenu(disable) {
            document.oncontextmenu = () => { return !disable; }
        },

        openPage(url, inThisTable) {
            if (inThisTable) {
                window.open(url, "_self");
            } else {
                window.open(url);
            }
        },

        closePage() {
            window.close();
        },

        enableTextSelection(enable) {
            document.body.style.userSelect = enable ? 'auto' : 'none';
        },

        async fetch(url, options = {}) {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }
    },
    "Number": {
        randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },
    "Generate": {
        generateGUID() {
            const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
        }
    },
    "GET": {
        getWindowSize() {
            return {
                width: window.innerWidth,
                height: window.innerHeight
            };
        },

        getWindowPosition() {
            return {
                x: window.screenX || window.screenLeft,
                y: window.screenY || window.screenTop
            };
        },
    },
    "Window": {
        getOperatingSystem() {
            const userAgent = navigator.userAgent;
            if (userAgent.includes('Windows NT')) {
                return 'Windows';
            } else if (userAgent.includes('Mac OS')) {
                return 'Mac OS';
            } else if (userAgent.includes('Linux')) {
                return 'Linux';
            } else {
                return 'Unknown';
            }
        },

        getCurrentURL() {
            return window.location.href;
        },

        getCurrentProtocol() {
            return window.location.protocol;
        },

        getCurrentHost() {
            return window.location.host;
        },

        getCurrentPort() {
            return window.location.port;
        },

        getCurrentPath() {
            return window.location.pathname;
        }
    },
    "Browser": {
        getBrowserName() {
            const userAgent = navigator.userAgent;
            if (userAgent.includes('Firefox')) {
                return 'Firefox';
            } else if (userAgent.includes('Chrome')) {
                return 'Chrome';
            } else if (userAgent.includes('Safari')) {
                return 'Safari';
            } else if (userAgent.includes('Edge')) {
                return 'Edge';
            } else if (userAgent.includes('Opera')) {
                return 'Opera';
            } else {
                return 'Unknown';
            }
        }
    },
    "Cache": {
        toggleBrowserCache(enable) {
            if (enable) {
                document.cookie = 'no-cache=false; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            } else {
                document.cookie = 'no-cache=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            }
        }
    },
    "Is": {
        Number(value) {
            return typeof value === 'number' && !isNaN(value);
        },
    
        String(value) {
            return typeof value === 'string';
        },
    
        Boolean(value) {
            return typeof value === 'boolean';
        },
    
        Object(value) {
            return typeof value === 'object' && value !== null;
        },
    
        Function(value) {
            return typeof value === 'function';
        },
    
        Undefined(value) {
            return typeof value === 'undefined';
        },
    
        Null(value) {
            return value === null;
        },
    
        Empty(value) {
            return this.Undefined(value) || this.Null(value) || (this.String(value) && value === '') || (this.Array(value) && value.length === 0) || (this.Object(value) && Object.keys(value).length === 0);
        },
    
        Array(value) {
            return Array.isArray(value);
        },
    
        Date(value) {
            return value instanceof Date;
        },
    
        Promise(value) {
            return this.Object(value) && this.Function(value.then) && this.Function(value.catch);
        },
    
        ValidURL(value) {
            const pattern = new RegExp('^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$', 'i');
            return pattern.test(value);
        },
    
        ValidEmail(value) {
            const pattern = new RegExp('^[^\s@]+@[^\s@]+\.[^\s@]+$', 'i');
            return pattern.test(value);
        },
    
        ValidPhoneNumber(value) {
            const pattern = new RegExp('^[0-9]{10}$');
            return pattern.test(value);
        },
    
        ValidTaxCode(value) {
            const pattern = new RegExp('^[A-Za-z]{6}[0-9]{2}[A-Za-z][0-9]{2}[A-Za-z][0-9]{3}[A-Za-z]$', 'i');
            return pattern.test(value);
        },
    
        ValidIBAN(value) {
            const pattern = new RegExp('^[A-Za-z]{2}[0-9]{2}[A-Za-z0-9]{4}[0-9]{7}([A-Za-z0-9]?){0,16}$');
            return pattern.test(value);
        },    
    },
    "Cookie": {
        setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        },

        getCookie(name) {
            const decodedCookie = decodeURIComponent(document.cookie);
            const cookies = decodedCookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.startsWith(name + "=")) {
                    return cookie.substring(name.length + 1);
                }
            }
            return null;
        },

        deleteCookie(name) {
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        }
    },
    "JSON": {
        toJsonString(obj) {
            return JSON.stringify(obj);
        },

        fromJsonString(str) {
            return JSON.parse(str);
        }
    },
    "Storage": {
        localStorageSetItem(key, value) {
            localStorage.setItem(key, value);
        },

        localStorageGetItem(key) {
            return localStorage.getItem(key);
        },

        localStorageRemoveItem(key) {
            localStorage.removeItem(key);
        },

        sessionStorageSetItem(key, value) {
            sessionStorage.setItem(key, value);
        },

        sessionStorageGetItem(key) {
            return sessionStorage.getItem(key);
        },

        sessionStorageRemoveItem(key) {
            sessionStorage.removeItem(key);
        }
    },
    "Conversion": {
        convertToBase64(data) {
            return btoa(data);
        },

        convertFromBase64(base64Data) {
            return atob(base64Data);
        }
    },
    "Math": {
        clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
        },

        isPowerOfTwo(value) {
            return (value & (value - 1)) === 0;
        }
    },
    "String": {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },

        reverseString(string) {
            return string.split('').reverse().join('');
        }
    },
    "Colors": {
        rgbToHex(r, g, b) {
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        },

        hexToRgb(hex) {
            const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        }
    },
    "Events": {
        addEvent(elementID, eventName, callback) {
            document.getElementById(elementID).addEventListener(eventName, callback);
        },

        removeEvent(elementID, eventName, callback) {
            document.getElementById(elementID).removeEventListener(eventName, callback);
        },

        triggerEvent(elementID, eventName) {
            const event = new Event(eventName);
            document.getElementById(elementID).dispatchEvent(event);
        }
    },
    "Audio": {
        playSound(soundUrl) {
            const audio = new Audio(soundUrl);
            audio.play();
        },

        pauseSound(soundUrl) {
            const audio = new Audio(soundUrl);
            audio.pause();
        },

        stopSound(soundUrl) {
            const audio = new Audio(soundUrl);
            audio.pause();
            audio.currentTime = 0;
        }
    },
    "File": {
        downloadFile(url, filename) {
            fetch(url)
                .then(response => response.blob())
                .then(blob => {
                    const link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = filename;
                    link.click();
                });
        },

        readTextFile(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = () => reject(reader.error);
                reader.readAsText(file);
            });
        },

        readBinaryFile(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = () => reject(reader.error);
                reader.readAsArrayBuffer(file);
            });
        }
    },
    "Arrays": {
        stringToArray(string) {
            return string.split('');
        },

        arrayToString(array) {
            return array.join('');
        },

        reverseArray(array) {
            return array.reverse();
        },

        removeDuplicates(array) {
            return [...new Set(array)];
        },

        sortArrayAscending(array) {
            return array.sort((a, b) => a - b);
        },

        sortArrayDescending(array) {
            return array.sort((a, b) => b - a);
        },

        concatenateArrays(array1, array2) {
            return [...array1, ...array2];
        }
    },
    "Objects": {
        getKeys(obj) {
            return Object.keys(obj);
        },

        getValues(obj) {
            return Object.values(obj);
        },

        hasKey(obj, key) {
            return obj.hasOwnProperty(key);
        },

        hasValue(obj, value) {
            return Object.values(obj).includes(value);
        },

        mergeObjects(obj1, obj2) {
            return { ...obj1, ...obj2 };
        }
    }
}