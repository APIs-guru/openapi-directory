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
var GetEmployeePathParams = /** @class */ (function (_super) {
    __extends(GetEmployeePathParams, _super);
    function GetEmployeePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeID" }),
        __metadata("design:type", String)
    ], GetEmployeePathParams.prototype, "employeeId", void 0);
    return GetEmployeePathParams;
}(SpeakeasyBase));
export { GetEmployeePathParams };
var GetEmployeeHeaders = /** @class */ (function (_super) {
    __extends(GetEmployeeHeaders, _super);
    function GetEmployeeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], GetEmployeeHeaders.prototype, "xeroTenantId", void 0);
    return GetEmployeeHeaders;
}(SpeakeasyBase));
export { GetEmployeeHeaders };
var GetEmployeeSecurity = /** @class */ (function (_super) {
    __extends(GetEmployeeSecurity, _super);
    function GetEmployeeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetEmployeeSecurity.prototype, "oAuth2", void 0);
    return GetEmployeeSecurity;
}(SpeakeasyBase));
export { GetEmployeeSecurity };
var GetEmployeeRequest = /** @class */ (function (_super) {
    __extends(GetEmployeeRequest, _super);
    function GetEmployeeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEmployeePathParams)
    ], GetEmployeeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEmployeeHeaders)
    ], GetEmployeeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEmployeeSecurity)
    ], GetEmployeeRequest.prototype, "security", void 0);
    return GetEmployeeRequest;
}(SpeakeasyBase));
export { GetEmployeeRequest };
var GetEmployeeResponse = /** @class */ (function (_super) {
    __extends(GetEmployeeResponse, _super);
    function GetEmployeeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEmployeeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Employees)
    ], GetEmployeeResponse.prototype, "employees", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEmployeeResponse.prototype, "statusCode", void 0);
    return GetEmployeeResponse;
}(SpeakeasyBase));
export { GetEmployeeResponse };
