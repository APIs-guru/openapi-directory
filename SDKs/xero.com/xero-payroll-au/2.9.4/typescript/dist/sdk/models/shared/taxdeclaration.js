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
import { EmploymentBasisEnum } from "./employmentbasisenum";
import { ResidencyStatusEnum } from "./residencystatusenum";
import { TfnExemptionTypeEnum } from "./tfnexemptiontypeenum";
var TaxDeclaration = /** @class */ (function (_super) {
    __extends(TaxDeclaration, _super);
    function TaxDeclaration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApprovedWithholdingVariationPercentage" }),
        __metadata("design:type", Number)
    ], TaxDeclaration.prototype, "approvedWithholdingVariationPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AustralianResidentForTaxPurposes" }),
        __metadata("design:type", Boolean)
    ], TaxDeclaration.prototype, "australianResidentForTaxPurposes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EligibleToReceiveLeaveLoading" }),
        __metadata("design:type", Boolean)
    ], TaxDeclaration.prototype, "eligibleToReceiveLeaveLoading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployeeID" }),
        __metadata("design:type", String)
    ], TaxDeclaration.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmploymentBasis" }),
        __metadata("design:type", String)
    ], TaxDeclaration.prototype, "employmentBasis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasHELPDebt" }),
        __metadata("design:type", Boolean)
    ], TaxDeclaration.prototype, "hasHelpDebt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasSFSSDebt" }),
        __metadata("design:type", Boolean)
    ], TaxDeclaration.prototype, "hasSfssDebt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasStudentStartupLoan" }),
        __metadata("design:type", Boolean)
    ], TaxDeclaration.prototype, "hasStudentStartupLoan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasTradeSupportLoanDebt" }),
        __metadata("design:type", Boolean)
    ], TaxDeclaration.prototype, "hasTradeSupportLoanDebt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResidencyStatus" }),
        __metadata("design:type", String)
    ], TaxDeclaration.prototype, "residencyStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TFNExemptionType" }),
        __metadata("design:type", String)
    ], TaxDeclaration.prototype, "tfnExemptionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxFileNumber" }),
        __metadata("design:type", String)
    ], TaxDeclaration.prototype, "taxFileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxFreeThresholdClaimed" }),
        __metadata("design:type", Boolean)
    ], TaxDeclaration.prototype, "taxFreeThresholdClaimed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxOffsetEstimatedAmount" }),
        __metadata("design:type", Number)
    ], TaxDeclaration.prototype, "taxOffsetEstimatedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" }),
        __metadata("design:type", String)
    ], TaxDeclaration.prototype, "updatedDateUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpwardVariationTaxWithholdingAmount" }),
        __metadata("design:type", Number)
    ], TaxDeclaration.prototype, "upwardVariationTaxWithholdingAmount", void 0);
    return TaxDeclaration;
}(SpeakeasyBase));
export { TaxDeclaration };
var TaxDeclarationInput = /** @class */ (function (_super) {
    __extends(TaxDeclarationInput, _super);
    function TaxDeclarationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApprovedWithholdingVariationPercentage" }),
        __metadata("design:type", Number)
    ], TaxDeclarationInput.prototype, "approvedWithholdingVariationPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AustralianResidentForTaxPurposes" }),
        __metadata("design:type", Boolean)
    ], TaxDeclarationInput.prototype, "australianResidentForTaxPurposes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EligibleToReceiveLeaveLoading" }),
        __metadata("design:type", Boolean)
    ], TaxDeclarationInput.prototype, "eligibleToReceiveLeaveLoading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployeeID" }),
        __metadata("design:type", String)
    ], TaxDeclarationInput.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmploymentBasis" }),
        __metadata("design:type", String)
    ], TaxDeclarationInput.prototype, "employmentBasis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasHELPDebt" }),
        __metadata("design:type", Boolean)
    ], TaxDeclarationInput.prototype, "hasHelpDebt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasSFSSDebt" }),
        __metadata("design:type", Boolean)
    ], TaxDeclarationInput.prototype, "hasSfssDebt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasStudentStartupLoan" }),
        __metadata("design:type", Boolean)
    ], TaxDeclarationInput.prototype, "hasStudentStartupLoan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasTradeSupportLoanDebt" }),
        __metadata("design:type", Boolean)
    ], TaxDeclarationInput.prototype, "hasTradeSupportLoanDebt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResidencyStatus" }),
        __metadata("design:type", String)
    ], TaxDeclarationInput.prototype, "residencyStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TFNExemptionType" }),
        __metadata("design:type", String)
    ], TaxDeclarationInput.prototype, "tfnExemptionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxFileNumber" }),
        __metadata("design:type", String)
    ], TaxDeclarationInput.prototype, "taxFileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxFreeThresholdClaimed" }),
        __metadata("design:type", Boolean)
    ], TaxDeclarationInput.prototype, "taxFreeThresholdClaimed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxOffsetEstimatedAmount" }),
        __metadata("design:type", Number)
    ], TaxDeclarationInput.prototype, "taxOffsetEstimatedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpwardVariationTaxWithholdingAmount" }),
        __metadata("design:type", Number)
    ], TaxDeclarationInput.prototype, "upwardVariationTaxWithholdingAmount", void 0);
    return TaxDeclarationInput;
}(SpeakeasyBase));
export { TaxDeclarationInput };
