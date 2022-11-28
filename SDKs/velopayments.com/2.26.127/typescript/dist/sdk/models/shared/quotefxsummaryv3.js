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
export var QuoteFxSummaryV3FundingStatusEnum;
(function (QuoteFxSummaryV3FundingStatusEnum) {
    QuoteFxSummaryV3FundingStatusEnum["Unfunded"] = "UNFUNDED";
    QuoteFxSummaryV3FundingStatusEnum["Instructed"] = "INSTRUCTED";
    QuoteFxSummaryV3FundingStatusEnum["Funded"] = "FUNDED";
})(QuoteFxSummaryV3FundingStatusEnum || (QuoteFxSummaryV3FundingStatusEnum = {}));
export var QuoteFxSummaryV3StatusEnum;
(function (QuoteFxSummaryV3StatusEnum) {
    QuoteFxSummaryV3StatusEnum["Unquoted"] = "UNQUOTED";
    QuoteFxSummaryV3StatusEnum["Quoted"] = "QUOTED";
    QuoteFxSummaryV3StatusEnum["Expired"] = "EXPIRED";
    QuoteFxSummaryV3StatusEnum["Executed"] = "EXECUTED";
    QuoteFxSummaryV3StatusEnum["Rejected"] = "REJECTED";
})(QuoteFxSummaryV3StatusEnum || (QuoteFxSummaryV3StatusEnum = {}));
var QuoteFxSummaryV3 = /** @class */ (function (_super) {
    __extends(QuoteFxSummaryV3, _super);
    function QuoteFxSummaryV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", Date)
    ], QuoteFxSummaryV3.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiryTime" }),
        __metadata("design:type", Date)
    ], QuoteFxSummaryV3.prototype, "expiryTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fundingStatus" }),
        __metadata("design:type", String)
    ], QuoteFxSummaryV3.prototype, "fundingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invertedRate" }),
        __metadata("design:type", Number)
    ], QuoteFxSummaryV3.prototype, "invertedRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentCurrency" }),
        __metadata("design:type", String)
    ], QuoteFxSummaryV3.prototype, "paymentCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quoteId" }),
        __metadata("design:type", String)
    ], QuoteFxSummaryV3.prototype, "quoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], QuoteFxSummaryV3.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceCurrency" }),
        __metadata("design:type", String)
    ], QuoteFxSummaryV3.prototype, "sourceCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], QuoteFxSummaryV3.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPaymentAmount" }),
        __metadata("design:type", Number)
    ], QuoteFxSummaryV3.prototype, "totalPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalSourceAmount" }),
        __metadata("design:type", Number)
    ], QuoteFxSummaryV3.prototype, "totalSourceAmount", void 0);
    return QuoteFxSummaryV3;
}(SpeakeasyBase));
export { QuoteFxSummaryV3 };
