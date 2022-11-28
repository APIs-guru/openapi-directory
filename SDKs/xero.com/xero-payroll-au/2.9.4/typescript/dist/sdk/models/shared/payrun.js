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
import { PayRunStatusEnum } from "./payrunstatusenum";
import { PayslipSummary } from "./payslipsummary";
import { ValidationError } from "./validationerror";
import { PayslipSummaryInput } from "./payslipsummary";
var PayRun = /** @class */ (function (_super) {
    __extends(PayRun, _super);
    function PayRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Deductions" }),
        __metadata("design:type", Number)
    ], PayRun.prototype, "deductions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetPay" }),
        __metadata("design:type", Number)
    ], PayRun.prototype, "netPay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayRunID" }),
        __metadata("design:type", String)
    ], PayRun.prototype, "payRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayRunPeriodEndDate" }),
        __metadata("design:type", String)
    ], PayRun.prototype, "payRunPeriodEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayRunPeriodStartDate" }),
        __metadata("design:type", String)
    ], PayRun.prototype, "payRunPeriodStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayRunStatus" }),
        __metadata("design:type", String)
    ], PayRun.prototype, "payRunStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentDate" }),
        __metadata("design:type", String)
    ], PayRun.prototype, "paymentDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayrollCalendarID" }),
        __metadata("design:type", String)
    ], PayRun.prototype, "payrollCalendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayslipMessage" }),
        __metadata("design:type", String)
    ], PayRun.prototype, "payslipMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Payslips", elemType: PayslipSummary }),
        __metadata("design:type", Array)
    ], PayRun.prototype, "payslips", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reimbursement" }),
        __metadata("design:type", Number)
    ], PayRun.prototype, "reimbursement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Super" }),
        __metadata("design:type", Number)
    ], PayRun.prototype, "super", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tax" }),
        __metadata("design:type", Number)
    ], PayRun.prototype, "tax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" }),
        __metadata("design:type", String)
    ], PayRun.prototype, "updatedDateUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError }),
        __metadata("design:type", Array)
    ], PayRun.prototype, "validationErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Wages" }),
        __metadata("design:type", Number)
    ], PayRun.prototype, "wages", void 0);
    return PayRun;
}(SpeakeasyBase));
export { PayRun };
var PayRunInput = /** @class */ (function (_super) {
    __extends(PayRunInput, _super);
    function PayRunInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Deductions" }),
        __metadata("design:type", Number)
    ], PayRunInput.prototype, "deductions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetPay" }),
        __metadata("design:type", Number)
    ], PayRunInput.prototype, "netPay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayRunID" }),
        __metadata("design:type", String)
    ], PayRunInput.prototype, "payRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayRunPeriodEndDate" }),
        __metadata("design:type", String)
    ], PayRunInput.prototype, "payRunPeriodEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayRunPeriodStartDate" }),
        __metadata("design:type", String)
    ], PayRunInput.prototype, "payRunPeriodStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayRunStatus" }),
        __metadata("design:type", String)
    ], PayRunInput.prototype, "payRunStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentDate" }),
        __metadata("design:type", String)
    ], PayRunInput.prototype, "paymentDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayrollCalendarID" }),
        __metadata("design:type", String)
    ], PayRunInput.prototype, "payrollCalendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayslipMessage" }),
        __metadata("design:type", String)
    ], PayRunInput.prototype, "payslipMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Payslips", elemType: PayslipSummaryInput }),
        __metadata("design:type", Array)
    ], PayRunInput.prototype, "payslips", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reimbursement" }),
        __metadata("design:type", Number)
    ], PayRunInput.prototype, "reimbursement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Super" }),
        __metadata("design:type", Number)
    ], PayRunInput.prototype, "super", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tax" }),
        __metadata("design:type", Number)
    ], PayRunInput.prototype, "tax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError }),
        __metadata("design:type", Array)
    ], PayRunInput.prototype, "validationErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Wages" }),
        __metadata("design:type", Number)
    ], PayRunInput.prototype, "wages", void 0);
    return PayRunInput;
}(SpeakeasyBase));
export { PayRunInput };
