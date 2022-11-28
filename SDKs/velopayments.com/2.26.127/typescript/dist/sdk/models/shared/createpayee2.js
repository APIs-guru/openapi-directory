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
import { PayeeTypeEnum } from "./payeetypeenum";
var CreatePayee2Input = /** @class */ (function (_super) {
    __extends(CreatePayee2Input, _super);
    function CreatePayee2Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", CreatePayeeAddress2)
    ], CreatePayee2Input.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=challenge" }),
        __metadata("design:type", Challenge2)
    ], CreatePayee2Input.prototype, "challenge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company" }),
        __metadata("design:type", Company2)
    ], CreatePayee2Input.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CreatePayee2Input.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual" }),
        __metadata("design:type", CreateIndividual2)
    ], CreatePayee2Input.prototype, "individual", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], CreatePayee2Input.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannel" }),
        __metadata("design:type", CreatePaymentChannel2)
    ], CreatePayee2Input.prototype, "paymentChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteId" }),
        __metadata("design:type", String)
    ], CreatePayee2Input.prototype, "remoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreatePayee2Input.prototype, "type", void 0);
    return CreatePayee2Input;
}(SpeakeasyBase));
export { CreatePayee2Input };
