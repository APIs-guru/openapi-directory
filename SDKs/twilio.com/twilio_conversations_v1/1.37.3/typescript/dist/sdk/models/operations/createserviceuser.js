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
export var CreateServiceUserServerList = [
    "https://conversations.twilio.com",
];
var CreateServiceUserPathParams = /** @class */ (function (_super) {
    __extends(CreateServiceUserPathParams, _super);
    function CreateServiceUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], CreateServiceUserPathParams.prototype, "chatServiceSid", void 0);
    return CreateServiceUserPathParams;
}(SpeakeasyBase));
export { CreateServiceUserPathParams };
var CreateServiceUserHeaders = /** @class */ (function (_super) {
    __extends(CreateServiceUserHeaders, _super);
    function CreateServiceUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], CreateServiceUserHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return CreateServiceUserHeaders;
}(SpeakeasyBase));
export { CreateServiceUserHeaders };
var CreateServiceUserCreateServiceUserRequest = /** @class */ (function (_super) {
    __extends(CreateServiceUserCreateServiceUserRequest, _super);
    function CreateServiceUserCreateServiceUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], CreateServiceUserCreateServiceUserRequest.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateServiceUserCreateServiceUserRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], CreateServiceUserCreateServiceUserRequest.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RoleSid;" }),
        __metadata("design:type", String)
    ], CreateServiceUserCreateServiceUserRequest.prototype, "roleSid", void 0);
    return CreateServiceUserCreateServiceUserRequest;
}(SpeakeasyBase));
export { CreateServiceUserCreateServiceUserRequest };
var CreateServiceUserSecurity = /** @class */ (function (_super) {
    __extends(CreateServiceUserSecurity, _super);
    function CreateServiceUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateServiceUserSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateServiceUserSecurity;
}(SpeakeasyBase));
export { CreateServiceUserSecurity };
var CreateServiceUserRequest = /** @class */ (function (_super) {
    __extends(CreateServiceUserRequest, _super);
    function CreateServiceUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateServiceUserRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateServiceUserPathParams)
    ], CreateServiceUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateServiceUserHeaders)
    ], CreateServiceUserRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateServiceUserCreateServiceUserRequest)
    ], CreateServiceUserRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateServiceUserSecurity)
    ], CreateServiceUserRequest.prototype, "security", void 0);
    return CreateServiceUserRequest;
}(SpeakeasyBase));
export { CreateServiceUserRequest };
var CreateServiceUserResponse = /** @class */ (function (_super) {
    __extends(CreateServiceUserResponse, _super);
    function CreateServiceUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateServiceUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateServiceUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceUser)
    ], CreateServiceUserResponse.prototype, "conversationsV1ServiceServiceUser", void 0);
    return CreateServiceUserResponse;
}(SpeakeasyBase));
export { CreateServiceUserResponse };
