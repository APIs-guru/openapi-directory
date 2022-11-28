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
var GetPayrollCalendarsQueryParams = /** @class */ (function (_super) {
    __extends(GetPayrollCalendarsQueryParams, _super);
    function GetPayrollCalendarsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetPayrollCalendarsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPayrollCalendarsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=where" }),
        __metadata("design:type", String)
    ], GetPayrollCalendarsQueryParams.prototype, "where", void 0);
    return GetPayrollCalendarsQueryParams;
}(SpeakeasyBase));
export { GetPayrollCalendarsQueryParams };
var GetPayrollCalendarsHeaders = /** @class */ (function (_super) {
    __extends(GetPayrollCalendarsHeaders, _super);
    function GetPayrollCalendarsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetPayrollCalendarsHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], GetPayrollCalendarsHeaders.prototype, "xeroTenantId", void 0);
    return GetPayrollCalendarsHeaders;
}(SpeakeasyBase));
export { GetPayrollCalendarsHeaders };
var GetPayrollCalendarsSecurity = /** @class */ (function (_super) {
    __extends(GetPayrollCalendarsSecurity, _super);
    function GetPayrollCalendarsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetPayrollCalendarsSecurity.prototype, "oAuth2", void 0);
    return GetPayrollCalendarsSecurity;
}(SpeakeasyBase));
export { GetPayrollCalendarsSecurity };
var GetPayrollCalendarsRequest = /** @class */ (function (_super) {
    __extends(GetPayrollCalendarsRequest, _super);
    function GetPayrollCalendarsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayrollCalendarsQueryParams)
    ], GetPayrollCalendarsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayrollCalendarsHeaders)
    ], GetPayrollCalendarsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayrollCalendarsSecurity)
    ], GetPayrollCalendarsRequest.prototype, "security", void 0);
    return GetPayrollCalendarsRequest;
}(SpeakeasyBase));
export { GetPayrollCalendarsRequest };
var GetPayrollCalendarsResponse = /** @class */ (function (_super) {
    __extends(GetPayrollCalendarsResponse, _super);
    function GetPayrollCalendarsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiException)
    ], GetPayrollCalendarsResponse.prototype, "apiException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPayrollCalendarsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PayrollCalendars)
    ], GetPayrollCalendarsResponse.prototype, "payrollCalendars", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPayrollCalendarsResponse.prototype, "statusCode", void 0);
    return GetPayrollCalendarsResponse;
}(SpeakeasyBase));
export { GetPayrollCalendarsResponse };
