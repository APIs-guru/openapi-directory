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
var PayslipSummaryInput = /** @class */ (function (_super) {
    __extends(PayslipSummaryInput, _super);
    function PayslipSummaryInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Deductions" }),
        __metadata("design:type", Number)
    ], PayslipSummaryInput.prototype, "deductions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployeeGroup" }),
        __metadata("design:type", String)
    ], PayslipSummaryInput.prototype, "employeeGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployeeID" }),
        __metadata("design:type", String)
    ], PayslipSummaryInput.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstName" }),
        __metadata("design:type", String)
    ], PayslipSummaryInput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastName" }),
        __metadata("design:type", String)
    ], PayslipSummaryInput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetPay" }),
        __metadata("design:type", Number)
    ], PayslipSummaryInput.prototype, "netPay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayslipID" }),
        __metadata("design:type", String)
    ], PayslipSummaryInput.prototype, "payslipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reimbursements" }),
        __metadata("design:type", Number)
    ], PayslipSummaryInput.prototype, "reimbursements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Super" }),
        __metadata("design:type", Number)
    ], PayslipSummaryInput.prototype, "super", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tax" }),
        __metadata("design:type", Number)
    ], PayslipSummaryInput.prototype, "tax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Wages" }),
        __metadata("design:type", Number)
    ], PayslipSummaryInput.prototype, "wages", void 0);
    return PayslipSummaryInput;
}(SpeakeasyBase));
export { PayslipSummaryInput };
var PayslipSummary = /** @class */ (function (_super) {
    __extends(PayslipSummary, _super);
    function PayslipSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Deductions" }),
        __metadata("design:type", Number)
    ], PayslipSummary.prototype, "deductions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployeeGroup" }),
        __metadata("design:type", String)
    ], PayslipSummary.prototype, "employeeGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployeeID" }),
        __metadata("design:type", String)
    ], PayslipSummary.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstName" }),
        __metadata("design:type", String)
    ], PayslipSummary.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastName" }),
        __metadata("design:type", String)
    ], PayslipSummary.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetPay" }),
        __metadata("design:type", Number)
    ], PayslipSummary.prototype, "netPay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayslipID" }),
        __metadata("design:type", String)
    ], PayslipSummary.prototype, "payslipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reimbursements" }),
        __metadata("design:type", Number)
    ], PayslipSummary.prototype, "reimbursements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Super" }),
        __metadata("design:type", Number)
    ], PayslipSummary.prototype, "super", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tax" }),
        __metadata("design:type", Number)
    ], PayslipSummary.prototype, "tax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" }),
        __metadata("design:type", String)
    ], PayslipSummary.prototype, "updatedDateUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Wages" }),
        __metadata("design:type", Number)
    ], PayslipSummary.prototype, "wages", void 0);
    return PayslipSummary;
}(SpeakeasyBase));
export { PayslipSummary };
