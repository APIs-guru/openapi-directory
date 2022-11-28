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
export var GetEditorUrlLanguageEnum;
(function (GetEditorUrlLanguageEnum) {
    GetEditorUrlLanguageEnum["En"] = "en";
    GetEditorUrlLanguageEnum["Et"] = "et";
    GetEditorUrlLanguageEnum["Cs"] = "cs";
    GetEditorUrlLanguageEnum["Sk"] = "sk";
    GetEditorUrlLanguageEnum["Ru"] = "ru";
})(GetEditorUrlLanguageEnum || (GetEditorUrlLanguageEnum = {}));
var GetEditorUrlQueryParams = /** @class */ (function (_super) {
    __extends(GetEditorUrlQueryParams, _super);
    function GetEditorUrlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetEditorUrlQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=templateId" }),
        __metadata("design:type", Number)
    ], GetEditorUrlQueryParams.prototype, "templateId", void 0);
    return GetEditorUrlQueryParams;
}(SpeakeasyBase));
export { GetEditorUrlQueryParams };
var GetEditorUrl200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetEditorUrl200ApplicationJson, _super);
    function GetEditorUrl200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", String)
    ], GetEditorUrl200ApplicationJson.prototype, "response", void 0);
    return GetEditorUrl200ApplicationJson;
}(SpeakeasyBase));
export { GetEditorUrl200ApplicationJson };
export var GetEditorUrl401ApplicationJsonErrorEnum;
(function (GetEditorUrl401ApplicationJsonErrorEnum) {
    GetEditorUrl401ApplicationJsonErrorEnum["AuthenticationFailedRequestExpired"] = "Authentication failed: request expired";
    GetEditorUrl401ApplicationJsonErrorEnum["AuthenticationFailedSignatureOrSecretMissing"] = "Authentication failed: signature or secret missing";
    GetEditorUrl401ApplicationJsonErrorEnum["AuthenticationFailedWorkspaceMissing"] = "Authentication failed: workspace missing";
    GetEditorUrl401ApplicationJsonErrorEnum["AuthenticationFailedKeyMissing"] = "Authentication failed: key missing";
    GetEditorUrl401ApplicationJsonErrorEnum["AuthenticationFailedPropertyIssIssuerMissingInJwt"] = "Authentication failed: property 'iss' (issuer) missing in JWT";
    GetEditorUrl401ApplicationJsonErrorEnum["AuthenticationFailedPropertySubSubjectMissingInJwt"] = "Authentication failed: property 'sub' (subject) missing in JWT";
    GetEditorUrl401ApplicationJsonErrorEnum["AuthenticationFailedPropertyExpExpirationTimeMissingInJwt"] = "Authentication failed: property 'exp' (expiration time) missing in JWT";
    GetEditorUrl401ApplicationJsonErrorEnum["AuthenticationFailedInvalidIssIssuer"] = "Authentication failed: invalid 'iss' (issuer)";
    GetEditorUrl401ApplicationJsonErrorEnum["AuthenticationFailedIncorrectSignature"] = "Authentication failed: incorrect signature";
    GetEditorUrl401ApplicationJsonErrorEnum["AuthenticationFailed"] = "Authentication failed";
})(GetEditorUrl401ApplicationJsonErrorEnum || (GetEditorUrl401ApplicationJsonErrorEnum = {}));
var GetEditorUrl401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetEditorUrl401ApplicationJson, _super);
    function GetEditorUrl401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetEditorUrl401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetEditorUrl401ApplicationJson.prototype, "status", void 0);
    return GetEditorUrl401ApplicationJson;
}(SpeakeasyBase));
export { GetEditorUrl401ApplicationJson };
export var GetEditorUrl403ApplicationJsonErrorEnum;
(function (GetEditorUrl403ApplicationJsonErrorEnum) {
    GetEditorUrl403ApplicationJsonErrorEnum["YourAccountHasExceededTheMonthlyDocumentGenerationLimit"] = "Your account has exceeded the monthly document generation limit.";
})(GetEditorUrl403ApplicationJsonErrorEnum || (GetEditorUrl403ApplicationJsonErrorEnum = {}));
var GetEditorUrl403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetEditorUrl403ApplicationJson, _super);
    function GetEditorUrl403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetEditorUrl403ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetEditorUrl403ApplicationJson.prototype, "status", void 0);
    return GetEditorUrl403ApplicationJson;
}(SpeakeasyBase));
export { GetEditorUrl403ApplicationJson };
export var GetEditorUrl404ApplicationJsonErrorEnum;
(function (GetEditorUrl404ApplicationJsonErrorEnum) {
    GetEditorUrl404ApplicationJsonErrorEnum["EntityNotFound"] = "Entity not found";
    GetEditorUrl404ApplicationJsonErrorEnum["ResourceNotFound"] = "Resource not found";
    GetEditorUrl404ApplicationJsonErrorEnum["NoneOfTheTemplatesIsAvailableForTheWorkspace"] = "None of the templates is available for the workspace.";
})(GetEditorUrl404ApplicationJsonErrorEnum || (GetEditorUrl404ApplicationJsonErrorEnum = {}));
var GetEditorUrl404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetEditorUrl404ApplicationJson, _super);
    function GetEditorUrl404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetEditorUrl404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetEditorUrl404ApplicationJson.prototype, "status", void 0);
    return GetEditorUrl404ApplicationJson;
}(SpeakeasyBase));
export { GetEditorUrl404ApplicationJson };
export var GetEditorUrl422ApplicationJsonErrorEnum;
(function (GetEditorUrl422ApplicationJsonErrorEnum) {
    GetEditorUrl422ApplicationJsonErrorEnum["UnableToParseJsonPleaseCheckFormatting"] = "Unable to parse JSON, please check formatting";
    GetEditorUrl422ApplicationJsonErrorEnum["RequiredParameterMissing"] = "Required parameter missing";
    GetEditorUrl422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateDefinitionNotDefined"] = "Required parameter missing: template definition not defined";
    GetEditorUrl422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateNotDefined"] = "Required parameter missing: template not defined";
})(GetEditorUrl422ApplicationJsonErrorEnum || (GetEditorUrl422ApplicationJsonErrorEnum = {}));
var GetEditorUrl422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetEditorUrl422ApplicationJson, _super);
    function GetEditorUrl422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetEditorUrl422ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetEditorUrl422ApplicationJson.prototype, "status", void 0);
    return GetEditorUrl422ApplicationJson;
}(SpeakeasyBase));
export { GetEditorUrl422ApplicationJson };
var GetEditorUrl500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetEditorUrl500ApplicationJson, _super);
    function GetEditorUrl500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetEditorUrl500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetEditorUrl500ApplicationJson.prototype, "status", void 0);
    return GetEditorUrl500ApplicationJson;
}(SpeakeasyBase));
export { GetEditorUrl500ApplicationJson };
var GetEditorUrlRequest = /** @class */ (function (_super) {
    __extends(GetEditorUrlRequest, _super);
    function GetEditorUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEditorUrlQueryParams)
    ], GetEditorUrlRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], GetEditorUrlRequest.prototype, "request", void 0);
    return GetEditorUrlRequest;
}(SpeakeasyBase));
export { GetEditorUrlRequest };
var GetEditorUrlResponse = /** @class */ (function (_super) {
    __extends(GetEditorUrlResponse, _super);
    function GetEditorUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEditorUrlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEditorUrlResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEditorUrl200ApplicationJson)
    ], GetEditorUrlResponse.prototype, "getEditorUrl200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEditorUrl401ApplicationJson)
    ], GetEditorUrlResponse.prototype, "getEditorUrl401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEditorUrl403ApplicationJson)
    ], GetEditorUrlResponse.prototype, "getEditorUrl403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEditorUrl404ApplicationJson)
    ], GetEditorUrlResponse.prototype, "getEditorUrl404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEditorUrl422ApplicationJson)
    ], GetEditorUrlResponse.prototype, "getEditorUrl422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEditorUrl500ApplicationJson)
    ], GetEditorUrlResponse.prototype, "getEditorUrl500ApplicationJsonObject", void 0);
    return GetEditorUrlResponse;
}(SpeakeasyBase));
export { GetEditorUrlResponse };
