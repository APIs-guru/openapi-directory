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
var GetVmPathParams = /** @class */ (function (_super) {
    __extends(GetVmPathParams, _super);
    function GetVmPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetVmPathParams.prototype, "id", void 0);
    return GetVmPathParams;
}(SpeakeasyBase));
export { GetVmPathParams };
var GetVmQueryParams = /** @class */ (function (_super) {
    __extends(GetVmQueryParams, _super);
    function GetVmQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", Number)
    ], GetVmQueryParams.prototype, "time", void 0);
    return GetVmQueryParams;
}(SpeakeasyBase));
export { GetVmQueryParams };
var GetVmSecurity = /** @class */ (function (_super) {
    __extends(GetVmSecurity, _super);
    function GetVmSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetVmSecurity.prototype, "apiKeyAuth", void 0);
    return GetVmSecurity;
}(SpeakeasyBase));
export { GetVmSecurity };
var GetVmRequest = /** @class */ (function (_super) {
    __extends(GetVmRequest, _super);
    function GetVmRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVmPathParams)
    ], GetVmRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVmQueryParams)
    ], GetVmRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVmSecurity)
    ], GetVmRequest.prototype, "security", void 0);
    return GetVmRequest;
}(SpeakeasyBase));
export { GetVmRequest };
var GetVmResponse = /** @class */ (function (_super) {
    __extends(GetVmResponse, _super);
    function GetVmResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], GetVmResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseVirtualMachine)
    ], GetVmResponse.prototype, "baseVirtualMachine", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVmResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVmResponse.prototype, "statusCode", void 0);
    return GetVmResponse;
}(SpeakeasyBase));
export { GetVmResponse };
