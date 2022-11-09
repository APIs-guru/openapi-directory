import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAdminRecordingsStartRequestBodyCaptureHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseInsensitive" })
  caseInsensitive?: boolean;
}


// PostAdminRecordingsStartRequestBodyExtractBodyCriteria
/** 
 * Criteria for extracting response bodies to a separate file instead of including it in the stub mapping
**/
export class PostAdminRecordingsStartRequestBodyExtractBodyCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=binarySizeThreshold" })
  binarySizeThreshold?: string;

  @Metadata({ data: "json, name=textSizeThreshold" })
  textSizeThreshold?: string;
}


// PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}


export class PostAdminRecordingsStartRequestBodyFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials;

  @Metadata({ data: "json, name=bodyPatterns" })
  bodyPatterns?: Map<string, any>[];

  @Metadata({ data: "json, name=cookies" })
  cookies?: Map<string, any>;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, any>;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=queryParameters" })
  queryParameters?: Map<string, any>;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=urlPath" })
  urlPath?: string;

  @Metadata({ data: "json, name=urlPathPattern" })
  urlPathPattern?: string;

  @Metadata({ data: "json, name=urlPattern" })
  urlPattern?: string;
}


export class PostAdminRecordingsStartRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=captureHeaders", elemType: operations.PostAdminRecordingsStartRequestBodyCaptureHeaders })
  captureHeaders?: Map<string, PostAdminRecordingsStartRequestBodyCaptureHeaders>;

  @Metadata({ data: "json, name=extractBodyCriteria" })
  extractBodyCriteria?: PostAdminRecordingsStartRequestBodyExtractBodyCriteria;

  @Metadata({ data: "json, name=filters" })
  filters?: PostAdminRecordingsStartRequestBodyFilters;

  @Metadata({ data: "json, name=persist" })
  persist?: boolean;

  @Metadata({ data: "json, name=repeatsAsScenarios" })
  repeatsAsScenarios?: boolean;

  @Metadata({ data: "json, name=requestBodyPattern" })
  requestBodyPattern?: Map<string, any>;

  @Metadata({ data: "json, name=targetBaseUrl" })
  targetBaseUrl?: string;

  @Metadata({ data: "json, name=transformerParameters" })
  transformerParameters?: Map<string, any>;

  @Metadata({ data: "json, name=transformers" })
  transformers?: string[];
}


export class PostAdminRecordingsStartRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAdminRecordingsStartRequestBody;
}


export class PostAdminRecordingsStartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
