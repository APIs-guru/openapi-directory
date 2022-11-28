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
var RejectedPaymentV3 = /** @class */ (function (_super) {
    __extends(RejectedPaymentV3, _super);
    function RejectedPaymentV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], RejectedPaymentV3.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyType" }),
        __metadata("design:type", String)
    ], RejectedPaymentV3.prototype, "currencyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineNumber" }),
        __metadata("design:type", Number)
    ], RejectedPaymentV3.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RejectedPaymentV3.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentMetadata" }),
        __metadata("design:type", String)
    ], RejectedPaymentV3.prototype, "paymentMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payorPaymentId" }),
        __metadata("design:type", String)
    ], RejectedPaymentV3.prototype, "payorPaymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], RejectedPaymentV3.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reasonCode" }),
        __metadata("design:type", String)
    ], RejectedPaymentV3.prototype, "reasonCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteId" }),
        __metadata("design:type", String)
    ], RejectedPaymentV3.prototype, "remoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteSystemId" }),
        __metadata("design:type", String)
    ], RejectedPaymentV3.prototype, "remoteSystemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceAccountName" }),
        __metadata("design:type", String)
    ], RejectedPaymentV3.prototype, "sourceAccountName", void 0);
    return RejectedPaymentV3;
}(SpeakeasyBase));
export { RejectedPaymentV3 };
