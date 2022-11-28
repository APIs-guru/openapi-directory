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
var GetVmknicPathParams = /** @class */ (function (_super) {
    __extends(GetVmknicPathParams, _super);
    function GetVmknicPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetVmknicPathParams.prototype, "id", void 0);
    return GetVmknicPathParams;
}(SpeakeasyBase));
export { GetVmknicPathParams };
var GetVmknicQueryParams = /** @class */ (function (_super) {
    __extends(GetVmknicQueryParams, _super);
    function GetVmknicQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", Number)
    ], GetVmknicQueryParams.prototype, "time", void 0);
    return GetVmknicQueryParams;
}(SpeakeasyBase));
export { GetVmknicQueryParams };
var GetVmknicSecurity = /** @class */ (function (_super) {
    __extends(GetVmknicSecurity, _super);
    function GetVmknicSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetVmknicSecurity.prototype, "apiKeyAuth", void 0);
    return GetVmknicSecurity;
}(SpeakeasyBase));
export { GetVmknicSecurity };
var GetVmknicRequest = /** @class */ (function (_super) {
    __extends(GetVmknicRequest, _super);
    function GetVmknicRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVmknicPathParams)
    ], GetVmknicRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVmknicQueryParams)
    ], GetVmknicRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVmknicSecurity)
    ], GetVmknicRequest.prototype, "security", void 0);
    return GetVmknicRequest;
}(SpeakeasyBase));
export { GetVmknicRequest };
var GetVmknicResponse = /** @class */ (function (_super) {
    __extends(GetVmknicResponse, _super);
    function GetVmknicResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], GetVmknicResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVmknicResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVmknicResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Vmknic)
    ], GetVmknicResponse.prototype, "vmknic", void 0);
    return GetVmknicResponse;
}(SpeakeasyBase));
export { GetVmknicResponse };
