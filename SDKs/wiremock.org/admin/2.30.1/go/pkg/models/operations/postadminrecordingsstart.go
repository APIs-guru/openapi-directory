package operations



type PostAdminRecordingsStartRequestBodyCaptureHeaders struct {
    CaseInsensitive *bool `json:"caseInsensitive,omitempty"`
    
}

type PostAdminRecordingsStartRequestBodyExtractBodyCriteria struct {
    BinarySizeThreshold *string `json:"binarySizeThreshold,omitempty"`
    TextSizeThreshold *string `json:"textSizeThreshold,omitempty"`
    
}

type PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials struct {
    Password string `json:"password"`
    Username string `json:"username"`
    
}

type PostAdminRecordingsStartRequestBodyFilters struct {
    BasicAuthCredentials *PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
    BodyPatterns []map[string]interface{} `json:"bodyPatterns,omitempty"`
    Cookies map[string]interface{} `json:"cookies,omitempty"`
    Headers map[string]interface{} `json:"headers,omitempty"`
    Method *string `json:"method,omitempty"`
    QueryParameters map[string]interface{} `json:"queryParameters,omitempty"`
    URL *string `json:"url,omitempty"`
    URLPath *string `json:"urlPath,omitempty"`
    URLPathPattern *string `json:"urlPathPattern,omitempty"`
    URLPattern *string `json:"urlPattern,omitempty"`
    
}

type PostAdminRecordingsStartRequestBody struct {
    CaptureHeaders map[string]PostAdminRecordingsStartRequestBodyCaptureHeaders `json:"captureHeaders,omitempty"`
    ExtractBodyCriteria *PostAdminRecordingsStartRequestBodyExtractBodyCriteria `json:"extractBodyCriteria,omitempty"`
    Filters *PostAdminRecordingsStartRequestBodyFilters `json:"filters,omitempty"`
    Persist *bool `json:"persist,omitempty"`
    RepeatsAsScenarios *bool `json:"repeatsAsScenarios,omitempty"`
    RequestBodyPattern map[string]interface{} `json:"requestBodyPattern,omitempty"`
    TargetBaseURL *string `json:"targetBaseUrl,omitempty"`
    TransformerParameters map[string]interface{} `json:"transformerParameters,omitempty"`
    Transformers []string `json:"transformers,omitempty"`
    
}

type PostAdminRecordingsStartRequest struct {
    Request PostAdminRecordingsStartRequestBody `request:"mediaType=application/json"`
    
}

type PostAdminRecordingsStartResponse struct {
    ContentType string 
    StatusCode int64 
    
}

