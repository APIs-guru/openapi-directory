package operations

type PostAdminRecordingsSnapshotRequestBodyCaptureHeaders struct {
	CaseInsensitive *bool `json:"caseInsensitive"`
}

type PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria struct {
	BinarySizeThreshold *string `json:"binarySizeThreshold"`
	TextSizeThreshold   *string `json:"textSizeThreshold"`
}

type PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminRecordingsSnapshotRequestBodyFilters struct {
	BasicAuthCredentials *PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials `json:"basicAuthCredentials"`
	BodyPatterns         []map[string]interface{}                                           `json:"bodyPatterns"`
	Cookies              map[string]interface{}                                             `json:"cookies"`
	Headers              map[string]interface{}                                             `json:"headers"`
	Ids                  []string                                                           `json:"ids"`
	Method               *string                                                            `json:"method"`
	QueryParameters      map[string]interface{}                                             `json:"queryParameters"`
	URL                  *string                                                            `json:"url"`
	URLPath              *string                                                            `json:"urlPath"`
	URLPathPattern       *string                                                            `json:"urlPathPattern"`
	URLPattern           *string                                                            `json:"urlPattern"`
}

type PostAdminRecordingsSnapshotRequestBody struct {
	CaptureHeaders        map[string]PostAdminRecordingsSnapshotRequestBodyCaptureHeaders `json:"captureHeaders"`
	ExtractBodyCriteria   *PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria      `json:"extractBodyCriteria"`
	Filters               *PostAdminRecordingsSnapshotRequestBodyFilters                  `json:"filters"`
	Persist               *bool                                                           `json:"persist"`
	RepeatsAsScenarios    *bool                                                           `json:"repeatsAsScenarios"`
	RequestBodyPattern    map[string]interface{}                                          `json:"requestBodyPattern"`
	TransformerParameters map[string]interface{}                                          `json:"transformerParameters"`
	Transformers          []string                                                        `json:"transformers"`
}

type PostAdminRecordingsSnapshotRequest struct {
	Request PostAdminRecordingsSnapshotRequestBody `request:"mediaType=application/json"`
}

type PostAdminRecordingsSnapshot200ApplicationJSONMappingsRequestBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminRecordingsSnapshot200ApplicationJSONMappingsRequest struct {
	BasicAuthCredentials *PostAdminRecordingsSnapshot200ApplicationJSONMappingsRequestBasicAuthCredentials `json:"basicAuthCredentials"`
	BodyPatterns         []map[string]interface{}                                                          `json:"bodyPatterns"`
	Cookies              map[string]interface{}                                                            `json:"cookies"`
	Headers              map[string]interface{}                                                            `json:"headers"`
	Method               *string                                                                           `json:"method"`
	QueryParameters      map[string]interface{}                                                            `json:"queryParameters"`
	URL                  *string                                                                           `json:"url"`
	URLPath              *string                                                                           `json:"urlPath"`
	URLPathPattern       *string                                                                           `json:"urlPathPattern"`
	URLPattern           *string                                                                           `json:"urlPattern"`
}

type PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnum string

const (
	PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnumConnectionResetByPeer  PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
	PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnumEmptyResponse          PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnum = "EMPTY_RESPONSE"
	PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnumMalformedResponseChunk PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
	PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnumRandomDataThenClose    PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)

type PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponse struct {
	AdditionalProxyRequestHeaders map[string]interface{}                                                  `json:"additionalProxyRequestHeaders"`
	Base64Body                    *string                                                                 `json:"base64Body"`
	Body                          *string                                                                 `json:"body"`
	BodyFileName                  *string                                                                 `json:"bodyFileName"`
	Fault                         *PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnum `json:"fault"`
	FixedDelayMilliseconds        *int64                                                                  `json:"fixedDelayMilliseconds"`
	FromConfiguredStub            *bool                                                                   `json:"fromConfiguredStub"`
	Headers                       map[string]interface{}                                                  `json:"headers"`
	JSONBody                      map[string]interface{}                                                  `json:"jsonBody"`
	ProxyBaseURL                  *string                                                                 `json:"proxyBaseUrl"`
	Status                        *int64                                                                  `json:"status"`
	StatusMessage                 *string                                                                 `json:"statusMessage"`
	TransformerParameters         map[string]interface{}                                                  `json:"transformerParameters"`
	Transformers                  []string                                                                `json:"transformers"`
}

type PostAdminRecordingsSnapshot200ApplicationJSONMappings struct {
	ID                    *string                                                        `json:"id"`
	Metadata              map[string]interface{}                                         `json:"metadata"`
	Name                  *string                                                        `json:"name"`
	NewScenarioState      *string                                                        `json:"newScenarioState"`
	Persistent            *bool                                                          `json:"persistent"`
	PostServeActions      map[string]interface{}                                         `json:"postServeActions"`
	Priority              *int64                                                         `json:"priority"`
	Request               *PostAdminRecordingsSnapshot200ApplicationJSONMappingsRequest  `json:"request"`
	RequiredScenarioState *string                                                        `json:"requiredScenarioState"`
	Response              *PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponse `json:"response"`
	ScenarioName          *string                                                        `json:"scenarioName"`
	UUID                  *string                                                        `json:"uuid"`
}

type PostAdminRecordingsSnapshot200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type PostAdminRecordingsSnapshot200ApplicationJSON struct {
	Mappings []PostAdminRecordingsSnapshot200ApplicationJSONMappings `json:"mappings"`
	Meta     *PostAdminRecordingsSnapshot200ApplicationJSONMeta      `json:"meta"`
}

type PostAdminRecordingsSnapshotResponse struct {
	ContentType                                         string
	PostAdminRecordingsSnapshot200ApplicationJSONObject *PostAdminRecordingsSnapshot200ApplicationJSON
	StatusCode                                          int64
}
