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
var GetVnicPathParams = /** @class */ (function (_super) {
    __extends(GetVnicPathParams, _super);
    function GetVnicPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetVnicPathParams.prototype, "id", void 0);
    return GetVnicPathParams;
}(SpeakeasyBase));
export { GetVnicPathParams };
var GetVnicQueryParams = /** @class */ (function (_super) {
    __extends(GetVnicQueryParams, _super);
    function GetVnicQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", Number)
    ], GetVnicQueryParams.prototype, "time", void 0);
    return GetVnicQueryParams;
}(SpeakeasyBase));
export { GetVnicQueryParams };
var GetVnicSecurity = /** @class */ (function (_super) {
    __extends(GetVnicSecurity, _super);
    function GetVnicSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetVnicSecurity.prototype, "apiKeyAuth", void 0);
    return GetVnicSecurity;
}(SpeakeasyBase));
export { GetVnicSecurity };
var GetVnicRequest = /** @class */ (function (_super) {
    __extends(GetVnicRequest, _super);
    function GetVnicRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVnicPathParams)
    ], GetVnicRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVnicQueryParams)
    ], GetVnicRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVnicSecurity)
    ], GetVnicRequest.prototype, "security", void 0);
    return GetVnicRequest;
}(SpeakeasyBase));
export { GetVnicRequest };
var GetVnicResponse = /** @class */ (function (_super) {
    __extends(GetVnicResponse, _super);
    function GetVnicResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], GetVnicResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseVnic)
    ], GetVnicResponse.prototype, "baseVnic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVnicResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVnicResponse.prototype, "statusCode", void 0);
    return GetVnicResponse;
}(SpeakeasyBase));
export { GetVnicResponse };
