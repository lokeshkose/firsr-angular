"use strict";
var testing_1 = require('@angular/core/testing');
var capture_price_component_1 = require('./capture-price.component');
describe('CapturePriceComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [capture_price_component_1.CapturePriceComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(capture_price_component_1.CapturePriceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=capture-price.component.spec.js.map