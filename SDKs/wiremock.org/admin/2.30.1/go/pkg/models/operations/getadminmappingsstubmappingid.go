package operations

type GetAdminMappingsStubMappingIDPathParams struct {
	StubMappingID string `pathParam:"style=simple,explode=false,name=stubMappingId"`
}

type GetAdminMappingsStubMappingIDRequest struct {
	PathParams GetAdminMappingsStubMappingIDPathParams
}

type GetAdminMappingsStubMappingID200ApplicationJSONRequestBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type GetAdminMappingsStubMappingID200ApplicationJSONRequest struct {
	BasicAuthCredentials *GetAdminMappingsStubMappingID200ApplicationJSONRequestBasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
	BodyPatterns         []map[string]interface{}                                                    `json:"bodyPatterns,omitempty"`
	Cookies              map[string]interface{}                                                      `json:"cookies,omitempty"`
	Headers              map[string]interface{}                                                      `json:"headers,omitempty"`
	Method               *string                                                                     `json:"method,omitempty"`
	QueryParameters      map[string]interface{}                                                      `json:"queryParameters,omitempty"`
	URL                  *string                                                                     `json:"url,omitempty"`
	URLPath              *string                                                                     `json:"urlPath,omitempty"`
	URLPathPattern       *string                                                                     `json:"urlPathPattern,omitempty"`
	URLPattern           *string                                                                     `json:"urlPattern,omitempty"`
}

type GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum string

const (
	GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnumConnectionResetByPeer  GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
	GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnumEmptyResponse          GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum = "EMPTY_RESPONSE"
	GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnumMalformedResponseChunk GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
	GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnumRandomDataThenClose    GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)

type GetAdminMappingsStubMappingID200ApplicationJSONResponse struct {
	AdditionalProxyRequestHeaders map[string]interface{}                                            `json:"additionalProxyRequestHeaders,omitempty"`
	Base64Body                    *string                                                           `json:"base64Body,omitempty"`
	Body                          *string                                                           `json:"body,omitempty"`
	BodyFileName                  *string                                                           `json:"bodyFileName,omitempty"`
	Fault                         *GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum `json:"fault,omitempty"`
	FixedDelayMilliseconds        *int64                                                            `json:"fixedDelayMilliseconds,omitempty"`
	FromConfiguredStub            *bool                                                             `json:"fromConfiguredStub,omitempty"`
	Headers                       map[string]interface{}                                            `json:"headers,omitempty"`
	JSONBody                      map[string]interface{}                                            `json:"jsonBody,omitempty"`
	ProxyBaseURL                  *string                                                           `json:"proxyBaseUrl,omitempty"`
	Status                        *int64                                                            `json:"status,omitempty"`
	StatusMessage                 *string                                                           `json:"statusMessage,omitempty"`
	TransformerParameters         map[string]interface{}                                            `json:"transformerParameters,omitempty"`
	Transformers                  []string                                                          `json:"transformers,omitempty"`
}

type GetAdminMappingsStubMappingID200ApplicationJSON struct {
	ID                    *string                                                  `json:"id,omitempty"`
	Metadata              map[string]interface{}                                   `json:"metadata,omitempty"`
	Name                  *string                                                  `json:"name,omitempty"`
	NewScenarioState      *string                                                  `json:"newScenarioState,omitempty"`
	Persistent            *bool                                                    `json:"persistent,omitempty"`
	PostServeActions      map[string]interface{}                                   `json:"postServeActions,omitempty"`
	Priority              *int64                                                   `json:"priority,omitempty"`
	Request               *GetAdminMappingsStubMappingID200ApplicationJSONRequest  `json:"request,omitempty"`
	RequiredScenarioState *string                                                  `json:"requiredScenarioState,omitempty"`
	Response              *GetAdminMappingsStubMappingID200ApplicationJSONResponse `json:"response,omitempty"`
	ScenarioName          *string                                                  `json:"scenarioName,omitempty"`
	UUID                  *string                                                  `json:"uuid,omitempty"`
}

type GetAdminMappingsStubMappingIDResponse struct {
	ContentType                                           string
	GetAdminMappingsStubMappingID200ApplicationJSONObject *GetAdminMappingsStubMappingID200ApplicationJSON
	StatusCode                                            int64
}
