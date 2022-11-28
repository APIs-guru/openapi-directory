import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MergeTemplateQueryParams extends SpeakeasyBase {
    format?: shared.FormatEnum;
    name?: string;
    output?: shared.OutputEnum;
    templateId: number;
}
export declare class MergeTemplate200ApplicationJsonMeta extends SpeakeasyBase {
    contentType?: string;
    displayName?: string;
    encoding?: string;
    name?: string;
}
export declare class MergeTemplate200ApplicationJson extends SpeakeasyBase {
    meta?: MergeTemplate200ApplicationJsonMeta;
    response?: string;
}
export declare enum MergeTemplate401ApplicationJsonErrorEnum {
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
export declare class MergeTemplate401ApplicationJson extends SpeakeasyBase {
    error?: MergeTemplate401ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum MergeTemplate403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
export declare class MergeTemplate403ApplicationJson extends SpeakeasyBase {
    error?: MergeTemplate403ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum MergeTemplate404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
export declare class MergeTemplate404ApplicationJson extends SpeakeasyBase {
    error?: MergeTemplate404ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum MergeTemplate422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
export declare class MergeTemplate422ApplicationJson extends SpeakeasyBase {
    error?: MergeTemplate422ApplicationJsonErrorEnum;
    status?: number;
}
export declare class MergeTemplate500ApplicationJson extends SpeakeasyBase {
    error?: string;
    status?: number;
}
export declare class MergeTemplateRequest extends SpeakeasyBase {
    queryParams: MergeTemplateQueryParams;
    request: shared.Data;
}
export declare class MergeTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mergeTemplate200ApplicationJsonObject?: MergeTemplate200ApplicationJson;
    mergeTemplate401ApplicationJsonObject?: MergeTemplate401ApplicationJson;
    mergeTemplate403ApplicationJsonObject?: MergeTemplate403ApplicationJson;
    mergeTemplate404ApplicationJsonObject?: MergeTemplate404ApplicationJson;
    mergeTemplate422ApplicationJsonObject?: MergeTemplate422ApplicationJson;
    mergeTemplate500ApplicationJsonObject?: MergeTemplate500ApplicationJson;
}
