import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateTemplateRequest extends SpeakeasyBase {
    request: shared.TemplateDefinitionNew;
}
export declare class CreateTemplate200ApplicationJson extends SpeakeasyBase {
    response?: shared.TemplateDefinition;
}
export declare enum CreateTemplate401ApplicationJsonErrorEnum {
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
export declare class CreateTemplate401ApplicationJson extends SpeakeasyBase {
    error?: CreateTemplate401ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum CreateTemplate403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
export declare class CreateTemplate403ApplicationJson extends SpeakeasyBase {
    error?: CreateTemplate403ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum CreateTemplate404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
export declare class CreateTemplate404ApplicationJson extends SpeakeasyBase {
    error?: CreateTemplate404ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum CreateTemplate422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
export declare class CreateTemplate422ApplicationJson extends SpeakeasyBase {
    error?: CreateTemplate422ApplicationJsonErrorEnum;
    status?: number;
}
export declare class CreateTemplate500ApplicationJson extends SpeakeasyBase {
    error?: string;
    status?: number;
}
export declare class CreateTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createTemplate200ApplicationJsonObject?: CreateTemplate200ApplicationJson;
    createTemplate401ApplicationJsonObject?: CreateTemplate401ApplicationJson;
    createTemplate403ApplicationJsonObject?: CreateTemplate403ApplicationJson;
    createTemplate404ApplicationJsonObject?: CreateTemplate404ApplicationJson;
    createTemplate422ApplicationJsonObject?: CreateTemplate422ApplicationJson;
    createTemplate500ApplicationJsonObject?: CreateTemplate500ApplicationJson;
}
