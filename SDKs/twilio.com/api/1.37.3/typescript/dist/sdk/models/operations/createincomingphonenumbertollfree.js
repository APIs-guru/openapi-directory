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
import * as shared from "../shared";
export var CreateIncomingPhoneNumberTollFreeServerList = [
    "https://api.twilio.com",
];
var CreateIncomingPhoneNumberTollFreePathParams = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberTollFreePathParams, _super);
    function CreateIncomingPhoneNumberTollFreePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreePathParams.prototype, "accountSid", void 0);
    return CreateIncomingPhoneNumberTollFreePathParams;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberTollFreePathParams };
export var CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum;
(function (CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum) {
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum || (CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum = {}));
export var CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum;
(function (CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum) {
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum || (CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum = {}));
export var CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum;
(function (CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum) {
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum || (CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum = {}));
export var CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum;
(function (CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum) {
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum || (CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum = {}));
export var CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum;
(function (CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum) {
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum || (CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum = {}));
var CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest, _super);
    function CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AddressSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "addressSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ApiVersion;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=BundleSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "bundleSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EmergencyAddressSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "emergencyAddressSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EmergencyStatus;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "emergencyStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=IdentitySid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "identitySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PhoneNumber;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsApplicationSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "smsApplicationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsFallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "smsFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsFallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "smsFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "smsMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsUrl;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "smsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=TrunkSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "trunkSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceApplicationSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "voiceApplicationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceCallerIdLookup;" }),
        __metadata("design:type", Boolean)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "voiceCallerIdLookup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceFallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceFallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "voiceMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceReceiveMode;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "voiceReceiveMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceUrl;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest.prototype, "voiceUrl", void 0);
    return CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest };
var CreateIncomingPhoneNumberTollFreeSecurity = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberTollFreeSecurity, _super);
    function CreateIncomingPhoneNumberTollFreeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateIncomingPhoneNumberTollFreeSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateIncomingPhoneNumberTollFreeSecurity;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberTollFreeSecurity };
var CreateIncomingPhoneNumberTollFreeRequest = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberTollFreeRequest, _super);
    function CreateIncomingPhoneNumberTollFreeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateIncomingPhoneNumberTollFreePathParams)
    ], CreateIncomingPhoneNumberTollFreeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest)
    ], CreateIncomingPhoneNumberTollFreeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateIncomingPhoneNumberTollFreeSecurity)
    ], CreateIncomingPhoneNumberTollFreeRequest.prototype, "security", void 0);
    return CreateIncomingPhoneNumberTollFreeRequest;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberTollFreeRequest };
var CreateIncomingPhoneNumberTollFreeResponse = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberTollFreeResponse, _super);
    function CreateIncomingPhoneNumberTollFreeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberTollFreeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateIncomingPhoneNumberTollFreeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree)
    ], CreateIncomingPhoneNumberTollFreeResponse.prototype, "apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree", void 0);
    return CreateIncomingPhoneNumberTollFreeResponse;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberTollFreeResponse };
