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
export var FETCHAUTHORIZEDCONNECTAPP_SERVERS = [
    "https://api.twilio.com",
];
var FetchAuthorizedConnectAppPathParams = /** @class */ (function (_super) {
    __extends(FetchAuthorizedConnectAppPathParams, _super);
    function FetchAuthorizedConnectAppPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchAuthorizedConnectAppPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConnectAppSid" }),
        __metadata("design:type", String)
    ], FetchAuthorizedConnectAppPathParams.prototype, "connectAppSid", void 0);
    return FetchAuthorizedConnectAppPathParams;
}(SpeakeasyBase));
export { FetchAuthorizedConnectAppPathParams };
var FetchAuthorizedConnectAppSecurity = /** @class */ (function (_super) {
    __extends(FetchAuthorizedConnectAppSecurity, _super);
    function FetchAuthorizedConnectAppSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchAuthorizedConnectAppSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchAuthorizedConnectAppSecurity;
}(SpeakeasyBase));
export { FetchAuthorizedConnectAppSecurity };
var FetchAuthorizedConnectAppRequest = /** @class */ (function (_super) {
    __extends(FetchAuthorizedConnectAppRequest, _super);
    function FetchAuthorizedConnectAppRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchAuthorizedConnectAppRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchAuthorizedConnectAppPathParams)
    ], FetchAuthorizedConnectAppRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchAuthorizedConnectAppSecurity)
    ], FetchAuthorizedConnectAppRequest.prototype, "security", void 0);
    return FetchAuthorizedConnectAppRequest;
}(SpeakeasyBase));
export { FetchAuthorizedConnectAppRequest };
var FetchAuthorizedConnectAppResponse = /** @class */ (function (_super) {
    __extends(FetchAuthorizedConnectAppResponse, _super);
    function FetchAuthorizedConnectAppResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchAuthorizedConnectAppResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchAuthorizedConnectAppResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountAuthorizedConnectApp)
    ], FetchAuthorizedConnectAppResponse.prototype, "apiV2010AccountAuthorizedConnectApp", void 0);
    return FetchAuthorizedConnectAppResponse;
}(SpeakeasyBase));
export { FetchAuthorizedConnectAppResponse };
