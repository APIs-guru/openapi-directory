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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VerificationCheckEnumChannelEnum } from "./verificationcheckenumchannelenum";
var VerifyV2ServiceVerificationCheck = /** @class */ (function (_super) {
    __extends(VerifyV2ServiceVerificationCheck, _super);
    function VerifyV2ServiceVerificationCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceVerificationCheck.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceVerificationCheck.prototype, "amount", void 0);
    __decorate([
        Metadata({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceVerificationCheck.prototype, "channel", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], VerifyV2ServiceVerificationCheck.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], VerifyV2ServiceVerificationCheck.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=payee" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceVerificationCheck.prototype, "payee", void 0);
    __decorate([
        Metadata({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceVerificationCheck.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceVerificationCheck.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=sna_attempts_error_codes" }),
        __metadata("design:type", Array)
    ], VerifyV2ServiceVerificationCheck.prototype, "snaAttemptsErrorCodes", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceVerificationCheck.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceVerificationCheck.prototype, "to", void 0);
    __decorate([
        Metadata({ data: "json, name=valid" }),
        __metadata("design:type", Boolean)
    ], VerifyV2ServiceVerificationCheck.prototype, "valid", void 0);
    return VerifyV2ServiceVerificationCheck;
}(SpeakeasyBase));
export { VerifyV2ServiceVerificationCheck };
