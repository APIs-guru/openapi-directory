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
var GetPayslipPathParams = /** @class */ (function (_super) {
    __extends(GetPayslipPathParams, _super);
    function GetPayslipPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayslipID" }),
        __metadata("design:type", String)
    ], GetPayslipPathParams.prototype, "payslipId", void 0);
    return GetPayslipPathParams;
}(SpeakeasyBase));
export { GetPayslipPathParams };
var GetPayslipHeaders = /** @class */ (function (_super) {
    __extends(GetPayslipHeaders, _super);
    function GetPayslipHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], GetPayslipHeaders.prototype, "xeroTenantId", void 0);
    return GetPayslipHeaders;
}(SpeakeasyBase));
export { GetPayslipHeaders };
var GetPayslipSecurity = /** @class */ (function (_super) {
    __extends(GetPayslipSecurity, _super);
    function GetPayslipSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetPayslipSecurity.prototype, "oAuth2", void 0);
    return GetPayslipSecurity;
}(SpeakeasyBase));
export { GetPayslipSecurity };
var GetPayslipRequest = /** @class */ (function (_super) {
    __extends(GetPayslipRequest, _super);
    function GetPayslipRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayslipPathParams)
    ], GetPayslipRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayslipHeaders)
    ], GetPayslipRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayslipSecurity)
    ], GetPayslipRequest.prototype, "security", void 0);
    return GetPayslipRequest;
}(SpeakeasyBase));
export { GetPayslipRequest };
var GetPayslipResponse = /** @class */ (function (_super) {
    __extends(GetPayslipResponse, _super);
    function GetPayslipResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPayslipResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PayslipObject)
    ], GetPayslipResponse.prototype, "payslipObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPayslipResponse.prototype, "statusCode", void 0);
    return GetPayslipResponse;
}(SpeakeasyBase));
export { GetPayslipResponse };
