import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAdminRecordingsStartRequestBodyCaptureHeaders extends SpeakeasyBase {
    caseInsensitive?: boolean;
}
/**
 * Criteria for extracting response bodies to a separate file instead of including it in the stub mapping
**/
export declare class PostAdminRecordingsStartRequestBodyExtractBodyCriteria extends SpeakeasyBase {
    binarySizeThreshold?: string;
    textSizeThreshold?: string;
}
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminRecordingsStartRequestBodyFilters extends SpeakeasyBase {
    basicAuthCredentials?: PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials;
    bodyPatterns?: Map<string, any>[];
    cookies?: Map<string, any>;
    headers?: Map<string, any>;
    method?: string;
    queryParameters?: Map<string, any>;
    url?: string;
    urlPath?: string;
    urlPathPattern?: string;
    urlPattern?: string;
}
export declare class PostAdminRecordingsStartRequestBody extends SpeakeasyBase {
    captureHeaders?: Map<string, PostAdminRecordingsStartRequestBodyCaptureHeaders>;
    extractBodyCriteria?: PostAdminRecordingsStartRequestBodyExtractBodyCriteria;
    filters?: PostAdminRecordingsStartRequestBodyFilters;
    persist?: boolean;
    repeatsAsScenarios?: boolean;
    requestBodyPattern?: Map<string, any>;
    targetBaseUrl?: string;
    transformerParameters?: Map<string, any>;
    transformers?: string[];
}
export declare class PostAdminRecordingsStartRequest extends SpeakeasyBase {
    request: PostAdminRecordingsStartRequestBody;
}
export declare class PostAdminRecordingsStartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
