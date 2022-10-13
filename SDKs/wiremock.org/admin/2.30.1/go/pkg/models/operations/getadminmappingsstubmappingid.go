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
	BasicAuthCredentials *GetAdminMappingsStubMappingID200ApplicationJSONRequestBasicAuthCredentials `json:"basicAuthCredentials"`
	BodyPatterns         []map[string]interface{}                                                    `json:"bodyPatterns"`
	Cookies              map[string]interface{}                                                      `json:"cookies"`
	Headers              map[string]interface{}                                                      `json:"headers"`
	Method               *string                                                                     `json:"method"`
	QueryParameters      map[string]interface{}                                                      `json:"queryParameters"`
	URL                  *string                                                                     `json:"url"`
	URLPath              *string                                                                     `json:"urlPath"`
	URLPathPattern       *string                                                                     `json:"urlPathPattern"`
	URLPattern           *string                                                                     `json:"urlPattern"`
}

type GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum string

const (
	GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnumConnectionResetByPeer  GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
	GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnumEmptyResponse          GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum = "EMPTY_RESPONSE"
	GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnumMalformedResponseChunk GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
	GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnumRandomDataThenClose    GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)

type GetAdminMappingsStubMappingID200ApplicationJSONResponse struct {
	AdditionalProxyRequestHeaders map[string]interface{}                                            `json:"additionalProxyRequestHeaders"`
	Base64Body                    *string                                                           `json:"base64Body"`
	Body                          *string                                                           `json:"body"`
	BodyFileName                  *string                                                           `json:"bodyFileName"`
	Fault                         *GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum `json:"fault"`
	FixedDelayMilliseconds        *int64                                                            `json:"fixedDelayMilliseconds"`
	FromConfiguredStub            *bool                                                             `json:"fromConfiguredStub"`
	Headers                       map[string]interface{}                                            `json:"headers"`
	JSONBody                      map[string]interface{}                                            `json:"jsonBody"`
	ProxyBaseURL                  *string                                                           `json:"proxyBaseUrl"`
	Status                        *int64                                                            `json:"status"`
	StatusMessage                 *string                                                           `json:"statusMessage"`
	TransformerParameters         map[string]interface{}                                            `json:"transformerParameters"`
	Transformers                  []string                                                          `json:"transformers"`
}

type GetAdminMappingsStubMappingID200ApplicationJSON struct {
	ID                    *string                                                  `json:"id"`
	Metadata              map[string]interface{}                                   `json:"metadata"`
	Name                  *string                                                  `json:"name"`
	NewScenarioState      *string                                                  `json:"newScenarioState"`
	Persistent            *bool                                                    `json:"persistent"`
	PostServeActions      map[string]interface{}                                   `json:"postServeActions"`
	Priority              *int64                                                   `json:"priority"`
	Request               *GetAdminMappingsStubMappingID200ApplicationJSONRequest  `json:"request"`
	RequiredScenarioState *string                                                  `json:"requiredScenarioState"`
	Response              *GetAdminMappingsStubMappingID200ApplicationJSONResponse `json:"response"`
	ScenarioName          *string                                                  `json:"scenarioName"`
	UUID                  *string                                                  `json:"uuid"`
}

type GetAdminMappingsStubMappingIDResponse struct {
	ContentType                                           string
	GetAdminMappingsStubMappingID200ApplicationJSONObject *GetAdminMappingsStubMappingID200ApplicationJSON
	StatusCode                                            int64
}
