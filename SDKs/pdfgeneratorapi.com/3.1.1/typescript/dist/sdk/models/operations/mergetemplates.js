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
var MergeTemplatesQueryParams = /** @class */ (function (_super) {
    __extends(MergeTemplatesQueryParams, _super);
    function MergeTemplatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], MergeTemplatesQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], MergeTemplatesQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=output" }),
        __metadata("design:type", String)
    ], MergeTemplatesQueryParams.prototype, "output", void 0);
    return MergeTemplatesQueryParams;
}(SpeakeasyBase));
export { MergeTemplatesQueryParams };
var MergeTemplates200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(MergeTemplates200ApplicationJsonMeta, _super);
    function MergeTemplates200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content-type" }),
        __metadata("design:type", String)
    ], MergeTemplates200ApplicationJsonMeta.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], MergeTemplates200ApplicationJsonMeta.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encoding" }),
        __metadata("design:type", String)
    ], MergeTemplates200ApplicationJsonMeta.prototype, "encoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MergeTemplates200ApplicationJsonMeta.prototype, "name", void 0);
    return MergeTemplates200ApplicationJsonMeta;
}(SpeakeasyBase));
export { MergeTemplates200ApplicationJsonMeta };
var MergeTemplates200ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplates200ApplicationJson, _super);
    function MergeTemplates200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", MergeTemplates200ApplicationJsonMeta)
    ], MergeTemplates200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", String)
    ], MergeTemplates200ApplicationJson.prototype, "response", void 0);
    return MergeTemplates200ApplicationJson;
}(SpeakeasyBase));
export { MergeTemplates200ApplicationJson };
export var MergeTemplates401ApplicationJsonErrorEnum;
(function (MergeTemplates401ApplicationJsonErrorEnum) {
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedRequestExpired"] = "Authentication failed: request expired";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedSignatureOrSecretMissing"] = "Authentication failed: signature or secret missing";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedWorkspaceMissing"] = "Authentication failed: workspace missing";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedKeyMissing"] = "Authentication failed: key missing";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedPropertyIssIssuerMissingInJwt"] = "Authentication failed: property 'iss' (issuer) missing in JWT";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedPropertySubSubjectMissingInJwt"] = "Authentication failed: property 'sub' (subject) missing in JWT";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedPropertyExpExpirationTimeMissingInJwt"] = "Authentication failed: property 'exp' (expiration time) missing in JWT";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedInvalidIssIssuer"] = "Authentication failed: invalid 'iss' (issuer)";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedIncorrectSignature"] = "Authentication failed: incorrect signature";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailed"] = "Authentication failed";
})(MergeTemplates401ApplicationJsonErrorEnum || (MergeTemplates401ApplicationJsonErrorEnum = {}));
var MergeTemplates401ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplates401ApplicationJson, _super);
    function MergeTemplates401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplates401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplates401ApplicationJson.prototype, "status", void 0);
    return MergeTemplates401ApplicationJson;
}(SpeakeasyBase));
export { MergeTemplates401ApplicationJson };
export var MergeTemplates403ApplicationJsonErrorEnum;
(function (MergeTemplates403ApplicationJsonErrorEnum) {
    MergeTemplates403ApplicationJsonErrorEnum["YourAccountHasExceededTheMonthlyDocumentGenerationLimit"] = "Your account has exceeded the monthly document generation limit.";
})(MergeTemplates403ApplicationJsonErrorEnum || (MergeTemplates403ApplicationJsonErrorEnum = {}));
var MergeTemplates403ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplates403ApplicationJson, _super);
    function MergeTemplates403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplates403ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplates403ApplicationJson.prototype, "status", void 0);
    return MergeTemplates403ApplicationJson;
}(SpeakeasyBase));
export { MergeTemplates403ApplicationJson };
export var MergeTemplates404ApplicationJsonErrorEnum;
(function (MergeTemplates404ApplicationJsonErrorEnum) {
    MergeTemplates404ApplicationJsonErrorEnum["EntityNotFound"] = "Entity not found";
    MergeTemplates404ApplicationJsonErrorEnum["ResourceNotFound"] = "Resource not found";
    MergeTemplates404ApplicationJsonErrorEnum["NoneOfTheTemplatesIsAvailableForTheWorkspace"] = "None of the templates is available for the workspace.";
})(MergeTemplates404ApplicationJsonErrorEnum || (MergeTemplates404ApplicationJsonErrorEnum = {}));
var MergeTemplates404ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplates404ApplicationJson, _super);
    function MergeTemplates404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplates404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplates404ApplicationJson.prototype, "status", void 0);
    return MergeTemplates404ApplicationJson;
}(SpeakeasyBase));
export { MergeTemplates404ApplicationJson };
export var MergeTemplates422ApplicationJsonErrorEnum;
(function (MergeTemplates422ApplicationJsonErrorEnum) {
    MergeTemplates422ApplicationJsonErrorEnum["UnableToParseJsonPleaseCheckFormatting"] = "Unable to parse JSON, please check formatting";
    MergeTemplates422ApplicationJsonErrorEnum["RequiredParameterMissing"] = "Required parameter missing";
    MergeTemplates422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateDefinitionNotDefined"] = "Required parameter missing: template definition not defined";
    MergeTemplates422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateNotDefined"] = "Required parameter missing: template not defined";
})(MergeTemplates422ApplicationJsonErrorEnum || (MergeTemplates422ApplicationJsonErrorEnum = {}));
var MergeTemplates422ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplates422ApplicationJson, _super);
    function MergeTemplates422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplates422ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplates422ApplicationJson.prototype, "status", void 0);
    return MergeTemplates422ApplicationJson;
}(SpeakeasyBase));
export { MergeTemplates422ApplicationJson };
var MergeTemplates500ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplates500ApplicationJson, _super);
    function MergeTemplates500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplates500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplates500ApplicationJson.prototype, "status", void 0);
    return MergeTemplates500ApplicationJson;
}(SpeakeasyBase));
export { MergeTemplates500ApplicationJson };
var MergeTemplatesRequest = /** @class */ (function (_super) {
    __extends(MergeTemplatesRequest, _super);
    function MergeTemplatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeTemplatesQueryParams)
    ], MergeTemplatesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.BatchData }),
        __metadata("design:type", Array)
    ], MergeTemplatesRequest.prototype, "request", void 0);
    return MergeTemplatesRequest;
}(SpeakeasyBase));
export { MergeTemplatesRequest };
var MergeTemplatesResponse = /** @class */ (function (_super) {
    __extends(MergeTemplatesResponse, _super);
    function MergeTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MergeTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MergeTemplatesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeTemplates200ApplicationJson)
    ], MergeTemplatesResponse.prototype, "mergeTemplates200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeTemplates401ApplicationJson)
    ], MergeTemplatesResponse.prototype, "mergeTemplates401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeTemplates403ApplicationJson)
    ], MergeTemplatesResponse.prototype, "mergeTemplates403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeTemplates404ApplicationJson)
    ], MergeTemplatesResponse.prototype, "mergeTemplates404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeTemplates422ApplicationJson)
    ], MergeTemplatesResponse.prototype, "mergeTemplates422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MergeTemplates500ApplicationJson)
    ], MergeTemplatesResponse.prototype, "mergeTemplates500ApplicationJsonObject", void 0);
    return MergeTemplatesResponse;
}(SpeakeasyBase));
export { MergeTemplatesResponse };
