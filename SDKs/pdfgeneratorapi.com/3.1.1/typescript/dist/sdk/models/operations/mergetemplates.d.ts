import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MergeTemplatesQueryParams extends SpeakeasyBase {
    format?: shared.FormatEnum;
    name?: string;
    output?: shared.OutputEnum;
}
export declare class MergeTemplates200ApplicationJsonMeta extends SpeakeasyBase {
    contentType?: string;
    displayName?: string;
    encoding?: string;
    name?: string;
}
export declare class MergeTemplates200ApplicationJson extends SpeakeasyBase {
    meta?: MergeTemplates200ApplicationJsonMeta;
    response?: string;
}
export declare enum MergeTemplates401ApplicationJsonErrorEnum {
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
export declare class MergeTemplates401ApplicationJson extends SpeakeasyBase {
    error?: MergeTemplates401ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum MergeTemplates403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
export declare class MergeTemplates403ApplicationJson extends SpeakeasyBase {
    error?: MergeTemplates403ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum MergeTemplates404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
export declare class MergeTemplates404ApplicationJson extends SpeakeasyBase {
    error?: MergeTemplates404ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum MergeTemplates422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
export declare class MergeTemplates422ApplicationJson extends SpeakeasyBase {
    error?: MergeTemplates422ApplicationJsonErrorEnum;
    status?: number;
}
export declare class MergeTemplates500ApplicationJson extends SpeakeasyBase {
    error?: string;
    status?: number;
}
export declare class MergeTemplatesRequest extends SpeakeasyBase {
    queryParams: MergeTemplatesQueryParams;
    request: shared.BatchData[];
}
export declare class MergeTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mergeTemplates200ApplicationJsonObject?: MergeTemplates200ApplicationJson;
    mergeTemplates401ApplicationJsonObject?: MergeTemplates401ApplicationJson;
    mergeTemplates403ApplicationJsonObject?: MergeTemplates403ApplicationJson;
    mergeTemplates404ApplicationJsonObject?: MergeTemplates404ApplicationJson;
    mergeTemplates422ApplicationJsonObject?: MergeTemplates422ApplicationJson;
    mergeTemplates500ApplicationJsonObject?: MergeTemplates500ApplicationJson;
}
