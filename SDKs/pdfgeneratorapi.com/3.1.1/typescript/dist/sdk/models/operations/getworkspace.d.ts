import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWorkspaceQueryParams extends SpeakeasyBase {
    workspaceId: string;
}
export declare class GetWorkspaceRequest extends SpeakeasyBase {
    queryParams: GetWorkspaceQueryParams;
}
export declare class GetWorkspace200ApplicationJson extends SpeakeasyBase {
    response?: shared.Workspace;
}
export declare enum GetWorkspace401ApplicationJsonErrorEnum {
    AuthenticationFailedRequestExpired = "Authentication failed: request expired",
    AuthenticationFailedSignatureOrSecretMissing = "Authentication failed: signature or secret missing",
    AuthenticationFailedWorkspaceMissing = "Authentication failed: workspace missing",
    AuthenticationFailedKeyMissing = "Authentication failed: key missing",
    AuthenticationFailedPropertyIssIssuerMissingInJwt = "Authentication failed: property 'iss' (issuer) missing in JWT",
    AuthenticationFailedPropertySubSubjectMissingInJwt = "Authentication failed: property 'sub' (subject) missing in JWT",
    AuthenticationFailedPropertyExpExpirationTimeMissingInJwt = "Authentication failed: property 'exp' (expiration time) missing in JWT",
    AuthenticationFailedInvalidIssIssuer = "Authentication failed: invalid 'iss' (issuer)",
    AuthenticationFailedIncorrectSignature = "Authentication failed: incorrect signature",
    AuthenticationFailed = "Authentication failed"
}
export declare class GetWorkspace401ApplicationJson extends SpeakeasyBase {
    error?: GetWorkspace401ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum GetWorkspace403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
export declare class GetWorkspace403ApplicationJson extends SpeakeasyBase {
    error?: GetWorkspace403ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum GetWorkspace404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
export declare class GetWorkspace404ApplicationJson extends SpeakeasyBase {
    error?: GetWorkspace404ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum GetWorkspace422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
export declare class GetWorkspace422ApplicationJson extends SpeakeasyBase {
    error?: GetWorkspace422ApplicationJsonErrorEnum;
    status?: number;
}
export declare class GetWorkspace500ApplicationJson extends SpeakeasyBase {
    error?: string;
    status?: number;
}
export declare class GetWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getWorkspace200ApplicationJsonObject?: GetWorkspace200ApplicationJson;
    getWorkspace401ApplicationJsonObject?: GetWorkspace401ApplicationJson;
    getWorkspace403ApplicationJsonObject?: GetWorkspace403ApplicationJson;
    getWorkspace404ApplicationJsonObject?: GetWorkspace404ApplicationJson;
    getWorkspace422ApplicationJsonObject?: GetWorkspace422ApplicationJson;
    getWorkspace500ApplicationJsonObject?: GetWorkspace500ApplicationJson;
}
