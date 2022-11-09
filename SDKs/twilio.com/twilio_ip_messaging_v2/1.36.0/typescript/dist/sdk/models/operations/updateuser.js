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
export var UPDATEUSER_SERVERS = [
    "https://ip-messaging.twilio.com",
];
var UpdateUserPathParams = /** @class */ (function (_super) {
    __extends(UpdateUserPathParams, _super);
    function UpdateUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateUserPathParams.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateUserPathParams.prototype, "sid", void 0);
    return UpdateUserPathParams;
}(SpeakeasyBase));
export { UpdateUserPathParams };
var UpdateUserHeaders = /** @class */ (function (_super) {
    __extends(UpdateUserHeaders, _super);
    function UpdateUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], UpdateUserHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return UpdateUserHeaders;
}(SpeakeasyBase));
export { UpdateUserHeaders };
var UpdateUserUpdateUserRequest = /** @class */ (function (_super) {
    __extends(UpdateUserUpdateUserRequest, _super);
    function UpdateUserUpdateUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], UpdateUserUpdateUserRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateUserUpdateUserRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=RoleSid;" }),
        __metadata("design:type", String)
    ], UpdateUserUpdateUserRequest.prototype, "roleSid", void 0);
    return UpdateUserUpdateUserRequest;
}(SpeakeasyBase));
export { UpdateUserUpdateUserRequest };
var UpdateUserSecurity = /** @class */ (function (_super) {
    __extends(UpdateUserSecurity, _super);
    function UpdateUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUserSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUserSecurity;
}(SpeakeasyBase));
export { UpdateUserSecurity };
var UpdateUserRequest = /** @class */ (function (_super) {
    __extends(UpdateUserRequest, _super);
    function UpdateUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateUserRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateUserPathParams)
    ], UpdateUserRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateUserHeaders)
    ], UpdateUserRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUserUpdateUserRequest)
    ], UpdateUserRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateUserSecurity)
    ], UpdateUserRequest.prototype, "security", void 0);
    return UpdateUserRequest;
}(SpeakeasyBase));
export { UpdateUserRequest };
var UpdateUserResponse = /** @class */ (function (_super) {
    __extends(UpdateUserResponse, _super);
    function UpdateUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateUserResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.IpMessagingV2ServiceUser)
    ], UpdateUserResponse.prototype, "ipMessagingV2ServiceUser", void 0);
    return UpdateUserResponse;
}(SpeakeasyBase));
export { UpdateUserResponse };
