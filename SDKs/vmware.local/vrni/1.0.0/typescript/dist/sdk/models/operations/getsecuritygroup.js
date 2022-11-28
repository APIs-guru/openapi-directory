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
var GetSecurityGroupPathParams = /** @class */ (function (_super) {
    __extends(GetSecurityGroupPathParams, _super);
    function GetSecurityGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSecurityGroupPathParams.prototype, "id", void 0);
    return GetSecurityGroupPathParams;
}(SpeakeasyBase));
export { GetSecurityGroupPathParams };
var GetSecurityGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetSecurityGroupQueryParams, _super);
    function GetSecurityGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", Number)
    ], GetSecurityGroupQueryParams.prototype, "time", void 0);
    return GetSecurityGroupQueryParams;
}(SpeakeasyBase));
export { GetSecurityGroupQueryParams };
var GetSecurityGroupSecurity = /** @class */ (function (_super) {
    __extends(GetSecurityGroupSecurity, _super);
    function GetSecurityGroupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetSecurityGroupSecurity.prototype, "apiKeyAuth", void 0);
    return GetSecurityGroupSecurity;
}(SpeakeasyBase));
export { GetSecurityGroupSecurity };
var GetSecurityGroupRequest = /** @class */ (function (_super) {
    __extends(GetSecurityGroupRequest, _super);
    function GetSecurityGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSecurityGroupPathParams)
    ], GetSecurityGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSecurityGroupQueryParams)
    ], GetSecurityGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSecurityGroupSecurity)
    ], GetSecurityGroupRequest.prototype, "security", void 0);
    return GetSecurityGroupRequest;
}(SpeakeasyBase));
export { GetSecurityGroupRequest };
var GetSecurityGroupResponse = /** @class */ (function (_super) {
    __extends(GetSecurityGroupResponse, _super);
    function GetSecurityGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], GetSecurityGroupResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseSecurityGroup)
    ], GetSecurityGroupResponse.prototype, "baseSecurityGroup", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSecurityGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSecurityGroupResponse.prototype, "statusCode", void 0);
    return GetSecurityGroupResponse;
}(SpeakeasyBase));
export { GetSecurityGroupResponse };
