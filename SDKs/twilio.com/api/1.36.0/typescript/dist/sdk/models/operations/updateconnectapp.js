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
export var UPDATECONNECTAPP_SERVERS = [
    "https://api.twilio.com",
];
var UpdateConnectAppPathParams = /** @class */ (function (_super) {
    __extends(UpdateConnectAppPathParams, _super);
    function UpdateConnectAppPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateConnectAppPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateConnectAppPathParams.prototype, "sid", void 0);
    return UpdateConnectAppPathParams;
}(SpeakeasyBase));
export { UpdateConnectAppPathParams };
export var UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum;
(function (UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum) {
    UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum["Head"] = "HEAD";
    UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum["Get"] = "GET";
    UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum["Post"] = "POST";
    UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum["Patch"] = "PATCH";
    UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum["Put"] = "PUT";
    UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum || (UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum = {}));
var UpdateConnectAppUpdateConnectAppRequest = /** @class */ (function (_super) {
    __extends(UpdateConnectAppUpdateConnectAppRequest, _super);
    function UpdateConnectAppUpdateConnectAppRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AuthorizeRedirectUrl;" }),
        __metadata("design:type", String)
    ], UpdateConnectAppUpdateConnectAppRequest.prototype, "authorizeRedirectUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=CompanyName;" }),
        __metadata("design:type", String)
    ], UpdateConnectAppUpdateConnectAppRequest.prototype, "companyName", void 0);
    __decorate([
        Metadata({ data: "form, name=DeauthorizeCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateConnectAppUpdateConnectAppRequest.prototype, "deauthorizeCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=DeauthorizeCallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateConnectAppUpdateConnectAppRequest.prototype, "deauthorizeCallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=Description;" }),
        __metadata("design:type", String)
    ], UpdateConnectAppUpdateConnectAppRequest.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateConnectAppUpdateConnectAppRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=HomepageUrl;" }),
        __metadata("design:type", String)
    ], UpdateConnectAppUpdateConnectAppRequest.prototype, "homepageUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=Permissions;" }),
        __metadata("design:type", Array)
    ], UpdateConnectAppUpdateConnectAppRequest.prototype, "permissions", void 0);
    return UpdateConnectAppUpdateConnectAppRequest;
}(SpeakeasyBase));
export { UpdateConnectAppUpdateConnectAppRequest };
var UpdateConnectAppSecurity = /** @class */ (function (_super) {
    __extends(UpdateConnectAppSecurity, _super);
    function UpdateConnectAppSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateConnectAppSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateConnectAppSecurity;
}(SpeakeasyBase));
export { UpdateConnectAppSecurity };
var UpdateConnectAppRequest = /** @class */ (function (_super) {
    __extends(UpdateConnectAppRequest, _super);
    function UpdateConnectAppRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateConnectAppRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConnectAppPathParams)
    ], UpdateConnectAppRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateConnectAppUpdateConnectAppRequest)
    ], UpdateConnectAppRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConnectAppSecurity)
    ], UpdateConnectAppRequest.prototype, "security", void 0);
    return UpdateConnectAppRequest;
}(SpeakeasyBase));
export { UpdateConnectAppRequest };
var UpdateConnectAppResponse = /** @class */ (function (_super) {
    __extends(UpdateConnectAppResponse, _super);
    function UpdateConnectAppResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateConnectAppResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateConnectAppResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountConnectApp)
    ], UpdateConnectAppResponse.prototype, "apiV2010AccountConnectApp", void 0);
    return UpdateConnectAppResponse;
}(SpeakeasyBase));
export { UpdateConnectAppResponse };
