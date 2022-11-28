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
var GetTimesheetPathParams = /** @class */ (function (_super) {
    __extends(GetTimesheetPathParams, _super);
    function GetTimesheetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TimesheetID" }),
        __metadata("design:type", String)
    ], GetTimesheetPathParams.prototype, "timesheetId", void 0);
    return GetTimesheetPathParams;
}(SpeakeasyBase));
export { GetTimesheetPathParams };
var GetTimesheetHeaders = /** @class */ (function (_super) {
    __extends(GetTimesheetHeaders, _super);
    function GetTimesheetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], GetTimesheetHeaders.prototype, "xeroTenantId", void 0);
    return GetTimesheetHeaders;
}(SpeakeasyBase));
export { GetTimesheetHeaders };
var GetTimesheetSecurity = /** @class */ (function (_super) {
    __extends(GetTimesheetSecurity, _super);
    function GetTimesheetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetTimesheetSecurity.prototype, "oAuth2", void 0);
    return GetTimesheetSecurity;
}(SpeakeasyBase));
export { GetTimesheetSecurity };
var GetTimesheetRequest = /** @class */ (function (_super) {
    __extends(GetTimesheetRequest, _super);
    function GetTimesheetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTimesheetPathParams)
    ], GetTimesheetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTimesheetHeaders)
    ], GetTimesheetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTimesheetSecurity)
    ], GetTimesheetRequest.prototype, "security", void 0);
    return GetTimesheetRequest;
}(SpeakeasyBase));
export { GetTimesheetRequest };
var GetTimesheetResponse = /** @class */ (function (_super) {
    __extends(GetTimesheetResponse, _super);
    function GetTimesheetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTimesheetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTimesheetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TimesheetObject)
    ], GetTimesheetResponse.prototype, "timesheetObject", void 0);
    return GetTimesheetResponse;
}(SpeakeasyBase));
export { GetTimesheetResponse };
