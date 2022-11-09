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
export var CREATEBYOCTRUNK_SERVERS = [
    "https://voice.twilio.com",
];
export var CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum;
(function (CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum) {
    CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum || (CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum = {}));
export var CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum;
(function (CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum) {
    CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum["Head"] = "HEAD";
    CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum["Get"] = "GET";
    CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum["Post"] = "POST";
    CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum["Patch"] = "PATCH";
    CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum["Put"] = "PUT";
    CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum || (CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum = {}));
export var CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum;
(function (CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum) {
    CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum["Head"] = "HEAD";
    CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum["Get"] = "GET";
    CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum["Post"] = "POST";
    CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum["Patch"] = "PATCH";
    CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum["Put"] = "PUT";
    CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum["Delete"] = "DELETE";
})(CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum || (CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum = {}));
var CreateByocTrunkCreateByocTrunkRequest = /** @class */ (function (_super) {
    __extends(CreateByocTrunkCreateByocTrunkRequest, _super);
    function CreateByocTrunkCreateByocTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=CnamLookupEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "cnamLookupEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=ConnectionPolicySid;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "connectionPolicySid", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=FromDomainSid;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "fromDomainSid", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "statusCallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceFallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceFallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceMethod;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "voiceMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceUrl;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "voiceUrl", void 0);
    return CreateByocTrunkCreateByocTrunkRequest;
}(SpeakeasyBase));
export { CreateByocTrunkCreateByocTrunkRequest };
var CreateByocTrunkSecurity = /** @class */ (function (_super) {
    __extends(CreateByocTrunkSecurity, _super);
    function CreateByocTrunkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateByocTrunkSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateByocTrunkSecurity;
}(SpeakeasyBase));
export { CreateByocTrunkSecurity };
var CreateByocTrunkRequest = /** @class */ (function (_super) {
    __extends(CreateByocTrunkRequest, _super);
    function CreateByocTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateByocTrunkRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateByocTrunkCreateByocTrunkRequest)
    ], CreateByocTrunkRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateByocTrunkSecurity)
    ], CreateByocTrunkRequest.prototype, "security", void 0);
    return CreateByocTrunkRequest;
}(SpeakeasyBase));
export { CreateByocTrunkRequest };
var CreateByocTrunkResponse = /** @class */ (function (_super) {
    __extends(CreateByocTrunkResponse, _super);
    function CreateByocTrunkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateByocTrunkResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateByocTrunkResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VoiceV1ByocTrunk)
    ], CreateByocTrunkResponse.prototype, "voiceV1ByocTrunk", void 0);
    return CreateByocTrunkResponse;
}(SpeakeasyBase));
export { CreateByocTrunkResponse };
