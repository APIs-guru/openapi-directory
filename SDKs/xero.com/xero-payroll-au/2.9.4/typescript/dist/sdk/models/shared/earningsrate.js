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
import { AllowanceTypeEnum } from "./allowancetypeenum";
import { EarningsTypeEnum } from "./earningstypeenum";
import { EmploymentTerminationPaymentTypeEnum } from "./employmentterminationpaymenttypeenum";
import { RateTypeEnum } from "./ratetypeenum";
var EarningsRateInput = /** @class */ (function (_super) {
    __extends(EarningsRateInput, _super);
    function EarningsRateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountCode" }),
        __metadata("design:type", String)
    ], EarningsRateInput.prototype, "accountCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccrueLeave" }),
        __metadata("design:type", Boolean)
    ], EarningsRateInput.prototype, "accrueLeave", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowanceType" }),
        __metadata("design:type", String)
    ], EarningsRateInput.prototype, "allowanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", Number)
    ], EarningsRateInput.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentRecord" }),
        __metadata("design:type", Boolean)
    ], EarningsRateInput.prototype, "currentRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EarningsRateID" }),
        __metadata("design:type", String)
    ], EarningsRateInput.prototype, "earningsRateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EarningsType" }),
        __metadata("design:type", String)
    ], EarningsRateInput.prototype, "earningsType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmploymentTerminationPaymentType" }),
        __metadata("design:type", String)
    ], EarningsRateInput.prototype, "employmentTerminationPaymentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsExemptFromSuper" }),
        __metadata("design:type", Boolean)
    ], EarningsRateInput.prototype, "isExemptFromSuper", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsExemptFromTax" }),
        __metadata("design:type", Boolean)
    ], EarningsRateInput.prototype, "isExemptFromTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsReportableAsW1" }),
        __metadata("design:type", Boolean)
    ], EarningsRateInput.prototype, "isReportableAsW1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Multiplier" }),
        __metadata("design:type", Number)
    ], EarningsRateInput.prototype, "multiplier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], EarningsRateInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RatePerUnit" }),
        __metadata("design:type", String)
    ], EarningsRateInput.prototype, "ratePerUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateType" }),
        __metadata("design:type", String)
    ], EarningsRateInput.prototype, "rateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TypeOfUnits" }),
        __metadata("design:type", String)
    ], EarningsRateInput.prototype, "typeOfUnits", void 0);
    return EarningsRateInput;
}(SpeakeasyBase));
export { EarningsRateInput };
var EarningsRate = /** @class */ (function (_super) {
    __extends(EarningsRate, _super);
    function EarningsRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountCode" }),
        __metadata("design:type", String)
    ], EarningsRate.prototype, "accountCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccrueLeave" }),
        __metadata("design:type", Boolean)
    ], EarningsRate.prototype, "accrueLeave", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowanceType" }),
        __metadata("design:type", String)
    ], EarningsRate.prototype, "allowanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", Number)
    ], EarningsRate.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentRecord" }),
        __metadata("design:type", Boolean)
    ], EarningsRate.prototype, "currentRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EarningsRateID" }),
        __metadata("design:type", String)
    ], EarningsRate.prototype, "earningsRateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EarningsType" }),
        __metadata("design:type", String)
    ], EarningsRate.prototype, "earningsType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmploymentTerminationPaymentType" }),
        __metadata("design:type", String)
    ], EarningsRate.prototype, "employmentTerminationPaymentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsExemptFromSuper" }),
        __metadata("design:type", Boolean)
    ], EarningsRate.prototype, "isExemptFromSuper", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsExemptFromTax" }),
        __metadata("design:type", Boolean)
    ], EarningsRate.prototype, "isExemptFromTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsReportableAsW1" }),
        __metadata("design:type", Boolean)
    ], EarningsRate.prototype, "isReportableAsW1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Multiplier" }),
        __metadata("design:type", Number)
    ], EarningsRate.prototype, "multiplier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], EarningsRate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RatePerUnit" }),
        __metadata("design:type", String)
    ], EarningsRate.prototype, "ratePerUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateType" }),
        __metadata("design:type", String)
    ], EarningsRate.prototype, "rateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TypeOfUnits" }),
        __metadata("design:type", String)
    ], EarningsRate.prototype, "typeOfUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" }),
        __metadata("design:type", String)
    ], EarningsRate.prototype, "updatedDateUtc", void 0);
    return EarningsRate;
}(SpeakeasyBase));
export { EarningsRate };
