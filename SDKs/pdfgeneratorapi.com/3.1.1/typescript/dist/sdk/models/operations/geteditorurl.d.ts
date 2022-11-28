import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetEditorUrlLanguageEnum {
    En = "en",
    Et = "et",
    Cs = "cs",
    Sk = "sk",
    Ru = "ru"
}
export declare class GetEditorUrlQueryParams extends SpeakeasyBase {
    language?: GetEditorUrlLanguageEnum;
    templateId: number;
}
export declare class GetEditorUrl200ApplicationJson extends SpeakeasyBase {
    response?: string;
}
export declare enum GetEditorUrl401ApplicationJsonErrorEnum {
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
export declare class GetEditorUrl401ApplicationJson extends SpeakeasyBase {
    error?: GetEditorUrl401ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum GetEditorUrl403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
export declare class GetEditorUrl403ApplicationJson extends SpeakeasyBase {
    error?: GetEditorUrl403ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum GetEditorUrl404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
export declare class GetEditorUrl404ApplicationJson extends SpeakeasyBase {
    error?: GetEditorUrl404ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum GetEditorUrl422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
export declare class GetEditorUrl422ApplicationJson extends SpeakeasyBase {
    error?: GetEditorUrl422ApplicationJsonErrorEnum;
    status?: number;
}
export declare class GetEditorUrl500ApplicationJson extends SpeakeasyBase {
    error?: string;
    status?: number;
}
export declare class GetEditorUrlRequest extends SpeakeasyBase {
    queryParams: GetEditorUrlQueryParams;
    request: Map<string, any>;
}
export declare class GetEditorUrlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getEditorUrl200ApplicationJsonObject?: GetEditorUrl200ApplicationJson;
    getEditorUrl401ApplicationJsonObject?: GetEditorUrl401ApplicationJson;
    getEditorUrl403ApplicationJsonObject?: GetEditorUrl403ApplicationJson;
    getEditorUrl404ApplicationJsonObject?: GetEditorUrl404ApplicationJson;
    getEditorUrl422ApplicationJsonObject?: GetEditorUrl422ApplicationJson;
    getEditorUrl500ApplicationJsonObject?: GetEditorUrl500ApplicationJson;
}
