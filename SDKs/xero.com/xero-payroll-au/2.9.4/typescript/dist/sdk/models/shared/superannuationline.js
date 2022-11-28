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
import { SuperannuationCalculationTypeEnum } from "./superannuationcalculationtypeenum";
import { SuperannuationContributionTypeEnum } from "./superannuationcontributiontypeenum";
var SuperannuationLine = /** @class */ (function (_super) {
    __extends(SuperannuationLine, _super);
    function SuperannuationLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", Number)
    ], SuperannuationLine.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationType" }),
        __metadata("design:type", String)
    ], SuperannuationLine.prototype, "calculationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContributionType" }),
        __metadata("design:type", String)
    ], SuperannuationLine.prototype, "contributionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpenseAccountCode" }),
        __metadata("design:type", String)
    ], SuperannuationLine.prototype, "expenseAccountCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LiabilityAccountCode" }),
        __metadata("design:type", String)
    ], SuperannuationLine.prototype, "liabilityAccountCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumMonthlyEarnings" }),
        __metadata("design:type", Number)
    ], SuperannuationLine.prototype, "minimumMonthlyEarnings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentDateForThisPeriod" }),
        __metadata("design:type", String)
    ], SuperannuationLine.prototype, "paymentDateForThisPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Percentage" }),
        __metadata("design:type", Number)
    ], SuperannuationLine.prototype, "percentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuperMembershipID" }),
        __metadata("design:type", String)
    ], SuperannuationLine.prototype, "superMembershipId", void 0);
    return SuperannuationLine;
}(SpeakeasyBase));
export { SuperannuationLine };
