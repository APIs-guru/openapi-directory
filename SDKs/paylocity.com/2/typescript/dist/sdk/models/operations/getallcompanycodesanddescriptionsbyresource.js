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
var GetAllCompanyCodesAndDescriptionsByResourcePathParams = /** @class */ (function (_super) {
    __extends(GetAllCompanyCodesAndDescriptionsByResourcePathParams, _super);
    function GetAllCompanyCodesAndDescriptionsByResourcePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=codeResource" }),
        __metadata("design:type", String)
    ], GetAllCompanyCodesAndDescriptionsByResourcePathParams.prototype, "codeResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" }),
        __metadata("design:type", String)
    ], GetAllCompanyCodesAndDescriptionsByResourcePathParams.prototype, "companyId", void 0);
    return GetAllCompanyCodesAndDescriptionsByResourcePathParams;
}(SpeakeasyBase));
export { GetAllCompanyCodesAndDescriptionsByResourcePathParams };
var GetAllCompanyCodesAndDescriptionsByResourceSecurity = /** @class */ (function (_super) {
    __extends(GetAllCompanyCodesAndDescriptionsByResourceSecurity, _super);
    function GetAllCompanyCodesAndDescriptionsByResourceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePaylocityAuth)
    ], GetAllCompanyCodesAndDescriptionsByResourceSecurity.prototype, "paylocityAuth", void 0);
    return GetAllCompanyCodesAndDescriptionsByResourceSecurity;
}(SpeakeasyBase));
export { GetAllCompanyCodesAndDescriptionsByResourceSecurity };
var GetAllCompanyCodesAndDescriptionsByResourceRequest = /** @class */ (function (_super) {
    __extends(GetAllCompanyCodesAndDescriptionsByResourceRequest, _super);
    function GetAllCompanyCodesAndDescriptionsByResourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllCompanyCodesAndDescriptionsByResourcePathParams)
    ], GetAllCompanyCodesAndDescriptionsByResourceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllCompanyCodesAndDescriptionsByResourceSecurity)
    ], GetAllCompanyCodesAndDescriptionsByResourceRequest.prototype, "security", void 0);
    return GetAllCompanyCodesAndDescriptionsByResourceRequest;
}(SpeakeasyBase));
export { GetAllCompanyCodesAndDescriptionsByResourceRequest };
var GetAllCompanyCodesAndDescriptionsByResourceResponse = /** @class */ (function (_super) {
    __extends(GetAllCompanyCodesAndDescriptionsByResourceResponse, _super);
    function GetAllCompanyCodesAndDescriptionsByResourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllCompanyCodesAndDescriptionsByResourceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllCompanyCodesAndDescriptionsByResourceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.CompanyCodes }),
        __metadata("design:type", Array)
    ], GetAllCompanyCodesAndDescriptionsByResourceResponse.prototype, "companyCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Error }),
        __metadata("design:type", Array)
    ], GetAllCompanyCodesAndDescriptionsByResourceResponse.prototype, "errors", void 0);
    return GetAllCompanyCodesAndDescriptionsByResourceResponse;
}(SpeakeasyBase));
export { GetAllCompanyCodesAndDescriptionsByResourceResponse };
