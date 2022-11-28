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
// EmployeeAdditionalDirectDeposit
/**
 * The additional direct deposit model
**/
var EmployeeAdditionalDirectDeposit = /** @class */ (function (_super) {
    __extends(EmployeeAdditionalDirectDeposit, _super);
    function EmployeeAdditionalDirectDeposit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalDirectDeposit.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountType" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalDirectDeposit.prototype, "accountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], EmployeeAdditionalDirectDeposit.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountType" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalDirectDeposit.prototype, "amountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockSpecial" }),
        __metadata("design:type", Boolean)
    ], EmployeeAdditionalDirectDeposit.prototype, "blockSpecial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSkipPreNote" }),
        __metadata("design:type", Boolean)
    ], EmployeeAdditionalDirectDeposit.prototype, "isSkipPreNote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameOnAccount" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalDirectDeposit.prototype, "nameOnAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preNoteDate" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalDirectDeposit.prototype, "preNoteDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingNumber" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalDirectDeposit.prototype, "routingNumber", void 0);
    return EmployeeAdditionalDirectDeposit;
}(SpeakeasyBase));
export { EmployeeAdditionalDirectDeposit };
// EmployeeAdditionalRate
/**
 * The additional pay rate model
**/
var EmployeeAdditionalRate = /** @class */ (function (_super) {
    __extends(EmployeeAdditionalRate, _super);
    function EmployeeAdditionalRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changeReason" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalRate.prototype, "changeReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costCenter1" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalRate.prototype, "costCenter1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costCenter2" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalRate.prototype, "costCenter2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costCenter3" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalRate.prototype, "costCenter3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveDate" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalRate.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endCheckDate" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalRate.prototype, "endCheckDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=job" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalRate.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], EmployeeAdditionalRate.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rateCode" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalRate.prototype, "rateCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rateNotes" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalRate.prototype, "rateNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ratePer" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalRate.prototype, "ratePer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shift" }),
        __metadata("design:type", String)
    ], EmployeeAdditionalRate.prototype, "shift", void 0);
    return EmployeeAdditionalRate;
}(SpeakeasyBase));
export { EmployeeAdditionalRate };
// EmployeeBenefitSetup
/**
 *  Add or update setup values used for employee benefits integration, insurance plan settings, and ACA reporting.
**/
var EmployeeBenefitSetup = /** @class */ (function (_super) {
    __extends(EmployeeBenefitSetup, _super);
    function EmployeeBenefitSetup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=benefitClass" }),
        __metadata("design:type", String)
    ], EmployeeBenefitSetup.prototype, "benefitClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=benefitClassEffectiveDate" }),
        __metadata("design:type", String)
    ], EmployeeBenefitSetup.prototype, "benefitClassEffectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=benefitSalary" }),
        __metadata("design:type", Number)
    ], EmployeeBenefitSetup.prototype, "benefitSalary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=benefitSalaryEffectiveDate" }),
        __metadata("design:type", String)
    ], EmployeeBenefitSetup.prototype, "benefitSalaryEffectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doNotApplyAdministrativePeriod" }),
        __metadata("design:type", Boolean)
    ], EmployeeBenefitSetup.prototype, "doNotApplyAdministrativePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isMeasureAcaEligibility" }),
        __metadata("design:type", Boolean)
    ], EmployeeBenefitSetup.prototype, "isMeasureAcaEligibility", void 0);
    return EmployeeBenefitSetup;
}(SpeakeasyBase));
export { EmployeeBenefitSetup };
export var EmployeeCustomBooleanFieldsCategoryEnum;
(function (EmployeeCustomBooleanFieldsCategoryEnum) {
    EmployeeCustomBooleanFieldsCategoryEnum["PayrollAndHr"] = "PayrollAndHR";
})(EmployeeCustomBooleanFieldsCategoryEnum || (EmployeeCustomBooleanFieldsCategoryEnum = {}));
var EmployeeCustomBooleanFields = /** @class */ (function (_super) {
    __extends(EmployeeCustomBooleanFields, _super);
    function EmployeeCustomBooleanFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], EmployeeCustomBooleanFields.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], EmployeeCustomBooleanFields.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Boolean)
    ], EmployeeCustomBooleanFields.prototype, "value", void 0);
    return EmployeeCustomBooleanFields;
}(SpeakeasyBase));
export { EmployeeCustomBooleanFields };
export var EmployeeCustomDateFieldsCategoryEnum;
(function (EmployeeCustomDateFieldsCategoryEnum) {
    EmployeeCustomDateFieldsCategoryEnum["PayrollAndHr"] = "PayrollAndHR";
})(EmployeeCustomDateFieldsCategoryEnum || (EmployeeCustomDateFieldsCategoryEnum = {}));
var EmployeeCustomDateFields = /** @class */ (function (_super) {
    __extends(EmployeeCustomDateFields, _super);
    function EmployeeCustomDateFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], EmployeeCustomDateFields.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], EmployeeCustomDateFields.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], EmployeeCustomDateFields.prototype, "value", void 0);
    return EmployeeCustomDateFields;
}(SpeakeasyBase));
export { EmployeeCustomDateFields };
export var EmployeeCustomDropDownFieldsCategoryEnum;
(function (EmployeeCustomDropDownFieldsCategoryEnum) {
    EmployeeCustomDropDownFieldsCategoryEnum["PayrollAndHr"] = "PayrollAndHR";
})(EmployeeCustomDropDownFieldsCategoryEnum || (EmployeeCustomDropDownFieldsCategoryEnum = {}));
var EmployeeCustomDropDownFields = /** @class */ (function (_super) {
    __extends(EmployeeCustomDropDownFields, _super);
    function EmployeeCustomDropDownFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], EmployeeCustomDropDownFields.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], EmployeeCustomDropDownFields.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], EmployeeCustomDropDownFields.prototype, "value", void 0);
    return EmployeeCustomDropDownFields;
}(SpeakeasyBase));
export { EmployeeCustomDropDownFields };
export var EmployeeCustomNumberFieldsCategoryEnum;
(function (EmployeeCustomNumberFieldsCategoryEnum) {
    EmployeeCustomNumberFieldsCategoryEnum["PayrollAndHr"] = "PayrollAndHR";
})(EmployeeCustomNumberFieldsCategoryEnum || (EmployeeCustomNumberFieldsCategoryEnum = {}));
var EmployeeCustomNumberFields = /** @class */ (function (_super) {
    __extends(EmployeeCustomNumberFields, _super);
    function EmployeeCustomNumberFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], EmployeeCustomNumberFields.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], EmployeeCustomNumberFields.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], EmployeeCustomNumberFields.prototype, "value", void 0);
    return EmployeeCustomNumberFields;
}(SpeakeasyBase));
export { EmployeeCustomNumberFields };
export var EmployeeCustomTextFieldsCategoryEnum;
(function (EmployeeCustomTextFieldsCategoryEnum) {
    EmployeeCustomTextFieldsCategoryEnum["PayrollAndHr"] = "PayrollAndHR";
})(EmployeeCustomTextFieldsCategoryEnum || (EmployeeCustomTextFieldsCategoryEnum = {}));
var EmployeeCustomTextFields = /** @class */ (function (_super) {
    __extends(EmployeeCustomTextFields, _super);
    function EmployeeCustomTextFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], EmployeeCustomTextFields.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], EmployeeCustomTextFields.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], EmployeeCustomTextFields.prototype, "value", void 0);
    return EmployeeCustomTextFields;
}(SpeakeasyBase));
export { EmployeeCustomTextFields };
// EmployeeDepartmentPosition
/**
 * Add or update home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.
**/
var EmployeeDepartmentPosition = /** @class */ (function (_super) {
    __extends(EmployeeDepartmentPosition, _super);
    function EmployeeDepartmentPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changeReason" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "changeReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clockBadgeNumber" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "clockBadgeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costCenter1" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "costCenter1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costCenter2" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "costCenter2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costCenter3" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "costCenter3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveDate" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employeeType" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "employeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equalEmploymentOpportunityClass" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "equalEmploymentOpportunityClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isMinimumWageExempt" }),
        __metadata("design:type", Boolean)
    ], EmployeeDepartmentPosition.prototype, "isMinimumWageExempt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isOvertimeExempt" }),
        __metadata("design:type", Boolean)
    ], EmployeeDepartmentPosition.prototype, "isOvertimeExempt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSupervisorReviewer" }),
        __metadata("design:type", Boolean)
    ], EmployeeDepartmentPosition.prototype, "isSupervisorReviewer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isUnionDuesCollected" }),
        __metadata("design:type", Boolean)
    ], EmployeeDepartmentPosition.prototype, "isUnionDuesCollected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isUnionInitiationCollected" }),
        __metadata("design:type", Boolean)
    ], EmployeeDepartmentPosition.prototype, "isUnionInitiationCollected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobTitle" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "jobTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payGroup" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "payGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=positionCode" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "positionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewerCompanyNumber" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "reviewerCompanyNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewerEmployeeId" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "reviewerEmployeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shift" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "shift", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supervisorCompanyNumber" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "supervisorCompanyNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supervisorEmployeeId" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "supervisorEmployeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tipped" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "tipped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unionAffiliationDate" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "unionAffiliationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unionCode" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "unionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unionPosition" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "unionPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workersCompensation" }),
        __metadata("design:type", String)
    ], EmployeeDepartmentPosition.prototype, "workersCompensation", void 0);
    return EmployeeDepartmentPosition;
}(SpeakeasyBase));
export { EmployeeDepartmentPosition };
// EmployeeEmergencyContacts
/**
 * The emergency contact model
**/
var EmployeeEmergencyContacts = /** @class */ (function (_super) {
    __extends(EmployeeEmergencyContacts, _super);
    function EmployeeEmergencyContacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "county", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homePhone" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "homePhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobilePhone" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "mobilePhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pager" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "pager", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryPhone" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "primaryPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationship" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "relationship", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syncEmployeeInfo" }),
        __metadata("design:type", Boolean)
    ], EmployeeEmergencyContacts.prototype, "syncEmployeeInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workExtension" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "workExtension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workPhone" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "workPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], EmployeeEmergencyContacts.prototype, "zip", void 0);
    return EmployeeEmergencyContacts;
}(SpeakeasyBase));
export { EmployeeEmergencyContacts };
// EmployeeFederalTax
/**
 * Add or update federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.
**/
var EmployeeFederalTax = /** @class */ (function (_super) {
    __extends(EmployeeFederalTax, _super);
    function EmployeeFederalTax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], EmployeeFederalTax.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deductionsAmount" }),
        __metadata("design:type", Number)
    ], EmployeeFederalTax.prototype, "deductionsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dependentsAmount" }),
        __metadata("design:type", Number)
    ], EmployeeFederalTax.prototype, "dependentsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptions" }),
        __metadata("design:type", Number)
    ], EmployeeFederalTax.prototype, "exemptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filingStatus" }),
        __metadata("design:type", String)
    ], EmployeeFederalTax.prototype, "filingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=higherRate" }),
        __metadata("design:type", Boolean)
    ], EmployeeFederalTax.prototype, "higherRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherIncomeAmount" }),
        __metadata("design:type", Number)
    ], EmployeeFederalTax.prototype, "otherIncomeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentage" }),
        __metadata("design:type", Number)
    ], EmployeeFederalTax.prototype, "percentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxCalculationCode" }),
        __metadata("design:type", String)
    ], EmployeeFederalTax.prototype, "taxCalculationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=w4FormYear" }),
        __metadata("design:type", Number)
    ], EmployeeFederalTax.prototype, "w4FormYear", void 0);
    return EmployeeFederalTax;
}(SpeakeasyBase));
export { EmployeeFederalTax };
// EmployeeHomeAddress
/**
 * Add or update employee's home address, personal phone numbers, and personal email.
**/
var EmployeeHomeAddress = /** @class */ (function (_super) {
    __extends(EmployeeHomeAddress, _super);
    function EmployeeHomeAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], EmployeeHomeAddress.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], EmployeeHomeAddress.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], EmployeeHomeAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], EmployeeHomeAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], EmployeeHomeAddress.prototype, "county", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailAddress" }),
        __metadata("design:type", String)
    ], EmployeeHomeAddress.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobilePhone" }),
        __metadata("design:type", String)
    ], EmployeeHomeAddress.prototype, "mobilePhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], EmployeeHomeAddress.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], EmployeeHomeAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], EmployeeHomeAddress.prototype, "state", void 0);
    return EmployeeHomeAddress;
}(SpeakeasyBase));
export { EmployeeHomeAddress };
// EmployeeLocalTax
/**
 * The Local Tax model
**/
var EmployeeLocalTax = /** @class */ (function (_super) {
    __extends(EmployeeLocalTax, _super);
    function EmployeeLocalTax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptions" }),
        __metadata("design:type", Number)
    ], EmployeeLocalTax.prototype, "exemptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptions2" }),
        __metadata("design:type", Number)
    ], EmployeeLocalTax.prototype, "exemptions2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filingStatus" }),
        __metadata("design:type", String)
    ], EmployeeLocalTax.prototype, "filingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=residentPSD" }),
        __metadata("design:type", String)
    ], EmployeeLocalTax.prototype, "residentPsd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxCode" }),
        __metadata("design:type", String)
    ], EmployeeLocalTax.prototype, "taxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workPSD" }),
        __metadata("design:type", String)
    ], EmployeeLocalTax.prototype, "workPsd", void 0);
    return EmployeeLocalTax;
}(SpeakeasyBase));
export { EmployeeLocalTax };
// EmployeeMainDirectDeposit
/**
 * Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.
**/
var EmployeeMainDirectDeposit = /** @class */ (function (_super) {
    __extends(EmployeeMainDirectDeposit, _super);
    function EmployeeMainDirectDeposit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], EmployeeMainDirectDeposit.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountType" }),
        __metadata("design:type", String)
    ], EmployeeMainDirectDeposit.prototype, "accountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockSpecial" }),
        __metadata("design:type", Boolean)
    ], EmployeeMainDirectDeposit.prototype, "blockSpecial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSkipPreNote" }),
        __metadata("design:type", Boolean)
    ], EmployeeMainDirectDeposit.prototype, "isSkipPreNote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameOnAccount" }),
        __metadata("design:type", String)
    ], EmployeeMainDirectDeposit.prototype, "nameOnAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preNoteDate" }),
        __metadata("design:type", String)
    ], EmployeeMainDirectDeposit.prototype, "preNoteDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingNumber" }),
        __metadata("design:type", String)
    ], EmployeeMainDirectDeposit.prototype, "routingNumber", void 0);
    return EmployeeMainDirectDeposit;
}(SpeakeasyBase));
export { EmployeeMainDirectDeposit };
// EmployeeNonPrimaryStateTax
/**
 * Add or update non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.
**/
var EmployeeNonPrimaryStateTax = /** @class */ (function (_super) {
    __extends(EmployeeNonPrimaryStateTax, _super);
    function EmployeeNonPrimaryStateTax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], EmployeeNonPrimaryStateTax.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deductionsAmount" }),
        __metadata("design:type", Number)
    ], EmployeeNonPrimaryStateTax.prototype, "deductionsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dependentsAmount" }),
        __metadata("design:type", Number)
    ], EmployeeNonPrimaryStateTax.prototype, "dependentsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptions" }),
        __metadata("design:type", Number)
    ], EmployeeNonPrimaryStateTax.prototype, "exemptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptions2" }),
        __metadata("design:type", Number)
    ], EmployeeNonPrimaryStateTax.prototype, "exemptions2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filingStatus" }),
        __metadata("design:type", String)
    ], EmployeeNonPrimaryStateTax.prototype, "filingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=higherRate" }),
        __metadata("design:type", Boolean)
    ], EmployeeNonPrimaryStateTax.prototype, "higherRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherIncomeAmount" }),
        __metadata("design:type", Number)
    ], EmployeeNonPrimaryStateTax.prototype, "otherIncomeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentage" }),
        __metadata("design:type", Number)
    ], EmployeeNonPrimaryStateTax.prototype, "percentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reciprocityCode" }),
        __metadata("design:type", String)
    ], EmployeeNonPrimaryStateTax.prototype, "reciprocityCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialCheckCalc" }),
        __metadata("design:type", String)
    ], EmployeeNonPrimaryStateTax.prototype, "specialCheckCalc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxCalculationCode" }),
        __metadata("design:type", String)
    ], EmployeeNonPrimaryStateTax.prototype, "taxCalculationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxCode" }),
        __metadata("design:type", String)
    ], EmployeeNonPrimaryStateTax.prototype, "taxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=w4FormYear" }),
        __metadata("design:type", Number)
    ], EmployeeNonPrimaryStateTax.prototype, "w4FormYear", void 0);
    return EmployeeNonPrimaryStateTax;
}(SpeakeasyBase));
export { EmployeeNonPrimaryStateTax };
// EmployeePrimaryPayRate
/**
 * Add or update hourly or salary pay rate, effective date, and pay frequency.
**/
var EmployeePrimaryPayRate = /** @class */ (function (_super) {
    __extends(EmployeePrimaryPayRate, _super);
    function EmployeePrimaryPayRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annualSalary" }),
        __metadata("design:type", Number)
    ], EmployeePrimaryPayRate.prototype, "annualSalary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseRate" }),
        __metadata("design:type", Number)
    ], EmployeePrimaryPayRate.prototype, "baseRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beginCheckDate" }),
        __metadata("design:type", String)
    ], EmployeePrimaryPayRate.prototype, "beginCheckDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changeReason" }),
        __metadata("design:type", String)
    ], EmployeePrimaryPayRate.prototype, "changeReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultHours" }),
        __metadata("design:type", Number)
    ], EmployeePrimaryPayRate.prototype, "defaultHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveDate" }),
        __metadata("design:type", String)
    ], EmployeePrimaryPayRate.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isAutoPay" }),
        __metadata("design:type", Boolean)
    ], EmployeePrimaryPayRate.prototype, "isAutoPay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payFrequency" }),
        __metadata("design:type", String)
    ], EmployeePrimaryPayRate.prototype, "payFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payGrade" }),
        __metadata("design:type", String)
    ], EmployeePrimaryPayRate.prototype, "payGrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payRateNote" }),
        __metadata("design:type", String)
    ], EmployeePrimaryPayRate.prototype, "payRateNote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payType" }),
        __metadata("design:type", String)
    ], EmployeePrimaryPayRate.prototype, "payType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ratePer" }),
        __metadata("design:type", String)
    ], EmployeePrimaryPayRate.prototype, "ratePer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salary" }),
        __metadata("design:type", Number)
    ], EmployeePrimaryPayRate.prototype, "salary", void 0);
    return EmployeePrimaryPayRate;
}(SpeakeasyBase));
export { EmployeePrimaryPayRate };
// EmployeePrimaryStateTax
/**
 * Add or update primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed. Sending an updated primary state will replace the current primary state.
**/
var EmployeePrimaryStateTax = /** @class */ (function (_super) {
    __extends(EmployeePrimaryStateTax, _super);
    function EmployeePrimaryStateTax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], EmployeePrimaryStateTax.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deductionsAmount" }),
        __metadata("design:type", Number)
    ], EmployeePrimaryStateTax.prototype, "deductionsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dependentsAmount" }),
        __metadata("design:type", Number)
    ], EmployeePrimaryStateTax.prototype, "dependentsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptions" }),
        __metadata("design:type", Number)
    ], EmployeePrimaryStateTax.prototype, "exemptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptions2" }),
        __metadata("design:type", Number)
    ], EmployeePrimaryStateTax.prototype, "exemptions2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filingStatus" }),
        __metadata("design:type", String)
    ], EmployeePrimaryStateTax.prototype, "filingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=higherRate" }),
        __metadata("design:type", Boolean)
    ], EmployeePrimaryStateTax.prototype, "higherRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherIncomeAmount" }),
        __metadata("design:type", Number)
    ], EmployeePrimaryStateTax.prototype, "otherIncomeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentage" }),
        __metadata("design:type", Number)
    ], EmployeePrimaryStateTax.prototype, "percentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialCheckCalc" }),
        __metadata("design:type", String)
    ], EmployeePrimaryStateTax.prototype, "specialCheckCalc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxCalculationCode" }),
        __metadata("design:type", String)
    ], EmployeePrimaryStateTax.prototype, "taxCalculationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxCode" }),
        __metadata("design:type", String)
    ], EmployeePrimaryStateTax.prototype, "taxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=w4FormYear" }),
        __metadata("design:type", Number)
    ], EmployeePrimaryStateTax.prototype, "w4FormYear", void 0);
    return EmployeePrimaryStateTax;
}(SpeakeasyBase));
export { EmployeePrimaryStateTax };
// EmployeeStatus
/**
 * Add or update employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.
**/
var EmployeeStatus = /** @class */ (function (_super) {
    __extends(EmployeeStatus, _super);
    function EmployeeStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adjustedSeniorityDate" }),
        __metadata("design:type", String)
    ], EmployeeStatus.prototype, "adjustedSeniorityDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changeReason" }),
        __metadata("design:type", String)
    ], EmployeeStatus.prototype, "changeReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveDate" }),
        __metadata("design:type", String)
    ], EmployeeStatus.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employeeStatus" }),
        __metadata("design:type", String)
    ], EmployeeStatus.prototype, "employeeStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hireDate" }),
        __metadata("design:type", String)
    ], EmployeeStatus.prototype, "hireDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEligibleForRehire" }),
        __metadata("design:type", Boolean)
    ], EmployeeStatus.prototype, "isEligibleForRehire", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reHireDate" }),
        __metadata("design:type", String)
    ], EmployeeStatus.prototype, "reHireDate", void 0);
    return EmployeeStatus;
}(SpeakeasyBase));
export { EmployeeStatus };
// EmployeeTaxSetup
/**
 * Add tax form, 1099 exempt reasons and notes, and 943 agricultural employee information. Once the employee receives wages, this information cannot be updated. Add or update SUI tax state, retirement plan, and statutory information.
**/
var EmployeeTaxSetup = /** @class */ (function (_super) {
    __extends(EmployeeTaxSetup, _super);
    function EmployeeTaxSetup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fitwExemptNotes" }),
        __metadata("design:type", String)
    ], EmployeeTaxSetup.prototype, "fitwExemptNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fitwExemptReason" }),
        __metadata("design:type", String)
    ], EmployeeTaxSetup.prototype, "fitwExemptReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=futaExemptNotes" }),
        __metadata("design:type", String)
    ], EmployeeTaxSetup.prototype, "futaExemptNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=futaExemptReason" }),
        __metadata("design:type", String)
    ], EmployeeTaxSetup.prototype, "futaExemptReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEmployee943" }),
        __metadata("design:type", Boolean)
    ], EmployeeTaxSetup.prototype, "isEmployee943", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPension" }),
        __metadata("design:type", Boolean)
    ], EmployeeTaxSetup.prototype, "isPension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isStatutory" }),
        __metadata("design:type", Boolean)
    ], EmployeeTaxSetup.prototype, "isStatutory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=medExemptNotes" }),
        __metadata("design:type", String)
    ], EmployeeTaxSetup.prototype, "medExemptNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=medExemptReason" }),
        __metadata("design:type", String)
    ], EmployeeTaxSetup.prototype, "medExemptReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sitwExemptNotes" }),
        __metadata("design:type", String)
    ], EmployeeTaxSetup.prototype, "sitwExemptNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sitwExemptReason" }),
        __metadata("design:type", String)
    ], EmployeeTaxSetup.prototype, "sitwExemptReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssExemptNotes" }),
        __metadata("design:type", String)
    ], EmployeeTaxSetup.prototype, "ssExemptNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssExemptReason" }),
        __metadata("design:type", String)
    ], EmployeeTaxSetup.prototype, "ssExemptReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suiExemptNotes" }),
        __metadata("design:type", String)
    ], EmployeeTaxSetup.prototype, "suiExemptNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suiExemptReason" }),
        __metadata("design:type", String)
    ], EmployeeTaxSetup.prototype, "suiExemptReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suiState" }),
        __metadata("design:type", String)
    ], EmployeeTaxSetup.prototype, "suiState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxDistributionCode1099R" }),
        __metadata("design:type", String)
    ], EmployeeTaxSetup.prototype, "taxDistributionCode1099R", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxForm" }),
        __metadata("design:type", String)
    ], EmployeeTaxSetup.prototype, "taxForm", void 0);
    return EmployeeTaxSetup;
}(SpeakeasyBase));
export { EmployeeTaxSetup };
// EmployeeWebTime
/**
 * Add or update Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.
**/
var EmployeeWebTime = /** @class */ (function (_super) {
    __extends(EmployeeWebTime, _super);
    function EmployeeWebTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=badgeNumber" }),
        __metadata("design:type", String)
    ], EmployeeWebTime.prototype, "badgeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chargeRate" }),
        __metadata("design:type", Number)
    ], EmployeeWebTime.prototype, "chargeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isTimeLaborEnabled" }),
        __metadata("design:type", Boolean)
    ], EmployeeWebTime.prototype, "isTimeLaborEnabled", void 0);
    return EmployeeWebTime;
}(SpeakeasyBase));
export { EmployeeWebTime };
// EmployeeWorkAddress
/**
 * Add or update employee's work address, phone numbers, and email. Work Location drop down field is not included.
**/
var EmployeeWorkAddress = /** @class */ (function (_super) {
    __extends(EmployeeWorkAddress, _super);
    function EmployeeWorkAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], EmployeeWorkAddress.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], EmployeeWorkAddress.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], EmployeeWorkAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], EmployeeWorkAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], EmployeeWorkAddress.prototype, "county", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailAddress" }),
        __metadata("design:type", String)
    ], EmployeeWorkAddress.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], EmployeeWorkAddress.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailStop" }),
        __metadata("design:type", String)
    ], EmployeeWorkAddress.prototype, "mailStop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobilePhone" }),
        __metadata("design:type", String)
    ], EmployeeWorkAddress.prototype, "mobilePhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pager" }),
        __metadata("design:type", String)
    ], EmployeeWorkAddress.prototype, "pager", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], EmployeeWorkAddress.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneExtension" }),
        __metadata("design:type", String)
    ], EmployeeWorkAddress.prototype, "phoneExtension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], EmployeeWorkAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], EmployeeWorkAddress.prototype, "state", void 0);
    return EmployeeWorkAddress;
}(SpeakeasyBase));
export { EmployeeWorkAddress };
// EmployeeWorkEligibility
/**
 * Add or update I-9 work authorization information.
**/
var EmployeeWorkEligibility = /** @class */ (function (_super) {
    __extends(EmployeeWorkEligibility, _super);
    function EmployeeWorkEligibility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alienOrAdmissionDocumentNumber" }),
        __metadata("design:type", String)
    ], EmployeeWorkEligibility.prototype, "alienOrAdmissionDocumentNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attestedDate" }),
        __metadata("design:type", String)
    ], EmployeeWorkEligibility.prototype, "attestedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryOfIssuance" }),
        __metadata("design:type", String)
    ], EmployeeWorkEligibility.prototype, "countryOfIssuance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=foreignPassportNumber" }),
        __metadata("design:type", String)
    ], EmployeeWorkEligibility.prototype, "foreignPassportNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=i94AdmissionNumber" }),
        __metadata("design:type", String)
    ], EmployeeWorkEligibility.prototype, "i94AdmissionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=i9DateVerified" }),
        __metadata("design:type", String)
    ], EmployeeWorkEligibility.prototype, "i9DateVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=i9Notes" }),
        __metadata("design:type", String)
    ], EmployeeWorkEligibility.prototype, "i9Notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isI9Verified" }),
        __metadata("design:type", Boolean)
    ], EmployeeWorkEligibility.prototype, "isI9Verified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSsnVerified" }),
        __metadata("design:type", Boolean)
    ], EmployeeWorkEligibility.prototype, "isSsnVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssnDateVerified" }),
        __metadata("design:type", String)
    ], EmployeeWorkEligibility.prototype, "ssnDateVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssnNotes" }),
        __metadata("design:type", String)
    ], EmployeeWorkEligibility.prototype, "ssnNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visaType" }),
        __metadata("design:type", String)
    ], EmployeeWorkEligibility.prototype, "visaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workAuthorization" }),
        __metadata("design:type", String)
    ], EmployeeWorkEligibility.prototype, "workAuthorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workUntil" }),
        __metadata("design:type", String)
    ], EmployeeWorkEligibility.prototype, "workUntil", void 0);
    return EmployeeWorkEligibility;
}(SpeakeasyBase));
export { EmployeeWorkEligibility };
// Employee
/**
 * The employee model
**/
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalDirectDeposit", elemType: EmployeeAdditionalDirectDeposit }),
        __metadata("design:type", Array)
    ], Employee.prototype, "additionalDirectDeposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalRate", elemType: EmployeeAdditionalRate }),
        __metadata("design:type", Array)
    ], Employee.prototype, "additionalRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=benefitSetup" }),
        __metadata("design:type", EmployeeBenefitSetup)
    ], Employee.prototype, "benefitSetup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=birthDate" }),
        __metadata("design:type", String)
    ], Employee.prototype, "birthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyFEIN" }),
        __metadata("design:type", String)
    ], Employee.prototype, "companyFein", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], Employee.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Employee.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customBooleanFields", elemType: EmployeeCustomBooleanFields }),
        __metadata("design:type", Array)
    ], Employee.prototype, "customBooleanFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customDateFields", elemType: EmployeeCustomDateFields }),
        __metadata("design:type", Array)
    ], Employee.prototype, "customDateFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customDropDownFields", elemType: EmployeeCustomDropDownFields }),
        __metadata("design:type", Array)
    ], Employee.prototype, "customDropDownFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customNumberFields", elemType: EmployeeCustomNumberFields }),
        __metadata("design:type", Array)
    ], Employee.prototype, "customNumberFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customTextFields", elemType: EmployeeCustomTextFields }),
        __metadata("design:type", Array)
    ], Employee.prototype, "customTextFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departmentPosition" }),
        __metadata("design:type", EmployeeDepartmentPosition)
    ], Employee.prototype, "departmentPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabilityDescription" }),
        __metadata("design:type", String)
    ], Employee.prototype, "disabilityDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emergencyContacts", elemType: EmployeeEmergencyContacts }),
        __metadata("design:type", Array)
    ], Employee.prototype, "emergencyContacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employeeId" }),
        __metadata("design:type", String)
    ], Employee.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ethnicity" }),
        __metadata("design:type", String)
    ], Employee.prototype, "ethnicity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federalTax" }),
        __metadata("design:type", EmployeeFederalTax)
    ], Employee.prototype, "federalTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], Employee.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], Employee.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homeAddress" }),
        __metadata("design:type", EmployeeHomeAddress)
    ], Employee.prototype, "homeAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isHighlyCompensated" }),
        __metadata("design:type", Boolean)
    ], Employee.prototype, "isHighlyCompensated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSmoker" }),
        __metadata("design:type", Boolean)
    ], Employee.prototype, "isSmoker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], Employee.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localTax", elemType: EmployeeLocalTax }),
        __metadata("design:type", Array)
    ], Employee.prototype, "localTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mainDirectDeposit" }),
        __metadata("design:type", EmployeeMainDirectDeposit)
    ], Employee.prototype, "mainDirectDeposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maritalStatus" }),
        __metadata("design:type", String)
    ], Employee.prototype, "maritalStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middleName" }),
        __metadata("design:type", String)
    ], Employee.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonPrimaryStateTax" }),
        __metadata("design:type", EmployeeNonPrimaryStateTax)
    ], Employee.prototype, "nonPrimaryStateTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerPercent" }),
        __metadata("design:type", Number)
    ], Employee.prototype, "ownerPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferredName" }),
        __metadata("design:type", String)
    ], Employee.prototype, "preferredName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryPayRate" }),
        __metadata("design:type", EmployeePrimaryPayRate)
    ], Employee.prototype, "primaryPayRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryStateTax" }),
        __metadata("design:type", EmployeePrimaryStateTax)
    ], Employee.prototype, "primaryStateTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priorLastName" }),
        __metadata("design:type", String)
    ], Employee.prototype, "priorLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salutation" }),
        __metadata("design:type", String)
    ], Employee.prototype, "salutation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssn" }),
        __metadata("design:type", String)
    ], Employee.prototype, "ssn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", EmployeeStatus)
    ], Employee.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suffix" }),
        __metadata("design:type", String)
    ], Employee.prototype, "suffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxSetup" }),
        __metadata("design:type", EmployeeTaxSetup)
    ], Employee.prototype, "taxSetup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=veteranDescription" }),
        __metadata("design:type", String)
    ], Employee.prototype, "veteranDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webTime" }),
        __metadata("design:type", EmployeeWebTime)
    ], Employee.prototype, "webTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workAddress" }),
        __metadata("design:type", EmployeeWorkAddress)
    ], Employee.prototype, "workAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workEligibility" }),
        __metadata("design:type", EmployeeWorkEligibility)
    ], Employee.prototype, "workEligibility", void 0);
    return Employee;
}(SpeakeasyBase));
export { Employee };
