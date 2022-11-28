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
// EmployerEmployerAddress
/**
 * The employers' address
**/
var EmployerEmployerAddress = /** @class */ (function (_super) {
    __extends(EmployerEmployerAddress, _super);
    function EmployerEmployerAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address1" }),
        __metadata("design:type", String)
    ], EmployerEmployerAddress.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address2" }),
        __metadata("design:type", String)
    ], EmployerEmployerAddress.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address3" }),
        __metadata("design:type", String)
    ], EmployerEmployerAddress.prototype, "address3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address4" }),
        __metadata("design:type", String)
    ], EmployerEmployerAddress.prototype, "address4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], EmployerEmployerAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Postcode" }),
        __metadata("design:type", String)
    ], EmployerEmployerAddress.prototype, "postcode", void 0);
    return EmployerEmployerAddress;
}(SpeakeasyBase));
export { EmployerEmployerAddress };
// EmployerEmployerAutoEnrolmentPension
/**
 * The employer auto enrolments' pension
**/
var EmployerEmployerAutoEnrolmentPension = /** @class */ (function (_super) {
    __extends(EmployerEmployerAutoEnrolmentPension, _super);
    function EmployerEmployerAutoEnrolmentPension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], EmployerEmployerAutoEnrolmentPension.prototype, "atHref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], EmployerEmployerAutoEnrolmentPension.prototype, "atRel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], EmployerEmployerAutoEnrolmentPension.prototype, "atTitle", void 0);
    return EmployerEmployerAutoEnrolmentPension;
}(SpeakeasyBase));
export { EmployerEmployerAutoEnrolmentPension };
// EmployerEmployerAutoEnrolment
/**
 * The employers' auto enrolment
**/
var EmployerEmployerAutoEnrolment = /** @class */ (function (_super) {
    __extends(EmployerEmployerAutoEnrolment, _super);
    function EmployerEmployerAutoEnrolment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Pension" }),
        __metadata("design:type", EmployerEmployerAutoEnrolmentPension)
    ], EmployerEmployerAutoEnrolment.prototype, "pension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostponementDate" }),
        __metadata("design:type", Date)
    ], EmployerEmployerAutoEnrolment.prototype, "postponementDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryEmail" }),
        __metadata("design:type", String)
    ], EmployerEmployerAutoEnrolment.prototype, "primaryEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryFirstName" }),
        __metadata("design:type", String)
    ], EmployerEmployerAutoEnrolment.prototype, "primaryFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryJobTitle" }),
        __metadata("design:type", String)
    ], EmployerEmployerAutoEnrolment.prototype, "primaryJobTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryLastName" }),
        __metadata("design:type", String)
    ], EmployerEmployerAutoEnrolment.prototype, "primaryLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryTelephone" }),
        __metadata("design:type", String)
    ], EmployerEmployerAutoEnrolment.prototype, "primaryTelephone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReEnrolmentDayOffset" }),
        __metadata("design:type", Number)
    ], EmployerEmployerAutoEnrolment.prototype, "reEnrolmentDayOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReEnrolmentMonthOffset" }),
        __metadata("design:type", Number)
    ], EmployerEmployerAutoEnrolment.prototype, "reEnrolmentMonthOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryEmail" }),
        __metadata("design:type", String)
    ], EmployerEmployerAutoEnrolment.prototype, "secondaryEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryFirstName" }),
        __metadata("design:type", String)
    ], EmployerEmployerAutoEnrolment.prototype, "secondaryFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryJobTitle" }),
        __metadata("design:type", String)
    ], EmployerEmployerAutoEnrolment.prototype, "secondaryJobTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryLastName" }),
        __metadata("design:type", String)
    ], EmployerEmployerAutoEnrolment.prototype, "secondaryLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryTelephone" }),
        __metadata("design:type", String)
    ], EmployerEmployerAutoEnrolment.prototype, "secondaryTelephone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StagingDate" }),
        __metadata("design:type", Date)
    ], EmployerEmployerAutoEnrolment.prototype, "stagingDate", void 0);
    return EmployerEmployerAutoEnrolment;
}(SpeakeasyBase));
export { EmployerEmployerAutoEnrolment };
// EmployerEmployerBankAccount
/**
 * The employers' bank account
**/
var EmployerEmployerBankAccount = /** @class */ (function (_super) {
    __extends(EmployerEmployerBankAccount, _super);
    function EmployerEmployerBankAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountName" }),
        __metadata("design:type", String)
    ], EmployerEmployerBankAccount.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountNumber" }),
        __metadata("design:type", String)
    ], EmployerEmployerBankAccount.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], EmployerEmployerBankAccount.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortCode" }),
        __metadata("design:type", String)
    ], EmployerEmployerBankAccount.prototype, "sortCode", void 0);
    return EmployerEmployerBankAccount;
}(SpeakeasyBase));
export { EmployerEmployerBankAccount };
export var EmployerEmployerHmrcSettingsSenderEnum;
(function (EmployerEmployerHmrcSettingsSenderEnum) {
    EmployerEmployerHmrcSettingsSenderEnum["Employer"] = "Employer";
    EmployerEmployerHmrcSettingsSenderEnum["Individual"] = "Individual";
    EmployerEmployerHmrcSettingsSenderEnum["Company"] = "Company";
    EmployerEmployerHmrcSettingsSenderEnum["Agent"] = "Agent";
    EmployerEmployerHmrcSettingsSenderEnum["Bureau"] = "Bureau";
    EmployerEmployerHmrcSettingsSenderEnum["Partnership"] = "Partnership";
    EmployerEmployerHmrcSettingsSenderEnum["Trust"] = "Trust";
    EmployerEmployerHmrcSettingsSenderEnum["Government"] = "Government";
    EmployerEmployerHmrcSettingsSenderEnum["ActingInCapacity"] = "ActingInCapacity";
    EmployerEmployerHmrcSettingsSenderEnum["Other"] = "Other";
})(EmployerEmployerHmrcSettingsSenderEnum || (EmployerEmployerHmrcSettingsSenderEnum = {}));
export var EmployerEmployerHmrcSettingsStateAidSectorEnum;
(function (EmployerEmployerHmrcSettingsStateAidSectorEnum) {
    EmployerEmployerHmrcSettingsStateAidSectorEnum["Agriculture"] = "Agriculture";
    EmployerEmployerHmrcSettingsStateAidSectorEnum["FisheriesAquaculture"] = "FisheriesAquaculture";
    EmployerEmployerHmrcSettingsStateAidSectorEnum["RoadTransport"] = "RoadTransport";
    EmployerEmployerHmrcSettingsStateAidSectorEnum["Industrial"] = "Industrial";
    EmployerEmployerHmrcSettingsStateAidSectorEnum["NotApplicable"] = "NotApplicable";
})(EmployerEmployerHmrcSettingsStateAidSectorEnum || (EmployerEmployerHmrcSettingsStateAidSectorEnum = {}));
// EmployerEmployerHmrcSettings
/**
 * The employers' hmrc settings
**/
var EmployerEmployerHmrcSettings = /** @class */ (function (_super) {
    __extends(EmployerEmployerHmrcSettings, _super);
    function EmployerEmployerHmrcSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountingOfficeRef" }),
        __metadata("design:type", String)
    ], EmployerEmployerHmrcSettings.prototype, "accountingOfficeRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=COTAXRef" }),
        __metadata("design:type", String)
    ], EmployerEmployerHmrcSettings.prototype, "cotaxRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContactEmail" }),
        __metadata("design:type", String)
    ], EmployerEmployerHmrcSettings.prototype, "contactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContactFax" }),
        __metadata("design:type", String)
    ], EmployerEmployerHmrcSettings.prototype, "contactFax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContactFirstName" }),
        __metadata("design:type", String)
    ], EmployerEmployerHmrcSettings.prototype, "contactFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContactLastName" }),
        __metadata("design:type", String)
    ], EmployerEmployerHmrcSettings.prototype, "contactLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContactTelephone" }),
        __metadata("design:type", String)
    ], EmployerEmployerHmrcSettings.prototype, "contactTelephone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmploymentAllowanceOverride" }),
        __metadata("design:type", Number)
    ], EmployerEmployerHmrcSettings.prototype, "employmentAllowanceOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Password" }),
        __metadata("design:type", String)
    ], EmployerEmployerHmrcSettings.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SAUTR" }),
        __metadata("design:type", String)
    ], EmployerEmployerHmrcSettings.prototype, "sautr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Sender" }),
        __metadata("design:type", String)
    ], EmployerEmployerHmrcSettings.prototype, "sender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SenderId" }),
        __metadata("design:type", String)
    ], EmployerEmployerHmrcSettings.prototype, "senderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StateAidSector" }),
        __metadata("design:type", String)
    ], EmployerEmployerHmrcSettings.prototype, "stateAidSector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxOfficeNumber" }),
        __metadata("design:type", String)
    ], EmployerEmployerHmrcSettings.prototype, "taxOfficeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxOfficeReference" }),
        __metadata("design:type", String)
    ], EmployerEmployerHmrcSettings.prototype, "taxOfficeReference", void 0);
    return EmployerEmployerHmrcSettings;
}(SpeakeasyBase));
export { EmployerEmployerHmrcSettings };
export var EmployerEmployerRegionEnum;
(function (EmployerEmployerRegionEnum) {
    EmployerEmployerRegionEnum["NotSet"] = "NotSet";
    EmployerEmployerRegionEnum["England"] = "England";
    EmployerEmployerRegionEnum["Scotland"] = "Scotland";
    EmployerEmployerRegionEnum["Wales"] = "Wales";
})(EmployerEmployerRegionEnum || (EmployerEmployerRegionEnum = {}));
export var EmployerEmployerRuleExclusionsEnum;
(function (EmployerEmployerRuleExclusionsEnum) {
    EmployerEmployerRuleExclusionsEnum["None"] = "None";
    EmployerEmployerRuleExclusionsEnum["NiMissingPayInstructionRule"] = "NiMissingPayInstructionRule";
    EmployerEmployerRuleExclusionsEnum["TaxMissingPayInstructionRule"] = "TaxMissingPayInstructionRule";
    EmployerEmployerRuleExclusionsEnum["TaxCodeUpliftRule"] = "TaxCodeUpliftRule";
    EmployerEmployerRuleExclusionsEnum["NiSetExpectedLetterRule"] = "NiSetExpectedLetterRule";
    EmployerEmployerRuleExclusionsEnum["NiDateOfBirthChangeRetrospectiveCRule"] = "NiDateOfBirthChangeRetrospectiveCRule";
    EmployerEmployerRuleExclusionsEnum["NiDefermentStatusChangeRule"] = "NiDefermentStatusChangeRule";
    EmployerEmployerRuleExclusionsEnum["NiEndContractedOutTransferRule"] = "NiEndContractedOutTransferRule";
    EmployerEmployerRuleExclusionsEnum["PaymentAfterLeavingRule"] = "PaymentAfterLeavingRule";
    EmployerEmployerRuleExclusionsEnum["LeaverEndInstructionsRule"] = "LeaverEndInstructionsRule";
    EmployerEmployerRuleExclusionsEnum["P45StudentLoanInstructionRule"] = "P45StudentLoanInstructionRule";
    EmployerEmployerRuleExclusionsEnum["P45TaxInstructionRule"] = "P45TaxInstructionRule";
    EmployerEmployerRuleExclusionsEnum["P45YtdTaxRule"] = "P45YtdTaxRule";
    EmployerEmployerRuleExclusionsEnum["YtdInstructionRule"] = "YtdInstructionRule";
    EmployerEmployerRuleExclusionsEnum["TaxCodeRegionChangeRule"] = "TaxCodeRegionChangeRule";
    EmployerEmployerRuleExclusionsEnum["AutoEnrolmentStatusChangeRule"] = "AutoEnrolmentStatusChangeRule";
    EmployerEmployerRuleExclusionsEnum["EmployeeDeceasedRule"] = "EmployeeDeceasedRule";
    EmployerEmployerRuleExclusionsEnum["BenefitInstructionAutoEndRule"] = "BenefitInstructionAutoEndRule";
})(EmployerEmployerRuleExclusionsEnum || (EmployerEmployerRuleExclusionsEnum = {}));
export var EmployerEmployerTerritoryEnum;
(function (EmployerEmployerTerritoryEnum) {
    EmployerEmployerTerritoryEnum["UnitedKingdom"] = "UnitedKingdom";
})(EmployerEmployerTerritoryEnum || (EmployerEmployerTerritoryEnum = {}));
var EmployerEmployer = /** @class */ (function (_super) {
    __extends(EmployerEmployer, _super);
    function EmployerEmployer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address" }),
        __metadata("design:type", EmployerEmployerAddress)
    ], EmployerEmployer.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApprenticeshipLevyAllowance" }),
        __metadata("design:type", Number)
    ], EmployerEmployer.prototype, "apprenticeshipLevyAllowance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoEnrolment" }),
        __metadata("design:type", EmployerEmployerAutoEnrolment)
    ], EmployerEmployer.prototype, "autoEnrolment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BacsServiceUserNumber" }),
        __metadata("design:type", String)
    ], EmployerEmployer.prototype, "bacsServiceUserNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BankAccount" }),
        __metadata("design:type", EmployerEmployerBankAccount)
    ], EmployerEmployer.prototype, "bankAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculateApprenticeshipLevy" }),
        __metadata("design:type", Boolean)
    ], EmployerEmployer.prototype, "calculateApprenticeshipLevy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClaimEmploymentAllowance" }),
        __metadata("design:type", Boolean)
    ], EmployerEmployer.prototype, "claimEmploymentAllowance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClaimSmallEmployerRelief" }),
        __metadata("design:type", Boolean)
    ], EmployerEmployer.prototype, "claimSmallEmployerRelief", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EffectiveDate" }),
        __metadata("design:type", Date)
    ], EmployerEmployer.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HmrcSettings" }),
        __metadata("design:type", EmployerEmployerHmrcSettings)
    ], EmployerEmployer.prototype, "hmrcSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetaData" }),
        __metadata("design:type", Map)
    ], EmployerEmployer.prototype, "metaData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], EmployerEmployer.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Region" }),
        __metadata("design:type", String)
    ], EmployerEmployer.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Revision" }),
        __metadata("design:type", Number)
    ], EmployerEmployer.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleExclusions" }),
        __metadata("design:type", String)
    ], EmployerEmployer.prototype, "ruleExclusions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Territory" }),
        __metadata("design:type", String)
    ], EmployerEmployer.prototype, "territory", void 0);
    return EmployerEmployer;
}(SpeakeasyBase));
export { EmployerEmployer };
var Employer = /** @class */ (function (_super) {
    __extends(Employer, _super);
    function Employer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Employer" }),
        __metadata("design:type", EmployerEmployer)
    ], Employer.prototype, "employer", void 0);
    return Employer;
}(SpeakeasyBase));
export { Employer };
