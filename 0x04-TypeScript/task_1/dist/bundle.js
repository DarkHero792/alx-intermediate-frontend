/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

//example usage 1 :
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
//example usage 2 :
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
// Implementation of the function
var printTeacher = function (firstName, lastName) {
    return firstName.charAt(0) + ". " + lastName;
};
// Example usage 3:
console.log(printTeacher("John", "Doe")); // Output: J. Doe
// Class implementation
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Example usage 4 :
var student1 = new StudentClass("Alice", "Johnson");
console.log(student1.displayName()); // Output: Alice
console.log(student1.workOnHomework()); // Output: Currently working


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN6RUEsbUJBQW1CO0FBQ25CLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQWN0QixtQkFBbUI7QUFDbkIsSUFBTSxTQUFTLEdBQWM7SUFDM0IsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLGVBQWUsRUFBRSxFQUFFO0NBQ3BCLENBQUM7QUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBZXZCLGlDQUFpQztBQUNqQyxJQUFNLFlBQVksR0FBeUIsVUFBQyxTQUFTLEVBQUUsUUFBUTtJQUM3RCxPQUFVLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQUssUUFBVSxDQUFDO0FBQy9DLENBQUMsQ0FBQztBQUVGLG1CQUFtQjtBQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtBQWEzRCx1QkFBdUI7QUFDdkI7SUFDRSxzQkFBb0IsU0FBaUIsRUFBVSxRQUFnQjtRQUEzQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBUTtJQUFHLENBQUM7SUFFbkUscUNBQWMsR0FBZDtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQztBQUVELG9CQUFvQjtBQUNwQixJQUFNLFFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFNLGdCQUFnQjtBQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUcsNEJBQTRCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi50c1wiKTtcbiIsImludGVyZmFjZSB0ZWFjaGVyIHtcclxucmVhZG9ubHkgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbnJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmc7XHJcbmZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XHJcbnllYXJzT2ZFeHBlcmllY2U/OiBudW1iZXI7XHJcbmxvY2F0aW9uOiBzdHJpbmc7XHJcbltrZXk6c3RyaW5nXSA6IGFueTtcclxufVxyXG5cclxuLy9leGFtcGxlIHVzYWdlIDEgOlxyXG5jb25zdCB0ZWFjaGVyMzogdGVhY2hlciA9IHtcclxuICBmaXJzdE5hbWU6ICdKb2huJyxcclxuICBmdWxsVGltZUVtcGxveWVlOiBmYWxzZSxcclxuICBsYXN0TmFtZTogJ0RvZScsXHJcbiAgbG9jYXRpb246ICdMb25kb24nLFxyXG4gIGNvbnRyYWN0OiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnNvbGUubG9nKHRlYWNoZXIzKTtcclxuXHJcbi8vIHNob3VsZCBwcmludFxyXG4vLyBPYmplY3RcclxuLy8gY29udHJhY3Q6IGZhbHNlXHJcbi8vIGZpcnN0TmFtZTogXCJKb2huXCJcclxuLy8gZnVsbFRpbWVFbXBsb3llZTogZmFsc2VcclxuLy8gbGFzdE5hbWU6IFwiRG9lXCJcclxuLy8gbG9jYXRpb246IFwiTG9uZG9uXCJcclxuXHJcbmludGVyZmFjZSBEaXJlY3RvcnMgZXh0ZW5kcyB0ZWFjaGVyIHtcclxuICAgIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xyXG59XHJcblxyXG4vL2V4YW1wbGUgdXNhZ2UgMiA6XHJcbmNvbnN0IGRpcmVjdG9yMTogRGlyZWN0b3JzID0ge1xyXG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxyXG4gIGxhc3ROYW1lOiAnRG9lJyxcclxuICBsb2NhdGlvbjogJ0xvbmRvbicsXHJcbiAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcclxuICBudW1iZXJPZlJlcG9ydHM6IDE3LFxyXG59O1xyXG5jb25zb2xlLmxvZyhkaXJlY3RvcjEpO1xyXG5cclxuLy8gc2hvdWxkIHByaW50XHJcbi8vIE9iamVjdFxyXG4vLyBmaXJzdE5hbWU6IFwiSm9oblwiXHJcbi8vIGZ1bGxUaW1lRW1wbG95ZWU6IHRydWVcclxuLy8gbGFzdE5hbWU6IFwiRG9lXCJcclxuLy8gbG9jYXRpb246IFwiTG9uZG9uXCJcclxuLy8gbnVtYmVyT2ZSZXBvcnRzOiAxN1xyXG5cclxuLy8gSW50ZXJmYWNlIGZvciB0aGUgcHJpbnRUZWFjaGVyIGZ1bmN0aW9uXHJcbmludGVyZmFjZSBwcmludFRlYWNoZXJGdW5jdGlvbiB7XHJcbiAgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgZnVuY3Rpb25cclxuY29uc3QgcHJpbnRUZWFjaGVyOiBwcmludFRlYWNoZXJGdW5jdGlvbiA9IChmaXJzdE5hbWUsIGxhc3ROYW1lKSA9PiB7XHJcbiAgcmV0dXJuIGAke2ZpcnN0TmFtZS5jaGFyQXQoMCl9LiAke2xhc3ROYW1lfWA7XHJcbn07XHJcblxyXG4vLyBFeGFtcGxlIHVzYWdlIDM6XHJcbmNvbnNvbGUubG9nKHByaW50VGVhY2hlcihcIkpvaG5cIiwgXCJEb2VcIikpOyAvLyBPdXRwdXQ6IEouIERvZVxyXG5cclxuLy8gSW50ZXJmYWNlIGRlc2NyaWJpbmcgdGhlIGNsYXNzIGluc3RhbmNlIG1ldGhvZHNcclxuaW50ZXJmYWNlIFN0dWRlbnRJbnRlcmZhY2Uge1xyXG4gIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZztcclxuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIEludGVyZmFjZSBkZXNjcmliaW5nIHRoZSBjb25zdHJ1Y3RvciBzaWduYXR1cmVcclxuaW50ZXJmYWNlIFN0dWRlbnRDb25zdHJ1Y3RvciB7XHJcbiAgbmV3IChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IFN0dWRlbnRJbnRlcmZhY2U7XHJcbn1cclxuXHJcbi8vIENsYXNzIGltcGxlbWVudGF0aW9uXHJcbmNsYXNzIFN0dWRlbnRDbGFzcyBpbXBsZW1lbnRzIFN0dWRlbnRJbnRlcmZhY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyc3ROYW1lOiBzdHJpbmcsIHByaXZhdGUgbGFzdE5hbWU6IHN0cmluZykge31cclxuXHJcbiAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcIkN1cnJlbnRseSB3b3JraW5nXCI7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZmlyc3ROYW1lO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRXhhbXBsZSB1c2FnZSA0IDpcclxuY29uc3Qgc3R1ZGVudDEgPSBuZXcgU3R1ZGVudENsYXNzKFwiQWxpY2VcIiwgXCJKb2huc29uXCIpO1xyXG5jb25zb2xlLmxvZyhzdHVkZW50MS5kaXNwbGF5TmFtZSgpKTsgICAgICAvLyBPdXRwdXQ6IEFsaWNlXHJcbmNvbnNvbGUubG9nKHN0dWRlbnQxLndvcmtPbkhvbWV3b3JrKCkpOyAgIC8vIE91dHB1dDogQ3VycmVudGx5IHdvcmtpbmdcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==