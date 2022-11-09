import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateTemplateQueryParams extends SpeakeasyBase {
    templateId: number;
}
export declare class UpdateTemplateRequest extends SpeakeasyBase {
    queryParams: UpdateTemplateQueryParams;
    request: shared.TemplateDefinitionNew;
}
export declare class UpdateTemplate200ApplicationJson extends SpeakeasyBase {
    response?: shared.TemplateDefinition;
}
export declare enum UpdateTemplate401ApplicationJsonErrorEnum {
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
export declare class UpdateTemplate401ApplicationJson extends SpeakeasyBase {
    error?: UpdateTemplate401ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum UpdateTemplate403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
export declare class UpdateTemplate403ApplicationJson extends SpeakeasyBase {
    error?: UpdateTemplate403ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum UpdateTemplate404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
export declare class UpdateTemplate404ApplicationJson extends SpeakeasyBase {
    error?: UpdateTemplate404ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum UpdateTemplate422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
export declare class UpdateTemplate422ApplicationJson extends SpeakeasyBase {
    error?: UpdateTemplate422ApplicationJsonErrorEnum;
    status?: number;
}
export declare class UpdateTemplate500ApplicationJson extends SpeakeasyBase {
    error?: string;
    status?: number;
}
export declare class UpdateTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateTemplate200ApplicationJsonObject?: UpdateTemplate200ApplicationJson;
    updateTemplate401ApplicationJsonObject?: UpdateTemplate401ApplicationJson;
    updateTemplate403ApplicationJsonObject?: UpdateTemplate403ApplicationJson;
    updateTemplate404ApplicationJsonObject?: UpdateTemplate404ApplicationJson;
    updateTemplate422ApplicationJsonObject?: UpdateTemplate422ApplicationJson;
    updateTemplate500ApplicationJsonObject?: UpdateTemplate500ApplicationJson;
}
