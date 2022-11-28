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
import { VerificationAttemptEnumChannelsEnum } from "./verificationattemptenumchannelsenum";
import { VerificationAttemptEnumConversionStatusEnum } from "./verificationattemptenumconversionstatusenum";
var VerifyV2VerificationAttempt = /** @class */ (function (_super) {
    __extends(VerifyV2VerificationAttempt, _super);
    function VerifyV2VerificationAttempt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], VerifyV2VerificationAttempt.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], VerifyV2VerificationAttempt.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel_data" }),
        __metadata("design:type", Object)
    ], VerifyV2VerificationAttempt.prototype, "channelData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversion_status" }),
        __metadata("design:type", String)
    ], VerifyV2VerificationAttempt.prototype, "conversionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], VerifyV2VerificationAttempt.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], VerifyV2VerificationAttempt.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Object)
    ], VerifyV2VerificationAttempt.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], VerifyV2VerificationAttempt.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], VerifyV2VerificationAttempt.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], VerifyV2VerificationAttempt.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verification_sid" }),
        __metadata("design:type", String)
    ], VerifyV2VerificationAttempt.prototype, "verificationSid", void 0);
    return VerifyV2VerificationAttempt;
}(SpeakeasyBase));
export { VerifyV2VerificationAttempt };
