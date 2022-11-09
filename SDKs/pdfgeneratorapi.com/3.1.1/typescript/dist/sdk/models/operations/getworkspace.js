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
import * as shared from "../shared";
var GetWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceQueryParams, _super);
    function GetWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=workspaceId" }),
        __metadata("design:type", String)
    ], GetWorkspaceQueryParams.prototype, "workspaceId", void 0);
    return GetWorkspaceQueryParams;
}(SpeakeasyBase));
export { GetWorkspaceQueryParams };
var GetWorkspaceRequest = /** @class */ (function (_super) {
    __extends(GetWorkspaceRequest, _super);
    function GetWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetWorkspaceQueryParams)
    ], GetWorkspaceRequest.prototype, "queryParams", void 0);
    return GetWorkspaceRequest;
}(SpeakeasyBase));
export { GetWorkspaceRequest };
var GetWorkspace200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetWorkspace200ApplicationJson, _super);
    function GetWorkspace200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=response" }),
        __metadata("design:type", shared.Workspace)
    ], GetWorkspace200ApplicationJson.prototype, "response", void 0);
    return GetWorkspace200ApplicationJson;
}(SpeakeasyBase));
export { GetWorkspace200ApplicationJson };
export var GetWorkspace401ApplicationJsonErrorEnum;
(function (GetWorkspace401ApplicationJsonErrorEnum) {
    GetWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedRequestExpired"] = "Authentication failed: request expired";
    GetWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedSignatureOrSecretMissing"] = "Authentication failed: signature or secret missing";
    GetWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedWorkspaceMissing"] = "Authentication failed: workspace missing";
    GetWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedKeyMissing"] = "Authentication failed: key missing";
    GetWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedPropertyIssIssuerMissingInJwt"] = "Authentication failed: property 'iss' (issuer) missing in JWT";
    GetWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedPropertySubSubjectMissingInJwt"] = "Authentication failed: property 'sub' (subject) missing in JWT";
    GetWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedPropertyExpExpirationTimeMissingInJwt"] = "Authentication failed: property 'exp' (expiration time) missing in JWT";
    GetWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedInvalidIssIssuer"] = "Authentication failed: invalid 'iss' (issuer)";
    GetWorkspace401ApplicationJsonErrorEnum["AuthenticationFailedIncorrectSignature"] = "Authentication failed: incorrect signature";
    GetWorkspace401ApplicationJsonErrorEnum["AuthenticationFailed"] = "Authentication failed";
})(GetWorkspace401ApplicationJsonErrorEnum || (GetWorkspace401ApplicationJsonErrorEnum = {}));
var GetWorkspace401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetWorkspace401ApplicationJson, _super);
    function GetWorkspace401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetWorkspace401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetWorkspace401ApplicationJson.prototype, "status", void 0);
    return GetWorkspace401ApplicationJson;
}(SpeakeasyBase));
export { GetWorkspace401ApplicationJson };
export var GetWorkspace403ApplicationJsonErrorEnum;
(function (GetWorkspace403ApplicationJsonErrorEnum) {
    GetWorkspace403ApplicationJsonErrorEnum["YourAccountHasExceededTheMonthlyDocumentGenerationLimit"] = "Your account has exceeded the monthly document generation limit.";
})(GetWorkspace403ApplicationJsonErrorEnum || (GetWorkspace403ApplicationJsonErrorEnum = {}));
var GetWorkspace403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetWorkspace403ApplicationJson, _super);
    function GetWorkspace403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetWorkspace403ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetWorkspace403ApplicationJson.prototype, "status", void 0);
    return GetWorkspace403ApplicationJson;
}(SpeakeasyBase));
export { GetWorkspace403ApplicationJson };
export var GetWorkspace404ApplicationJsonErrorEnum;
(function (GetWorkspace404ApplicationJsonErrorEnum) {
    GetWorkspace404ApplicationJsonErrorEnum["EntityNotFound"] = "Entity not found";
    GetWorkspace404ApplicationJsonErrorEnum["ResourceNotFound"] = "Resource not found";
    GetWorkspace404ApplicationJsonErrorEnum["NoneOfTheTemplatesIsAvailableForTheWorkspace"] = "None of the templates is available for the workspace.";
})(GetWorkspace404ApplicationJsonErrorEnum || (GetWorkspace404ApplicationJsonErrorEnum = {}));
var GetWorkspace404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetWorkspace404ApplicationJson, _super);
    function GetWorkspace404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetWorkspace404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetWorkspace404ApplicationJson.prototype, "status", void 0);
    return GetWorkspace404ApplicationJson;
}(SpeakeasyBase));
export { GetWorkspace404ApplicationJson };
export var GetWorkspace422ApplicationJsonErrorEnum;
(function (GetWorkspace422ApplicationJsonErrorEnum) {
    GetWorkspace422ApplicationJsonErrorEnum["UnableToParseJsonPleaseCheckFormatting"] = "Unable to parse JSON, please check formatting";
    GetWorkspace422ApplicationJsonErrorEnum["RequiredParameterMissing"] = "Required parameter missing";
    GetWorkspace422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateDefinitionNotDefined"] = "Required parameter missing: template definition not defined";
    GetWorkspace422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateNotDefined"] = "Required parameter missing: template not defined";
})(GetWorkspace422ApplicationJsonErrorEnum || (GetWorkspace422ApplicationJsonErrorEnum = {}));
var GetWorkspace422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetWorkspace422ApplicationJson, _super);
    function GetWorkspace422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetWorkspace422ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetWorkspace422ApplicationJson.prototype, "status", void 0);
    return GetWorkspace422ApplicationJson;
}(SpeakeasyBase));
export { GetWorkspace422ApplicationJson };
var GetWorkspace500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetWorkspace500ApplicationJson, _super);
    function GetWorkspace500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetWorkspace500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetWorkspace500ApplicationJson.prototype, "status", void 0);
    return GetWorkspace500ApplicationJson;
}(SpeakeasyBase));
export { GetWorkspace500ApplicationJson };
var GetWorkspaceResponse = /** @class */ (function (_super) {
    __extends(GetWorkspaceResponse, _super);
    function GetWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWorkspace200ApplicationJson)
    ], GetWorkspaceResponse.prototype, "getWorkspace200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWorkspace401ApplicationJson)
    ], GetWorkspaceResponse.prototype, "getWorkspace401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWorkspace403ApplicationJson)
    ], GetWorkspaceResponse.prototype, "getWorkspace403ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWorkspace404ApplicationJson)
    ], GetWorkspaceResponse.prototype, "getWorkspace404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWorkspace422ApplicationJson)
    ], GetWorkspaceResponse.prototype, "getWorkspace422ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWorkspace500ApplicationJson)
    ], GetWorkspaceResponse.prototype, "getWorkspace500ApplicationJsonObject", void 0);
    return GetWorkspaceResponse;
}(SpeakeasyBase));
export { GetWorkspaceResponse };
