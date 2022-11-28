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
import { CreatePayeeAddress } from "./createpayeeaddress";
import { Challenge } from "./challenge";
import { Company } from "./company";
import { CreateIndividual } from "./createindividual";
import { CreatePaymentChannel } from "./createpaymentchannel";
import { PayeePayorRefV3 } from "./payeepayorrefv3";
import { PayeeTypeEnum } from "./payeetypeenum";
var FailedPayee = /** @class */ (function (_super) {
    __extends(FailedPayee, _super);
    function FailedPayee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", CreatePayeeAddress)
    ], FailedPayee.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=challenge" }),
        __metadata("design:type", Challenge)
    ], FailedPayee.prototype, "challenge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company" }),
        __metadata("design:type", Company)
    ], FailedPayee.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], FailedPayee.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual" }),
        __metadata("design:type", CreateIndividual)
    ], FailedPayee.prototype, "individual", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], FailedPayee.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payeeId" }),
        __metadata("design:type", String)
    ], FailedPayee.prototype, "payeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannel" }),
        __metadata("design:type", CreatePaymentChannel)
    ], FailedPayee.prototype, "paymentChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payorRefs", elemType: PayeePayorRefV3 }),
        __metadata("design:type", Array)
    ], FailedPayee.prototype, "payorRefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteId" }),
        __metadata("design:type", String)
    ], FailedPayee.prototype, "remoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], FailedPayee.prototype, "type", void 0);
    return FailedPayee;
}(SpeakeasyBase));
export { FailedPayee };
