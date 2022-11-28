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
import { LeaveLineCalculationTypeEnum } from "./leavelinecalculationtypeenum";
import { EmploymentTerminationPaymentTypeEnum } from "./employmentterminationpaymenttypeenum";
import { EntitlementFinalPayPayoutTypeEnum } from "./entitlementfinalpaypayouttypeenum";
var LeaveLine = /** @class */ (function (_super) {
    __extends(LeaveLine, _super);
    function LeaveLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnnualNumberOfUnits" }),
        __metadata("design:type", Number)
    ], LeaveLine.prototype, "annualNumberOfUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationType" }),
        __metadata("design:type", String)
    ], LeaveLine.prototype, "calculationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmploymentTerminationPaymentType" }),
        __metadata("design:type", String)
    ], LeaveLine.prototype, "employmentTerminationPaymentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EntitlementFinalPayPayoutType" }),
        __metadata("design:type", String)
    ], LeaveLine.prototype, "entitlementFinalPayPayoutType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullTimeNumberOfUnitsPerPeriod" }),
        __metadata("design:type", Number)
    ], LeaveLine.prototype, "fullTimeNumberOfUnitsPerPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncludeSuperannuationGuaranteeContribution" }),
        __metadata("design:type", Boolean)
    ], LeaveLine.prototype, "includeSuperannuationGuaranteeContribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeaveTypeID" }),
        __metadata("design:type", String)
    ], LeaveLine.prototype, "leaveTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfUnits" }),
        __metadata("design:type", Number)
    ], LeaveLine.prototype, "numberOfUnits", void 0);
    return LeaveLine;
}(SpeakeasyBase));
export { LeaveLine };
