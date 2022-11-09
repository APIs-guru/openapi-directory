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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var DeleteWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(DeleteWorkspaceQueryParams, _super);
    function DeleteWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=workspaceId" }),
        __metadata("design:type", String)
    ], DeleteWorkspaceQueryParams.prototype, "workspaceId", void 0);
    return DeleteWorkspaceQueryParams;
}(SpeakeasyBase));
export { DeleteWorkspaceQueryParams };
var DeleteWorkspaceRequest = /** @class */ (function (_super) {
    __extends(DeleteWorkspaceRequest, _super);
    function DeleteWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteWorkspaceQueryParams)
    ], DeleteWorkspaceRequest.prototype, "queryParams", void 0);
    return DeleteWorkspaceRequest;
}(SpeakeasyBase));
export { DeleteWorkspaceRequest };
var DeleteWorkspace200ApplicationJsonResponse = /** @class */ (function (_super) {
    __extends(DeleteWorkspace200ApplicationJsonResponse, _super);
    function DeleteWorkspace200ApplicationJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], DeleteWorkspace200ApplicationJsonResponse.prototype, "success", void 0);
    return DeleteWorkspace200ApplicationJsonResponse;
}(SpeakeasyBase));
export { DeleteWorkspace200ApplicationJsonResponse };
var DeleteWorkspace200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteWorkspace200ApplicationJson, _super);
    function DeleteWorkspace200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=response" }),
        __metadata("design:type", DeleteWorkspace200ApplicationJsonResponse)
    ], DeleteWorkspace200ApplicationJson.prototype, "response", void 0);
    return DeleteWorkspace200ApplicationJson;
}(SpeakeasyBase));
export { DeleteWorkspace200ApplicationJson };
export var DeleteWorkspace401ApplicationJsonErrorEnum;
(function (DeleteWorkspace401ApplicationJsonErrorEnum) {
    DeleteWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedRequestExpired"] = "Authentication failed: request expired";
    DeleteWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedSignatureOrSecretMissing"] = "Authentication failed: signature or secret missing";
    DeleteWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedWorkspaceMissing"] = "Authentication failed: workspace missing";
    DeleteWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedKeyMissing"] = "Authentication failed: key missing";
    DeleteWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedPropertyIssIssuerMissingInJwt"] = "Authentication failed: property 'iss' (issuer) missing in JWT";
    DeleteWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedPropertySubSubjectMissingInJwt"] = "Authentication failed: property 'sub' (subject) missing in JWT";
    DeleteWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedPropertyExpExpirationTimeMissingInJwt"] = "Authentication failed: property 'exp' (expiration time) missing in JWT";
    DeleteWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedInvalidIssIssuer"] = "Authentication failed: invalid 'iss' (issuer)";
    DeleteWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedIncorrectSignature"] = "Authentication failed: incorrect signature";
    DeleteWorkspace401ApplicationJsonErrorEnum["AuthenticationFailed"] = "Authentication failed";
})(DeleteWorkspace401ApplicationJsonErrorEnum || (DeleteWorkspace401ApplicationJsonErrorEnum = {}));
var DeleteWorkspace401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteWorkspace401ApplicationJson, _super);
    function DeleteWorkspace401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], DeleteWorkspace401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], DeleteWorkspace401ApplicationJson.prototype, "status", void 0);
    return DeleteWorkspace401ApplicationJson;
}(SpeakeasyBase));
export { DeleteWorkspace401ApplicationJson };
export var DeleteWorkspace403ApplicationJsonErrorEnum;
(function (DeleteWorkspace403ApplicationJsonErrorEnum) {
    DeleteWorkspace403ApplicationJsonErrorEnum["YourAccountHasExceededTheMonthlyDocumentGenerationLimit"] = "Your account has exceeded the monthly document generation limit.";
})(DeleteWorkspace403ApplicationJsonErrorEnum || (DeleteWorkspace403ApplicationJsonErrorEnum = {}));
var DeleteWorkspace403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteWorkspace403ApplicationJson, _super);
    function DeleteWorkspace403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], DeleteWorkspace403ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], DeleteWorkspace403ApplicationJson.prototype, "status", void 0);
    return DeleteWorkspace403ApplicationJson;
}(SpeakeasyBase));
export { DeleteWorkspace403ApplicationJson };
export var DeleteWorkspace404ApplicationJsonErrorEnum;
(function (DeleteWorkspace404ApplicationJsonErrorEnum) {
    DeleteWorkspace404ApplicationJsonErrorEnum["EntityNotFound"] = "Entity not found";
    DeleteWorkspace404ApplicationJsonErrorEnum["ResourceNotFound"] = "Resource not found";
    DeleteWorkspace404ApplicationJsonErrorEnum["NoneOfTheTemplatesIsAvailableForTheWorkspace"] = "None of the templates is available for the workspace.";
})(DeleteWorkspace404ApplicationJsonErrorEnum || (DeleteWorkspace404ApplicationJsonErrorEnum = {}));
var DeleteWorkspace404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteWorkspace404ApplicationJson, _super);
    function DeleteWorkspace404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], DeleteWorkspace404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], DeleteWorkspace404ApplicationJson.prototype, "status", void 0);
    return DeleteWorkspace404ApplicationJson;
}(SpeakeasyBase));
export { DeleteWorkspace404ApplicationJson };
export var DeleteWorkspace422ApplicationJsonErrorEnum;
(function (DeleteWorkspace422ApplicationJsonErrorEnum) {
    DeleteWorkspace422ApplicationJsonErrorEnum["UnableToParseJsonPleaseCheckFormatting"] = "Unable to parse JSON, please check formatting";
    DeleteWorkspace422ApplicationJsonErrorEnum["RequiredParameterMissing"] = "Required parameter missing";
    DeleteWorkspace422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateDefinitionNotDefined"] = "Required parameter missing: template definition not defined";
    DeleteWorkspace422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateNotDefined"] = "Required parameter missing: template not defined";
})(DeleteWorkspace422ApplicationJsonErrorEnum || (DeleteWorkspace422ApplicationJsonErrorEnum = {}));
var DeleteWorkspace422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteWorkspace422ApplicationJson, _super);
    function DeleteWorkspace422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], DeleteWorkspace422ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], DeleteWorkspace422ApplicationJson.prototype, "status", void 0);
    return DeleteWorkspace422ApplicationJson;
}(SpeakeasyBase));
export { DeleteWorkspace422ApplicationJson };
var DeleteWorkspace500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteWorkspace500ApplicationJson, _super);
    function DeleteWorkspace500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], DeleteWorkspace500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], DeleteWorkspace500ApplicationJson.prototype, "status", void 0);
    return DeleteWorkspace500ApplicationJson;
}(SpeakeasyBase));
export { DeleteWorkspace500ApplicationJson };
var DeleteWorkspaceResponse = /** @class */ (function (_super) {
    __extends(DeleteWorkspaceResponse, _super);
    function DeleteWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteWorkspace200ApplicationJson)
    ], DeleteWorkspaceResponse.prototype, "deleteWorkspace200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteWorkspace401ApplicationJson)
    ], DeleteWorkspaceResponse.prototype, "deleteWorkspace401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteWorkspace403ApplicationJson)
    ], DeleteWorkspaceResponse.prototype, "deleteWorkspace403ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteWorkspace404ApplicationJson)
    ], DeleteWorkspaceResponse.prototype, "deleteWorkspace404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteWorkspace422ApplicationJson)
    ], DeleteWorkspaceResponse.prototype, "deleteWorkspace422ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteWorkspace500ApplicationJson)
    ], DeleteWorkspaceResponse.prototype, "deleteWorkspace500ApplicationJsonObject", void 0);
    return DeleteWorkspaceResponse;
}(SpeakeasyBase));
export { DeleteWorkspaceResponse };
