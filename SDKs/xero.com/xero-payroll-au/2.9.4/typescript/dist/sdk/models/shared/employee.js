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
import { BankAccount } from "./bankaccount";
import { HomeAddress } from "./homeaddress";
import { LeaveBalance } from "./leavebalance";
import { LeaveLine } from "./leaveline";
import { OpeningBalances } from "./openingbalances";
import { PayTemplate } from "./paytemplate";
import { EmployeeStatusEnum } from "./employeestatusenum";
import { SuperMembership } from "./supermembership";
import { TaxDeclarationInput } from "./taxdeclaration";
import { ValidationError } from "./validationerror";
import { TaxDeclaration } from "./taxdeclaration";
export var EmployeeGenderEnum;
(function (EmployeeGenderEnum) {
    EmployeeGenderEnum["N"] = "N";
    EmployeeGenderEnum["M"] = "M";
    EmployeeGenderEnum["F"] = "F";
    EmployeeGenderEnum["I"] = "I";
})(EmployeeGenderEnum || (EmployeeGenderEnum = {}));
var EmployeeInput = /** @class */ (function (_super) {
    __extends(EmployeeInput, _super);
    function EmployeeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BankAccounts", elemType: BankAccount }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "bankAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Classification" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfBirth" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "dateOfBirth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Email" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployeeGroupName" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "employeeGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployeeID" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstName" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Gender" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HomeAddress" }),
        __metadata("design:type", HomeAddress)
    ], EmployeeInput.prototype, "homeAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsAuthorisedToApproveLeave" }),
        __metadata("design:type", Boolean)
    ], EmployeeInput.prototype, "isAuthorisedToApproveLeave", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsAuthorisedToApproveTimesheets" }),
        __metadata("design:type", Boolean)
    ], EmployeeInput.prototype, "isAuthorisedToApproveTimesheets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobTitle" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "jobTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastName" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeaveBalances", elemType: LeaveBalance }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "leaveBalances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeaveLines", elemType: LeaveLine }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "leaveLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MiddleNames" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "middleNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mobile" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "mobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningBalances" }),
        __metadata("design:type", OpeningBalances)
    ], EmployeeInput.prototype, "openingBalances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrdinaryEarningsRateID" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "ordinaryEarningsRateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayTemplate" }),
        __metadata("design:type", PayTemplate)
    ], EmployeeInput.prototype, "payTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayrollCalendarID" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "payrollCalendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Phone" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuperMemberships", elemType: SuperMembership }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "superMemberships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxDeclaration" }),
        __metadata("design:type", TaxDeclarationInput)
    ], EmployeeInput.prototype, "taxDeclaration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TerminationDate" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "terminationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TwitterUserName" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "twitterUserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "validationErrors", void 0);
    return EmployeeInput;
}(SpeakeasyBase));
export { EmployeeInput };
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BankAccounts", elemType: BankAccount }),
        __metadata("design:type", Array)
    ], Employee.prototype, "bankAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Classification" }),
        __metadata("design:type", String)
    ], Employee.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfBirth" }),
        __metadata("design:type", String)
    ], Employee.prototype, "dateOfBirth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Email" }),
        __metadata("design:type", String)
    ], Employee.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployeeGroupName" }),
        __metadata("design:type", String)
    ], Employee.prototype, "employeeGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployeeID" }),
        __metadata("design:type", String)
    ], Employee.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstName" }),
        __metadata("design:type", String)
    ], Employee.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Gender" }),
        __metadata("design:type", String)
    ], Employee.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HomeAddress" }),
        __metadata("design:type", HomeAddress)
    ], Employee.prototype, "homeAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsAuthorisedToApproveLeave" }),
        __metadata("design:type", Boolean)
    ], Employee.prototype, "isAuthorisedToApproveLeave", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsAuthorisedToApproveTimesheets" }),
        __metadata("design:type", Boolean)
    ], Employee.prototype, "isAuthorisedToApproveTimesheets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobTitle" }),
        __metadata("design:type", String)
    ], Employee.prototype, "jobTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastName" }),
        __metadata("design:type", String)
    ], Employee.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeaveBalances", elemType: LeaveBalance }),
        __metadata("design:type", Array)
    ], Employee.prototype, "leaveBalances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeaveLines", elemType: LeaveLine }),
        __metadata("design:type", Array)
    ], Employee.prototype, "leaveLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MiddleNames" }),
        __metadata("design:type", String)
    ], Employee.prototype, "middleNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mobile" }),
        __metadata("design:type", String)
    ], Employee.prototype, "mobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningBalances" }),
        __metadata("design:type", OpeningBalances)
    ], Employee.prototype, "openingBalances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrdinaryEarningsRateID" }),
        __metadata("design:type", String)
    ], Employee.prototype, "ordinaryEarningsRateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayTemplate" }),
        __metadata("design:type", PayTemplate)
    ], Employee.prototype, "payTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayrollCalendarID" }),
        __metadata("design:type", String)
    ], Employee.prototype, "payrollCalendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Phone" }),
        __metadata("design:type", String)
    ], Employee.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", String)
    ], Employee.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Employee.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuperMemberships", elemType: SuperMembership }),
        __metadata("design:type", Array)
    ], Employee.prototype, "superMemberships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxDeclaration" }),
        __metadata("design:type", TaxDeclaration)
    ], Employee.prototype, "taxDeclaration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TerminationDate" }),
        __metadata("design:type", String)
    ], Employee.prototype, "terminationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], Employee.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TwitterUserName" }),
        __metadata("design:type", String)
    ], Employee.prototype, "twitterUserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" }),
        __metadata("design:type", String)
    ], Employee.prototype, "updatedDateUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError }),
        __metadata("design:type", Array)
    ], Employee.prototype, "validationErrors", void 0);
    return Employee;
}(SpeakeasyBase));
export { Employee };
