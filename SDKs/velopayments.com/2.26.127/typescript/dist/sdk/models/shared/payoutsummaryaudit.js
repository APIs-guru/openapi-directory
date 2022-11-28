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
import { FxSummary } from "./fxsummary";
import { PayoutTypeEnum } from "./payouttypeenum";
import { SourceAccountSummary } from "./sourceaccountsummary";
import { PayoutStatusEnum } from "./payoutstatusenum";
var PayoutSummaryAudit = /** @class */ (function (_super) {
    __extends(PayoutSummaryAudit, _super);
    function PayoutSummaryAudit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateTime" }),
        __metadata("design:type", Date)
    ], PayoutSummaryAudit.prototype, "dateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fxSummaries", elemType: FxSummary }),
        __metadata("design:type", Array)
    ], PayoutSummaryAudit.prototype, "fxSummaries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instructedDateTime" }),
        __metadata("design:type", String)
    ], PayoutSummaryAudit.prototype, "instructedDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payorId" }),
        __metadata("design:type", String)
    ], PayoutSummaryAudit.prototype, "payorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payorName" }),
        __metadata("design:type", String)
    ], PayoutSummaryAudit.prototype, "payorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payoutId" }),
        __metadata("design:type", String)
    ], PayoutSummaryAudit.prototype, "payoutId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payoutMemo" }),
        __metadata("design:type", String)
    ], PayoutSummaryAudit.prototype, "payoutMemo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payoutType" }),
        __metadata("design:type", String)
    ], PayoutSummaryAudit.prototype, "payoutType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceAccountSummary", elemType: SourceAccountSummary }),
        __metadata("design:type", Array)
    ], PayoutSummaryAudit.prototype, "sourceAccountSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PayoutSummaryAudit.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submittedDateTime" }),
        __metadata("design:type", String)
    ], PayoutSummaryAudit.prototype, "submittedDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalIncompletePayments" }),
        __metadata("design:type", Number)
    ], PayoutSummaryAudit.prototype, "totalIncompletePayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPayments" }),
        __metadata("design:type", Number)
    ], PayoutSummaryAudit.prototype, "totalPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalReturnedPayments" }),
        __metadata("design:type", Number)
    ], PayoutSummaryAudit.prototype, "totalReturnedPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalWithdrawnPayments" }),
        __metadata("design:type", Number)
    ], PayoutSummaryAudit.prototype, "totalWithdrawnPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=withdrawnDateTime" }),
        __metadata("design:type", Date)
    ], PayoutSummaryAudit.prototype, "withdrawnDateTime", void 0);
    return PayoutSummaryAudit;
}(SpeakeasyBase));
export { PayoutSummaryAudit };
