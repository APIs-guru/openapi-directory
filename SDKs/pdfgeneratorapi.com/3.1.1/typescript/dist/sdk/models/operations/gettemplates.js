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
var GetTemplates200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplates200ApplicationJson, _super);
    function GetTemplates200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response", elemType: shared.Template }),
        __metadata("design:type", Array)
    ], GetTemplates200ApplicationJson.prototype, "response", void 0);
    return GetTemplates200ApplicationJson;
}(SpeakeasyBase));
export { GetTemplates200ApplicationJson };
export var GetTemplates401ApplicationJsonErrorEnum;
(function (GetTemplates401ApplicationJsonErrorEnum) {
    GetTemplates401ApplicationJsonErrorEnum["AuthenticationFailedRequestExpired"] = "Authentication failed: request expired";
    GetTemplates401ApplicationJsonErrorEnum["AuthenticationFailedSignatureOrSecretMissing"] = "Authentication failed: signature or secret missing";
    GetTemplates401ApplicationJsonErrorEnum["AuthenticationFailedWorkspaceMissing"] = "Authentication failed: workspace missing";
    GetTemplates401ApplicationJsonErrorEnum["AuthenticationFailedKeyMissing"] = "Authentication failed: key missing";
    GetTemplates401ApplicationJsonErrorEnum["AuthenticationFailedPropertyIssIssuerMissingInJwt"] = "Authentication failed: property 'iss' (issuer) missing in JWT";
    GetTemplates401ApplicationJsonErrorEnum["AuthenticationFailedPropertySubSubjectMissingInJwt"] = "Authentication failed: property 'sub' (subject) missing in JWT";
    GetTemplates401ApplicationJsonErrorEnum["AuthenticationFailedPropertyExpExpirationTimeMissingInJwt"] = "Authentication failed: property 'exp' (expiration time) missing in JWT";
    GetTemplates401ApplicationJsonErrorEnum["AuthenticationFailedInvalidIssIssuer"] = "Authentication failed: invalid 'iss' (issuer)";
    GetTemplates401ApplicationJsonErrorEnum["AuthenticationFailedIncorrectSignature"] = "Authentication failed: incorrect signature";
    GetTemplates401ApplicationJsonErrorEnum["AuthenticationFailed"] = "Authentication failed";
})(GetTemplates401ApplicationJsonErrorEnum || (GetTemplates401ApplicationJsonErrorEnum = {}));
var GetTemplates401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplates401ApplicationJson, _super);
    function GetTemplates401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTemplates401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTemplates401ApplicationJson.prototype, "status", void 0);
    return GetTemplates401ApplicationJson;
}(SpeakeasyBase));
export { GetTemplates401ApplicationJson };
export var GetTemplates403ApplicationJsonErrorEnum;
(function (GetTemplates403ApplicationJsonErrorEnum) {
    GetTemplates403ApplicationJsonErrorEnum["YourAccountHasExceededTheMonthlyDocumentGenerationLimit"] = "Your account has exceeded the monthly document generation limit.";
})(GetTemplates403ApplicationJsonErrorEnum || (GetTemplates403ApplicationJsonErrorEnum = {}));
var GetTemplates403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplates403ApplicationJson, _super);
    function GetTemplates403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTemplates403ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTemplates403ApplicationJson.prototype, "status", void 0);
    return GetTemplates403ApplicationJson;
}(SpeakeasyBase));
export { GetTemplates403ApplicationJson };
export var GetTemplates404ApplicationJsonErrorEnum;
(function (GetTemplates404ApplicationJsonErrorEnum) {
    GetTemplates404ApplicationJsonErrorEnum["EntityNotFound"] = "Entity not found";
    GetTemplates404ApplicationJsonErrorEnum["ResourceNotFound"] = "Resource not found";
    GetTemplates404ApplicationJsonErrorEnum["NoneOfTheTemplatesIsAvailableForTheWorkspace"] = "None of the templates is available for the workspace.";
})(GetTemplates404ApplicationJsonErrorEnum || (GetTemplates404ApplicationJsonErrorEnum = {}));
var GetTemplates404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplates404ApplicationJson, _super);
    function GetTemplates404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTemplates404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTemplates404ApplicationJson.prototype, "status", void 0);
    return GetTemplates404ApplicationJson;
}(SpeakeasyBase));
export { GetTemplates404ApplicationJson };
export var GetTemplates422ApplicationJsonErrorEnum;
(function (GetTemplates422ApplicationJsonErrorEnum) {
    GetTemplates422ApplicationJsonErrorEnum["UnableToParseJsonPleaseCheckFormatting"] = "Unable to parse JSON, please check formatting";
    GetTemplates422ApplicationJsonErrorEnum["RequiredParameterMissing"] = "Required parameter missing";
    GetTemplates422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateDefinitionNotDefined"] = "Required parameter missing: template definition not defined";
    GetTemplates422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateNotDefined"] = "Required parameter missing: template not defined";
})(GetTemplates422ApplicationJsonErrorEnum || (GetTemplates422ApplicationJsonErrorEnum = {}));
var GetTemplates422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplates422ApplicationJson, _super);
    function GetTemplates422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTemplates422ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTemplates422ApplicationJson.prototype, "status", void 0);
    return GetTemplates422ApplicationJson;
}(SpeakeasyBase));
export { GetTemplates422ApplicationJson };
var GetTemplates500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplates500ApplicationJson, _super);
    function GetTemplates500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTemplates500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTemplates500ApplicationJson.prototype, "status", void 0);
    return GetTemplates500ApplicationJson;
}(SpeakeasyBase));
export { GetTemplates500ApplicationJson };
var GetTemplatesResponse = /** @class */ (function (_super) {
    __extends(GetTemplatesResponse, _super);
    function GetTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTemplatesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplates200ApplicationJson)
    ], GetTemplatesResponse.prototype, "getTemplates200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplates401ApplicationJson)
    ], GetTemplatesResponse.prototype, "getTemplates401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplates403ApplicationJson)
    ], GetTemplatesResponse.prototype, "getTemplates403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplates404ApplicationJson)
    ], GetTemplatesResponse.prototype, "getTemplates404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplates422ApplicationJson)
    ], GetTemplatesResponse.prototype, "getTemplates422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplates500ApplicationJson)
    ], GetTemplatesResponse.prototype, "getTemplates500ApplicationJsonObject", void 0);
    return GetTemplatesResponse;
}(SpeakeasyBase));
export { GetTemplatesResponse };
