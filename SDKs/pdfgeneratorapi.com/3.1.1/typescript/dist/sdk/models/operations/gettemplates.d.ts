import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTemplates200ApplicationJson extends SpeakeasyBase {
    response?: shared.Template[];
}
export declare enum GetTemplates401ApplicationJsonErrorEnum {
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
export declare class GetTemplates401ApplicationJson extends SpeakeasyBase {
    error?: GetTemplates401ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum GetTemplates403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
export declare class GetTemplates403ApplicationJson extends SpeakeasyBase {
    error?: GetTemplates403ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum GetTemplates404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
export declare class GetTemplates404ApplicationJson extends SpeakeasyBase {
    error?: GetTemplates404ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum GetTemplates422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
export declare class GetTemplates422ApplicationJson extends SpeakeasyBase {
    error?: GetTemplates422ApplicationJsonErrorEnum;
    status?: number;
}
export declare class GetTemplates500ApplicationJson extends SpeakeasyBase {
    error?: string;
    status?: number;
}
export declare class GetTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTemplates200ApplicationJsonObject?: GetTemplates200ApplicationJson;
    getTemplates401ApplicationJsonObject?: GetTemplates401ApplicationJson;
    getTemplates403ApplicationJsonObject?: GetTemplates403ApplicationJson;
    getTemplates404ApplicationJsonObject?: GetTemplates404ApplicationJson;
    getTemplates422ApplicationJsonObject?: GetTemplates422ApplicationJson;
    getTemplates500ApplicationJsonObject?: GetTemplates500ApplicationJson;
}
