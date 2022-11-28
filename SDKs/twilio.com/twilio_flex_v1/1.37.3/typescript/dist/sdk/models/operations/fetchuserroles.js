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
export var FetchUserRolesServerList = [
    "https://flex-api.twilio.com",
];
var FetchUserRolesHeaders = /** @class */ (function (_super) {
    __extends(FetchUserRolesHeaders, _super);
    function FetchUserRolesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" }),
        __metadata("design:type", String)
    ], FetchUserRolesHeaders.prototype, "token", void 0);
    return FetchUserRolesHeaders;
}(SpeakeasyBase));
export { FetchUserRolesHeaders };
var FetchUserRolesSecurity = /** @class */ (function (_super) {
    __extends(FetchUserRolesSecurity, _super);
    function FetchUserRolesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchUserRolesSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchUserRolesSecurity;
}(SpeakeasyBase));
export { FetchUserRolesSecurity };
var FetchUserRolesRequest = /** @class */ (function (_super) {
    __extends(FetchUserRolesRequest, _super);
    function FetchUserRolesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchUserRolesRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchUserRolesHeaders)
    ], FetchUserRolesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchUserRolesSecurity)
    ], FetchUserRolesRequest.prototype, "security", void 0);
    return FetchUserRolesRequest;
}(SpeakeasyBase));
export { FetchUserRolesRequest };
var FetchUserRolesResponse = /** @class */ (function (_super) {
    __extends(FetchUserRolesResponse, _super);
    function FetchUserRolesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchUserRolesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchUserRolesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FlexV1UserRoles)
    ], FetchUserRolesResponse.prototype, "flexV1UserRoles", void 0);
    return FetchUserRolesResponse;
}(SpeakeasyBase));
export { FetchUserRolesResponse };
