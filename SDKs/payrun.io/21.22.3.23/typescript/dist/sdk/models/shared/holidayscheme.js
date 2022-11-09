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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
// HolidaySchemeHolidaySchemeAccrualPayCodes
/**
 * The holiday schemes' accrual pay codes
**/
var HolidaySchemeHolidaySchemeAccrualPayCodes = /** @class */ (function (_super) {
    __extends(HolidaySchemeHolidaySchemeAccrualPayCodes, _super);
    function HolidaySchemeHolidaySchemeAccrualPayCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=PayCode" }),
        __metadata("design:type", Array)
    ], HolidaySchemeHolidaySchemeAccrualPayCodes.prototype, "payCode", void 0);
    return HolidaySchemeHolidaySchemeAccrualPayCodes;
}(SpeakeasyBase));
export { HolidaySchemeHolidaySchemeAccrualPayCodes };
var HolidaySchemeHolidayScheme = /** @class */ (function (_super) {
    __extends(HolidaySchemeHolidayScheme, _super);
    function HolidaySchemeHolidayScheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AccrualPayCodes" }),
        __metadata("design:type", HolidaySchemeHolidaySchemeAccrualPayCodes)
    ], HolidaySchemeHolidayScheme.prototype, "accrualPayCodes", void 0);
    __decorate([
        Metadata({ data: "json, name=AllowNegativeBalance" }),
        __metadata("design:type", Boolean)
    ], HolidaySchemeHolidayScheme.prototype, "allowNegativeBalance", void 0);
    __decorate([
        Metadata({ data: "json, name=AnnualEntitlementWeeks" }),
        __metadata("design:type", Number)
    ], HolidaySchemeHolidayScheme.prototype, "annualEntitlementWeeks", void 0);
    __decorate([
        Metadata({ data: "json, name=BankHolidayInclusive" }),
        __metadata("design:type", Boolean)
    ], HolidaySchemeHolidayScheme.prototype, "bankHolidayInclusive", void 0);
    __decorate([
        Metadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], HolidaySchemeHolidayScheme.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=EffectiveDate" }),
        __metadata("design:type", Date)
    ], HolidaySchemeHolidayScheme.prototype, "effectiveDate", void 0);
    __decorate([
        Metadata({ data: "json, name=MaxCarryOverDays" }),
        __metadata("design:type", Number)
    ], HolidaySchemeHolidayScheme.prototype, "maxCarryOverDays", void 0);
    __decorate([
        Metadata({ data: "json, name=Revision" }),
        __metadata("design:type", Number)
    ], HolidaySchemeHolidayScheme.prototype, "revision", void 0);
    __decorate([
        Metadata({ data: "json, name=SchemeCeasedDate" }),
        __metadata("design:type", Date)
    ], HolidaySchemeHolidayScheme.prototype, "schemeCeasedDate", void 0);
    __decorate([
        Metadata({ data: "json, name=SchemeKey" }),
        __metadata("design:type", String)
    ], HolidaySchemeHolidayScheme.prototype, "schemeKey", void 0);
    __decorate([
        Metadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], HolidaySchemeHolidayScheme.prototype, "schemeName", void 0);
    __decorate([
        Metadata({ data: "json, name=YearStartDay" }),
        __metadata("design:type", Number)
    ], HolidaySchemeHolidayScheme.prototype, "yearStartDay", void 0);
    __decorate([
        Metadata({ data: "json, name=YearStartMonth" }),
        __metadata("design:type", Number)
    ], HolidaySchemeHolidayScheme.prototype, "yearStartMonth", void 0);
    return HolidaySchemeHolidayScheme;
}(SpeakeasyBase));
export { HolidaySchemeHolidayScheme };
var HolidayScheme = /** @class */ (function (_super) {
    __extends(HolidayScheme, _super);
    function HolidayScheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=HolidayScheme" }),
        __metadata("design:type", HolidaySchemeHolidayScheme)
    ], HolidayScheme.prototype, "holidayScheme", void 0);
    return HolidayScheme;
}(SpeakeasyBase));
export { HolidayScheme };
