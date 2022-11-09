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
export var DELETESERVICEUSER_SERVERS = [
    "https://conversations.twilio.com",
];
var DeleteServiceUserPathParams = /** @class */ (function (_super) {
    __extends(DeleteServiceUserPathParams, _super);
    function DeleteServiceUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], DeleteServiceUserPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteServiceUserPathParams.prototype, "sid", void 0);
    return DeleteServiceUserPathParams;
}(SpeakeasyBase));
export { DeleteServiceUserPathParams };
var DeleteServiceUserHeaders = /** @class */ (function (_super) {
    __extends(DeleteServiceUserHeaders, _super);
    function DeleteServiceUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], DeleteServiceUserHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return DeleteServiceUserHeaders;
}(SpeakeasyBase));
export { DeleteServiceUserHeaders };
var DeleteServiceUserSecurity = /** @class */ (function (_super) {
    __extends(DeleteServiceUserSecurity, _super);
    function DeleteServiceUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteServiceUserSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteServiceUserSecurity;
}(SpeakeasyBase));
export { DeleteServiceUserSecurity };
var DeleteServiceUserRequest = /** @class */ (function (_super) {
    __extends(DeleteServiceUserRequest, _super);
    function DeleteServiceUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteServiceUserRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteServiceUserPathParams)
    ], DeleteServiceUserRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteServiceUserHeaders)
    ], DeleteServiceUserRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteServiceUserSecurity)
    ], DeleteServiceUserRequest.prototype, "security", void 0);
    return DeleteServiceUserRequest;
}(SpeakeasyBase));
export { DeleteServiceUserRequest };
var DeleteServiceUserResponse = /** @class */ (function (_super) {
    __extends(DeleteServiceUserResponse, _super);
    function DeleteServiceUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteServiceUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteServiceUserResponse.prototype, "statusCode", void 0);
    return DeleteServiceUserResponse;
}(SpeakeasyBase));
export { DeleteServiceUserResponse };
