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
var GetTimesheetsQueryParams = /** @class */ (function (_super) {
    __extends(GetTimesheetsQueryParams, _super);
    function GetTimesheetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetTimesheetsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTimesheetsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=where" }),
        __metadata("design:type", String)
    ], GetTimesheetsQueryParams.prototype, "where", void 0);
    return GetTimesheetsQueryParams;
}(SpeakeasyBase));
export { GetTimesheetsQueryParams };
var GetTimesheetsHeaders = /** @class */ (function (_super) {
    __extends(GetTimesheetsHeaders, _super);
    function GetTimesheetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTimesheetsHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], GetTimesheetsHeaders.prototype, "xeroTenantId", void 0);
    return GetTimesheetsHeaders;
}(SpeakeasyBase));
export { GetTimesheetsHeaders };
var GetTimesheetsSecurity = /** @class */ (function (_super) {
    __extends(GetTimesheetsSecurity, _super);
    function GetTimesheetsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetTimesheetsSecurity.prototype, "oAuth2", void 0);
    return GetTimesheetsSecurity;
}(SpeakeasyBase));
export { GetTimesheetsSecurity };
var GetTimesheetsRequest = /** @class */ (function (_super) {
    __extends(GetTimesheetsRequest, _super);
    function GetTimesheetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTimesheetsQueryParams)
    ], GetTimesheetsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTimesheetsHeaders)
    ], GetTimesheetsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTimesheetsSecurity)
    ], GetTimesheetsRequest.prototype, "security", void 0);
    return GetTimesheetsRequest;
}(SpeakeasyBase));
export { GetTimesheetsRequest };
var GetTimesheetsResponse = /** @class */ (function (_super) {
    __extends(GetTimesheetsResponse, _super);
    function GetTimesheetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiException)
    ], GetTimesheetsResponse.prototype, "apiException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTimesheetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTimesheetsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Timesheets)
    ], GetTimesheetsResponse.prototype, "timesheets", void 0);
    return GetTimesheetsResponse;
}(SpeakeasyBase));
export { GetTimesheetsResponse };
