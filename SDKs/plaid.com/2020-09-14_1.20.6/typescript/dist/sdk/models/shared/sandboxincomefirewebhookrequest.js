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
export var SandboxIncomeFireWebhookRequestVerificationStatusEnum;
(function (SandboxIncomeFireWebhookRequestVerificationStatusEnum) {
    SandboxIncomeFireWebhookRequestVerificationStatusEnum["VerificationStatusProcessingComplete"] = "VERIFICATION_STATUS_PROCESSING_COMPLETE";
    SandboxIncomeFireWebhookRequestVerificationStatusEnum["VerificationStatusDocumentRejected"] = "VERIFICATION_STATUS_DOCUMENT_REJECTED";
    SandboxIncomeFireWebhookRequestVerificationStatusEnum["VerificationStatusProcessingFailed"] = "VERIFICATION_STATUS_PROCESSING_FAILED";
})(SandboxIncomeFireWebhookRequestVerificationStatusEnum || (SandboxIncomeFireWebhookRequestVerificationStatusEnum = {}));
// SandboxIncomeFireWebhookRequest
/**
 * SandboxIncomeFireWebhookRequest defines the request schema for `/sandbox/income/fire_webhook`
**/
var SandboxIncomeFireWebhookRequest = /** @class */ (function (_super) {
    __extends(SandboxIncomeFireWebhookRequest, _super);
    function SandboxIncomeFireWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], SandboxIncomeFireWebhookRequest.prototype, "clientId", void 0);
    __decorate([
        Metadata({ data: "json, name=income_verification_id" }),
        __metadata("design:type", String)
    ], SandboxIncomeFireWebhookRequest.prototype, "incomeVerificationId", void 0);
    __decorate([
        Metadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], SandboxIncomeFireWebhookRequest.prototype, "secret", void 0);
    __decorate([
        Metadata({ data: "json, name=verification_status" }),
        __metadata("design:type", String)
    ], SandboxIncomeFireWebhookRequest.prototype, "verificationStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=webhook" }),
        __metadata("design:type", String)
    ], SandboxIncomeFireWebhookRequest.prototype, "webhook", void 0);
    return SandboxIncomeFireWebhookRequest;
}(SpeakeasyBase));
export { SandboxIncomeFireWebhookRequest };
