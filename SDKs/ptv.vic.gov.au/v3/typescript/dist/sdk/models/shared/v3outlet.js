var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var V3Outlet = /** @class */ (function (_super) {
    __extends(V3Outlet, _super);
    function V3Outlet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlet_business" }),
        __metadata("design:type", String)
    ], V3Outlet.prototype, "outletBusiness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlet_business_hour_fri" }),
        __metadata("design:type", String)
    ], V3Outlet.prototype, "outletBusinessHourFri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlet_business_hour_mon" }),
        __metadata("design:type", String)
    ], V3Outlet.prototype, "outletBusinessHourMon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlet_business_hour_sat" }),
        __metadata("design:type", String)
    ], V3Outlet.prototype, "outletBusinessHourSat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlet_business_hour_sun" }),
        __metadata("design:type", String)
    ], V3Outlet.prototype, "outletBusinessHourSun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlet_business_hour_thur" }),
        __metadata("design:type", String)
    ], V3Outlet.prototype, "outletBusinessHourThur", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlet_business_hour_tue" }),
        __metadata("design:type", String)
    ], V3Outlet.prototype, "outletBusinessHourTue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlet_business_hour_wed" }),
        __metadata("design:type", String)
    ], V3Outlet.prototype, "outletBusinessHourWed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlet_latitude" }),
        __metadata("design:type", Number)
    ], V3Outlet.prototype, "outletLatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlet_longitude" }),
        __metadata("design:type", Number)
    ], V3Outlet.prototype, "outletLongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlet_name" }),
        __metadata("design:type", String)
    ], V3Outlet.prototype, "outletName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlet_notes" }),
        __metadata("design:type", String)
    ], V3Outlet.prototype, "outletNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlet_postcode" }),
        __metadata("design:type", Number)
    ], V3Outlet.prototype, "outletPostcode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlet_slid_spid" }),
        __metadata("design:type", String)
    ], V3Outlet.prototype, "outletSlidSpid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlet_suburb" }),
        __metadata("design:type", String)
    ], V3Outlet.prototype, "outletSuburb", void 0);
    return V3Outlet;
}(SpeakeasyBase));
export { V3Outlet };
