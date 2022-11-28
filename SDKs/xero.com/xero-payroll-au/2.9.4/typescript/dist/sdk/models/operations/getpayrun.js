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
var GetPayRunPathParams = /** @class */ (function (_super) {
    __extends(GetPayRunPathParams, _super);
    function GetPayRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayRunID" }),
        __metadata("design:type", String)
    ], GetPayRunPathParams.prototype, "payRunId", void 0);
    return GetPayRunPathParams;
}(SpeakeasyBase));
export { GetPayRunPathParams };
var GetPayRunHeaders = /** @class */ (function (_super) {
    __extends(GetPayRunHeaders, _super);
    function GetPayRunHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], GetPayRunHeaders.prototype, "xeroTenantId", void 0);
    return GetPayRunHeaders;
}(SpeakeasyBase));
export { GetPayRunHeaders };
var GetPayRunSecurity = /** @class */ (function (_super) {
    __extends(GetPayRunSecurity, _super);
    function GetPayRunSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetPayRunSecurity.prototype, "oAuth2", void 0);
    return GetPayRunSecurity;
}(SpeakeasyBase));
export { GetPayRunSecurity };
var GetPayRunRequest = /** @class */ (function (_super) {
    __extends(GetPayRunRequest, _super);
    function GetPayRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayRunPathParams)
    ], GetPayRunRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayRunHeaders)
    ], GetPayRunRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayRunSecurity)
    ], GetPayRunRequest.prototype, "security", void 0);
    return GetPayRunRequest;
}(SpeakeasyBase));
export { GetPayRunRequest };
var GetPayRunResponse = /** @class */ (function (_super) {
    __extends(GetPayRunResponse, _super);
    function GetPayRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPayRunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PayRuns)
    ], GetPayRunResponse.prototype, "payRuns", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPayRunResponse.prototype, "statusCode", void 0);
    return GetPayRunResponse;
}(SpeakeasyBase));
export { GetPayRunResponse };
