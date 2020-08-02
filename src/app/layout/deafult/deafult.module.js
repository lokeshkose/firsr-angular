"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var userdashboard_component_1 = require('./../../nav-content/customers/userdashboard/userdashboard.component');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var deafult_component_1 = require("./deafult.component");
var dashboard_component_1 = require("../../nav-content/dashboard/dashboard.component");
var orders_component_1 = require("../../nav-content/orders/orders.component");
var customers_component_1 = require("../../nav-content/customers/customers.component");
var sales_executive_component_1 = require("../../nav-content/sales-executive/sales-executive.component");
var capture_price_component_1 = require("../../nav-content/capture-price/capture-price.component");
var router_1 = require("@angular/router");
var shares_module_1 = require("../../shares/shares/shares.module");
var sidenav_1 = require("@angular/material/sidenav");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var menu_1 = require("@angular/material/menu");
var radio_1 = require("@angular/material/radio");
var toolbar_1 = require("@angular/material/toolbar");
var flex_layout_1 = require("@angular/flex-layout");
var list_1 = require("@angular/material/list");
var table_1 = require("@angular/material/table");
var select_1 = require("@angular/material/select");
var input_1 = require("@angular/material/input");
var edituser_component_1 = require("../../nav-content/customers/edituser/edituser.component");
var parentcategories_component_1 = require("../../nav-content/products/parentcategories/parentcategories.component");
var products_component_1 = require("../../nav-content/products/products.component");
var cornchips_component_1 = require("../../nav-content/products/parentcategories/cornchips/cornchips.component");
var parasbox_component_1 = require("../../nav-content/products/parentcategories/cornchips/parasbox/parasbox.component");
var product_component_1 = require("../../nav-content/products/parentcategories/cornchips/parasbox/product/product.component");
var edituser1_component_1 = require("../../nav-content/customers/edituser1/edituser1.component");
var userdashboard1_component_1 = require("../../nav-content/customers/userdashboard1/userdashboard1.component");
var washimorder_component_1 = require("../../nav-content/orders/washimorder/washimorder.component");
var sweet_component_1 = require("../../nav-content/products/sweet/sweet.component");
var puffs_component_1 = require("../../nav-content/products/puffs/puffs.component");
var potato_component_1 = require("../../nav-content/products/potato/potato.component");
var pellets_component_1 = require("../../nav-content/products/pellets/pellets.component");
var naks_component_1 = require("../../nav-content/products/naks/naks.component");
var hiphop_component_1 = require("../../nav-content/products/sweet/hiphop/hiphop.component");
var editsm_component_1 = require("../../nav-content/sales-executive/editsm/editsm.component");
var form_field_1 = require("@angular/material/form-field");
var userdashboardsm_component_1 = require("../../nav-content/sales-executive/userdashboardsm/userdashboardsm.component");
var DeafultModule = (function () {
    function DeafultModule() {
    }
    DeafultModule = __decorate([
        core_1.NgModule({
            declarations: [
                deafult_component_1.DeafultComponent,
                dashboard_component_1.DashboardComponent,
                orders_component_1.OrdersComponent,
                customers_component_1.CustomersComponent,
                edituser_component_1.EdituserComponent,
                edituser1_component_1.Edituser1Component,
                userdashboard_component_1.UserdashboardComponent,
                products_component_1.ProductsComponent,
                cornchips_component_1.CornchipsComponent,
                parasbox_component_1.ParasboxComponent,
                product_component_1.ProductComponent,
                sales_executive_component_1.SalesExecutiveComponent,
                capture_price_component_1.CapturePriceComponent,
                parentcategories_component_1.ParentcategoriesComponent,
                userdashboard1_component_1.Userdashboard1Component,
                washimorder_component_1.WashimorderComponent,
                editsm_component_1.EditsmComponent,
                userdashboard1_component_1.Userdashboard1Component,
                sweet_component_1.SweetComponent,
                puffs_component_1.PuffsComponent,
                potato_component_1.PotatoComponent,
                pellets_component_1.PelletsComponent,
                naks_component_1.NaksComponent,
                cornchips_component_1.CornchipsComponent,
                hiphop_component_1.HiphopComponent,
                userdashboardsm_component_1.UserdashboardsmComponent
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                shares_module_1.SharesModule,
                sidenav_1.MatSidenavModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                menu_1.MatMenuModule,
                radio_1.MatRadioModule,
                toolbar_1.MatToolbarModule,
                flex_layout_1.FlexLayoutModule,
                list_1.MatListModule,
                table_1.MatTableModule,
                select_1.MatSelectModule,
                input_1.MatInputModule,
                flex_layout_1.FlexLayoutModule,
                form_field_1.MatFormFieldModule,
                select_1.MatSelectModule
            ]
        })
    ], DeafultModule);
    return DeafultModule;
}());
exports.DeafultModule = DeafultModule;
//# sourceMappingURL=deafult.module.js.map