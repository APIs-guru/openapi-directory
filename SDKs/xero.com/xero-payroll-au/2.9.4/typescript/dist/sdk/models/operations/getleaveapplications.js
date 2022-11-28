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
var GetLeaveApplicationsQueryParams = /** @class */ (function (_super) {
    __extends(GetLeaveApplicationsQueryParams, _super);
    function GetLeaveApplicationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetLeaveApplicationsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetLeaveApplicationsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=where" }),
        __metadata("design:type", String)
    ], GetLeaveApplicationsQueryParams.prototype, "where", void 0);
    return GetLeaveApplicationsQueryParams;
}(SpeakeasyBase));
export { GetLeaveApplicationsQueryParams };
var GetLeaveApplicationsHeaders = /** @class */ (function (_super) {
    __extends(GetLeaveApplicationsHeaders, _super);
    function GetLeaveApplicationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetLeaveApplicationsHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], GetLeaveApplicationsHeaders.prototype, "xeroTenantId", void 0);
    return GetLeaveApplicationsHeaders;
}(SpeakeasyBase));
export { GetLeaveApplicationsHeaders };
var GetLeaveApplicationsSecurity = /** @class */ (function (_super) {
    __extends(GetLeaveApplicationsSecurity, _super);
    function GetLeaveApplicationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetLeaveApplicationsSecurity.prototype, "oAuth2", void 0);
    return GetLeaveApplicationsSecurity;
}(SpeakeasyBase));
export { GetLeaveApplicationsSecurity };
var GetLeaveApplicationsRequest = /** @class */ (function (_super) {
    __extends(GetLeaveApplicationsRequest, _super);
    function GetLeaveApplicationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLeaveApplicationsQueryParams)
    ], GetLeaveApplicationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLeaveApplicationsHeaders)
    ], GetLeaveApplicationsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLeaveApplicationsSecurity)
    ], GetLeaveApplicationsRequest.prototype, "security", void 0);
    return GetLeaveApplicationsRequest;
}(SpeakeasyBase));
export { GetLeaveApplicationsRequest };
var GetLeaveApplicationsResponse = /** @class */ (function (_super) {
    __extends(GetLeaveApplicationsResponse, _super);
    function GetLeaveApplicationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiException)
    ], GetLeaveApplicationsResponse.prototype, "apiException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLeaveApplicationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LeaveApplications)
    ], GetLeaveApplicationsResponse.prototype, "leaveApplications", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLeaveApplicationsResponse.prototype, "statusCode", void 0);
    return GetLeaveApplicationsResponse;
}(SpeakeasyBase));
export { GetLeaveApplicationsResponse };
