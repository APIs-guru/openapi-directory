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
var GetCompanySpecificOpenApiDocumentationPathParams = /** @class */ (function (_super) {
    __extends(GetCompanySpecificOpenApiDocumentationPathParams, _super);
    function GetCompanySpecificOpenApiDocumentationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" }),
        __metadata("design:type", String)
    ], GetCompanySpecificOpenApiDocumentationPathParams.prototype, "companyId", void 0);
    return GetCompanySpecificOpenApiDocumentationPathParams;
}(SpeakeasyBase));
export { GetCompanySpecificOpenApiDocumentationPathParams };
var GetCompanySpecificOpenApiDocumentationHeaders = /** @class */ (function (_super) {
    __extends(GetCompanySpecificOpenApiDocumentationHeaders, _super);
    function GetCompanySpecificOpenApiDocumentationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetCompanySpecificOpenApiDocumentationHeaders.prototype, "authorization", void 0);
    return GetCompanySpecificOpenApiDocumentationHeaders;
}(SpeakeasyBase));
export { GetCompanySpecificOpenApiDocumentationHeaders };
var GetCompanySpecificOpenApiDocumentationSecurity = /** @class */ (function (_super) {
    __extends(GetCompanySpecificOpenApiDocumentationSecurity, _super);
    function GetCompanySpecificOpenApiDocumentationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePaylocityAuth)
    ], GetCompanySpecificOpenApiDocumentationSecurity.prototype, "paylocityAuth", void 0);
    return GetCompanySpecificOpenApiDocumentationSecurity;
}(SpeakeasyBase));
export { GetCompanySpecificOpenApiDocumentationSecurity };
var GetCompanySpecificOpenApiDocumentationRequest = /** @class */ (function (_super) {
    __extends(GetCompanySpecificOpenApiDocumentationRequest, _super);
    function GetCompanySpecificOpenApiDocumentationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCompanySpecificOpenApiDocumentationPathParams)
    ], GetCompanySpecificOpenApiDocumentationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCompanySpecificOpenApiDocumentationHeaders)
    ], GetCompanySpecificOpenApiDocumentationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCompanySpecificOpenApiDocumentationSecurity)
    ], GetCompanySpecificOpenApiDocumentationRequest.prototype, "security", void 0);
    return GetCompanySpecificOpenApiDocumentationRequest;
}(SpeakeasyBase));
export { GetCompanySpecificOpenApiDocumentationRequest };
var GetCompanySpecificOpenApiDocumentationResponse = /** @class */ (function (_super) {
    __extends(GetCompanySpecificOpenApiDocumentationResponse, _super);
    function GetCompanySpecificOpenApiDocumentationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCompanySpecificOpenApiDocumentationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCompanySpecificOpenApiDocumentationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Error }),
        __metadata("design:type", Array)
    ], GetCompanySpecificOpenApiDocumentationResponse.prototype, "errors", void 0);
    return GetCompanySpecificOpenApiDocumentationResponse;
}(SpeakeasyBase));
export { GetCompanySpecificOpenApiDocumentationResponse };
