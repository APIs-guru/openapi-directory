import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CopyTemplateQueryParams extends SpeakeasyBase {
    name?: string;
    templateId: number;
}
export declare class CopyTemplate200ApplicationJson extends SpeakeasyBase {
    response?: shared.TemplateDefinition;
}
export declare enum CopyTemplate401ApplicationJsonErrorEnum {
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
export declare class CopyTemplate401ApplicationJson extends SpeakeasyBase {
    error?: CopyTemplate401ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum CopyTemplate403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
export declare class CopyTemplate403ApplicationJson extends SpeakeasyBase {
    error?: CopyTemplate403ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum CopyTemplate404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
export declare class CopyTemplate404ApplicationJson extends SpeakeasyBase {
    error?: CopyTemplate404ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum CopyTemplate422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
export declare class CopyTemplate422ApplicationJson extends SpeakeasyBase {
    error?: CopyTemplate422ApplicationJsonErrorEnum;
    status?: number;
}
export declare class CopyTemplate500ApplicationJson extends SpeakeasyBase {
    error?: string;
    status?: number;
}
export declare class CopyTemplateRequest extends SpeakeasyBase {
    queryParams: CopyTemplateQueryParams;
}
export declare class CopyTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    copyTemplate200ApplicationJsonObject?: CopyTemplate200ApplicationJson;
    copyTemplate401ApplicationJsonObject?: CopyTemplate401ApplicationJson;
    copyTemplate403ApplicationJsonObject?: CopyTemplate403ApplicationJson;
    copyTemplate404ApplicationJsonObject?: CopyTemplate404ApplicationJson;
    copyTemplate422ApplicationJsonObject?: CopyTemplate422ApplicationJson;
    copyTemplate500ApplicationJsonObject?: CopyTemplate500ApplicationJson;
}
