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
var GetPayRunsQueryParams = /** @class */ (function (_super) {
    __extends(GetPayRunsQueryParams, _super);
    function GetPayRunsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetPayRunsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPayRunsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=where" }),
        __metadata("design:type", String)
    ], GetPayRunsQueryParams.prototype, "where", void 0);
    return GetPayRunsQueryParams;
}(SpeakeasyBase));
export { GetPayRunsQueryParams };
var GetPayRunsHeaders = /** @class */ (function (_super) {
    __extends(GetPayRunsHeaders, _super);
    function GetPayRunsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetPayRunsHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], GetPayRunsHeaders.prototype, "xeroTenantId", void 0);
    return GetPayRunsHeaders;
}(SpeakeasyBase));
export { GetPayRunsHeaders };
var GetPayRunsSecurity = /** @class */ (function (_super) {
    __extends(GetPayRunsSecurity, _super);
    function GetPayRunsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetPayRunsSecurity.prototype, "oAuth2", void 0);
    return GetPayRunsSecurity;
}(SpeakeasyBase));
export { GetPayRunsSecurity };
var GetPayRunsRequest = /** @class */ (function (_super) {
    __extends(GetPayRunsRequest, _super);
    function GetPayRunsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayRunsQueryParams)
    ], GetPayRunsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayRunsHeaders)
    ], GetPayRunsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayRunsSecurity)
    ], GetPayRunsRequest.prototype, "security", void 0);
    return GetPayRunsRequest;
}(SpeakeasyBase));
export { GetPayRunsRequest };
var GetPayRunsResponse = /** @class */ (function (_super) {
    __extends(GetPayRunsResponse, _super);
    function GetPayRunsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiException)
    ], GetPayRunsResponse.prototype, "apiException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPayRunsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PayRuns)
    ], GetPayRunsResponse.prototype, "payRuns", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPayRunsResponse.prototype, "statusCode", void 0);
    return GetPayRunsResponse;
}(SpeakeasyBase));
export { GetPayRunsResponse };
