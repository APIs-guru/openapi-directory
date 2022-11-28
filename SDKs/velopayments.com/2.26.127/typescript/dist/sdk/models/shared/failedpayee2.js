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
import { CreatePayeeAddress2 } from "./createpayeeaddress2";
import { Challenge2 } from "./challenge2";
import { Company2 } from "./company2";
import { CreateIndividual2 } from "./createindividual2";
import { CreatePaymentChannel2 } from "./createpaymentchannel2";
import { PayeePayorRef } from "./payeepayorref";
import { PayeeTypeEnum } from "./payeetypeenum";
var FailedPayee2 = /** @class */ (function (_super) {
    __extends(FailedPayee2, _super);
    function FailedPayee2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", CreatePayeeAddress2)
    ], FailedPayee2.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=challenge" }),
        __metadata("design:type", Challenge2)
    ], FailedPayee2.prototype, "challenge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company" }),
        __metadata("design:type", Company2)
    ], FailedPayee2.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], FailedPayee2.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual" }),
        __metadata("design:type", CreateIndividual2)
    ], FailedPayee2.prototype, "individual", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], FailedPayee2.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payeeId" }),
        __metadata("design:type", String)
    ], FailedPayee2.prototype, "payeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannel" }),
        __metadata("design:type", CreatePaymentChannel2)
    ], FailedPayee2.prototype, "paymentChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payorRefs", elemType: PayeePayorRef }),
        __metadata("design:type", Array)
    ], FailedPayee2.prototype, "payorRefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteId" }),
        __metadata("design:type", String)
    ], FailedPayee2.prototype, "remoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], FailedPayee2.prototype, "type", void 0);
    return FailedPayee2;
}(SpeakeasyBase));
export { FailedPayee2 };
