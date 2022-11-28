package operations

// PostAdminRecordingsStop200ApplicationJSONMappingsRequestBasicAuthCredentials
// Pre-emptive basic auth credentials to match against
type PostAdminRecordingsStop200ApplicationJSONMappingsRequestBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminRecordingsStop200ApplicationJSONMappingsRequest struct {
	BasicAuthCredentials *PostAdminRecordingsStop200ApplicationJSONMappingsRequestBasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
	BodyPatterns         []map[string]interface{}                                                      `json:"bodyPatterns,omitempty"`
	Cookies              map[string]interface{}                                                        `json:"cookies,omitempty"`
	Headers              map[string]interface{}                                                        `json:"headers,omitempty"`
	Method               *string                                                                       `json:"method,omitempty"`
	QueryParameters      map[string]interface{}                                                        `json:"queryParameters,omitempty"`
	URL                  *string                                                                       `json:"url,omitempty"`
	URLPath              *string                                                                       `json:"urlPath,omitempty"`
	URLPathPattern       *string                                                                       `json:"urlPathPattern,omitempty"`
	URLPattern           *string                                                                       `json:"urlPattern,omitempty"`
}

type PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnum string

const (
	PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnumConnectionResetByPeer  PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
	PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnumEmptyResponse          PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnum = "EMPTY_RESPONSE"
	PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnumMalformedResponseChunk PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
	PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnumRandomDataThenClose    PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)

type PostAdminRecordingsStop200ApplicationJSONMappingsResponse struct {
	AdditionalProxyRequestHeaders map[string]interface{}                                              `json:"additionalProxyRequestHeaders,omitempty"`
	Base64Body                    *string                                                             `json:"base64Body,omitempty"`
	Body                          *string                                                             `json:"body,omitempty"`
	BodyFileName                  *string                                                             `json:"bodyFileName,omitempty"`
	Fault                         *PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnum `json:"fault,omitempty"`
	FixedDelayMilliseconds        *int64                                                              `json:"fixedDelayMilliseconds,omitempty"`
	FromConfiguredStub            *bool                                                               `json:"fromConfiguredStub,omitempty"`
	Headers                       map[string]interface{}                                              `json:"headers,omitempty"`
	JSONBody                      map[string]interface{}                                              `json:"jsonBody,omitempty"`
	ProxyBaseURL                  *string                                                             `json:"proxyBaseUrl,omitempty"`
	Status                        *int64                                                              `json:"status,omitempty"`
	StatusMessage                 *string                                                             `json:"statusMessage,omitempty"`
	TransformerParameters         map[string]interface{}                                              `json:"transformerParameters,omitempty"`
	Transformers                  []string                                                            `json:"transformers,omitempty"`
}

type PostAdminRecordingsStop200ApplicationJSONMappings struct {
	ID                    *string                                                    `json:"id,omitempty"`
	Metadata              map[string]interface{}                                     `json:"metadata,omitempty"`
	Name                  *string                                                    `json:"name,omitempty"`
	NewScenarioState      *string                                                    `json:"newScenarioState,omitempty"`
	Persistent            *bool                                                      `json:"persistent,omitempty"`
	PostServeActions      map[string]interface{}                                     `json:"postServeActions,omitempty"`
	Priority              *int64                                                     `json:"priority,omitempty"`
	Request               *PostAdminRecordingsStop200ApplicationJSONMappingsRequest  `json:"request,omitempty"`
	RequiredScenarioState *string                                                    `json:"requiredScenarioState,omitempty"`
	Response              *PostAdminRecordingsStop200ApplicationJSONMappingsResponse `json:"response,omitempty"`
	ScenarioName          *string                                                    `json:"scenarioName,omitempty"`
	UUID                  *string                                                    `json:"uuid,omitempty"`
}

type PostAdminRecordingsStop200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type PostAdminRecordingsStop200ApplicationJSON struct {
	Mappings []PostAdminRecordingsStop200ApplicationJSONMappings `json:"mappings,omitempty"`
	Meta     *PostAdminRecordingsStop200ApplicationJSONMeta      `json:"meta,omitempty"`
}

type PostAdminRecordingsStopResponse struct {
	ContentType                                     string
	PostAdminRecordingsStop200ApplicationJSONObject *PostAdminRecordingsStop200ApplicationJSON
	StatusCode                                      int64
}
