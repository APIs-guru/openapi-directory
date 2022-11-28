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
var GetTemplateQueryParams = /** @class */ (function (_super) {
    __extends(GetTemplateQueryParams, _super);
    function GetTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=templateId" }),
        __metadata("design:type", Number)
    ], GetTemplateQueryParams.prototype, "templateId", void 0);
    return GetTemplateQueryParams;
}(SpeakeasyBase));
export { GetTemplateQueryParams };
var GetTemplate200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplate200ApplicationJson, _super);
    function GetTemplate200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", shared.TemplateDefinition)
    ], GetTemplate200ApplicationJson.prototype, "response", void 0);
    return GetTemplate200ApplicationJson;
}(SpeakeasyBase));
export { GetTemplate200ApplicationJson };
export var GetTemplate401ApplicationJsonErrorEnum;
(function (GetTemplate401ApplicationJsonErrorEnum) {
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedRequestExpired"] = "Authentication failed: request expired";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedSignatureOrSecretMissing"] = "Authentication failed: signature or secret missing";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedWorkspaceMissing"] = "Authentication failed: workspace missing";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedKeyMissing"] = "Authentication failed: key missing";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyIssIssuerMissingInJwt"] = "Authentication failed: property 'iss' (issuer) missing in JWT";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertySubSubjectMissingInJwt"] = "Authentication failed: property 'sub' (subject) missing in JWT";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyExpExpirationTimeMissingInJwt"] = "Authentication failed: property 'exp' (expiration time) missing in JWT";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedInvalidIssIssuer"] = "Authentication failed: invalid 'iss' (issuer)";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedIncorrectSignature"] = "Authentication failed: incorrect signature";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailed"] = "Authentication failed";
})(GetTemplate401ApplicationJsonErrorEnum || (GetTemplate401ApplicationJsonErrorEnum = {}));
var GetTemplate401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplate401ApplicationJson, _super);
    function GetTemplate401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTemplate401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTemplate401ApplicationJson.prototype, "status", void 0);
    return GetTemplate401ApplicationJson;
}(SpeakeasyBase));
export { GetTemplate401ApplicationJson };
export var GetTemplate403ApplicationJsonErrorEnum;
(function (GetTemplate403ApplicationJsonErrorEnum) {
    GetTemplate403ApplicationJsonErrorEnum["YourAccountHasExceededTheMonthlyDocumentGenerationLimit"] = "Your account has exceeded the monthly document generation limit.";
})(GetTemplate403ApplicationJsonErrorEnum || (GetTemplate403ApplicationJsonErrorEnum = {}));
var GetTemplate403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplate403ApplicationJson, _super);
    function GetTemplate403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTemplate403ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTemplate403ApplicationJson.prototype, "status", void 0);
    return GetTemplate403ApplicationJson;
}(SpeakeasyBase));
export { GetTemplate403ApplicationJson };
export var GetTemplate404ApplicationJsonErrorEnum;
(function (GetTemplate404ApplicationJsonErrorEnum) {
    GetTemplate404ApplicationJsonErrorEnum["EntityNotFound"] = "Entity not found";
    GetTemplate404ApplicationJsonErrorEnum["ResourceNotFound"] = "Resource not found";
    GetTemplate404ApplicationJsonErrorEnum["NoneOfTheTemplatesIsAvailableForTheWorkspace"] = "None of the templates is available for the workspace.";
})(GetTemplate404ApplicationJsonErrorEnum || (GetTemplate404ApplicationJsonErrorEnum = {}));
var GetTemplate404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplate404ApplicationJson, _super);
    function GetTemplate404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTemplate404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTemplate404ApplicationJson.prototype, "status", void 0);
    return GetTemplate404ApplicationJson;
}(SpeakeasyBase));
export { GetTemplate404ApplicationJson };
export var GetTemplate422ApplicationJsonErrorEnum;
(function (GetTemplate422ApplicationJsonErrorEnum) {
    GetTemplate422ApplicationJsonErrorEnum["UnableToParseJsonPleaseCheckFormatting"] = "Unable to parse JSON, please check formatting";
    GetTemplate422ApplicationJsonErrorEnum["RequiredParameterMissing"] = "Required parameter missing";
    GetTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateDefinitionNotDefined"] = "Required parameter missing: template definition not defined";
    GetTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateNotDefined"] = "Required parameter missing: template not defined";
})(GetTemplate422ApplicationJsonErrorEnum || (GetTemplate422ApplicationJsonErrorEnum = {}));
var GetTemplate422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplate422ApplicationJson, _super);
    function GetTemplate422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTemplate422ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTemplate422ApplicationJson.prototype, "status", void 0);
    return GetTemplate422ApplicationJson;
}(SpeakeasyBase));
export { GetTemplate422ApplicationJson };
var GetTemplate500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplate500ApplicationJson, _super);
    function GetTemplate500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTemplate500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTemplate500ApplicationJson.prototype, "status", void 0);
    return GetTemplate500ApplicationJson;
}(SpeakeasyBase));
export { GetTemplate500ApplicationJson };
var GetTemplateRequest = /** @class */ (function (_super) {
    __extends(GetTemplateRequest, _super);
    function GetTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplateQueryParams)
    ], GetTemplateRequest.prototype, "queryParams", void 0);
    return GetTemplateRequest;
}(SpeakeasyBase));
export { GetTemplateRequest };
var GetTemplateResponse = /** @class */ (function (_super) {
    __extends(GetTemplateResponse, _super);
    function GetTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplate200ApplicationJson)
    ], GetTemplateResponse.prototype, "getTemplate200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplate401ApplicationJson)
    ], GetTemplateResponse.prototype, "getTemplate401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplate403ApplicationJson)
    ], GetTemplateResponse.prototype, "getTemplate403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplate404ApplicationJson)
    ], GetTemplateResponse.prototype, "getTemplate404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplate422ApplicationJson)
    ], GetTemplateResponse.prototype, "getTemplate422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplate500ApplicationJson)
    ], GetTemplateResponse.prototype, "getTemplate500ApplicationJsonObject", void 0);
    return GetTemplateResponse;
}(SpeakeasyBase));
export { GetTemplateResponse };
