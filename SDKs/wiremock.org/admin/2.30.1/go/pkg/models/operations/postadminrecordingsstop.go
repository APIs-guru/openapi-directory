package operations

type PostAdminRecordingsStop200ApplicationJSONMappingsRequestBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminRecordingsStop200ApplicationJSONMappingsRequest struct {
	BasicAuthCredentials *PostAdminRecordingsStop200ApplicationJSONMappingsRequestBasicAuthCredentials `json:"basicAuthCredentials"`
	BodyPatterns         []map[string]interface{}                                                      `json:"bodyPatterns"`
	Cookies              map[string]interface{}                                                        `json:"cookies"`
	Headers              map[string]interface{}                                                        `json:"headers"`
	Method               *string                                                                       `json:"method"`
	QueryParameters      map[string]interface{}                                                        `json:"queryParameters"`
	URL                  *string                                                                       `json:"url"`
	URLPath              *string                                                                       `json:"urlPath"`
	URLPathPattern       *string                                                                       `json:"urlPathPattern"`
	URLPattern           *string                                                                       `json:"urlPattern"`
}

type PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnum string

const (
	PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnumConnectionResetByPeer  PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
	PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnumEmptyResponse          PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnum = "EMPTY_RESPONSE"
	PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnumMalformedResponseChunk PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
	PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnumRandomDataThenClose    PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)

type PostAdminRecordingsStop200ApplicationJSONMappingsResponse struct {
	AdditionalProxyRequestHeaders map[string]interface{}                                              `json:"additionalProxyRequestHeaders"`
	Base64Body                    *string                                                             `json:"base64Body"`
	Body                          *string                                                             `json:"body"`
	BodyFileName                  *string                                                             `json:"bodyFileName"`
	Fault                         *PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnum `json:"fault"`
	FixedDelayMilliseconds        *int64                                                              `json:"fixedDelayMilliseconds"`
	FromConfiguredStub            *bool                                                               `json:"fromConfiguredStub"`
	Headers                       map[string]interface{}                                              `json:"headers"`
	JSONBody                      map[string]interface{}                                              `json:"jsonBody"`
	ProxyBaseURL                  *string                                                             `json:"proxyBaseUrl"`
	Status                        *int64                                                              `json:"status"`
	StatusMessage                 *string                                                             `json:"statusMessage"`
	TransformerParameters         map[string]interface{}                                              `json:"transformerParameters"`
	Transformers                  []string                                                            `json:"transformers"`
}

type PostAdminRecordingsStop200ApplicationJSONMappings struct {
	ID                    *string                                                    `json:"id"`
	Metadata              map[string]interface{}                                     `json:"metadata"`
	Name                  *string                                                    `json:"name"`
	NewScenarioState      *string                                                    `json:"newScenarioState"`
	Persistent            *bool                                                      `json:"persistent"`
	PostServeActions      map[string]interface{}                                     `json:"postServeActions"`
	Priority              *int64                                                     `json:"priority"`
	Request               *PostAdminRecordingsStop200ApplicationJSONMappingsRequest  `json:"request"`
	RequiredScenarioState *string                                                    `json:"requiredScenarioState"`
	Response              *PostAdminRecordingsStop200ApplicationJSONMappingsResponse `json:"response"`
	ScenarioName          *string                                                    `json:"scenarioName"`
	UUID                  *string                                                    `json:"uuid"`
}

type PostAdminRecordingsStop200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type PostAdminRecordingsStop200ApplicationJSON struct {
	Mappings []PostAdminRecordingsStop200ApplicationJSONMappings `json:"mappings"`
	Meta     *PostAdminRecordingsStop200ApplicationJSONMeta      `json:"meta"`
}

type PostAdminRecordingsStopResponse struct {
	ContentType                                     string
	PostAdminRecordingsStop200ApplicationJSONObject *PostAdminRecordingsStop200ApplicationJSON
	StatusCode                                      int64
}
