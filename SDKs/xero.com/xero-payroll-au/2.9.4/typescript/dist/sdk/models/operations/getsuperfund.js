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
var GetSuperfundPathParams = /** @class */ (function (_super) {
    __extends(GetSuperfundPathParams, _super);
    function GetSuperfundPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SuperFundID" }),
        __metadata("design:type", String)
    ], GetSuperfundPathParams.prototype, "superFundId", void 0);
    return GetSuperfundPathParams;
}(SpeakeasyBase));
export { GetSuperfundPathParams };
var GetSuperfundHeaders = /** @class */ (function (_super) {
    __extends(GetSuperfundHeaders, _super);
    function GetSuperfundHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], GetSuperfundHeaders.prototype, "xeroTenantId", void 0);
    return GetSuperfundHeaders;
}(SpeakeasyBase));
export { GetSuperfundHeaders };
var GetSuperfundSecurity = /** @class */ (function (_super) {
    __extends(GetSuperfundSecurity, _super);
    function GetSuperfundSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetSuperfundSecurity.prototype, "oAuth2", void 0);
    return GetSuperfundSecurity;
}(SpeakeasyBase));
export { GetSuperfundSecurity };
var GetSuperfundRequest = /** @class */ (function (_super) {
    __extends(GetSuperfundRequest, _super);
    function GetSuperfundRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSuperfundPathParams)
    ], GetSuperfundRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSuperfundHeaders)
    ], GetSuperfundRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSuperfundSecurity)
    ], GetSuperfundRequest.prototype, "security", void 0);
    return GetSuperfundRequest;
}(SpeakeasyBase));
export { GetSuperfundRequest };
var GetSuperfundResponse = /** @class */ (function (_super) {
    __extends(GetSuperfundResponse, _super);
    function GetSuperfundResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSuperfundResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSuperfundResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SuperFunds)
    ], GetSuperfundResponse.prototype, "superFunds", void 0);
    return GetSuperfundResponse;
}(SpeakeasyBase));
export { GetSuperfundResponse };
