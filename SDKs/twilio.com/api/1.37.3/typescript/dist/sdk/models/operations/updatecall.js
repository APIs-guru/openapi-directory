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
export var UpdateCallServerList = [
    "https://api.twilio.com",
];
var UpdateCallPathParams = /** @class */ (function (_super) {
    __extends(UpdateCallPathParams, _super);
    function UpdateCallPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateCallPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateCallPathParams.prototype, "sid", void 0);
    return UpdateCallPathParams;
}(SpeakeasyBase));
export { UpdateCallPathParams };
export var UpdateCallUpdateCallRequestFallbackMethodEnum;
(function (UpdateCallUpdateCallRequestFallbackMethodEnum) {
    UpdateCallUpdateCallRequestFallbackMethodEnum["Head"] = "HEAD";
    UpdateCallUpdateCallRequestFallbackMethodEnum["Get"] = "GET";
    UpdateCallUpdateCallRequestFallbackMethodEnum["Post"] = "POST";
    UpdateCallUpdateCallRequestFallbackMethodEnum["Patch"] = "PATCH";
    UpdateCallUpdateCallRequestFallbackMethodEnum["Put"] = "PUT";
    UpdateCallUpdateCallRequestFallbackMethodEnum["Delete"] = "DELETE";
})(UpdateCallUpdateCallRequestFallbackMethodEnum || (UpdateCallUpdateCallRequestFallbackMethodEnum = {}));
export var UpdateCallUpdateCallRequestMethodEnum;
(function (UpdateCallUpdateCallRequestMethodEnum) {
    UpdateCallUpdateCallRequestMethodEnum["Head"] = "HEAD";
    UpdateCallUpdateCallRequestMethodEnum["Get"] = "GET";
    UpdateCallUpdateCallRequestMethodEnum["Post"] = "POST";
    UpdateCallUpdateCallRequestMethodEnum["Patch"] = "PATCH";
    UpdateCallUpdateCallRequestMethodEnum["Put"] = "PUT";
    UpdateCallUpdateCallRequestMethodEnum["Delete"] = "DELETE";
})(UpdateCallUpdateCallRequestMethodEnum || (UpdateCallUpdateCallRequestMethodEnum = {}));
export var UpdateCallUpdateCallRequestStatusCallbackMethodEnum;
(function (UpdateCallUpdateCallRequestStatusCallbackMethodEnum) {
    UpdateCallUpdateCallRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    UpdateCallUpdateCallRequestStatusCallbackMethodEnum["Get"] = "GET";
    UpdateCallUpdateCallRequestStatusCallbackMethodEnum["Post"] = "POST";
    UpdateCallUpdateCallRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    UpdateCallUpdateCallRequestStatusCallbackMethodEnum["Put"] = "PUT";
    UpdateCallUpdateCallRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateCallUpdateCallRequestStatusCallbackMethodEnum || (UpdateCallUpdateCallRequestStatusCallbackMethodEnum = {}));
var UpdateCallUpdateCallRequest = /** @class */ (function (_super) {
    __extends(UpdateCallUpdateCallRequest, _super);
    function UpdateCallUpdateCallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateCallUpdateCallRequest.prototype, "fallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateCallUpdateCallRequest.prototype, "fallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Method;" }),
        __metadata("design:type", String)
    ], UpdateCallUpdateCallRequest.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateCallUpdateCallRequest.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateCallUpdateCallRequest.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateCallUpdateCallRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=TimeLimit;" }),
        __metadata("design:type", Number)
    ], UpdateCallUpdateCallRequest.prototype, "timeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Twiml;" }),
        __metadata("design:type", String)
    ], UpdateCallUpdateCallRequest.prototype, "twiml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Url;" }),
        __metadata("design:type", String)
    ], UpdateCallUpdateCallRequest.prototype, "url", void 0);
    return UpdateCallUpdateCallRequest;
}(SpeakeasyBase));
export { UpdateCallUpdateCallRequest };
var UpdateCallSecurity = /** @class */ (function (_super) {
    __extends(UpdateCallSecurity, _super);
    function UpdateCallSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateCallSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateCallSecurity;
}(SpeakeasyBase));
export { UpdateCallSecurity };
var UpdateCallRequest = /** @class */ (function (_super) {
    __extends(UpdateCallRequest, _super);
    function UpdateCallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCallRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCallPathParams)
    ], UpdateCallRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateCallUpdateCallRequest)
    ], UpdateCallRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCallSecurity)
    ], UpdateCallRequest.prototype, "security", void 0);
    return UpdateCallRequest;
}(SpeakeasyBase));
export { UpdateCallRequest };
var UpdateCallResponse = /** @class */ (function (_super) {
    __extends(UpdateCallResponse, _super);
    function UpdateCallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCallResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateCallResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountCall)
    ], UpdateCallResponse.prototype, "apiV2010AccountCall", void 0);
    return UpdateCallResponse;
}(SpeakeasyBase));
export { UpdateCallResponse };
