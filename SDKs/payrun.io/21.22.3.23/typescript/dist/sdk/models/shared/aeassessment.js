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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var AeAssessmentAeAssessmentAssessmentCodeEnum;
(function (AeAssessmentAeAssessmentAssessmentCodeEnum) {
    AeAssessmentAeAssessmentAssessmentCodeEnum["Excluded"] = "Excluded";
    AeAssessmentAeAssessmentAssessmentCodeEnum["EligibleJobHolder"] = "EligibleJobHolder";
    AeAssessmentAeAssessmentAssessmentCodeEnum["NonEligibleJobHolder"] = "NonEligibleJobHolder";
    AeAssessmentAeAssessmentAssessmentCodeEnum["EntitledWorker"] = "EntitledWorker";
})(AeAssessmentAeAssessmentAssessmentCodeEnum || (AeAssessmentAeAssessmentAssessmentCodeEnum = {}));
export var AeAssessmentAeAssessmentAssessmentEventEnum;
(function (AeAssessmentAeAssessmentAssessmentEventEnum) {
    AeAssessmentAeAssessmentAssessmentEventEnum["NonEnrolmentEvent"] = "NonEnrolmentEvent";
    AeAssessmentAeAssessmentAssessmentEventEnum["AutomaticEnrolment"] = "AutomaticEnrolment";
    AeAssessmentAeAssessmentAssessmentEventEnum["OptIn"] = "OptIn";
    AeAssessmentAeAssessmentAssessmentEventEnum["VoluntaryJoiner"] = "VoluntaryJoiner";
    AeAssessmentAeAssessmentAssessmentEventEnum["ContractualEnrolment"] = "ContractualEnrolment";
})(AeAssessmentAeAssessmentAssessmentEventEnum || (AeAssessmentAeAssessmentAssessmentEventEnum = {}));
export var AeAssessmentAeAssessmentAssessmentOverrideEnum;
(function (AeAssessmentAeAssessmentAssessmentOverrideEnum) {
    AeAssessmentAeAssessmentAssessmentOverrideEnum["None"] = "None";
    AeAssessmentAeAssessmentAssessmentOverrideEnum["OptOut"] = "OptOut";
    AeAssessmentAeAssessmentAssessmentOverrideEnum["OptIn"] = "OptIn";
    AeAssessmentAeAssessmentAssessmentOverrideEnum["VoluntaryJoiner"] = "VoluntaryJoiner";
    AeAssessmentAeAssessmentAssessmentOverrideEnum["ContractualPension"] = "ContractualPension";
    AeAssessmentAeAssessmentAssessmentOverrideEnum["CeasedMembership"] = "CeasedMembership";
    AeAssessmentAeAssessmentAssessmentOverrideEnum["Leaver"] = "Leaver";
    AeAssessmentAeAssessmentAssessmentOverrideEnum["Excluded"] = "Excluded";
})(AeAssessmentAeAssessmentAssessmentOverrideEnum || (AeAssessmentAeAssessmentAssessmentOverrideEnum = {}));
export var AeAssessmentAeAssessmentAssessmentResultEnum;
(function (AeAssessmentAeAssessmentAssessmentResultEnum) {
    AeAssessmentAeAssessmentAssessmentResultEnum["Inconclusive"] = "Inconclusive";
    AeAssessmentAeAssessmentAssessmentResultEnum["NoChange"] = "NoChange";
    AeAssessmentAeAssessmentAssessmentResultEnum["Enrol"] = "Enrol";
    AeAssessmentAeAssessmentAssessmentResultEnum["Exit"] = "Exit";
})(AeAssessmentAeAssessmentAssessmentResultEnum || (AeAssessmentAeAssessmentAssessmentResultEnum = {}));
var AeAssessmentAeAssessment = /** @class */ (function (_super) {
    __extends(AeAssessmentAeAssessment, _super);
    function AeAssessmentAeAssessment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Age" }),
        __metadata("design:type", Number)
    ], AeAssessmentAeAssessment.prototype, "age", void 0);
    __decorate([
        Metadata({ data: "json, name=AssessmentCode" }),
        __metadata("design:type", String)
    ], AeAssessmentAeAssessment.prototype, "assessmentCode", void 0);
    __decorate([
        Metadata({ data: "json, name=AssessmentDate" }),
        __metadata("design:type", Date)
    ], AeAssessmentAeAssessment.prototype, "assessmentDate", void 0);
    __decorate([
        Metadata({ data: "json, name=AssessmentEvent" }),
        __metadata("design:type", String)
    ], AeAssessmentAeAssessment.prototype, "assessmentEvent", void 0);
    __decorate([
        Metadata({ data: "json, name=AssessmentOverride" }),
        __metadata("design:type", String)
    ], AeAssessmentAeAssessment.prototype, "assessmentOverride", void 0);
    __decorate([
        Metadata({ data: "json, name=AssessmentResult" }),
        __metadata("design:type", String)
    ], AeAssessmentAeAssessment.prototype, "assessmentResult", void 0);
    __decorate([
        Metadata({ data: "json, name=IsMemberOfAlternativePensionScheme" }),
        __metadata("design:type", Boolean)
    ], AeAssessmentAeAssessment.prototype, "isMemberOfAlternativePensionScheme", void 0);
    __decorate([
        Metadata({ data: "json, name=OptOutWindowEndDate" }),
        __metadata("design:type", Date)
    ], AeAssessmentAeAssessment.prototype, "optOutWindowEndDate", void 0);
    __decorate([
        Metadata({ data: "json, name=QualifyingEarnings" }),
        __metadata("design:type", Number)
    ], AeAssessmentAeAssessment.prototype, "qualifyingEarnings", void 0);
    __decorate([
        Metadata({ data: "json, name=ReenrolmentDate" }),
        __metadata("design:type", Date)
    ], AeAssessmentAeAssessment.prototype, "reenrolmentDate", void 0);
    __decorate([
        Metadata({ data: "json, name=StatePensionAge" }),
        __metadata("design:type", Number)
    ], AeAssessmentAeAssessment.prototype, "statePensionAge", void 0);
    __decorate([
        Metadata({ data: "json, name=StatePensionDate" }),
        __metadata("design:type", Date)
    ], AeAssessmentAeAssessment.prototype, "statePensionDate", void 0);
    __decorate([
        Metadata({ data: "json, name=TaxPeriod" }),
        __metadata("design:type", Number)
    ], AeAssessmentAeAssessment.prototype, "taxPeriod", void 0);
    __decorate([
        Metadata({ data: "json, name=TaxYear" }),
        __metadata("design:type", Number)
    ], AeAssessmentAeAssessment.prototype, "taxYear", void 0);
    return AeAssessmentAeAssessment;
}(SpeakeasyBase));
export { AeAssessmentAeAssessment };
var AeAssessment = /** @class */ (function (_super) {
    __extends(AeAssessment, _super);
    function AeAssessment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AEAssessment" }),
        __metadata("design:type", AeAssessmentAeAssessment)
    ], AeAssessment.prototype, "aeAssessment", void 0);
    return AeAssessment;
}(SpeakeasyBase));
export { AeAssessment };
