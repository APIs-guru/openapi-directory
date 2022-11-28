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
export var PaymentMeansCodeEnum;
(function (PaymentMeansCodeEnum) {
    PaymentMeansCodeEnum["CreditTransfer"] = "credit_transfer";
    PaymentMeansCodeEnum["DirectDebit"] = "direct_debit";
    PaymentMeansCodeEnum["BankCard"] = "bank_card";
    PaymentMeansCodeEnum["CreditCard"] = "credit_card";
    PaymentMeansCodeEnum["OnlinePaymentService"] = "online_payment_service";
    PaymentMeansCodeEnum["StandingAgreement"] = "standing_agreement";
    PaymentMeansCodeEnum["AunzNpp"] = "aunz_npp";
    PaymentMeansCodeEnum["AunzNppPayid"] = "aunz_npp_payid";
    PaymentMeansCodeEnum["AunzNppPayto"] = "aunz_npp_payto";
    PaymentMeansCodeEnum["AunzBpay"] = "aunz_bpay";
    PaymentMeansCodeEnum["AunzPostbillpay"] = "aunz_postbillpay";
    PaymentMeansCodeEnum["AunzUri"] = "aunz_uri";
    PaymentMeansCodeEnum["SeBankgiro"] = "se_bankgiro";
    PaymentMeansCodeEnum["SePlusgiro"] = "se_plusgiro";
    PaymentMeansCodeEnum["SgGiro"] = "sg_giro";
    PaymentMeansCodeEnum["SgCard"] = "sg_card";
    PaymentMeansCodeEnum["SgPaynow"] = "sg_paynow";
})(PaymentMeansCodeEnum || (PaymentMeansCodeEnum = {}));
// PaymentMeans
/**
 * A PaymentMeans is a way to pay the invoice.
**/
var PaymentMeans = /** @class */ (function (_super) {
    __extends(PaymentMeans, _super);
    function PaymentMeans() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], PaymentMeans.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branche_code" }),
        __metadata("design:type", String)
    ], PaymentMeans.prototype, "brancheCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PaymentMeans.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=holder" }),
        __metadata("design:type", String)
    ], PaymentMeans.prototype, "holder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mandate" }),
        __metadata("design:type", String)
    ], PaymentMeans.prototype, "mandate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], PaymentMeans.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentId" }),
        __metadata("design:type", String)
    ], PaymentMeans.prototype, "paymentId", void 0);
    return PaymentMeans;
}(SpeakeasyBase));
export { PaymentMeans };
