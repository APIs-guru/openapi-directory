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
export var UpdateWirelessSimServerList = [
    "https://preview.twilio.com",
];
var UpdateWirelessSimPathParams = /** @class */ (function (_super) {
    __extends(UpdateWirelessSimPathParams, _super);
    function UpdateWirelessSimPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimPathParams.prototype, "sid", void 0);
    return UpdateWirelessSimPathParams;
}(SpeakeasyBase));
export { UpdateWirelessSimPathParams };
export var UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum;
(function (UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum) {
    UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum["Head"] = "HEAD";
    UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum["Get"] = "GET";
    UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum["Post"] = "POST";
    UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum["Patch"] = "PATCH";
    UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum["Put"] = "PUT";
    UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum || (UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum = {}));
export var UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum;
(function (UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum) {
    UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum["Head"] = "HEAD";
    UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum["Get"] = "GET";
    UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum["Post"] = "POST";
    UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum["Patch"] = "PATCH";
    UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum["Put"] = "PUT";
    UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum["Delete"] = "DELETE";
})(UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum || (UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum = {}));
export var UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum;
(function (UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum) {
    UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum["Head"] = "HEAD";
    UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum["Get"] = "GET";
    UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum["Post"] = "POST";
    UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum["Patch"] = "PATCH";
    UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum["Put"] = "PUT";
    UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum["Delete"] = "DELETE";
})(UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum || (UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum = {}));
export var UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum;
(function (UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum) {
    UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum["Head"] = "HEAD";
    UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum["Get"] = "GET";
    UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum["Post"] = "POST";
    UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum["Patch"] = "PATCH";
    UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum["Put"] = "PUT";
    UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum || (UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum = {}));
export var UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum;
(function (UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum) {
    UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum["Head"] = "HEAD";
    UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum["Get"] = "GET";
    UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum["Post"] = "POST";
    UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum["Patch"] = "PATCH";
    UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum["Put"] = "PUT";
    UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum["Delete"] = "DELETE";
})(UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum || (UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum = {}));
var UpdateWirelessSimUpdateWirelessSimRequest = /** @class */ (function (_super) {
    __extends(UpdateWirelessSimUpdateWirelessSimRequest, _super);
    function UpdateWirelessSimUpdateWirelessSimRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimUpdateWirelessSimRequest.prototype, "callbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimUpdateWirelessSimRequest.prototype, "callbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CommandsCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimUpdateWirelessSimRequest.prototype, "commandsCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CommandsCallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimUpdateWirelessSimRequest.prototype, "commandsCallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimUpdateWirelessSimRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RatePlan;" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimUpdateWirelessSimRequest.prototype, "ratePlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsFallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimUpdateWirelessSimRequest.prototype, "smsFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsFallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimUpdateWirelessSimRequest.prototype, "smsFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsMethod;" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimUpdateWirelessSimRequest.prototype, "smsMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsUrl;" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimUpdateWirelessSimRequest.prototype, "smsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimUpdateWirelessSimRequest.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimUpdateWirelessSimRequest.prototype, "uniqueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceFallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimUpdateWirelessSimRequest.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceFallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimUpdateWirelessSimRequest.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceMethod;" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimUpdateWirelessSimRequest.prototype, "voiceMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceUrl;" }),
        __metadata("design:type", String)
    ], UpdateWirelessSimUpdateWirelessSimRequest.prototype, "voiceUrl", void 0);
    return UpdateWirelessSimUpdateWirelessSimRequest;
}(SpeakeasyBase));
export { UpdateWirelessSimUpdateWirelessSimRequest };
var UpdateWirelessSimSecurity = /** @class */ (function (_super) {
    __extends(UpdateWirelessSimSecurity, _super);
    function UpdateWirelessSimSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateWirelessSimSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateWirelessSimSecurity;
}(SpeakeasyBase));
export { UpdateWirelessSimSecurity };
var UpdateWirelessSimRequest = /** @class */ (function (_super) {
    __extends(UpdateWirelessSimRequest, _super);
    function UpdateWirelessSimRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateWirelessSimRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWirelessSimPathParams)
    ], UpdateWirelessSimRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateWirelessSimUpdateWirelessSimRequest)
    ], UpdateWirelessSimRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWirelessSimSecurity)
    ], UpdateWirelessSimRequest.prototype, "security", void 0);
    return UpdateWirelessSimRequest;
}(SpeakeasyBase));
export { UpdateWirelessSimRequest };
var UpdateWirelessSimResponse = /** @class */ (function (_super) {
    __extends(UpdateWirelessSimResponse, _super);
    function UpdateWirelessSimResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateWirelessSimResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateWirelessSimResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewWirelessSim)
    ], UpdateWirelessSimResponse.prototype, "previewWirelessSim", void 0);
    return UpdateWirelessSimResponse;
}(SpeakeasyBase));
export { UpdateWirelessSimResponse };
