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
export var UpdateSimServerList = [
    "https://wireless.twilio.com",
];
var UpdateSimPathParams = /** @class */ (function (_super) {
    __extends(UpdateSimPathParams, _super);
    function UpdateSimPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSimPathParams.prototype, "sid", void 0);
    return UpdateSimPathParams;
}(SpeakeasyBase));
export { UpdateSimPathParams };
export var UpdateSimUpdateSimRequestCallbackMethodEnum;
(function (UpdateSimUpdateSimRequestCallbackMethodEnum) {
    UpdateSimUpdateSimRequestCallbackMethodEnum["Head"] = "HEAD";
    UpdateSimUpdateSimRequestCallbackMethodEnum["Get"] = "GET";
    UpdateSimUpdateSimRequestCallbackMethodEnum["Post"] = "POST";
    UpdateSimUpdateSimRequestCallbackMethodEnum["Patch"] = "PATCH";
    UpdateSimUpdateSimRequestCallbackMethodEnum["Put"] = "PUT";
    UpdateSimUpdateSimRequestCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateSimUpdateSimRequestCallbackMethodEnum || (UpdateSimUpdateSimRequestCallbackMethodEnum = {}));
export var UpdateSimUpdateSimRequestCommandsCallbackMethodEnum;
(function (UpdateSimUpdateSimRequestCommandsCallbackMethodEnum) {
    UpdateSimUpdateSimRequestCommandsCallbackMethodEnum["Head"] = "HEAD";
    UpdateSimUpdateSimRequestCommandsCallbackMethodEnum["Get"] = "GET";
    UpdateSimUpdateSimRequestCommandsCallbackMethodEnum["Post"] = "POST";
    UpdateSimUpdateSimRequestCommandsCallbackMethodEnum["Patch"] = "PATCH";
    UpdateSimUpdateSimRequestCommandsCallbackMethodEnum["Put"] = "PUT";
    UpdateSimUpdateSimRequestCommandsCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateSimUpdateSimRequestCommandsCallbackMethodEnum || (UpdateSimUpdateSimRequestCommandsCallbackMethodEnum = {}));
export var UpdateSimUpdateSimRequestSmsFallbackMethodEnum;
(function (UpdateSimUpdateSimRequestSmsFallbackMethodEnum) {
    UpdateSimUpdateSimRequestSmsFallbackMethodEnum["Head"] = "HEAD";
    UpdateSimUpdateSimRequestSmsFallbackMethodEnum["Get"] = "GET";
    UpdateSimUpdateSimRequestSmsFallbackMethodEnum["Post"] = "POST";
    UpdateSimUpdateSimRequestSmsFallbackMethodEnum["Patch"] = "PATCH";
    UpdateSimUpdateSimRequestSmsFallbackMethodEnum["Put"] = "PUT";
    UpdateSimUpdateSimRequestSmsFallbackMethodEnum["Delete"] = "DELETE";
})(UpdateSimUpdateSimRequestSmsFallbackMethodEnum || (UpdateSimUpdateSimRequestSmsFallbackMethodEnum = {}));
export var UpdateSimUpdateSimRequestSmsMethodEnum;
(function (UpdateSimUpdateSimRequestSmsMethodEnum) {
    UpdateSimUpdateSimRequestSmsMethodEnum["Head"] = "HEAD";
    UpdateSimUpdateSimRequestSmsMethodEnum["Get"] = "GET";
    UpdateSimUpdateSimRequestSmsMethodEnum["Post"] = "POST";
    UpdateSimUpdateSimRequestSmsMethodEnum["Patch"] = "PATCH";
    UpdateSimUpdateSimRequestSmsMethodEnum["Put"] = "PUT";
    UpdateSimUpdateSimRequestSmsMethodEnum["Delete"] = "DELETE";
})(UpdateSimUpdateSimRequestSmsMethodEnum || (UpdateSimUpdateSimRequestSmsMethodEnum = {}));
export var UpdateSimUpdateSimRequestVoiceFallbackMethodEnum;
(function (UpdateSimUpdateSimRequestVoiceFallbackMethodEnum) {
    UpdateSimUpdateSimRequestVoiceFallbackMethodEnum["Head"] = "HEAD";
    UpdateSimUpdateSimRequestVoiceFallbackMethodEnum["Get"] = "GET";
    UpdateSimUpdateSimRequestVoiceFallbackMethodEnum["Post"] = "POST";
    UpdateSimUpdateSimRequestVoiceFallbackMethodEnum["Patch"] = "PATCH";
    UpdateSimUpdateSimRequestVoiceFallbackMethodEnum["Put"] = "PUT";
    UpdateSimUpdateSimRequestVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(UpdateSimUpdateSimRequestVoiceFallbackMethodEnum || (UpdateSimUpdateSimRequestVoiceFallbackMethodEnum = {}));
export var UpdateSimUpdateSimRequestVoiceMethodEnum;
(function (UpdateSimUpdateSimRequestVoiceMethodEnum) {
    UpdateSimUpdateSimRequestVoiceMethodEnum["Head"] = "HEAD";
    UpdateSimUpdateSimRequestVoiceMethodEnum["Get"] = "GET";
    UpdateSimUpdateSimRequestVoiceMethodEnum["Post"] = "POST";
    UpdateSimUpdateSimRequestVoiceMethodEnum["Patch"] = "PATCH";
    UpdateSimUpdateSimRequestVoiceMethodEnum["Put"] = "PUT";
    UpdateSimUpdateSimRequestVoiceMethodEnum["Delete"] = "DELETE";
})(UpdateSimUpdateSimRequestVoiceMethodEnum || (UpdateSimUpdateSimRequestVoiceMethodEnum = {}));
var UpdateSimUpdateSimRequest = /** @class */ (function (_super) {
    __extends(UpdateSimUpdateSimRequest, _super);
    function UpdateSimUpdateSimRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AccountSid;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "callbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "callbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CommandsCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "commandsCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CommandsCallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "commandsCallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RatePlan;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "ratePlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ResetStatus;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "resetStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsFallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "smsFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsFallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "smsFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsMethod;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "smsMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsUrl;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "smsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "uniqueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceFallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceFallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceMethod;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "voiceMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceUrl;" }),
        __metadata("design:type", String)
    ], UpdateSimUpdateSimRequest.prototype, "voiceUrl", void 0);
    return UpdateSimUpdateSimRequest;
}(SpeakeasyBase));
export { UpdateSimUpdateSimRequest };
var UpdateSimSecurity = /** @class */ (function (_super) {
    __extends(UpdateSimSecurity, _super);
    function UpdateSimSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSimSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSimSecurity;
}(SpeakeasyBase));
export { UpdateSimSecurity };
var UpdateSimRequest = /** @class */ (function (_super) {
    __extends(UpdateSimRequest, _super);
    function UpdateSimRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSimRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSimPathParams)
    ], UpdateSimRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSimUpdateSimRequest)
    ], UpdateSimRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSimSecurity)
    ], UpdateSimRequest.prototype, "security", void 0);
    return UpdateSimRequest;
}(SpeakeasyBase));
export { UpdateSimRequest };
var UpdateSimResponse = /** @class */ (function (_super) {
    __extends(UpdateSimResponse, _super);
    function UpdateSimResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSimResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSimResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WirelessV1Sim)
    ], UpdateSimResponse.prototype, "wirelessV1Sim", void 0);
    return UpdateSimResponse;
}(SpeakeasyBase));
export { UpdateSimResponse };
