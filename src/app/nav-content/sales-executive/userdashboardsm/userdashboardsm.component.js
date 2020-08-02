"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UserdashboardsmComponent = (function () {
    function UserdashboardsmComponent() {
    }
    UserdashboardsmComponent.prototype.ngOnInit = function () {
    };
    UserdashboardsmComponent.prototype.show = function (event) {
        document.getElementById("show").style.display = "block";
        document.getElementById("hide").style.display = "none";
    };
    UserdashboardsmComponent.prototype.hide = function (event) {
        document.getElementById("show").style.display = "none";
        document.getElementById("hide").style.display = "block";
    };
    UserdashboardsmComponent = __decorate([
        core_1.Component({
            selector: 'app-userdashboardsm',
            templateUrl: './userdashboardsm.component.html',
            styleUrls: ['./userdashboardsm.component.css']
        })
    ], UserdashboardsmComponent);
    return UserdashboardsmComponent;
}());
exports.UserdashboardsmComponent = UserdashboardsmComponent;
//# sourceMappingURL=userdashboardsm.component.js.map