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
export var CREATEENDUSER_SERVERS = [
    "https://trusthub.twilio.com",
];
var CreateEndUserCreateEndUserRequest = /** @class */ (function (_super) {
    __extends(CreateEndUserCreateEndUserRequest, _super);
    function CreateEndUserCreateEndUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", Object)
    ], CreateEndUserCreateEndUserRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateEndUserCreateEndUserRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=Type;" }),
        __metadata("design:type", String)
    ], CreateEndUserCreateEndUserRequest.prototype, "type", void 0);
    return CreateEndUserCreateEndUserRequest;
}(SpeakeasyBase));
export { CreateEndUserCreateEndUserRequest };
var CreateEndUserSecurity = /** @class */ (function (_super) {
    __extends(CreateEndUserSecurity, _super);
    function CreateEndUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateEndUserSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateEndUserSecurity;
}(SpeakeasyBase));
export { CreateEndUserSecurity };
var CreateEndUserRequest = /** @class */ (function (_super) {
    __extends(CreateEndUserRequest, _super);
    function CreateEndUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateEndUserRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateEndUserCreateEndUserRequest)
    ], CreateEndUserRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateEndUserSecurity)
    ], CreateEndUserRequest.prototype, "security", void 0);
    return CreateEndUserRequest;
}(SpeakeasyBase));
export { CreateEndUserRequest };
var CreateEndUserResponse = /** @class */ (function (_super) {
    __extends(CreateEndUserResponse, _super);
    function CreateEndUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateEndUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateEndUserResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrusthubV1EndUser)
    ], CreateEndUserResponse.prototype, "trusthubV1EndUser", void 0);
    return CreateEndUserResponse;
}(SpeakeasyBase));
export { CreateEndUserResponse };
