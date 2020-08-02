"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ParasboxComponent = (function () {
    function ParasboxComponent() {
    }
    ParasboxComponent.prototype.ngOnInit = function () {
    };
    ParasboxComponent.prototype.show = function () {
        document.getElementById("hide").style.display = "block";
        document.getElementById("show").style.display = "none";
    };
    ParasboxComponent.prototype.hide = function () {
        document.getElementById("hide").style.display = "none";
        document.getElementById("show").style.display = "block";
    };
    ParasboxComponent = __decorate([
        core_1.Component({
            selector: 'app-parasbox',
            templateUrl: './parasbox.component.html',
            styleUrls: ['./parasbox.component.css']
        })
    ], ParasboxComponent);
    return ParasboxComponent;
}());
exports.ParasboxComponent = ParasboxComponent;
//# sourceMappingURL=parasbox.component.js.map