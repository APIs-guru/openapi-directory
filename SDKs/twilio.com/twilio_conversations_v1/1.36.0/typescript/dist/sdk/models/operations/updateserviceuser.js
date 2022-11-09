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
export var UPDATESERVICEUSER_SERVERS = [
    "https://conversations.twilio.com",
];
var UpdateServiceUserPathParams = /** @class */ (function (_super) {
    __extends(UpdateServiceUserPathParams, _super);
    function UpdateServiceUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], UpdateServiceUserPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateServiceUserPathParams.prototype, "sid", void 0);
    return UpdateServiceUserPathParams;
}(SpeakeasyBase));
export { UpdateServiceUserPathParams };
var UpdateServiceUserHeaders = /** @class */ (function (_super) {
    __extends(UpdateServiceUserHeaders, _super);
    function UpdateServiceUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], UpdateServiceUserHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return UpdateServiceUserHeaders;
}(SpeakeasyBase));
export { UpdateServiceUserHeaders };
var UpdateServiceUserUpdateServiceUserRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceUserUpdateServiceUserRequest, _super);
    function UpdateServiceUserUpdateServiceUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], UpdateServiceUserUpdateServiceUserRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateServiceUserUpdateServiceUserRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=RoleSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceUserUpdateServiceUserRequest.prototype, "roleSid", void 0);
    return UpdateServiceUserUpdateServiceUserRequest;
}(SpeakeasyBase));
export { UpdateServiceUserUpdateServiceUserRequest };
var UpdateServiceUserSecurity = /** @class */ (function (_super) {
    __extends(UpdateServiceUserSecurity, _super);
    function UpdateServiceUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateServiceUserSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateServiceUserSecurity;
}(SpeakeasyBase));
export { UpdateServiceUserSecurity };
var UpdateServiceUserRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceUserRequest, _super);
    function UpdateServiceUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateServiceUserRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceUserPathParams)
    ], UpdateServiceUserRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceUserHeaders)
    ], UpdateServiceUserRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateServiceUserUpdateServiceUserRequest)
    ], UpdateServiceUserRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceUserSecurity)
    ], UpdateServiceUserRequest.prototype, "security", void 0);
    return UpdateServiceUserRequest;
}(SpeakeasyBase));
export { UpdateServiceUserRequest };
var UpdateServiceUserResponse = /** @class */ (function (_super) {
    __extends(UpdateServiceUserResponse, _super);
    function UpdateServiceUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateServiceUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateServiceUserResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceUser)
    ], UpdateServiceUserResponse.prototype, "conversationsV1ServiceServiceUser", void 0);
    return UpdateServiceUserResponse;
}(SpeakeasyBase));
export { UpdateServiceUserResponse };
