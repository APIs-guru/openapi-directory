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
var GetPayrollCalendarPathParams = /** @class */ (function (_super) {
    __extends(GetPayrollCalendarPathParams, _super);
    function GetPayrollCalendarPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayrollCalendarID" }),
        __metadata("design:type", String)
    ], GetPayrollCalendarPathParams.prototype, "payrollCalendarId", void 0);
    return GetPayrollCalendarPathParams;
}(SpeakeasyBase));
export { GetPayrollCalendarPathParams };
var GetPayrollCalendarHeaders = /** @class */ (function (_super) {
    __extends(GetPayrollCalendarHeaders, _super);
    function GetPayrollCalendarHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], GetPayrollCalendarHeaders.prototype, "xeroTenantId", void 0);
    return GetPayrollCalendarHeaders;
}(SpeakeasyBase));
export { GetPayrollCalendarHeaders };
var GetPayrollCalendarSecurity = /** @class */ (function (_super) {
    __extends(GetPayrollCalendarSecurity, _super);
    function GetPayrollCalendarSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetPayrollCalendarSecurity.prototype, "oAuth2", void 0);
    return GetPayrollCalendarSecurity;
}(SpeakeasyBase));
export { GetPayrollCalendarSecurity };
var GetPayrollCalendarRequest = /** @class */ (function (_super) {
    __extends(GetPayrollCalendarRequest, _super);
    function GetPayrollCalendarRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayrollCalendarPathParams)
    ], GetPayrollCalendarRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayrollCalendarHeaders)
    ], GetPayrollCalendarRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayrollCalendarSecurity)
    ], GetPayrollCalendarRequest.prototype, "security", void 0);
    return GetPayrollCalendarRequest;
}(SpeakeasyBase));
export { GetPayrollCalendarRequest };
var GetPayrollCalendarResponse = /** @class */ (function (_super) {
    __extends(GetPayrollCalendarResponse, _super);
    function GetPayrollCalendarResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiException)
    ], GetPayrollCalendarResponse.prototype, "apiException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPayrollCalendarResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PayrollCalendars)
    ], GetPayrollCalendarResponse.prototype, "payrollCalendars", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPayrollCalendarResponse.prototype, "statusCode", void 0);
    return GetPayrollCalendarResponse;
}(SpeakeasyBase));
export { GetPayrollCalendarResponse };
