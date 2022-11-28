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
var GetSecurityTagPathParams = /** @class */ (function (_super) {
    __extends(GetSecurityTagPathParams, _super);
    function GetSecurityTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSecurityTagPathParams.prototype, "id", void 0);
    return GetSecurityTagPathParams;
}(SpeakeasyBase));
export { GetSecurityTagPathParams };
var GetSecurityTagQueryParams = /** @class */ (function (_super) {
    __extends(GetSecurityTagQueryParams, _super);
    function GetSecurityTagQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", Number)
    ], GetSecurityTagQueryParams.prototype, "time", void 0);
    return GetSecurityTagQueryParams;
}(SpeakeasyBase));
export { GetSecurityTagQueryParams };
var GetSecurityTagSecurity = /** @class */ (function (_super) {
    __extends(GetSecurityTagSecurity, _super);
    function GetSecurityTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetSecurityTagSecurity.prototype, "apiKeyAuth", void 0);
    return GetSecurityTagSecurity;
}(SpeakeasyBase));
export { GetSecurityTagSecurity };
var GetSecurityTagRequest = /** @class */ (function (_super) {
    __extends(GetSecurityTagRequest, _super);
    function GetSecurityTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSecurityTagPathParams)
    ], GetSecurityTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSecurityTagQueryParams)
    ], GetSecurityTagRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSecurityTagSecurity)
    ], GetSecurityTagRequest.prototype, "security", void 0);
    return GetSecurityTagRequest;
}(SpeakeasyBase));
export { GetSecurityTagRequest };
var GetSecurityTagResponse = /** @class */ (function (_super) {
    __extends(GetSecurityTagResponse, _super);
    function GetSecurityTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], GetSecurityTagResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSecurityTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SecurityTag)
    ], GetSecurityTagResponse.prototype, "securityTag", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSecurityTagResponse.prototype, "statusCode", void 0);
    return GetSecurityTagResponse;
}(SpeakeasyBase));
export { GetSecurityTagResponse };
