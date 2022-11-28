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
export var CreateValidationRequestServerList = [
    "https://api.twilio.com",
];
var CreateValidationRequestPathParams = /** @class */ (function (_super) {
    __extends(CreateValidationRequestPathParams, _super);
    function CreateValidationRequestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateValidationRequestPathParams.prototype, "accountSid", void 0);
    return CreateValidationRequestPathParams;
}(SpeakeasyBase));
export { CreateValidationRequestPathParams };
export var CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum;
(function (CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum) {
    CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum || (CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum = {}));
var CreateValidationRequestCreateValidationRequestRequest = /** @class */ (function (_super) {
    __extends(CreateValidationRequestCreateValidationRequestRequest, _super);
    function CreateValidationRequestCreateValidationRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallDelay;" }),
        __metadata("design:type", Number)
    ], CreateValidationRequestCreateValidationRequestRequest.prototype, "callDelay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Extension;" }),
        __metadata("design:type", String)
    ], CreateValidationRequestCreateValidationRequestRequest.prototype, "extension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateValidationRequestCreateValidationRequestRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PhoneNumber;" }),
        __metadata("design:type", String)
    ], CreateValidationRequestCreateValidationRequestRequest.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateValidationRequestCreateValidationRequestRequest.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateValidationRequestCreateValidationRequestRequest.prototype, "statusCallbackMethod", void 0);
    return CreateValidationRequestCreateValidationRequestRequest;
}(SpeakeasyBase));
export { CreateValidationRequestCreateValidationRequestRequest };
var CreateValidationRequestSecurity = /** @class */ (function (_super) {
    __extends(CreateValidationRequestSecurity, _super);
    function CreateValidationRequestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateValidationRequestSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateValidationRequestSecurity;
}(SpeakeasyBase));
export { CreateValidationRequestSecurity };
var CreateValidationRequestRequest = /** @class */ (function (_super) {
    __extends(CreateValidationRequestRequest, _super);
    function CreateValidationRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateValidationRequestRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateValidationRequestPathParams)
    ], CreateValidationRequestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateValidationRequestCreateValidationRequestRequest)
    ], CreateValidationRequestRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateValidationRequestSecurity)
    ], CreateValidationRequestRequest.prototype, "security", void 0);
    return CreateValidationRequestRequest;
}(SpeakeasyBase));
export { CreateValidationRequestRequest };
var CreateValidationRequestResponse = /** @class */ (function (_super) {
    __extends(CreateValidationRequestResponse, _super);
    function CreateValidationRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateValidationRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateValidationRequestResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountValidationRequest)
    ], CreateValidationRequestResponse.prototype, "apiV2010AccountValidationRequest", void 0);
    return CreateValidationRequestResponse;
}(SpeakeasyBase));
export { CreateValidationRequestResponse };
