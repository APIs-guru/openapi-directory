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
import * as shared from "../shared";
export var CREATEHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS = [
    "https://preview.twilio.com",
];
export var CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum;
(function (CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum) {
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum["Head"] = "HEAD";
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum["Get"] = "GET";
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum["Post"] = "POST";
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum["Patch"] = "PATCH";
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum["Put"] = "PUT";
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum["Delete"] = "DELETE";
})(CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum || (CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum = {}));
export var CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum;
(function (CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum) {
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum["Head"] = "HEAD";
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum["Get"] = "GET";
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum["Post"] = "POST";
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum["Patch"] = "PATCH";
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum["Put"] = "PUT";
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum["Delete"] = "DELETE";
})(CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum || (CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum = {}));
export var CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum;
(function (CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum) {
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum || (CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum = {}));
var CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest = /** @class */ (function (_super) {
    __extends(CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest, _super);
    function CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AccountSid;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "form, name=AddressSid;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "addressSid", void 0);
    __decorate([
        Metadata({ data: "form, name=CcEmails;" }),
        __metadata("design:type", Array)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "ccEmails", void 0);
    __decorate([
        Metadata({ data: "form, name=Email;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=PhoneNumber;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "phoneNumber", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsApplicationSid;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "smsApplicationSid", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsCapability;" }),
        __metadata("design:type", Boolean)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "smsCapability", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsFallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "smsFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsFallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "smsFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsMethod;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "smsMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsUrl;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "smsUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "statusCallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "uniqueName", void 0);
    __decorate([
        Metadata({ data: "form, name=VerificationDocumentSid;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "verificationDocumentSid", void 0);
    __decorate([
        Metadata({ data: "form, name=VerificationType;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest.prototype, "verificationType", void 0);
    return CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest;
}(SpeakeasyBase));
export { CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest };
var CreateHostedNumbersHostedNumberOrderSecurity = /** @class */ (function (_super) {
    __extends(CreateHostedNumbersHostedNumberOrderSecurity, _super);
    function CreateHostedNumbersHostedNumberOrderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateHostedNumbersHostedNumberOrderSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateHostedNumbersHostedNumberOrderSecurity;
}(SpeakeasyBase));
export { CreateHostedNumbersHostedNumberOrderSecurity };
var CreateHostedNumbersHostedNumberOrderRequest = /** @class */ (function (_super) {
    __extends(CreateHostedNumbersHostedNumberOrderRequest, _super);
    function CreateHostedNumbersHostedNumberOrderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest)
    ], CreateHostedNumbersHostedNumberOrderRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateHostedNumbersHostedNumberOrderSecurity)
    ], CreateHostedNumbersHostedNumberOrderRequest.prototype, "security", void 0);
    return CreateHostedNumbersHostedNumberOrderRequest;
}(SpeakeasyBase));
export { CreateHostedNumbersHostedNumberOrderRequest };
var CreateHostedNumbersHostedNumberOrderResponse = /** @class */ (function (_super) {
    __extends(CreateHostedNumbersHostedNumberOrderResponse, _super);
    function CreateHostedNumbersHostedNumberOrderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateHostedNumbersHostedNumberOrderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateHostedNumbersHostedNumberOrderResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewHostedNumbersHostedNumberOrder)
    ], CreateHostedNumbersHostedNumberOrderResponse.prototype, "previewHostedNumbersHostedNumberOrder", void 0);
    return CreateHostedNumbersHostedNumberOrderResponse;
}(SpeakeasyBase));
export { CreateHostedNumbersHostedNumberOrderResponse };
