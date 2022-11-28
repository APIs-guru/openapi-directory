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
import { PaymentAuditCurrencyV3Enum } from "./paymentauditcurrencyv3enum";
export var FxSummaryV3FundingStatusEnum;
(function (FxSummaryV3FundingStatusEnum) {
    FxSummaryV3FundingStatusEnum["Funded"] = "FUNDED";
    FxSummaryV3FundingStatusEnum["Instructed"] = "INSTRUCTED";
    FxSummaryV3FundingStatusEnum["Unfunded"] = "UNFUNDED";
})(FxSummaryV3FundingStatusEnum || (FxSummaryV3FundingStatusEnum = {}));
export var FxSummaryV3StatusEnum;
(function (FxSummaryV3StatusEnum) {
    FxSummaryV3StatusEnum["Unquoted"] = "UNQUOTED";
    FxSummaryV3StatusEnum["Quoted"] = "QUOTED";
    FxSummaryV3StatusEnum["Expired"] = "EXPIRED";
    FxSummaryV3StatusEnum["Executed"] = "EXECUTED";
})(FxSummaryV3StatusEnum || (FxSummaryV3StatusEnum = {}));
var FxSummaryV3 = /** @class */ (function (_super) {
    __extends(FxSummaryV3, _super);
    function FxSummaryV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDateTime" }),
        __metadata("design:type", Date)
    ], FxSummaryV3.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fundingStatus" }),
        __metadata("design:type", String)
    ], FxSummaryV3.prototype, "fundingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invertedRate" }),
        __metadata("design:type", Number)
    ], FxSummaryV3.prototype, "invertedRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentCurrency" }),
        __metadata("design:type", String)
    ], FxSummaryV3.prototype, "paymentCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quoteId" }),
        __metadata("design:type", String)
    ], FxSummaryV3.prototype, "quoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], FxSummaryV3.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceCurrency" }),
        __metadata("design:type", String)
    ], FxSummaryV3.prototype, "sourceCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], FxSummaryV3.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCost" }),
        __metadata("design:type", Number)
    ], FxSummaryV3.prototype, "totalCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPaymentAmount" }),
        __metadata("design:type", Number)
    ], FxSummaryV3.prototype, "totalPaymentAmount", void 0);
    return FxSummaryV3;
}(SpeakeasyBase));
export { FxSummaryV3 };
