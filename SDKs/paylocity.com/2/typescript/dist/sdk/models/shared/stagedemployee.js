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
// StagedEmployeeAdditionalDirectDeposit
/**
 * The additional direct deposit model
**/
var StagedEmployeeAdditionalDirectDeposit = /** @class */ (function (_super) {
    __extends(StagedEmployeeAdditionalDirectDeposit, _super);
    function StagedEmployeeAdditionalDirectDeposit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], StagedEmployeeAdditionalDirectDeposit.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountType" }),
        __metadata("design:type", String)
    ], StagedEmployeeAdditionalDirectDeposit.prototype, "accountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], StagedEmployeeAdditionalDirectDeposit.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountType" }),
        __metadata("design:type", String)
    ], StagedEmployeeAdditionalDirectDeposit.prototype, "amountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSkipPreNote" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeeAdditionalDirectDeposit.prototype, "isSkipPreNote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preNoteDate" }),
        __metadata("design:type", String)
    ], StagedEmployeeAdditionalDirectDeposit.prototype, "preNoteDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingNumber" }),
        __metadata("design:type", String)
    ], StagedEmployeeAdditionalDirectDeposit.prototype, "routingNumber", void 0);
    return StagedEmployeeAdditionalDirectDeposit;
}(SpeakeasyBase));
export { StagedEmployeeAdditionalDirectDeposit };
// StagedEmployeeBenefitSetup
/**
 * The benefit setup model
**/
var StagedEmployeeBenefitSetup = /** @class */ (function (_super) {
    __extends(StagedEmployeeBenefitSetup, _super);
    function StagedEmployeeBenefitSetup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=benefitClass" }),
        __metadata("design:type", String)
    ], StagedEmployeeBenefitSetup.prototype, "benefitClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=benefitClassEffectiveDate" }),
        __metadata("design:type", String)
    ], StagedEmployeeBenefitSetup.prototype, "benefitClassEffectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=benefitSalary" }),
        __metadata("design:type", Number)
    ], StagedEmployeeBenefitSetup.prototype, "benefitSalary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=benefitSalaryEffectiveDate" }),
        __metadata("design:type", String)
    ], StagedEmployeeBenefitSetup.prototype, "benefitSalaryEffectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doNotApplyAdministrativePeriod" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeeBenefitSetup.prototype, "doNotApplyAdministrativePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isMeasureAcaEligibility" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeeBenefitSetup.prototype, "isMeasureAcaEligibility", void 0);
    return StagedEmployeeBenefitSetup;
}(SpeakeasyBase));
export { StagedEmployeeBenefitSetup };
export var StagedEmployeeCustomBooleanFieldsCategoryEnum;
(function (StagedEmployeeCustomBooleanFieldsCategoryEnum) {
    StagedEmployeeCustomBooleanFieldsCategoryEnum["PayrollAndHr"] = "PayrollAndHR";
})(StagedEmployeeCustomBooleanFieldsCategoryEnum || (StagedEmployeeCustomBooleanFieldsCategoryEnum = {}));
var StagedEmployeeCustomBooleanFields = /** @class */ (function (_super) {
    __extends(StagedEmployeeCustomBooleanFields, _super);
    function StagedEmployeeCustomBooleanFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], StagedEmployeeCustomBooleanFields.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], StagedEmployeeCustomBooleanFields.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeeCustomBooleanFields.prototype, "value", void 0);
    return StagedEmployeeCustomBooleanFields;
}(SpeakeasyBase));
export { StagedEmployeeCustomBooleanFields };
export var StagedEmployeeCustomDateFieldsCategoryEnum;
(function (StagedEmployeeCustomDateFieldsCategoryEnum) {
    StagedEmployeeCustomDateFieldsCategoryEnum["PayrollAndHr"] = "PayrollAndHR";
})(StagedEmployeeCustomDateFieldsCategoryEnum || (StagedEmployeeCustomDateFieldsCategoryEnum = {}));
var StagedEmployeeCustomDateFields = /** @class */ (function (_super) {
    __extends(StagedEmployeeCustomDateFields, _super);
    function StagedEmployeeCustomDateFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], StagedEmployeeCustomDateFields.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], StagedEmployeeCustomDateFields.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], StagedEmployeeCustomDateFields.prototype, "value", void 0);
    return StagedEmployeeCustomDateFields;
}(SpeakeasyBase));
export { StagedEmployeeCustomDateFields };
export var StagedEmployeeCustomDropDownFieldsCategoryEnum;
(function (StagedEmployeeCustomDropDownFieldsCategoryEnum) {
    StagedEmployeeCustomDropDownFieldsCategoryEnum["PayrollAndHr"] = "PayrollAndHR";
})(StagedEmployeeCustomDropDownFieldsCategoryEnum || (StagedEmployeeCustomDropDownFieldsCategoryEnum = {}));
var StagedEmployeeCustomDropDownFields = /** @class */ (function (_super) {
    __extends(StagedEmployeeCustomDropDownFields, _super);
    function StagedEmployeeCustomDropDownFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], StagedEmployeeCustomDropDownFields.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], StagedEmployeeCustomDropDownFields.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], StagedEmployeeCustomDropDownFields.prototype, "value", void 0);
    return StagedEmployeeCustomDropDownFields;
}(SpeakeasyBase));
export { StagedEmployeeCustomDropDownFields };
export var StagedEmployeeCustomNumberFieldsCategoryEnum;
(function (StagedEmployeeCustomNumberFieldsCategoryEnum) {
    StagedEmployeeCustomNumberFieldsCategoryEnum["PayrollAndHr"] = "PayrollAndHR";
})(StagedEmployeeCustomNumberFieldsCategoryEnum || (StagedEmployeeCustomNumberFieldsCategoryEnum = {}));
var StagedEmployeeCustomNumberFields = /** @class */ (function (_super) {
    __extends(StagedEmployeeCustomNumberFields, _super);
    function StagedEmployeeCustomNumberFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], StagedEmployeeCustomNumberFields.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], StagedEmployeeCustomNumberFields.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], StagedEmployeeCustomNumberFields.prototype, "value", void 0);
    return StagedEmployeeCustomNumberFields;
}(SpeakeasyBase));
export { StagedEmployeeCustomNumberFields };
export var StagedEmployeeCustomTextFieldsCategoryEnum;
(function (StagedEmployeeCustomTextFieldsCategoryEnum) {
    StagedEmployeeCustomTextFieldsCategoryEnum["PayrollAndHr"] = "PayrollAndHR";
})(StagedEmployeeCustomTextFieldsCategoryEnum || (StagedEmployeeCustomTextFieldsCategoryEnum = {}));
var StagedEmployeeCustomTextFields = /** @class */ (function (_super) {
    __extends(StagedEmployeeCustomTextFields, _super);
    function StagedEmployeeCustomTextFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], StagedEmployeeCustomTextFields.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], StagedEmployeeCustomTextFields.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], StagedEmployeeCustomTextFields.prototype, "value", void 0);
    return StagedEmployeeCustomTextFields;
}(SpeakeasyBase));
export { StagedEmployeeCustomTextFields };
// StagedEmployeeDepartmentPosition
/**
 * The Department Position model
**/
var StagedEmployeeDepartmentPosition = /** @class */ (function (_super) {
    __extends(StagedEmployeeDepartmentPosition, _super);
    function StagedEmployeeDepartmentPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changeReason" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "changeReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clockBadgeNumber" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "clockBadgeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costCenter1" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "costCenter1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costCenter2" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "costCenter2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costCenter3" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "costCenter3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveDate" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employeeType" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "employeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equalEmploymentOpportunityClass" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "equalEmploymentOpportunityClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isMinimumWageExempt" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeeDepartmentPosition.prototype, "isMinimumWageExempt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isOvertimeExempt" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeeDepartmentPosition.prototype, "isOvertimeExempt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSupervisorReviewer" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeeDepartmentPosition.prototype, "isSupervisorReviewer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isUnionDuesCollected" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeeDepartmentPosition.prototype, "isUnionDuesCollected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isUnionInitiationCollected" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeeDepartmentPosition.prototype, "isUnionInitiationCollected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobTitle" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "jobTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payGroup" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "payGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=positionCode" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "positionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shift" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "shift", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supervisorCompanyNumber" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "supervisorCompanyNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supervisorEmployeeId" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "supervisorEmployeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tipped" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "tipped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unionAffiliationDate" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "unionAffiliationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unionCode" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "unionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unionPosition" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "unionPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workersCompensation" }),
        __metadata("design:type", String)
    ], StagedEmployeeDepartmentPosition.prototype, "workersCompensation", void 0);
    return StagedEmployeeDepartmentPosition;
}(SpeakeasyBase));
export { StagedEmployeeDepartmentPosition };
// StagedEmployeeFederalTax
/**
 * The Federal Tax model
**/
var StagedEmployeeFederalTax = /** @class */ (function (_super) {
    __extends(StagedEmployeeFederalTax, _super);
    function StagedEmployeeFederalTax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], StagedEmployeeFederalTax.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deductionsAmount" }),
        __metadata("design:type", Number)
    ], StagedEmployeeFederalTax.prototype, "deductionsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dependentsAmount" }),
        __metadata("design:type", Number)
    ], StagedEmployeeFederalTax.prototype, "dependentsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptions" }),
        __metadata("design:type", Number)
    ], StagedEmployeeFederalTax.prototype, "exemptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filingStatus" }),
        __metadata("design:type", String)
    ], StagedEmployeeFederalTax.prototype, "filingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=higherRate" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeeFederalTax.prototype, "higherRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherIncomeAmount" }),
        __metadata("design:type", Number)
    ], StagedEmployeeFederalTax.prototype, "otherIncomeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentage" }),
        __metadata("design:type", Number)
    ], StagedEmployeeFederalTax.prototype, "percentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxCalculationCode" }),
        __metadata("design:type", String)
    ], StagedEmployeeFederalTax.prototype, "taxCalculationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=w4FormYear" }),
        __metadata("design:type", Number)
    ], StagedEmployeeFederalTax.prototype, "w4FormYear", void 0);
    return StagedEmployeeFederalTax;
}(SpeakeasyBase));
export { StagedEmployeeFederalTax };
// StagedEmployeeHomeAddress
/**
 * The address model
**/
var StagedEmployeeHomeAddress = /** @class */ (function (_super) {
    __extends(StagedEmployeeHomeAddress, _super);
    function StagedEmployeeHomeAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], StagedEmployeeHomeAddress.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], StagedEmployeeHomeAddress.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], StagedEmployeeHomeAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], StagedEmployeeHomeAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], StagedEmployeeHomeAddress.prototype, "county", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailAddress" }),
        __metadata("design:type", String)
    ], StagedEmployeeHomeAddress.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobilePhone" }),
        __metadata("design:type", String)
    ], StagedEmployeeHomeAddress.prototype, "mobilePhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], StagedEmployeeHomeAddress.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], StagedEmployeeHomeAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], StagedEmployeeHomeAddress.prototype, "state", void 0);
    return StagedEmployeeHomeAddress;
}(SpeakeasyBase));
export { StagedEmployeeHomeAddress };
// StagedEmployeeLocalTax
/**
 * The Local Tax model
**/
var StagedEmployeeLocalTax = /** @class */ (function (_super) {
    __extends(StagedEmployeeLocalTax, _super);
    function StagedEmployeeLocalTax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptions" }),
        __metadata("design:type", Number)
    ], StagedEmployeeLocalTax.prototype, "exemptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptions2" }),
        __metadata("design:type", Number)
    ], StagedEmployeeLocalTax.prototype, "exemptions2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filingStatus" }),
        __metadata("design:type", String)
    ], StagedEmployeeLocalTax.prototype, "filingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=residentPSD" }),
        __metadata("design:type", String)
    ], StagedEmployeeLocalTax.prototype, "residentPsd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxCode" }),
        __metadata("design:type", String)
    ], StagedEmployeeLocalTax.prototype, "taxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workPSD" }),
        __metadata("design:type", String)
    ], StagedEmployeeLocalTax.prototype, "workPsd", void 0);
    return StagedEmployeeLocalTax;
}(SpeakeasyBase));
export { StagedEmployeeLocalTax };
// StagedEmployeeMainDirectDeposit
/**
 * The Main Direct Deposit model
**/
var StagedEmployeeMainDirectDeposit = /** @class */ (function (_super) {
    __extends(StagedEmployeeMainDirectDeposit, _super);
    function StagedEmployeeMainDirectDeposit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], StagedEmployeeMainDirectDeposit.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountType" }),
        __metadata("design:type", String)
    ], StagedEmployeeMainDirectDeposit.prototype, "accountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSkipPreNote" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeeMainDirectDeposit.prototype, "isSkipPreNote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preNoteDate" }),
        __metadata("design:type", String)
    ], StagedEmployeeMainDirectDeposit.prototype, "preNoteDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingNumber" }),
        __metadata("design:type", String)
    ], StagedEmployeeMainDirectDeposit.prototype, "routingNumber", void 0);
    return StagedEmployeeMainDirectDeposit;
}(SpeakeasyBase));
export { StagedEmployeeMainDirectDeposit };
// StagedEmployeeNonPrimaryStateTax
/**
 * The Non-Primary State Tax model
**/
var StagedEmployeeNonPrimaryStateTax = /** @class */ (function (_super) {
    __extends(StagedEmployeeNonPrimaryStateTax, _super);
    function StagedEmployeeNonPrimaryStateTax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], StagedEmployeeNonPrimaryStateTax.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deductionsAmount" }),
        __metadata("design:type", Number)
    ], StagedEmployeeNonPrimaryStateTax.prototype, "deductionsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dependentsAmount" }),
        __metadata("design:type", Number)
    ], StagedEmployeeNonPrimaryStateTax.prototype, "dependentsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptions" }),
        __metadata("design:type", Number)
    ], StagedEmployeeNonPrimaryStateTax.prototype, "exemptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptions2" }),
        __metadata("design:type", Number)
    ], StagedEmployeeNonPrimaryStateTax.prototype, "exemptions2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filingStatus" }),
        __metadata("design:type", String)
    ], StagedEmployeeNonPrimaryStateTax.prototype, "filingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=higherRate" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeeNonPrimaryStateTax.prototype, "higherRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherIncomeAmount" }),
        __metadata("design:type", Number)
    ], StagedEmployeeNonPrimaryStateTax.prototype, "otherIncomeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentage" }),
        __metadata("design:type", Number)
    ], StagedEmployeeNonPrimaryStateTax.prototype, "percentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reciprocityCode" }),
        __metadata("design:type", String)
    ], StagedEmployeeNonPrimaryStateTax.prototype, "reciprocityCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialCheckCalc" }),
        __metadata("design:type", String)
    ], StagedEmployeeNonPrimaryStateTax.prototype, "specialCheckCalc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxCalculationCode" }),
        __metadata("design:type", String)
    ], StagedEmployeeNonPrimaryStateTax.prototype, "taxCalculationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxCode" }),
        __metadata("design:type", String)
    ], StagedEmployeeNonPrimaryStateTax.prototype, "taxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=w4FormYear" }),
        __metadata("design:type", Number)
    ], StagedEmployeeNonPrimaryStateTax.prototype, "w4FormYear", void 0);
    return StagedEmployeeNonPrimaryStateTax;
}(SpeakeasyBase));
export { StagedEmployeeNonPrimaryStateTax };
// StagedEmployeePrimaryPayRate
/**
 * The Primary Pay Rate model
**/
var StagedEmployeePrimaryPayRate = /** @class */ (function (_super) {
    __extends(StagedEmployeePrimaryPayRate, _super);
    function StagedEmployeePrimaryPayRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseRate" }),
        __metadata("design:type", Number)
    ], StagedEmployeePrimaryPayRate.prototype, "baseRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changeReason" }),
        __metadata("design:type", String)
    ], StagedEmployeePrimaryPayRate.prototype, "changeReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultHours" }),
        __metadata("design:type", Number)
    ], StagedEmployeePrimaryPayRate.prototype, "defaultHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveDate" }),
        __metadata("design:type", String)
    ], StagedEmployeePrimaryPayRate.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isAutoPay" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeePrimaryPayRate.prototype, "isAutoPay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payFrequency" }),
        __metadata("design:type", String)
    ], StagedEmployeePrimaryPayRate.prototype, "payFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payGrade" }),
        __metadata("design:type", String)
    ], StagedEmployeePrimaryPayRate.prototype, "payGrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payType" }),
        __metadata("design:type", String)
    ], StagedEmployeePrimaryPayRate.prototype, "payType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ratePer" }),
        __metadata("design:type", String)
    ], StagedEmployeePrimaryPayRate.prototype, "ratePer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salary" }),
        __metadata("design:type", Number)
    ], StagedEmployeePrimaryPayRate.prototype, "salary", void 0);
    return StagedEmployeePrimaryPayRate;
}(SpeakeasyBase));
export { StagedEmployeePrimaryPayRate };
// StagedEmployeePrimaryStateTax
/**
 * The State Tax model
**/
var StagedEmployeePrimaryStateTax = /** @class */ (function (_super) {
    __extends(StagedEmployeePrimaryStateTax, _super);
    function StagedEmployeePrimaryStateTax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], StagedEmployeePrimaryStateTax.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deductionsAmount" }),
        __metadata("design:type", Number)
    ], StagedEmployeePrimaryStateTax.prototype, "deductionsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dependentsAmount" }),
        __metadata("design:type", Number)
    ], StagedEmployeePrimaryStateTax.prototype, "dependentsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptions" }),
        __metadata("design:type", Number)
    ], StagedEmployeePrimaryStateTax.prototype, "exemptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptions2" }),
        __metadata("design:type", Number)
    ], StagedEmployeePrimaryStateTax.prototype, "exemptions2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filingStatus" }),
        __metadata("design:type", String)
    ], StagedEmployeePrimaryStateTax.prototype, "filingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=higherRate" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeePrimaryStateTax.prototype, "higherRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherIncomeAmount" }),
        __metadata("design:type", Number)
    ], StagedEmployeePrimaryStateTax.prototype, "otherIncomeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentage" }),
        __metadata("design:type", Number)
    ], StagedEmployeePrimaryStateTax.prototype, "percentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialCheckCalc" }),
        __metadata("design:type", String)
    ], StagedEmployeePrimaryStateTax.prototype, "specialCheckCalc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxCalculationCode" }),
        __metadata("design:type", String)
    ], StagedEmployeePrimaryStateTax.prototype, "taxCalculationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxCode" }),
        __metadata("design:type", String)
    ], StagedEmployeePrimaryStateTax.prototype, "taxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=w4FormYear" }),
        __metadata("design:type", Number)
    ], StagedEmployeePrimaryStateTax.prototype, "w4FormYear", void 0);
    return StagedEmployeePrimaryStateTax;
}(SpeakeasyBase));
export { StagedEmployeePrimaryStateTax };
// StagedEmployeeStatus
/**
 * The employee status model
**/
var StagedEmployeeStatus = /** @class */ (function (_super) {
    __extends(StagedEmployeeStatus, _super);
    function StagedEmployeeStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adjustedSeniorityDate" }),
        __metadata("design:type", String)
    ], StagedEmployeeStatus.prototype, "adjustedSeniorityDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changeReason" }),
        __metadata("design:type", String)
    ], StagedEmployeeStatus.prototype, "changeReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveDate" }),
        __metadata("design:type", String)
    ], StagedEmployeeStatus.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employeeStatus" }),
        __metadata("design:type", String)
    ], StagedEmployeeStatus.prototype, "employeeStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hireDate" }),
        __metadata("design:type", String)
    ], StagedEmployeeStatus.prototype, "hireDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEligibleForRehire" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeeStatus.prototype, "isEligibleForRehire", void 0);
    return StagedEmployeeStatus;
}(SpeakeasyBase));
export { StagedEmployeeStatus };
// StagedEmployeeWebTime
/**
 * Add Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.
**/
var StagedEmployeeWebTime = /** @class */ (function (_super) {
    __extends(StagedEmployeeWebTime, _super);
    function StagedEmployeeWebTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=badgeNumber" }),
        __metadata("design:type", String)
    ], StagedEmployeeWebTime.prototype, "badgeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chargeRate" }),
        __metadata("design:type", Number)
    ], StagedEmployeeWebTime.prototype, "chargeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isTimeLaborEnabled" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeeWebTime.prototype, "isTimeLaborEnabled", void 0);
    return StagedEmployeeWebTime;
}(SpeakeasyBase));
export { StagedEmployeeWebTime };
// StagedEmployeeWorkAddress
/**
 * The address model
**/
var StagedEmployeeWorkAddress = /** @class */ (function (_super) {
    __extends(StagedEmployeeWorkAddress, _super);
    function StagedEmployeeWorkAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkAddress.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkAddress.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkAddress.prototype, "county", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailAddress" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkAddress.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobilePhone" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkAddress.prototype, "mobilePhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pager" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkAddress.prototype, "pager", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkAddress.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneExtension" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkAddress.prototype, "phoneExtension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkAddress.prototype, "state", void 0);
    return StagedEmployeeWorkAddress;
}(SpeakeasyBase));
export { StagedEmployeeWorkAddress };
// StagedEmployeeWorkEligibility
/**
 * The Work Eligibility model
**/
var StagedEmployeeWorkEligibility = /** @class */ (function (_super) {
    __extends(StagedEmployeeWorkEligibility, _super);
    function StagedEmployeeWorkEligibility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alienOrAdmissionDocumentNumber" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkEligibility.prototype, "alienOrAdmissionDocumentNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attestedDate" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkEligibility.prototype, "attestedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryOfIssuance" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkEligibility.prototype, "countryOfIssuance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=foreignPassportNumber" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkEligibility.prototype, "foreignPassportNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=i94AdmissionNumber" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkEligibility.prototype, "i94AdmissionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=i9DateVerified" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkEligibility.prototype, "i9DateVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=i9Notes" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkEligibility.prototype, "i9Notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isI9Verified" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeeWorkEligibility.prototype, "isI9Verified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSsnVerified" }),
        __metadata("design:type", Boolean)
    ], StagedEmployeeWorkEligibility.prototype, "isSsnVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssnDateVerified" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkEligibility.prototype, "ssnDateVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssnNotes" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkEligibility.prototype, "ssnNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visaType" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkEligibility.prototype, "visaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workAuthorization" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkEligibility.prototype, "workAuthorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workUntil" }),
        __metadata("design:type", String)
    ], StagedEmployeeWorkEligibility.prototype, "workUntil", void 0);
    return StagedEmployeeWorkEligibility;
}(SpeakeasyBase));
export { StagedEmployeeWorkEligibility };
// StagedEmployee
/**
 * The staged employee model
**/
var StagedEmployee = /** @class */ (function (_super) {
    __extends(StagedEmployee, _super);
    function StagedEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalDirectDeposit", elemType: StagedEmployeeAdditionalDirectDeposit }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "additionalDirectDeposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=benefitSetup", elemType: StagedEmployeeBenefitSetup }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "benefitSetup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=birthDate" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "birthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customBooleanFields", elemType: StagedEmployeeCustomBooleanFields }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "customBooleanFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customDateFields", elemType: StagedEmployeeCustomDateFields }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "customDateFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customDropDownFields", elemType: StagedEmployeeCustomDropDownFields }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "customDropDownFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customNumberFields", elemType: StagedEmployeeCustomNumberFields }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "customNumberFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customTextFields", elemType: StagedEmployeeCustomTextFields }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "customTextFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departmentPosition", elemType: StagedEmployeeDepartmentPosition }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "departmentPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabilityDescription" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "disabilityDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employeeId" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ethnicity" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "ethnicity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federalTax", elemType: StagedEmployeeFederalTax }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "federalTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fitwExemptReason" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "fitwExemptReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=futaExemptReason" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "futaExemptReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homeAddress", elemType: StagedEmployeeHomeAddress }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "homeAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEmployee943" }),
        __metadata("design:type", Boolean)
    ], StagedEmployee.prototype, "isEmployee943", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSmoker" }),
        __metadata("design:type", Boolean)
    ], StagedEmployee.prototype, "isSmoker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localTax", elemType: StagedEmployeeLocalTax }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "localTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mainDirectDeposit", elemType: StagedEmployeeMainDirectDeposit }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "mainDirectDeposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maritalStatus" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "maritalStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=medExemptReason" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "medExemptReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middleName" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonPrimaryStateTax", elemType: StagedEmployeeNonPrimaryStateTax }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "nonPrimaryStateTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferredName" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "preferredName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryPayRate", elemType: StagedEmployeePrimaryPayRate }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "primaryPayRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryStateTax", elemType: StagedEmployeePrimaryStateTax }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "primaryStateTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priorLastName" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "priorLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salutation" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "salutation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sitwExemptReason" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "sitwExemptReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssExemptReason" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "ssExemptReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssn" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "ssn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status", elemType: StagedEmployeeStatus }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suffix" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "suffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suiExemptReason" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "suiExemptReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suiState" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "suiState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxDistributionCode1099R" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "taxDistributionCode1099R", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxForm" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "taxForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=veteranDescription" }),
        __metadata("design:type", String)
    ], StagedEmployee.prototype, "veteranDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webTime" }),
        __metadata("design:type", StagedEmployeeWebTime)
    ], StagedEmployee.prototype, "webTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workAddress", elemType: StagedEmployeeWorkAddress }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "workAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workEligibility", elemType: StagedEmployeeWorkEligibility }),
        __metadata("design:type", Array)
    ], StagedEmployee.prototype, "workEligibility", void 0);
    return StagedEmployee;
}(SpeakeasyBase));
export { StagedEmployee };
