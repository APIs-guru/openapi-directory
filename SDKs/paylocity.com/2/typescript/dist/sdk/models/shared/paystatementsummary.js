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
// PayStatementSummary
/**
 * The pay statement summary model
**/
var PayStatementSummary = /** @class */ (function (_super) {
    __extends(PayStatementSummary, _super);
    function PayStatementSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoPay" }),
        __metadata("design:type", Boolean)
    ], PayStatementSummary.prototype, "autoPay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beginDate" }),
        __metadata("design:type", String)
    ], PayStatementSummary.prototype, "beginDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkDate" }),
        __metadata("design:type", String)
    ], PayStatementSummary.prototype, "checkDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkNumber" }),
        __metadata("design:type", Number)
    ], PayStatementSummary.prototype, "checkNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directDepositAmount" }),
        __metadata("design:type", Number)
    ], PayStatementSummary.prototype, "directDepositAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", String)
    ], PayStatementSummary.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grossPay" }),
        __metadata("design:type", Number)
    ], PayStatementSummary.prototype, "grossPay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours" }),
        __metadata("design:type", Number)
    ], PayStatementSummary.prototype, "hours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=netCheck" }),
        __metadata("design:type", Number)
    ], PayStatementSummary.prototype, "netCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=netPay" }),
        __metadata("design:type", Number)
    ], PayStatementSummary.prototype, "netPay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overtimeDollars" }),
        __metadata("design:type", Number)
    ], PayStatementSummary.prototype, "overtimeDollars", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overtimeHours" }),
        __metadata("design:type", Number)
    ], PayStatementSummary.prototype, "overtimeHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=process" }),
        __metadata("design:type", Number)
    ], PayStatementSummary.prototype, "process", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regularDollars" }),
        __metadata("design:type", Number)
    ], PayStatementSummary.prototype, "regularDollars", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regularHours" }),
        __metadata("design:type", Number)
    ], PayStatementSummary.prototype, "regularHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionNumber" }),
        __metadata("design:type", Number)
    ], PayStatementSummary.prototype, "transactionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherNumber" }),
        __metadata("design:type", Number)
    ], PayStatementSummary.prototype, "voucherNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workersCompCode" }),
        __metadata("design:type", String)
    ], PayStatementSummary.prototype, "workersCompCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], PayStatementSummary.prototype, "year", void 0);
    return PayStatementSummary;
}(SpeakeasyBase));
export { PayStatementSummary };
