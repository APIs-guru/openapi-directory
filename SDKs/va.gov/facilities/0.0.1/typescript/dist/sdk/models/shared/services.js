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
export var ServicesBenefitsEnum;
(function (ServicesBenefitsEnum) {
    ServicesBenefitsEnum["ApplyingForBenefits"] = "ApplyingForBenefits";
    ServicesBenefitsEnum["BurialClaimAssistance"] = "BurialClaimAssistance";
    ServicesBenefitsEnum["DisabilityClaimAssistance"] = "DisabilityClaimAssistance";
    ServicesBenefitsEnum["EBenefitsRegistrationAssistance"] = "eBenefitsRegistrationAssistance";
    ServicesBenefitsEnum["EducationAndCareerCounseling"] = "EducationAndCareerCounseling";
    ServicesBenefitsEnum["EducationClaimAssistance"] = "EducationClaimAssistance";
    ServicesBenefitsEnum["FamilyMemberClaimAssistance"] = "FamilyMemberClaimAssistance";
    ServicesBenefitsEnum["HomelessAssistance"] = "HomelessAssistance";
    ServicesBenefitsEnum["InsuranceClaimAssistanceAndFinancialCounseling"] = "InsuranceClaimAssistanceAndFinancialCounseling";
    ServicesBenefitsEnum["IntegratedDisabilityEvaluationSystemAssistance"] = "IntegratedDisabilityEvaluationSystemAssistance";
    ServicesBenefitsEnum["Pensions"] = "Pensions";
    ServicesBenefitsEnum["PreDischargeClaimAssistance"] = "PreDischargeClaimAssistance";
    ServicesBenefitsEnum["TransitionAssistance"] = "TransitionAssistance";
    ServicesBenefitsEnum["UpdatingDirectDepositInformation"] = "UpdatingDirectDepositInformation";
    ServicesBenefitsEnum["VaHomeLoanAssistance"] = "VAHomeLoanAssistance";
    ServicesBenefitsEnum["VocationalRehabilitationAndEmploymentAssistance"] = "VocationalRehabilitationAndEmploymentAssistance";
})(ServicesBenefitsEnum || (ServicesBenefitsEnum = {}));
export var ServicesHealthEnum;
(function (ServicesHealthEnum) {
    ServicesHealthEnum["Audiology"] = "Audiology";
    ServicesHealthEnum["Cardiology"] = "Cardiology";
    ServicesHealthEnum["CaregiverSupport"] = "CaregiverSupport";
    ServicesHealthEnum["Covid19Vaccine"] = "Covid19Vaccine";
    ServicesHealthEnum["DentalServices"] = "DentalServices";
    ServicesHealthEnum["Dermatology"] = "Dermatology";
    ServicesHealthEnum["EmergencyCare"] = "EmergencyCare";
    ServicesHealthEnum["Gastroenterology"] = "Gastroenterology";
    ServicesHealthEnum["Gynecology"] = "Gynecology";
    ServicesHealthEnum["MentalHealthCare"] = "MentalHealthCare";
    ServicesHealthEnum["Ophthalmology"] = "Ophthalmology";
    ServicesHealthEnum["Optometry"] = "Optometry";
    ServicesHealthEnum["Orthopedics"] = "Orthopedics";
    ServicesHealthEnum["Nutrition"] = "Nutrition";
    ServicesHealthEnum["Podiatry"] = "Podiatry";
    ServicesHealthEnum["PrimaryCare"] = "PrimaryCare";
    ServicesHealthEnum["SpecialtyCare"] = "SpecialtyCare";
    ServicesHealthEnum["UrgentCare"] = "UrgentCare";
    ServicesHealthEnum["Urology"] = "Urology";
    ServicesHealthEnum["WomensHealth"] = "WomensHealth";
})(ServicesHealthEnum || (ServicesHealthEnum = {}));
export var ServicesOtherEnum;
(function (ServicesOtherEnum) {
    ServicesOtherEnum["OnlineScheduling"] = "OnlineScheduling";
})(ServicesOtherEnum || (ServicesOtherEnum = {}));
var Services = /** @class */ (function (_super) {
    __extends(Services, _super);
    function Services() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=benefits" }),
        __metadata("design:type", Array)
    ], Services.prototype, "benefits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health" }),
        __metadata("design:type", Array)
    ], Services.prototype, "health", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_updated" }),
        __metadata("design:type", Date)
    ], Services.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other" }),
        __metadata("design:type", Array)
    ], Services.prototype, "other", void 0);
    return Services;
}(SpeakeasyBase));
export { Services };
