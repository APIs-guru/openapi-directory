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
var GetDatacenterPathParams = /** @class */ (function (_super) {
    __extends(GetDatacenterPathParams, _super);
    function GetDatacenterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetDatacenterPathParams.prototype, "id", void 0);
    return GetDatacenterPathParams;
}(SpeakeasyBase));
export { GetDatacenterPathParams };
var GetDatacenterQueryParams = /** @class */ (function (_super) {
    __extends(GetDatacenterQueryParams, _super);
    function GetDatacenterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", Number)
    ], GetDatacenterQueryParams.prototype, "time", void 0);
    return GetDatacenterQueryParams;
}(SpeakeasyBase));
export { GetDatacenterQueryParams };
var GetDatacenterSecurity = /** @class */ (function (_super) {
    __extends(GetDatacenterSecurity, _super);
    function GetDatacenterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetDatacenterSecurity.prototype, "apiKeyAuth", void 0);
    return GetDatacenterSecurity;
}(SpeakeasyBase));
export { GetDatacenterSecurity };
var GetDatacenterRequest = /** @class */ (function (_super) {
    __extends(GetDatacenterRequest, _super);
    function GetDatacenterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatacenterPathParams)
    ], GetDatacenterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatacenterQueryParams)
    ], GetDatacenterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatacenterSecurity)
    ], GetDatacenterRequest.prototype, "security", void 0);
    return GetDatacenterRequest;
}(SpeakeasyBase));
export { GetDatacenterRequest };
var GetDatacenterResponse = /** @class */ (function (_super) {
    __extends(GetDatacenterResponse, _super);
    function GetDatacenterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], GetDatacenterResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatacenterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatacenterResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VcDatacenter)
    ], GetDatacenterResponse.prototype, "vcDatacenter", void 0);
    return GetDatacenterResponse;
}(SpeakeasyBase));
export { GetDatacenterResponse };
