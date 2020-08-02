"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var header_component_1 = require("../header/header.component");
var sidenav_component_1 = require("../sidenav/sidenav.component");
var menubar_component_1 = require("../menubar/menubar.component");
var list_1 = require("@angular/material/list");
var icon_1 = require("@angular/material/icon");
var toolbar_1 = require("@angular/material/toolbar");
var button_1 = require("@angular/material/button");
var sidenav_1 = require("@angular/material/sidenav");
var menu_1 = require("@angular/material/menu");
var flex_layout_1 = require("@angular/flex-layout");
var router_1 = require("@angular/router");
var SharesModule = (function () {
    function SharesModule() {
    }
    SharesModule = __decorate([
        core_1.NgModule({
            declarations: [
                header_component_1.HeaderComponent,
                sidenav_component_1.SidenavComponent,
                menubar_component_1.MenubarComponent
            ],
            imports: [
                common_1.CommonModule,
                list_1.MatListModule,
                icon_1.MatIconModule,
                toolbar_1.MatToolbarModule,
                button_1.MatButtonModule,
                sidenav_1.MatSidenavModule,
                menu_1.MatMenuModule,
                flex_layout_1.FlexLayoutModule,
                router_1.RouterModule
            ],
            exports: [
                header_component_1.HeaderComponent,
                sidenav_component_1.SidenavComponent,
                menubar_component_1.MenubarComponent,
            ]
        })
    ], SharesModule);
    return SharesModule;
}());
exports.SharesModule = SharesModule;
//# sourceMappingURL=shares.module.js.map