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
var GetLayer2NetworkPathParams = /** @class */ (function (_super) {
    __extends(GetLayer2NetworkPathParams, _super);
    function GetLayer2NetworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetLayer2NetworkPathParams.prototype, "id", void 0);
    return GetLayer2NetworkPathParams;
}(SpeakeasyBase));
export { GetLayer2NetworkPathParams };
var GetLayer2NetworkQueryParams = /** @class */ (function (_super) {
    __extends(GetLayer2NetworkQueryParams, _super);
    function GetLayer2NetworkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", Number)
    ], GetLayer2NetworkQueryParams.prototype, "time", void 0);
    return GetLayer2NetworkQueryParams;
}(SpeakeasyBase));
export { GetLayer2NetworkQueryParams };
var GetLayer2NetworkSecurity = /** @class */ (function (_super) {
    __extends(GetLayer2NetworkSecurity, _super);
    function GetLayer2NetworkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetLayer2NetworkSecurity.prototype, "apiKeyAuth", void 0);
    return GetLayer2NetworkSecurity;
}(SpeakeasyBase));
export { GetLayer2NetworkSecurity };
var GetLayer2NetworkRequest = /** @class */ (function (_super) {
    __extends(GetLayer2NetworkRequest, _super);
    function GetLayer2NetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLayer2NetworkPathParams)
    ], GetLayer2NetworkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLayer2NetworkQueryParams)
    ], GetLayer2NetworkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLayer2NetworkSecurity)
    ], GetLayer2NetworkRequest.prototype, "security", void 0);
    return GetLayer2NetworkRequest;
}(SpeakeasyBase));
export { GetLayer2NetworkRequest };
var GetLayer2NetworkResponse = /** @class */ (function (_super) {
    __extends(GetLayer2NetworkResponse, _super);
    function GetLayer2NetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], GetLayer2NetworkResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseL2Network)
    ], GetLayer2NetworkResponse.prototype, "baseL2Network", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLayer2NetworkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLayer2NetworkResponse.prototype, "statusCode", void 0);
    return GetLayer2NetworkResponse;
}(SpeakeasyBase));
export { GetLayer2NetworkResponse };
