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
export var EmployeeEmployeeAeAssessmentOverrideEnum;
(function (EmployeeEmployeeAeAssessmentOverrideEnum) {
    EmployeeEmployeeAeAssessmentOverrideEnum["None"] = "None";
    EmployeeEmployeeAeAssessmentOverrideEnum["OptOut"] = "OptOut";
    EmployeeEmployeeAeAssessmentOverrideEnum["OptIn"] = "OptIn";
    EmployeeEmployeeAeAssessmentOverrideEnum["VoluntaryJoiner"] = "VoluntaryJoiner";
    EmployeeEmployeeAeAssessmentOverrideEnum["ContractualPension"] = "ContractualPension";
    EmployeeEmployeeAeAssessmentOverrideEnum["CeasedMembership"] = "CeasedMembership";
    EmployeeEmployeeAeAssessmentOverrideEnum["Leaver"] = "Leaver";
    EmployeeEmployeeAeAssessmentOverrideEnum["Excluded"] = "Excluded";
})(EmployeeEmployeeAeAssessmentOverrideEnum || (EmployeeEmployeeAeAssessmentOverrideEnum = {}));
export var EmployeeEmployeeAeExclusionReasonCodeEnum;
(function (EmployeeEmployeeAeExclusionReasonCodeEnum) {
    EmployeeEmployeeAeExclusionReasonCodeEnum["OtherNotKnown"] = "OtherNotKnown";
    EmployeeEmployeeAeExclusionReasonCodeEnum["NotAWorker"] = "NotAWorker";
    EmployeeEmployeeAeExclusionReasonCodeEnum["NotUkWorker"] = "NotUKWorker";
    EmployeeEmployeeAeExclusionReasonCodeEnum["TemporaryUkWorker"] = "TemporaryUKWorker";
    EmployeeEmployeeAeExclusionReasonCodeEnum["OutsideAgeRange"] = "OutsideAgeRange";
    EmployeeEmployeeAeExclusionReasonCodeEnum["SingleEmployeeDirector"] = "SingleEmployeeDirector";
    EmployeeEmployeeAeExclusionReasonCodeEnum["CeasedMembershipWithin12Months"] = "CeasedMembershipWithin12Months";
    EmployeeEmployeeAeExclusionReasonCodeEnum["CeasedMembershipBeyond12Months"] = "CeasedMembershipBeyond12Months";
    EmployeeEmployeeAeExclusionReasonCodeEnum["WorkerWulsWithin12Month"] = "WorkerWULSWithin12Month";
    EmployeeEmployeeAeExclusionReasonCodeEnum["WorkerWulsBeyond12Month"] = "WorkerWULSBeyond12Month";
    EmployeeEmployeeAeExclusionReasonCodeEnum["WorkerInNoticePeriod"] = "WorkerInNoticePeriod";
    EmployeeEmployeeAeExclusionReasonCodeEnum["WorkerTaxProtection"] = "WorkerTaxProtection";
})(EmployeeEmployeeAeExclusionReasonCodeEnum || (EmployeeEmployeeAeExclusionReasonCodeEnum = {}));
// EmployeeEmployeeAddress
/**
 * The employees' address
**/
var EmployeeEmployeeAddress = /** @class */ (function (_super) {
    __extends(EmployeeEmployeeAddress, _super);
    function EmployeeEmployeeAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address1" }),
        __metadata("design:type", String)
    ], EmployeeEmployeeAddress.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address2" }),
        __metadata("design:type", String)
    ], EmployeeEmployeeAddress.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address3" }),
        __metadata("design:type", String)
    ], EmployeeEmployeeAddress.prototype, "address3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address4" }),
        __metadata("design:type", String)
    ], EmployeeEmployeeAddress.prototype, "address4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], EmployeeEmployeeAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Postcode" }),
        __metadata("design:type", String)
    ], EmployeeEmployeeAddress.prototype, "postcode", void 0);
    return EmployeeEmployeeAddress;
}(SpeakeasyBase));
export { EmployeeEmployeeAddress };
// EmployeeEmployeeBankAccount
/**
 * The employees' bank account
**/
var EmployeeEmployeeBankAccount = /** @class */ (function (_super) {
    __extends(EmployeeEmployeeBankAccount, _super);
    function EmployeeEmployeeBankAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountName" }),
        __metadata("design:type", String)
    ], EmployeeEmployeeBankAccount.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountNumber" }),
        __metadata("design:type", String)
    ], EmployeeEmployeeBankAccount.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], EmployeeEmployeeBankAccount.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortCode" }),
        __metadata("design:type", String)
    ], EmployeeEmployeeBankAccount.prototype, "sortCode", void 0);
    return EmployeeEmployeeBankAccount;
}(SpeakeasyBase));
export { EmployeeEmployeeBankAccount };
// EmployeeEmployeeEmployeePartner
/**
 * The employees' employee partner
**/
var EmployeeEmployeeEmployeePartner = /** @class */ (function (_super) {
    __extends(EmployeeEmployeeEmployeePartner, _super);
    function EmployeeEmployeeEmployeePartner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstName" }),
        __metadata("design:type", String)
    ], EmployeeEmployeeEmployeePartner.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initials" }),
        __metadata("design:type", String)
    ], EmployeeEmployeeEmployeePartner.prototype, "initials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastName" }),
        __metadata("design:type", String)
    ], EmployeeEmployeeEmployeePartner.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MiddleName" }),
        __metadata("design:type", String)
    ], EmployeeEmployeeEmployeePartner.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NiNumber" }),
        __metadata("design:type", String)
    ], EmployeeEmployeeEmployeePartner.prototype, "niNumber", void 0);
    return EmployeeEmployeeEmployeePartner;
}(SpeakeasyBase));
export { EmployeeEmployeeEmployeePartner };
export var EmployeeEmployeeGenderEnum;
(function (EmployeeEmployeeGenderEnum) {
    EmployeeEmployeeGenderEnum["Unknown"] = "Unknown";
    EmployeeEmployeeGenderEnum["Male"] = "Male";
    EmployeeEmployeeGenderEnum["Female"] = "Female";
})(EmployeeEmployeeGenderEnum || (EmployeeEmployeeGenderEnum = {}));
export var EmployeeEmployeeLeaverReasonEnum;
(function (EmployeeEmployeeLeaverReasonEnum) {
    EmployeeEmployeeLeaverReasonEnum["Resigned"] = "Resigned";
    EmployeeEmployeeLeaverReasonEnum["Dismissed"] = "Dismissed";
    EmployeeEmployeeLeaverReasonEnum["Redundant"] = "Redundant";
    EmployeeEmployeeLeaverReasonEnum["Retired"] = "Retired";
    EmployeeEmployeeLeaverReasonEnum["Deceased"] = "Deceased";
    EmployeeEmployeeLeaverReasonEnum["LegalCustody"] = "LegalCustody";
    EmployeeEmployeeLeaverReasonEnum["Other"] = "Other";
})(EmployeeEmployeeLeaverReasonEnum || (EmployeeEmployeeLeaverReasonEnum = {}));
export var EmployeeEmployeeMaritalStatusEnum;
(function (EmployeeEmployeeMaritalStatusEnum) {
    EmployeeEmployeeMaritalStatusEnum["NotSet"] = "NotSet";
    EmployeeEmployeeMaritalStatusEnum["Single"] = "Single";
    EmployeeEmployeeMaritalStatusEnum["Married"] = "Married";
    EmployeeEmployeeMaritalStatusEnum["Divorced"] = "Divorced";
    EmployeeEmployeeMaritalStatusEnum["Widowed"] = "Widowed";
})(EmployeeEmployeeMaritalStatusEnum || (EmployeeEmployeeMaritalStatusEnum = {}));
export var EmployeeEmployeeNicLiabilityEnum;
(function (EmployeeEmployeeNicLiabilityEnum) {
    EmployeeEmployeeNicLiabilityEnum["HasOtherJob"] = "HasOtherJob";
    EmployeeEmployeeNicLiabilityEnum["IsFemaleEntitledToReducedRate"] = "IsFemaleEntitledToReducedRate";
    EmployeeEmployeeNicLiabilityEnum["IsNotLiable"] = "IsNotLiable";
    EmployeeEmployeeNicLiabilityEnum["IsContractedOut"] = "IsContractedOut";
    EmployeeEmployeeNicLiabilityEnum["IsFullyLiable"] = "IsFullyLiable";
    EmployeeEmployeeNicLiabilityEnum["IsApprentice"] = "IsApprentice";
    EmployeeEmployeeNicLiabilityEnum["LeaverBeyond6Weeks"] = "LeaverBeyond6Weeks";
    EmployeeEmployeeNicLiabilityEnum["PaymentAfterLeaving"] = "PaymentAfterLeaving";
})(EmployeeEmployeeNicLiabilityEnum || (EmployeeEmployeeNicLiabilityEnum = {}));
// EmployeeEmployeePaySchedule
/**
 * The employees' pay schedule
**/
var EmployeeEmployeePaySchedule = /** @class */ (function (_super) {
    __extends(EmployeeEmployeePaySchedule, _super);
    function EmployeeEmployeePaySchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], EmployeeEmployeePaySchedule.prototype, "atHref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], EmployeeEmployeePaySchedule.prototype, "atRel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], EmployeeEmployeePaySchedule.prototype, "atTitle", void 0);
    return EmployeeEmployeePaySchedule;
}(SpeakeasyBase));
export { EmployeeEmployeePaySchedule };
export var EmployeeEmployeePaymentMethodEnum;
(function (EmployeeEmployeePaymentMethodEnum) {
    EmployeeEmployeePaymentMethodEnum["NotSet"] = "NotSet";
    EmployeeEmployeePaymentMethodEnum["Cash"] = "Cash";
    EmployeeEmployeePaymentMethodEnum["Cheque"] = "Cheque";
    EmployeeEmployeePaymentMethodEnum["Bacs"] = "BACS";
    EmployeeEmployeePaymentMethodEnum["FasterPayments"] = "FasterPayments";
    EmployeeEmployeePaymentMethodEnum["Other"] = "Other";
})(EmployeeEmployeePaymentMethodEnum || (EmployeeEmployeePaymentMethodEnum = {}));
export var EmployeeEmployeeRegionEnum;
(function (EmployeeEmployeeRegionEnum) {
    EmployeeEmployeeRegionEnum["NotSet"] = "NotSet";
    EmployeeEmployeeRegionEnum["England"] = "England";
    EmployeeEmployeeRegionEnum["Scotland"] = "Scotland";
    EmployeeEmployeeRegionEnum["Wales"] = "Wales";
})(EmployeeEmployeeRegionEnum || (EmployeeEmployeeRegionEnum = {}));
export var EmployeeEmployeeRuleExclusionsEnum;
(function (EmployeeEmployeeRuleExclusionsEnum) {
    EmployeeEmployeeRuleExclusionsEnum["None"] = "None";
    EmployeeEmployeeRuleExclusionsEnum["NiMissingPayInstructionRule"] = "NiMissingPayInstructionRule";
    EmployeeEmployeeRuleExclusionsEnum["TaxMissingPayInstructionRule"] = "TaxMissingPayInstructionRule";
    EmployeeEmployeeRuleExclusionsEnum["TaxCodeUpliftRule"] = "TaxCodeUpliftRule";
    EmployeeEmployeeRuleExclusionsEnum["NiSetExpectedLetterRule"] = "NiSetExpectedLetterRule";
    EmployeeEmployeeRuleExclusionsEnum["NiDateOfBirthChangeRetrospectiveCRule"] = "NiDateOfBirthChangeRetrospectiveCRule";
    EmployeeEmployeeRuleExclusionsEnum["NiDefermentStatusChangeRule"] = "NiDefermentStatusChangeRule";
    EmployeeEmployeeRuleExclusionsEnum["NiEndContractedOutTransferRule"] = "NiEndContractedOutTransferRule";
    EmployeeEmployeeRuleExclusionsEnum["PaymentAfterLeavingRule"] = "PaymentAfterLeavingRule";
    EmployeeEmployeeRuleExclusionsEnum["LeaverEndInstructionsRule"] = "LeaverEndInstructionsRule";
    EmployeeEmployeeRuleExclusionsEnum["P45StudentLoanInstructionRule"] = "P45StudentLoanInstructionRule";
    EmployeeEmployeeRuleExclusionsEnum["P45TaxInstructionRule"] = "P45TaxInstructionRule";
    EmployeeEmployeeRuleExclusionsEnum["P45YtdTaxRule"] = "P45YtdTaxRule";
    EmployeeEmployeeRuleExclusionsEnum["YtdInstructionRule"] = "YtdInstructionRule";
    EmployeeEmployeeRuleExclusionsEnum["TaxCodeRegionChangeRule"] = "TaxCodeRegionChangeRule";
    EmployeeEmployeeRuleExclusionsEnum["AutoEnrolmentStatusChangeRule"] = "AutoEnrolmentStatusChangeRule";
    EmployeeEmployeeRuleExclusionsEnum["EmployeeDeceasedRule"] = "EmployeeDeceasedRule";
    EmployeeEmployeeRuleExclusionsEnum["BenefitInstructionAutoEndRule"] = "BenefitInstructionAutoEndRule";
})(EmployeeEmployeeRuleExclusionsEnum || (EmployeeEmployeeRuleExclusionsEnum = {}));
export var EmployeeEmployeeSecondedEnum;
(function (EmployeeEmployeeSecondedEnum) {
    EmployeeEmployeeSecondedEnum["NotSet"] = "NotSet";
    EmployeeEmployeeSecondedEnum["Stay183DaysOrMore"] = "Stay183DaysOrMore";
    EmployeeEmployeeSecondedEnum["StayLessThan183Days"] = "StayLessThan183Days";
    EmployeeEmployeeSecondedEnum["InOutUk"] = "InOutUk";
})(EmployeeEmployeeSecondedEnum || (EmployeeEmployeeSecondedEnum = {}));
export var EmployeeEmployeeStarterDeclarationEnum;
(function (EmployeeEmployeeStarterDeclarationEnum) {
    EmployeeEmployeeStarterDeclarationEnum["PreviouslyReported"] = "PreviouslyReported";
    EmployeeEmployeeStarterDeclarationEnum["A"] = "A";
    EmployeeEmployeeStarterDeclarationEnum["B"] = "B";
    EmployeeEmployeeStarterDeclarationEnum["C"] = "C";
})(EmployeeEmployeeStarterDeclarationEnum || (EmployeeEmployeeStarterDeclarationEnum = {}));
export var EmployeeEmployeeTerritoryEnum;
(function (EmployeeEmployeeTerritoryEnum) {
    EmployeeEmployeeTerritoryEnum["UnitedKingdom"] = "UnitedKingdom";
})(EmployeeEmployeeTerritoryEnum || (EmployeeEmployeeTerritoryEnum = {}));
export var EmployeeEmployeeWorkingWeekEnum;
(function (EmployeeEmployeeWorkingWeekEnum) {
    EmployeeEmployeeWorkingWeekEnum["None"] = "None";
    EmployeeEmployeeWorkingWeekEnum["Monday"] = "Monday";
    EmployeeEmployeeWorkingWeekEnum["Tuesday"] = "Tuesday";
    EmployeeEmployeeWorkingWeekEnum["Wednesday"] = "Wednesday";
    EmployeeEmployeeWorkingWeekEnum["Thursday"] = "Thursday";
    EmployeeEmployeeWorkingWeekEnum["Friday"] = "Friday";
    EmployeeEmployeeWorkingWeekEnum["AllWeekDays"] = "AllWeekDays";
    EmployeeEmployeeWorkingWeekEnum["Saturday"] = "Saturday";
    EmployeeEmployeeWorkingWeekEnum["Sunday"] = "Sunday";
    EmployeeEmployeeWorkingWeekEnum["AllDays"] = "AllDays";
})(EmployeeEmployeeWorkingWeekEnum || (EmployeeEmployeeWorkingWeekEnum = {}));
var EmployeeEmployee = /** @class */ (function (_super) {
    __extends(EmployeeEmployee, _super);
    function EmployeeEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AEAssessmentOverride" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "aeAssessmentOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AEAssessmentOverrideDate" }),
        __metadata("design:type", Date)
    ], EmployeeEmployee.prototype, "aeAssessmentOverrideDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AEExclusionReasonCode" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "aeExclusionReasonCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AEPostponementDate" }),
        __metadata("design:type", Date)
    ], EmployeeEmployee.prototype, "aePostponementDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address" }),
        __metadata("design:type", EmployeeEmployeeAddress)
    ], EmployeeEmployee.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BankAccount" }),
        __metadata("design:type", EmployeeEmployeeBankAccount)
    ], EmployeeEmployee.prototype, "bankAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfBirth" }),
        __metadata("design:type", Date)
    ], EmployeeEmployee.prototype, "dateOfBirth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Deactivated" }),
        __metadata("design:type", Boolean)
    ], EmployeeEmployee.prototype, "deactivated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectorshipAppointmentDate" }),
        __metadata("design:type", Date)
    ], EmployeeEmployee.prototype, "directorshipAppointmentDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EEACitizen" }),
        __metadata("design:type", Boolean)
    ], EmployeeEmployee.prototype, "eeaCitizen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EPM6" }),
        __metadata("design:type", Boolean)
    ], EmployeeEmployee.prototype, "epm6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EffectiveDate" }),
        __metadata("design:type", Date)
    ], EmployeeEmployee.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployeePartner" }),
        __metadata("design:type", EmployeeEmployeeEmployeePartner)
    ], EmployeeEmployee.prototype, "employeePartner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstName" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Gender" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HoursPerWeek" }),
        __metadata("design:type", Number)
    ], EmployeeEmployee.prototype, "hoursPerWeek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initials" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "initials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IrregularEmployment" }),
        __metadata("design:type", Boolean)
    ], EmployeeEmployee.prototype, "irregularEmployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsAgencyWorker" }),
        __metadata("design:type", Boolean)
    ], EmployeeEmployee.prototype, "isAgencyWorker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastName" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeaverReason" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "leaverReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeavingDate" }),
        __metadata("design:type", Date)
    ], EmployeeEmployee.prototype, "leavingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaritalStatus" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "maritalStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetaData" }),
        __metadata("design:type", Map)
    ], EmployeeEmployee.prototype, "metaData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MiddleName" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NiNumber" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "niNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NicLiability" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "nicLiability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OffPayrollWorker" }),
        __metadata("design:type", Boolean)
    ], EmployeeEmployee.prototype, "offPayrollWorker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OnStrike" }),
        __metadata("design:type", Boolean)
    ], EmployeeEmployee.prototype, "onStrike", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PassportNumber" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "passportNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaySchedule" }),
        __metadata("design:type", EmployeeEmployeePaySchedule)
    ], EmployeeEmployee.prototype, "paySchedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentMethod" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "paymentMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentToANonIndividual" }),
        __metadata("design:type", Boolean)
    ], EmployeeEmployee.prototype, "paymentToANonIndividual", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Region" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Revision" }),
        __metadata("design:type", Number)
    ], EmployeeEmployee.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleExclusions" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "ruleExclusions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Seconded" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "seconded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", Date)
    ], EmployeeEmployee.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StarterDeclaration" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "starterDeclaration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Territory" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "territory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkingWeek" }),
        __metadata("design:type", String)
    ], EmployeeEmployee.prototype, "workingWeek", void 0);
    return EmployeeEmployee;
}(SpeakeasyBase));
export { EmployeeEmployee };
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Employee" }),
        __metadata("design:type", EmployeeEmployee)
    ], Employee.prototype, "employee", void 0);
    return Employee;
}(SpeakeasyBase));
export { Employee };
