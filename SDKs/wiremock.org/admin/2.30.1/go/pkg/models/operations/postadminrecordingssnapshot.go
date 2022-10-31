package operations



type PostAdminRecordingsSnapshotRequestBodyCaptureHeaders struct {
    CaseInsensitive *bool `json:"caseInsensitive,omitempty"`
    
}

type PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria struct {
    BinarySizeThreshold *string `json:"binarySizeThreshold,omitempty"`
    TextSizeThreshold *string `json:"textSizeThreshold,omitempty"`
    
}

type PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials struct {
    Password string `json:"password"`
    Username string `json:"username"`
    
}

type PostAdminRecordingsSnapshotRequestBodyFilters struct {
    BasicAuthCredentials *PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
    BodyPatterns []map[string]interface{} `json:"bodyPatterns,omitempty"`
    Cookies map[string]interface{} `json:"cookies,omitempty"`
    Headers map[string]interface{} `json:"headers,omitempty"`
    Ids []string `json:"ids,omitempty"`
    Method *string `json:"method,omitempty"`
    QueryParameters map[string]interface{} `json:"queryParameters,omitempty"`
    URL *string `json:"url,omitempty"`
    URLPath *string `json:"urlPath,omitempty"`
    URLPathPattern *string `json:"urlPathPattern,omitempty"`
    URLPattern *string `json:"urlPattern,omitempty"`
    
}

type PostAdminRecordingsSnapshotRequestBody struct {
    CaptureHeaders map[string]PostAdminRecordingsSnapshotRequestBodyCaptureHeaders `json:"captureHeaders,omitempty"`
    ExtractBodyCriteria *PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria `json:"extractBodyCriteria,omitempty"`
    Filters *PostAdminRecordingsSnapshotRequestBodyFilters `json:"filters,omitempty"`
    Persist *bool `json:"persist,omitempty"`
    RepeatsAsScenarios *bool `json:"repeatsAsScenarios,omitempty"`
    RequestBodyPattern map[string]interface{} `json:"requestBodyPattern,omitempty"`
    TransformerParameters map[string]interface{} `json:"transformerParameters,omitempty"`
    Transformers []string `json:"transformers,omitempty"`
    
}

type PostAdminRecordingsSnapshotRequest struct {
    Request PostAdminRecordingsSnapshotRequestBody `request:"mediaType=application/json"`
    
}

type PostAdminRecordingsSnapshot200ApplicationJSONMappingsRequestBasicAuthCredentials struct {
    Password string `json:"password"`
    Username string `json:"username"`
    
}

type PostAdminRecordingsSnapshot200ApplicationJSONMappingsRequest struct {
    BasicAuthCredentials *PostAdminRecordingsSnapshot200ApplicationJSONMappingsRequestBasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
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


type PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnum string

const (
    PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnumConnectionResetByPeer PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnumEmptyResponse PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnum = "EMPTY_RESPONSE"
PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnumMalformedResponseChunk PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnumRandomDataThenClose PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)


type PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponse struct {
    AdditionalProxyRequestHeaders map[string]interface{} `json:"additionalProxyRequestHeaders,omitempty"`
    Base64Body *string `json:"base64Body,omitempty"`
    Body *string `json:"body,omitempty"`
    BodyFileName *string `json:"bodyFileName,omitempty"`
    Fault *PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnum `json:"fault,omitempty"`
    FixedDelayMilliseconds *int64 `json:"fixedDelayMilliseconds,omitempty"`
    FromConfiguredStub *bool `json:"fromConfiguredStub,omitempty"`
    Headers map[string]interface{} `json:"headers,omitempty"`
    JSONBody map[string]interface{} `json:"jsonBody,omitempty"`
    ProxyBaseURL *string `json:"proxyBaseUrl,omitempty"`
    Status *int64 `json:"status,omitempty"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    TransformerParameters map[string]interface{} `json:"transformerParameters,omitempty"`
    Transformers []string `json:"transformers,omitempty"`
    
}

type PostAdminRecordingsSnapshot200ApplicationJSONMappings struct {
    ID *string `json:"id,omitempty"`
    Metadata map[string]interface{} `json:"metadata,omitempty"`
    Name *string `json:"name,omitempty"`
    NewScenarioState *string `json:"newScenarioState,omitempty"`
    Persistent *bool `json:"persistent,omitempty"`
    PostServeActions map[string]interface{} `json:"postServeActions,omitempty"`
    Priority *int64 `json:"priority,omitempty"`
    Request *PostAdminRecordingsSnapshot200ApplicationJSONMappingsRequest `json:"request,omitempty"`
    RequiredScenarioState *string `json:"requiredScenarioState,omitempty"`
    Response *PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponse `json:"response,omitempty"`
    ScenarioName *string `json:"scenarioName,omitempty"`
    UUID *string `json:"uuid,omitempty"`
    
}

type PostAdminRecordingsSnapshot200ApplicationJSONMeta struct {
    Total int64 `json:"total"`
    
}

type PostAdminRecordingsSnapshot200ApplicationJSON struct {
    Mappings []PostAdminRecordingsSnapshot200ApplicationJSONMappings `json:"mappings,omitempty"`
    Meta *PostAdminRecordingsSnapshot200ApplicationJSONMeta `json:"meta,omitempty"`
    
}

type PostAdminRecordingsSnapshotResponse struct {
    ContentType string 
    PostAdminRecordingsSnapshot200ApplicationJSONObject *PostAdminRecordingsSnapshot200ApplicationJSON 
    StatusCode int64 
    
}

