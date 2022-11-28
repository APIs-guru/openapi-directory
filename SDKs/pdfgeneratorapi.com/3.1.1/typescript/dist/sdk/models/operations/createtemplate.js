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
var CreateTemplate200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTemplate200ApplicationJson, _super);
    function CreateTemplate200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", shared.TemplateDefinition)
    ], CreateTemplate200ApplicationJson.prototype, "response", void 0);
    return CreateTemplate200ApplicationJson;
}(SpeakeasyBase));
export { CreateTemplate200ApplicationJson };
export var CreateTemplate401ApplicationJsonErrorEnum;
(function (CreateTemplate401ApplicationJsonErrorEnum) {
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedRequestExpired"] = "Authentication failed: request expired";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedSignatureOrSecretMissing"] = "Authentication failed: signature or secret missing";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedWorkspaceMissing"] = "Authentication failed: workspace missing";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedKeyMissing"] = "Authentication failed: key missing";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyIssIssuerMissingInJwt"] = "Authentication failed: property 'iss' (issuer) missing in JWT";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertySubSubjectMissingInJwt"] = "Authentication failed: property 'sub' (subject) missing in JWT";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyExpExpirationTimeMissingInJwt"] = "Authentication failed: property 'exp' (expiration time) missing in JWT";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedInvalidIssIssuer"] = "Authentication failed: invalid 'iss' (issuer)";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedIncorrectSignature"] = "Authentication failed: incorrect signature";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailed"] = "Authentication failed";
})(CreateTemplate401ApplicationJsonErrorEnum || (CreateTemplate401ApplicationJsonErrorEnum = {}));
var CreateTemplate401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTemplate401ApplicationJson, _super);
    function CreateTemplate401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], CreateTemplate401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], CreateTemplate401ApplicationJson.prototype, "status", void 0);
    return CreateTemplate401ApplicationJson;
}(SpeakeasyBase));
export { CreateTemplate401ApplicationJson };
export var CreateTemplate403ApplicationJsonErrorEnum;
(function (CreateTemplate403ApplicationJsonErrorEnum) {
    CreateTemplate403ApplicationJsonErrorEnum["YourAccountHasExceededTheMonthlyDocumentGenerationLimit"] = "Your account has exceeded the monthly document generation limit.";
})(CreateTemplate403ApplicationJsonErrorEnum || (CreateTemplate403ApplicationJsonErrorEnum = {}));
var CreateTemplate403ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTemplate403ApplicationJson, _super);
    function CreateTemplate403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], CreateTemplate403ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], CreateTemplate403ApplicationJson.prototype, "status", void 0);
    return CreateTemplate403ApplicationJson;
}(SpeakeasyBase));
export { CreateTemplate403ApplicationJson };
export var CreateTemplate404ApplicationJsonErrorEnum;
(function (CreateTemplate404ApplicationJsonErrorEnum) {
    CreateTemplate404ApplicationJsonErrorEnum["EntityNotFound"] = "Entity not found";
    CreateTemplate404ApplicationJsonErrorEnum["ResourceNotFound"] = "Resource not found";
    CreateTemplate404ApplicationJsonErrorEnum["NoneOfTheTemplatesIsAvailableForTheWorkspace"] = "None of the templates is available for the workspace.";
})(CreateTemplate404ApplicationJsonErrorEnum || (CreateTemplate404ApplicationJsonErrorEnum = {}));
var CreateTemplate404ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTemplate404ApplicationJson, _super);
    function CreateTemplate404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], CreateTemplate404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], CreateTemplate404ApplicationJson.prototype, "status", void 0);
    return CreateTemplate404ApplicationJson;
}(SpeakeasyBase));
export { CreateTemplate404ApplicationJson };
export var CreateTemplate422ApplicationJsonErrorEnum;
(function (CreateTemplate422ApplicationJsonErrorEnum) {
    CreateTemplate422ApplicationJsonErrorEnum["UnableToParseJsonPleaseCheckFormatting"] = "Unable to parse JSON, please check formatting";
    CreateTemplate422ApplicationJsonErrorEnum["RequiredParameterMissing"] = "Required parameter missing";
    CreateTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateDefinitionNotDefined"] = "Required parameter missing: template definition not defined";
    CreateTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateNotDefined"] = "Required parameter missing: template not defined";
})(CreateTemplate422ApplicationJsonErrorEnum || (CreateTemplate422ApplicationJsonErrorEnum = {}));
var CreateTemplate422ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTemplate422ApplicationJson, _super);
    function CreateTemplate422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], CreateTemplate422ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], CreateTemplate422ApplicationJson.prototype, "status", void 0);
    return CreateTemplate422ApplicationJson;
}(SpeakeasyBase));
export { CreateTemplate422ApplicationJson };
var CreateTemplate500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTemplate500ApplicationJson, _super);
    function CreateTemplate500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], CreateTemplate500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], CreateTemplate500ApplicationJson.prototype, "status", void 0);
    return CreateTemplate500ApplicationJson;
}(SpeakeasyBase));
export { CreateTemplate500ApplicationJson };
var CreateTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateTemplateRequest, _super);
    function CreateTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TemplateDefinitionNew)
    ], CreateTemplateRequest.prototype, "request", void 0);
    return CreateTemplateRequest;
}(SpeakeasyBase));
export { CreateTemplateRequest };
var CreateTemplateResponse = /** @class */ (function (_super) {
    __extends(CreateTemplateResponse, _super);
    function CreateTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTemplate200ApplicationJson)
    ], CreateTemplateResponse.prototype, "createTemplate200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTemplate401ApplicationJson)
    ], CreateTemplateResponse.prototype, "createTemplate401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTemplate403ApplicationJson)
    ], CreateTemplateResponse.prototype, "createTemplate403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTemplate404ApplicationJson)
    ], CreateTemplateResponse.prototype, "createTemplate404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTemplate422ApplicationJson)
    ], CreateTemplateResponse.prototype, "createTemplate422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTemplate500ApplicationJson)
    ], CreateTemplateResponse.prototype, "createTemplate500ApplicationJsonObject", void 0);
    return CreateTemplateResponse;
}(SpeakeasyBase));
export { CreateTemplateResponse };
