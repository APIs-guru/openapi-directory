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
// NonPrimaryStateTax
/**
 * The Non-Primary State Tax model
**/
var NonPrimaryStateTax = /** @class */ (function (_super) {
    __extends(NonPrimaryStateTax, _super);
    function NonPrimaryStateTax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], NonPrimaryStateTax.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deductionsAmount" }),
        __metadata("design:type", Number)
    ], NonPrimaryStateTax.prototype, "deductionsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dependentsAmount" }),
        __metadata("design:type", Number)
    ], NonPrimaryStateTax.prototype, "dependentsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptions" }),
        __metadata("design:type", Number)
    ], NonPrimaryStateTax.prototype, "exemptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptions2" }),
        __metadata("design:type", Number)
    ], NonPrimaryStateTax.prototype, "exemptions2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filingStatus" }),
        __metadata("design:type", String)
    ], NonPrimaryStateTax.prototype, "filingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=higherRate" }),
        __metadata("design:type", Boolean)
    ], NonPrimaryStateTax.prototype, "higherRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherIncomeAmount" }),
        __metadata("design:type", Number)
    ], NonPrimaryStateTax.prototype, "otherIncomeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentage" }),
        __metadata("design:type", Number)
    ], NonPrimaryStateTax.prototype, "percentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reciprocityCode" }),
        __metadata("design:type", String)
    ], NonPrimaryStateTax.prototype, "reciprocityCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialCheckCalc" }),
        __metadata("design:type", String)
    ], NonPrimaryStateTax.prototype, "specialCheckCalc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxCalculationCode" }),
        __metadata("design:type", String)
    ], NonPrimaryStateTax.prototype, "taxCalculationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxCode" }),
        __metadata("design:type", String)
    ], NonPrimaryStateTax.prototype, "taxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=w4FormYear" }),
        __metadata("design:type", Number)
    ], NonPrimaryStateTax.prototype, "w4FormYear", void 0);
    return NonPrimaryStateTax;
}(SpeakeasyBase));
export { NonPrimaryStateTax };
