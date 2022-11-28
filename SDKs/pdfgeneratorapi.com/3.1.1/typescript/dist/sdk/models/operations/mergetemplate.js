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
var MergeTemplateQueryParams = /** @class */ (function (_super) {
    __extends(MergeTemplateQueryParams, _super);
    function MergeTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], MergeTemplateQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], MergeTemplateQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=output" }),
        __metadata("design:type", String)
    ], MergeTemplateQueryParams.prototype, "output", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=templateId" }),
        __metadata("design:type", Number)
    ], MergeTemplateQueryParams.prototype, "templateId", void 0);
    return MergeTemplateQueryParams;
}(SpeakeasyBase));
export { MergeTemplateQueryParams };
var MergeTemplate200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(MergeTemplate200ApplicationJsonMeta, _super);
    function MergeTemplate200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content-type" }),
        __metadata("design:type", String)
    ], MergeTemplate200ApplicationJsonMeta.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], MergeTemplate200ApplicationJsonMeta.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encoding" }),
        __metadata("design:type", String)
    ], MergeTemplate200ApplicationJsonMeta.prototype, "encoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MergeTemplate200ApplicationJsonMeta.prototype, "name", void 0);
    return MergeTemplate200ApplicationJsonMeta;
}(SpeakeasyBase));
export { MergeTemplate200ApplicationJsonMeta };
var MergeTemplate200ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplate200ApplicationJson, _super);
    function MergeTemplate200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", MergeTemplate200ApplicationJsonMeta)
    ], MergeTemplate200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", String)
    ], MergeTemplate200ApplicationJson.prototype, "response", void 0);
    return MergeTemplate200ApplicationJson;
}(SpeakeasyBase));
export { MergeTemplate200ApplicationJson };
export var MergeTemplate401ApplicationJsonErrorEnum;
(function (MergeTemplate401ApplicationJsonErrorEnum) {
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedRequestExpired"] = "Authentication failed: request expired";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedSignatureOrSecretMissing"] = "Authentication failed: signature or secret missing";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedWorkspaceMissing"] = "Authentication failed: workspace missing";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedKeyMissing"] = "Authentication failed: key missing";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyIssIssuerMissingInJwt"] = "Authentication failed: property 'iss' (issuer) missing in JWT";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertySubSubjectMissingInJwt"] = "Authentication failed: property 'sub' (subject) missing in JWT";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyExpExpirationTimeMissingInJwt"] = "Authentication failed: property 'exp' (expiration time) missing in JWT";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedInvalidIssIssuer"] = "Authentication failed: invalid 'iss' (issuer)";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedIncorrectSignature"] = "Authentication failed: incorrect signature";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailed"] = "Authentication failed";
})(MergeTemplate401ApplicationJsonErrorEnum || (MergeTemplate401ApplicationJsonErrorEnum = {}));
var MergeTemplate401ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplate401ApplicationJson, _super);
    function MergeTemplate401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplate401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplate401ApplicationJson.prototype, "status", void 0);
    return MergeTemplate401ApplicationJson;
}(SpeakeasyBase));
export { MergeTemplate401ApplicationJson };
export var MergeTemplate403ApplicationJsonErrorEnum;
(function (MergeTemplate403ApplicationJsonErrorEnum) {
    MergeTemplate403ApplicationJsonErrorEnum["YourAccountHasExceededTheMonthlyDocumentGenerationLimit"] = "Your account has exceeded the monthly document generation limit.";
})(MergeTemplate403ApplicationJsonErrorEnum || (MergeTemplate403ApplicationJsonErrorEnum = {}));
var MergeTemplate403ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplate403ApplicationJson, _super);
    function MergeTemplate403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplate403ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplate403ApplicationJson.prototype, "status", void 0);
    return MergeTemplate403ApplicationJson;
}(SpeakeasyBase));
export { MergeTemplate403ApplicationJson };
export var MergeTemplate404ApplicationJsonErrorEnum;
(function (MergeTemplate404ApplicationJsonErrorEnum) {
    MergeTemplate404ApplicationJsonErrorEnum["EntityNotFound"] = "Entity not found";
    MergeTemplate404ApplicationJsonErrorEnum["ResourceNotFound"] = "Resource not found";
    MergeTemplate404ApplicationJsonErrorEnum["NoneOfTheTemplatesIsAvailableForTheWorkspace"] = "None of the templates is available for the workspace.";
})(MergeTemplate404ApplicationJsonErrorEnum || (MergeTemplate404ApplicationJsonErrorEnum = {}));
var MergeTemplate404ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplate404ApplicationJson, _super);
    function MergeTemplate404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplate404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplate404ApplicationJson.prototype, "status", void 0);
    return MergeTemplate404ApplicationJson;
}(SpeakeasyBase));
export { MergeTemplate404ApplicationJson };
export var MergeTemplate422ApplicationJsonErrorEnum;
(function (MergeTemplate422ApplicationJsonErrorEnum) {
    MergeTemplate422ApplicationJsonErrorEnum["UnableToParseJsonPleaseCheckFormatting"] = "Unable to parse JSON, please check formatting";
    MergeTemplate422ApplicationJsonErrorEnum["RequiredParameterMissing"] = "Required parameter missing";
    MergeTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateDefinitionNotDefined"] = "Required parameter missing: template definition not defined";
    MergeTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateNotDefined"] = "Required parameter missing: template not defined";
})(MergeTemplate422ApplicationJsonErrorEnum || (MergeTemplate422ApplicationJsonErrorEnum = {}));
var MergeTemplate422ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplate422ApplicationJson, _super);
    function MergeTemplate422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplate422ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplate422ApplicationJson.prototype, "status", void 0);
    return MergeTemplate422ApplicationJson;
}(SpeakeasyBase));
export { MergeTemplate422ApplicationJson };
var MergeTemplate500ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplate500ApplicationJson, _super);
    function MergeTemplate500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplate500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplate500ApplicationJson.prototype, "status", void 0);
    return MergeTemplate500ApplicationJson;
}(SpeakeasyBase));
export { MergeTemplate500ApplicationJson };
var MergeTemplateRequest = /** @class */ (function (_super) {
    __extends(MergeTemplateRequest, _super);
    function MergeTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeTemplateQueryParams)
    ], MergeTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Data)
    ], MergeTemplateRequest.prototype, "request", void 0);
    return MergeTemplateRequest;
}(SpeakeasyBase));
export { MergeTemplateRequest };
var MergeTemplateResponse = /** @class */ (function (_super) {
    __extends(MergeTemplateResponse, _super);
    function MergeTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MergeTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MergeTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeTemplate200ApplicationJson)
    ], MergeTemplateResponse.prototype, "mergeTemplate200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeTemplate401ApplicationJson)
    ], MergeTemplateResponse.prototype, "mergeTemplate401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeTemplate403ApplicationJson)
    ], MergeTemplateResponse.prototype, "mergeTemplate403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeTemplate404ApplicationJson)
    ], MergeTemplateResponse.prototype, "mergeTemplate404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeTemplate422ApplicationJson)
    ], MergeTemplateResponse.prototype, "mergeTemplate422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeTemplate500ApplicationJson)
    ], MergeTemplateResponse.prototype, "mergeTemplate500ApplicationJsonObject", void 0);
    return MergeTemplateResponse;
}(SpeakeasyBase));
export { MergeTemplateResponse };
