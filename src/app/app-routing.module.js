"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var editsm_component_1 = require('./nav-content/sales-executive/editsm/editsm.component');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var deafult_component_1 = require("./layout/deafult/deafult.component");
var dashboard_component_1 = require("./nav-content/dashboard/dashboard.component");
var orders_component_1 = require("./nav-content/orders/orders.component");
var customers_component_1 = require("./nav-content/customers/customers.component");
var products_component_1 = require("./nav-content/products/products.component");
var capture_price_component_1 = require("./nav-content/capture-price/capture-price.component");
var sales_executive_component_1 = require("./nav-content/sales-executive/sales-executive.component");
var edituser_component_1 = require("./nav-content/customers/edituser/edituser.component");
var userdashboard_component_1 = require("./nav-content/customers/userdashboard/userdashboard.component");
var parentcategories_component_1 = require("./nav-content/products/parentcategories/parentcategories.component");
var cornchips_component_1 = require("./nav-content/products/parentcategories/cornchips/cornchips.component");
var parasbox_component_1 = require("./nav-content/products/parentcategories/cornchips/parasbox/parasbox.component");
var product_component_1 = require("./nav-content/products/parentcategories/cornchips/parasbox/product/product.component");
var edituser1_component_1 = require("./nav-content/customers/edituser1/edituser1.component");
var userdashboard1_component_1 = require("./nav-content/customers/userdashboard1/userdashboard1.component");
var washimorder_component_1 = require("./nav-content/orders/washimorder/washimorder.component");
var userdashboardsm_component_1 = require('./nav-content/sales-executive/userdashboardsm/userdashboardsm.component');
var sweet_component_1 = require("./nav-content/products/sweet/sweet.component");
var puffs_component_1 = require("./nav-content/products/puffs/puffs.component");
var potato_component_1 = require("./nav-content/products/potato/potato.component");
var pellets_component_1 = require("./nav-content/products/pellets/pellets.component");
var naks_component_1 = require("./nav-content/products/naks/naks.component");
var hiphop_component_1 = require("./nav-content/products/sweet/hiphop/hiphop.component");
var chocodipps_component_1 = require("./nav-content/products/sweet/chocodipps/chocodipps.component");
var routes = [{
        path: '',
        component: deafult_component_1.DeafultComponent,
        children: [{
                path: '',
                component: dashboard_component_1.DashboardComponent
            }, {
                path: 'orders', children: [
                    { path: '', component: orders_component_1.OrdersComponent },
                    { path: 'washimorder', component: washimorder_component_1.WashimorderComponent }
                ] },
            { path: 'customers', children: [
                    { path: '', component: customers_component_1.CustomersComponent },
                    { path: 'edituser', component: edituser_component_1.EdituserComponent },
                    { path: 'edituser1', component: edituser1_component_1.Edituser1Component },
                    { path: 'userdashboard', component: userdashboard_component_1.UserdashboardComponent },
                    { path: 'userdashboard1', component: userdashboard1_component_1.Userdashboard1Component }
                ] },
            { path: 'products', children: [
                    { path: '', component: products_component_1.ProductsComponent },
                    { path: 'sweet', children: [
                            { path: '', component: sweet_component_1.SweetComponent },
                            { path: 'hiphop', component: hiphop_component_1.HiphopComponent },
                            { path: 'chocodipps', component: chocodipps_component_1.ChocodippsComponent }
                        ] },
                    { path: 'puffs', component: puffs_component_1.PuffsComponent },
                    { path: 'potato', component: potato_component_1.PotatoComponent },
                    { path: 'pellets', component: pellets_component_1.PelletsComponent },
                    { path: 'naks', component: naks_component_1.NaksComponent },
                ] },
            { path: 'products/parentcategories', children: [
                    { path: '', component: parentcategories_component_1.ParentcategoriesComponent },
                    { path: 'cornchips', component: cornchips_component_1.CornchipsComponent },
                ] },
            { path: 'products/parentcategories/cornchips', children: [
                    { path: '', component: cornchips_component_1.CornchipsComponent },
                    { path: 'parasbox', component: parasbox_component_1.ParasboxComponent },
                ] },
            { path: 'products/parentcategories/cornchips/parasbox', children: [
                    { path: '', component: parasbox_component_1.ParasboxComponent },
                    { path: 'product', component: product_component_1.ProductComponent },
                ] },
            {
                path: 'sales-executive', children: [
                    { path: '', component: sales_executive_component_1.SalesExecutiveComponent },
                    { path: 'editsm', component: editsm_component_1.EditsmComponent },
                    { path: 'userdashboard', component: userdashboardsm_component_1.UserdashboardsmComponent }
                ] },
            {
                path: 'capture-price',
                component: capture_price_component_1.CapturePriceComponent
            }]
    }];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map