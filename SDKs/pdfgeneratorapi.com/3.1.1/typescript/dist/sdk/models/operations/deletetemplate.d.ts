import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTemplateQueryParams extends SpeakeasyBase {
    templateId: number;
}
export declare class DeleteTemplate200ApplicationJsonResponse extends SpeakeasyBase {
    success?: boolean;
}
export declare class DeleteTemplate200ApplicationJson extends SpeakeasyBase {
    response?: DeleteTemplate200ApplicationJsonResponse;
}
export declare enum DeleteTemplate401ApplicationJsonErrorEnum {
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
export declare class DeleteTemplate401ApplicationJson extends SpeakeasyBase {
    error?: DeleteTemplate401ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum DeleteTemplate403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
export declare class DeleteTemplate403ApplicationJson extends SpeakeasyBase {
    error?: DeleteTemplate403ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum DeleteTemplate404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
export declare class DeleteTemplate404ApplicationJson extends SpeakeasyBase {
    error?: DeleteTemplate404ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum DeleteTemplate422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
export declare class DeleteTemplate422ApplicationJson extends SpeakeasyBase {
    error?: DeleteTemplate422ApplicationJsonErrorEnum;
    status?: number;
}
export declare class DeleteTemplate500ApplicationJson extends SpeakeasyBase {
    error?: string;
    status?: number;
}
export declare class DeleteTemplateRequest extends SpeakeasyBase {
    queryParams: DeleteTemplateQueryParams;
}
export declare class DeleteTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteTemplate200ApplicationJsonObject?: DeleteTemplate200ApplicationJson;
    deleteTemplate401ApplicationJsonObject?: DeleteTemplate401ApplicationJson;
    deleteTemplate403ApplicationJsonObject?: DeleteTemplate403ApplicationJson;
    deleteTemplate404ApplicationJsonObject?: DeleteTemplate404ApplicationJson;
    deleteTemplate422ApplicationJsonObject?: DeleteTemplate422ApplicationJson;
    deleteTemplate500ApplicationJsonObject?: DeleteTemplate500ApplicationJson;
}
