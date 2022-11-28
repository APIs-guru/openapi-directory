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
// PensionPensionPensionablePayCodes
/**
 * The pensions' pensionable pay codes
**/
var PensionPensionPensionablePayCodes = /** @class */ (function (_super) {
    __extends(PensionPensionPensionablePayCodes, _super);
    function PensionPensionPensionablePayCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayCode" }),
        __metadata("design:type", Array)
    ], PensionPensionPensionablePayCodes.prototype, "payCode", void 0);
    return PensionPensionPensionablePayCodes;
}(SpeakeasyBase));
export { PensionPensionPensionablePayCodes };
export var PensionPensionProRataMethodEnum;
(function (PensionPensionProRataMethodEnum) {
    PensionPensionProRataMethodEnum["NotSet"] = "NotSet";
    PensionPensionProRataMethodEnum["Annual260Days"] = "Annual260Days";
    PensionPensionProRataMethodEnum["Annual365Days"] = "Annual365Days";
    PensionPensionProRataMethodEnum["AnnualQualifyingDays"] = "AnnualQualifyingDays";
    PensionPensionProRataMethodEnum["DaysPerCalendarMonth"] = "DaysPerCalendarMonth";
    PensionPensionProRataMethodEnum["DaysPerTaxPeriod"] = "DaysPerTaxPeriod";
    PensionPensionProRataMethodEnum["WorkingDaysPerCalendarMonth"] = "WorkingDaysPerCalendarMonth";
    PensionPensionProRataMethodEnum["WeekDaysPerCalendarMonth"] = "WeekDaysPerCalendarMonth";
})(PensionPensionProRataMethodEnum || (PensionPensionProRataMethodEnum = {}));
// PensionPensionQualifyingPayCodes
/**
 * The pensions' qualifying pay codes
**/
var PensionPensionQualifyingPayCodes = /** @class */ (function (_super) {
    __extends(PensionPensionQualifyingPayCodes, _super);
    function PensionPensionQualifyingPayCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayCode" }),
        __metadata("design:type", Array)
    ], PensionPensionQualifyingPayCodes.prototype, "payCode", void 0);
    return PensionPensionQualifyingPayCodes;
}(SpeakeasyBase));
export { PensionPensionQualifyingPayCodes };
export var PensionPensionRasRoundingOverrideEnum;
(function (PensionPensionRasRoundingOverrideEnum) {
    PensionPensionRasRoundingOverrideEnum["NotSet"] = "NotSet";
    PensionPensionRasRoundingOverrideEnum["PennyUp"] = "PennyUp";
    PensionPensionRasRoundingOverrideEnum["PennyDown"] = "PennyDown";
    PensionPensionRasRoundingOverrideEnum["Bankers"] = "Bankers";
    PensionPensionRasRoundingOverrideEnum["FiveUp"] = "FiveUp";
    PensionPensionRasRoundingOverrideEnum["FiveDown"] = "FiveDown";
    PensionPensionRasRoundingOverrideEnum["Floor"] = "Floor";
    PensionPensionRasRoundingOverrideEnum["Ceiling"] = "Ceiling";
})(PensionPensionRasRoundingOverrideEnum || (PensionPensionRasRoundingOverrideEnum = {}));
export var PensionPensionRoundingOptionEnum;
(function (PensionPensionRoundingOptionEnum) {
    PensionPensionRoundingOptionEnum["NotSet"] = "NotSet";
    PensionPensionRoundingOptionEnum["PennyUp"] = "PennyUp";
    PensionPensionRoundingOptionEnum["PennyDown"] = "PennyDown";
    PensionPensionRoundingOptionEnum["Bankers"] = "Bankers";
    PensionPensionRoundingOptionEnum["FiveUp"] = "FiveUp";
    PensionPensionRoundingOptionEnum["FiveDown"] = "FiveDown";
    PensionPensionRoundingOptionEnum["Floor"] = "Floor";
    PensionPensionRoundingOptionEnum["Ceiling"] = "Ceiling";
})(PensionPensionRoundingOptionEnum || (PensionPensionRoundingOptionEnum = {}));
export var PensionPensionTaxationMethodEnum;
(function (PensionPensionTaxationMethodEnum) {
    PensionPensionTaxationMethodEnum["NotSet"] = "NotSet";
    PensionPensionTaxationMethodEnum["NetBased"] = "NetBased";
    PensionPensionTaxationMethodEnum["ReliefAtSource"] = "ReliefAtSource";
    PensionPensionTaxationMethodEnum["TaxReliefExcluded"] = "TaxReliefExcluded";
})(PensionPensionTaxationMethodEnum || (PensionPensionTaxationMethodEnum = {}));
var PensionPension = /** @class */ (function (_super) {
    __extends(PensionPension, _super);
    function PensionPension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AECompatible" }),
        __metadata("design:type", Boolean)
    ], PensionPension.prototype, "aeCompatible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], PensionPension.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContributionDeductionDay" }),
        __metadata("design:type", Number)
    ], PensionPension.prototype, "contributionDeductionDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EffectiveDate" }),
        __metadata("design:type", Date)
    ], PensionPension.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployeeContributionCash" }),
        __metadata("design:type", Number)
    ], PensionPension.prototype, "employeeContributionCash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployeeContributionPercent" }),
        __metadata("design:type", Number)
    ], PensionPension.prototype, "employeeContributionPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployerContributionCash" }),
        __metadata("design:type", Number)
    ], PensionPension.prototype, "employerContributionCash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployerContributionPercent" }),
        __metadata("design:type", Number)
    ], PensionPension.prototype, "employerContributionPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployerNiSaving" }),
        __metadata("design:type", Boolean)
    ], PensionPension.prototype, "employerNiSaving", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployerNiSavingPercentage" }),
        __metadata("design:type", Number)
    ], PensionPension.prototype, "employerNiSavingPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Group" }),
        __metadata("design:type", String)
    ], PensionPension.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LowerThreshold" }),
        __metadata("design:type", Number)
    ], PensionPension.prototype, "lowerThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetaData" }),
        __metadata("design:type", Map)
    ], PensionPension.prototype, "metaData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PensionablePayCodes" }),
        __metadata("design:type", PensionPensionPensionablePayCodes)
    ], PensionPension.prototype, "pensionablePayCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProRataMethod" }),
        __metadata("design:type", String)
    ], PensionPension.prototype, "proRataMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProviderEmployerRef" }),
        __metadata("design:type", String)
    ], PensionPension.prototype, "providerEmployerRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProviderName" }),
        __metadata("design:type", String)
    ], PensionPension.prototype, "providerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QualifyingPayCodes" }),
        __metadata("design:type", PensionPensionQualifyingPayCodes)
    ], PensionPension.prototype, "qualifyingPayCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RasRoundingOverride" }),
        __metadata("design:type", String)
    ], PensionPension.prototype, "rasRoundingOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Revision" }),
        __metadata("design:type", Number)
    ], PensionPension.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoundingOption" }),
        __metadata("design:type", String)
    ], PensionPension.prototype, "roundingOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SalarySacrifice" }),
        __metadata("design:type", Boolean)
    ], PensionPension.prototype, "salarySacrifice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], PensionPension.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubGroup" }),
        __metadata("design:type", String)
    ], PensionPension.prototype, "subGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxationMethod" }),
        __metadata("design:type", String)
    ], PensionPension.prototype, "taxationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpperThreshold" }),
        __metadata("design:type", Number)
    ], PensionPension.prototype, "upperThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UseAEThresholds" }),
        __metadata("design:type", Boolean)
    ], PensionPension.prototype, "useAeThresholds", void 0);
    return PensionPension;
}(SpeakeasyBase));
export { PensionPension };
var Pension = /** @class */ (function (_super) {
    __extends(Pension, _super);
    function Pension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Pension" }),
        __metadata("design:type", PensionPension)
    ], Pension.prototype, "pension", void 0);
    return Pension;
}(SpeakeasyBase));
export { Pension };
