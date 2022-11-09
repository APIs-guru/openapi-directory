import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteWorkspaceQueryParams extends SpeakeasyBase {
    workspaceId: string;
}
export declare class DeleteWorkspaceRequest extends SpeakeasyBase {
    queryParams: DeleteWorkspaceQueryParams;
}
export declare class DeleteWorkspace200ApplicationJsonResponse extends SpeakeasyBase {
    success?: boolean;
}
export declare class DeleteWorkspace200ApplicationJson extends SpeakeasyBase {
    response?: DeleteWorkspace200ApplicationJsonResponse;
}
export declare enum DeleteWorkspace401ApplicationJsonErrorEnum {
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
export declare class DeleteWorkspace401ApplicationJson extends SpeakeasyBase {
    error?: DeleteWorkspace401ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum DeleteWorkspace403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
export declare class DeleteWorkspace403ApplicationJson extends SpeakeasyBase {
    error?: DeleteWorkspace403ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum DeleteWorkspace404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
export declare class DeleteWorkspace404ApplicationJson extends SpeakeasyBase {
    error?: DeleteWorkspace404ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum DeleteWorkspace422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
export declare class DeleteWorkspace422ApplicationJson extends SpeakeasyBase {
    error?: DeleteWorkspace422ApplicationJsonErrorEnum;
    status?: number;
}
export declare class DeleteWorkspace500ApplicationJson extends SpeakeasyBase {
    error?: string;
    status?: number;
}
export declare class DeleteWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteWorkspace200ApplicationJsonObject?: DeleteWorkspace200ApplicationJson;
    deleteWorkspace401ApplicationJsonObject?: DeleteWorkspace401ApplicationJson;
    deleteWorkspace403ApplicationJsonObject?: DeleteWorkspace403ApplicationJson;
    deleteWorkspace404ApplicationJsonObject?: DeleteWorkspace404ApplicationJson;
    deleteWorkspace422ApplicationJsonObject?: DeleteWorkspace422ApplicationJson;
    deleteWorkspace500ApplicationJsonObject?: DeleteWorkspace500ApplicationJson;
}
