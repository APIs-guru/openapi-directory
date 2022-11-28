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
import { AcceptedPaymentV3 } from "./acceptedpaymentv3";
import { SourceAccountV3 } from "./sourceaccountv3";
import { QuoteFxSummaryV3 } from "./quotefxsummaryv3";
import { RejectedPaymentV3 } from "./rejectedpaymentv3";
var PayoutSummaryResponseV3 = /** @class */ (function (_super) {
    __extends(PayoutSummaryResponseV3, _super);
    function PayoutSummaryResponseV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acceptedPayments", elemType: AcceptedPaymentV3 }),
        __metadata("design:type", Array)
    ], PayoutSummaryResponseV3.prototype, "acceptedPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accounts", elemType: SourceAccountV3 }),
        __metadata("design:type", Array)
    ], PayoutSummaryResponseV3.prototype, "accounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fxSummaries", elemType: QuoteFxSummaryV3 }),
        __metadata("design:type", Array)
    ], PayoutSummaryResponseV3.prototype, "fxSummaries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentsAccepted" }),
        __metadata("design:type", Number)
    ], PayoutSummaryResponseV3.prototype, "paymentsAccepted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentsRejected" }),
        __metadata("design:type", Number)
    ], PayoutSummaryResponseV3.prototype, "paymentsRejected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentsSubmitted" }),
        __metadata("design:type", Number)
    ], PayoutSummaryResponseV3.prototype, "paymentsSubmitted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentsWithdrawn" }),
        __metadata("design:type", Number)
    ], PayoutSummaryResponseV3.prototype, "paymentsWithdrawn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payoutId" }),
        __metadata("design:type", String)
    ], PayoutSummaryResponseV3.prototype, "payoutId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rejectedPayments", elemType: RejectedPaymentV3 }),
        __metadata("design:type", Array)
    ], PayoutSummaryResponseV3.prototype, "rejectedPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PayoutSummaryResponseV3.prototype, "status", void 0);
    return PayoutSummaryResponseV3;
}(SpeakeasyBase));
export { PayoutSummaryResponseV3 };
