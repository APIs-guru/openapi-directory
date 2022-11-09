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
export var UPDATESHORTCODE_SERVERS = [
    "https://api.twilio.com",
];
var UpdateShortCodePathParams = /** @class */ (function (_super) {
    __extends(UpdateShortCodePathParams, _super);
    function UpdateShortCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateShortCodePathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateShortCodePathParams.prototype, "sid", void 0);
    return UpdateShortCodePathParams;
}(SpeakeasyBase));
export { UpdateShortCodePathParams };
export var UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum;
(function (UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum) {
    UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum["Head"] = "HEAD";
    UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum["Get"] = "GET";
    UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum["Post"] = "POST";
    UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum["Patch"] = "PATCH";
    UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum["Put"] = "PUT";
    UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum["Delete"] = "DELETE";
})(UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum || (UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum = {}));
export var UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum;
(function (UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum) {
    UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum["Head"] = "HEAD";
    UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum["Get"] = "GET";
    UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum["Post"] = "POST";
    UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum["Patch"] = "PATCH";
    UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum["Put"] = "PUT";
    UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum["Delete"] = "DELETE";
})(UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum || (UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum = {}));
var UpdateShortCodeUpdateShortCodeRequest = /** @class */ (function (_super) {
    __extends(UpdateShortCodeUpdateShortCodeRequest, _super);
    function UpdateShortCodeUpdateShortCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=ApiVersion;" }),
        __metadata("design:type", String)
    ], UpdateShortCodeUpdateShortCodeRequest.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateShortCodeUpdateShortCodeRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsFallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateShortCodeUpdateShortCodeRequest.prototype, "smsFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsFallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateShortCodeUpdateShortCodeRequest.prototype, "smsFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsMethod;" }),
        __metadata("design:type", String)
    ], UpdateShortCodeUpdateShortCodeRequest.prototype, "smsMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsUrl;" }),
        __metadata("design:type", String)
    ], UpdateShortCodeUpdateShortCodeRequest.prototype, "smsUrl", void 0);
    return UpdateShortCodeUpdateShortCodeRequest;
}(SpeakeasyBase));
export { UpdateShortCodeUpdateShortCodeRequest };
var UpdateShortCodeSecurity = /** @class */ (function (_super) {
    __extends(UpdateShortCodeSecurity, _super);
    function UpdateShortCodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateShortCodeSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateShortCodeSecurity;
}(SpeakeasyBase));
export { UpdateShortCodeSecurity };
var UpdateShortCodeRequest = /** @class */ (function (_super) {
    __extends(UpdateShortCodeRequest, _super);
    function UpdateShortCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateShortCodeRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateShortCodePathParams)
    ], UpdateShortCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateShortCodeUpdateShortCodeRequest)
    ], UpdateShortCodeRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateShortCodeSecurity)
    ], UpdateShortCodeRequest.prototype, "security", void 0);
    return UpdateShortCodeRequest;
}(SpeakeasyBase));
export { UpdateShortCodeRequest };
var UpdateShortCodeResponse = /** @class */ (function (_super) {
    __extends(UpdateShortCodeResponse, _super);
    function UpdateShortCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateShortCodeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateShortCodeResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountShortCode)
    ], UpdateShortCodeResponse.prototype, "apiV2010AccountShortCode", void 0);
    return UpdateShortCodeResponse;
}(SpeakeasyBase));
export { UpdateShortCodeResponse };
