package operations



type GetAdminMappingsQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    
}

type GetAdminMappingsRequest struct {
    QueryParams GetAdminMappingsQueryParams 
    
}

type GetAdminMappings200ApplicationJSONMappingsRequestBasicAuthCredentials struct {
    Password string `json:"password"`
    Username string `json:"username"`
    
}

type GetAdminMappings200ApplicationJSONMappingsRequest struct {
    BasicAuthCredentials *GetAdminMappings200ApplicationJSONMappingsRequestBasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
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


type GetAdminMappings200ApplicationJSONMappingsResponseFaultEnum string

const (
    GetAdminMappings200ApplicationJSONMappingsResponseFaultEnumConnectionResetByPeer GetAdminMappings200ApplicationJSONMappingsResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
GetAdminMappings200ApplicationJSONMappingsResponseFaultEnumEmptyResponse GetAdminMappings200ApplicationJSONMappingsResponseFaultEnum = "EMPTY_RESPONSE"
GetAdminMappings200ApplicationJSONMappingsResponseFaultEnumMalformedResponseChunk GetAdminMappings200ApplicationJSONMappingsResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
GetAdminMappings200ApplicationJSONMappingsResponseFaultEnumRandomDataThenClose GetAdminMappings200ApplicationJSONMappingsResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)


type GetAdminMappings200ApplicationJSONMappingsResponse struct {
    AdditionalProxyRequestHeaders map[string]interface{} `json:"additionalProxyRequestHeaders,omitempty"`
    Base64Body *string `json:"base64Body,omitempty"`
    Body *string `json:"body,omitempty"`
    BodyFileName *string `json:"bodyFileName,omitempty"`
    Fault *GetAdminMappings200ApplicationJSONMappingsResponseFaultEnum `json:"fault,omitempty"`
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

type GetAdminMappings200ApplicationJSONMappings struct {
    ID *string `json:"id,omitempty"`
    Metadata map[string]interface{} `json:"metadata,omitempty"`
    Name *string `json:"name,omitempty"`
    NewScenarioState *string `json:"newScenarioState,omitempty"`
    Persistent *bool `json:"persistent,omitempty"`
    PostServeActions map[string]interface{} `json:"postServeActions,omitempty"`
    Priority *int64 `json:"priority,omitempty"`
    Request *GetAdminMappings200ApplicationJSONMappingsRequest `json:"request,omitempty"`
    RequiredScenarioState *string `json:"requiredScenarioState,omitempty"`
    Response *GetAdminMappings200ApplicationJSONMappingsResponse `json:"response,omitempty"`
    ScenarioName *string `json:"scenarioName,omitempty"`
    UUID *string `json:"uuid,omitempty"`
    
}

type GetAdminMappings200ApplicationJSONMeta struct {
    Total int64 `json:"total"`
    
}

type GetAdminMappings200ApplicationJSON struct {
    Mappings []GetAdminMappings200ApplicationJSONMappings `json:"mappings,omitempty"`
    Meta *GetAdminMappings200ApplicationJSONMeta `json:"meta,omitempty"`
    
}

type GetAdminMappingsResponse struct {
    ContentType string 
    GetAdminMappings200ApplicationJSONObject *GetAdminMappings200ApplicationJSON 
    StatusCode int64 
    
}

