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
export var CREATEUSER_SERVERS = [
    "https://chat.twilio.com",
];
var CreateUserPathParams = /** @class */ (function (_super) {
    __extends(CreateUserPathParams, _super);
    function CreateUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateUserPathParams.prototype, "serviceSid", void 0);
    return CreateUserPathParams;
}(SpeakeasyBase));
export { CreateUserPathParams };
var CreateUserCreateUserRequest = /** @class */ (function (_super) {
    __extends(CreateUserCreateUserRequest, _super);
    function CreateUserCreateUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], CreateUserCreateUserRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateUserCreateUserRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], CreateUserCreateUserRequest.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "form, name=RoleSid;" }),
        __metadata("design:type", String)
    ], CreateUserCreateUserRequest.prototype, "roleSid", void 0);
    return CreateUserCreateUserRequest;
}(SpeakeasyBase));
export { CreateUserCreateUserRequest };
var CreateUserSecurity = /** @class */ (function (_super) {
    __extends(CreateUserSecurity, _super);
    function CreateUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateUserSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateUserSecurity;
}(SpeakeasyBase));
export { CreateUserSecurity };
var CreateUserRequest = /** @class */ (function (_super) {
    __extends(CreateUserRequest, _super);
    function CreateUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateUserRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateUserPathParams)
    ], CreateUserRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateUserCreateUserRequest)
    ], CreateUserRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateUserSecurity)
    ], CreateUserRequest.prototype, "security", void 0);
    return CreateUserRequest;
}(SpeakeasyBase));
export { CreateUserRequest };
var CreateUserResponse = /** @class */ (function (_super) {
    __extends(CreateUserResponse, _super);
    function CreateUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateUserResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ChatV1ServiceUser)
    ], CreateUserResponse.prototype, "chatV1ServiceUser", void 0);
    return CreateUserResponse;
}(SpeakeasyBase));
export { CreateUserResponse };
