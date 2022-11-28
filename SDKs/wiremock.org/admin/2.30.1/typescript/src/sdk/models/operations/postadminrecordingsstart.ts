import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAdminRecordingsStartRequestBodyCaptureHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseInsensitive" })
  caseInsensitive?: boolean;
}


// PostAdminRecordingsStartRequestBodyExtractBodyCriteria
/** 
 * Criteria for extracting response bodies to a separate file instead of including it in the stub mapping
**/
export class PostAdminRecordingsStartRequestBodyExtractBodyCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=binarySizeThreshold" })
  binarySizeThreshold?: string;

  @SpeakeasyMetadata({ data: "json, name=textSizeThreshold" })
  textSizeThreshold?: string;
}


// PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


export class PostAdminRecordingsStartRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials;

  @SpeakeasyMetadata({ data: "json, name=bodyPatterns" })
  bodyPatterns?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=cookies" })
  cookies?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=queryParameters" })
  queryParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=urlPath" })
  urlPath?: string;

  @SpeakeasyMetadata({ data: "json, name=urlPathPattern" })
  urlPathPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=urlPattern" })
  urlPattern?: string;
}


export class PostAdminRecordingsStartRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=captureHeaders", elemType: PostAdminRecordingsStartRequestBodyCaptureHeaders })
  captureHeaders?: Map<string, PostAdminRecordingsStartRequestBodyCaptureHeaders>;

  @SpeakeasyMetadata({ data: "json, name=extractBodyCriteria" })
  extractBodyCriteria?: PostAdminRecordingsStartRequestBodyExtractBodyCriteria;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: PostAdminRecordingsStartRequestBodyFilters;

  @SpeakeasyMetadata({ data: "json, name=persist" })
  persist?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repeatsAsScenarios" })
  repeatsAsScenarios?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requestBodyPattern" })
  requestBodyPattern?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=targetBaseUrl" })
  targetBaseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=transformerParameters" })
  transformerParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=transformers" })
  transformers?: string[];
}


export class PostAdminRecordingsStartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAdminRecordingsStartRequestBody;
}


export class PostAdminRecordingsStartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
