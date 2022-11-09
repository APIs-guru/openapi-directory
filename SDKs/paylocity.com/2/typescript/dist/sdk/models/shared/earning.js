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
// Earning
/**
 * The employee earning model
**/
var Earning = /** @class */ (function (_super) {
    __extends(Earning, _super);
    function Earning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=agency" }),
        __metadata("design:type", String)
    ], Earning.prototype, "agency", void 0);
    __decorate([
        Metadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], Earning.prototype, "amount", void 0);
    __decorate([
        Metadata({ data: "json, name=annualMaximum" }),
        __metadata("design:type", Number)
    ], Earning.prototype, "annualMaximum", void 0);
    __decorate([
        Metadata({ data: "json, name=calculationCode" }),
        __metadata("design:type", String)
    ], Earning.prototype, "calculationCode", void 0);
    __decorate([
        Metadata({ data: "json, name=costCenter1" }),
        __metadata("design:type", String)
    ], Earning.prototype, "costCenter1", void 0);
    __decorate([
        Metadata({ data: "json, name=costCenter2" }),
        __metadata("design:type", String)
    ], Earning.prototype, "costCenter2", void 0);
    __decorate([
        Metadata({ data: "json, name=costCenter3" }),
        __metadata("design:type", String)
    ], Earning.prototype, "costCenter3", void 0);
    __decorate([
        Metadata({ data: "json, name=earningCode" }),
        __metadata("design:type", String)
    ], Earning.prototype, "earningCode", void 0);
    __decorate([
        Metadata({ data: "json, name=effectiveDate" }),
        __metadata("design:type", String)
    ], Earning.prototype, "effectiveDate", void 0);
    __decorate([
        Metadata({ data: "json, name=endDate" }),
        __metadata("design:type", String)
    ], Earning.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], Earning.prototype, "frequency", void 0);
    __decorate([
        Metadata({ data: "json, name=goal" }),
        __metadata("design:type", Number)
    ], Earning.prototype, "goal", void 0);
    __decorate([
        Metadata({ data: "json, name=hoursOrUnits" }),
        __metadata("design:type", Number)
    ], Earning.prototype, "hoursOrUnits", void 0);
    __decorate([
        Metadata({ data: "json, name=isSelfInsured" }),
        __metadata("design:type", Boolean)
    ], Earning.prototype, "isSelfInsured", void 0);
    __decorate([
        Metadata({ data: "json, name=jobCode" }),
        __metadata("design:type", String)
    ], Earning.prototype, "jobCode", void 0);
    __decorate([
        Metadata({ data: "json, name=miscellaneousInfo" }),
        __metadata("design:type", String)
    ], Earning.prototype, "miscellaneousInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=paidTowardsGoal" }),
        __metadata("design:type", Number)
    ], Earning.prototype, "paidTowardsGoal", void 0);
    __decorate([
        Metadata({ data: "json, name=payPeriodMaximum" }),
        __metadata("design:type", Number)
    ], Earning.prototype, "payPeriodMaximum", void 0);
    __decorate([
        Metadata({ data: "json, name=payPeriodMinimum" }),
        __metadata("design:type", Number)
    ], Earning.prototype, "payPeriodMinimum", void 0);
    __decorate([
        Metadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], Earning.prototype, "rate", void 0);
    __decorate([
        Metadata({ data: "json, name=rateCode" }),
        __metadata("design:type", String)
    ], Earning.prototype, "rateCode", void 0);
    __decorate([
        Metadata({ data: "json, name=startDate" }),
        __metadata("design:type", String)
    ], Earning.prototype, "startDate", void 0);
    return Earning;
}(SpeakeasyBase));
export { Earning };
