package operations

type PutAdminMappingsStubMappingIDPathParams struct {
	StubMappingID string `pathParam:"style=simple,explode=false,name=stubMappingId"`
}

type PutAdminMappingsStubMappingIDRequestBodyRequestBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PutAdminMappingsStubMappingIDRequestBodyRequest struct {
	BasicAuthCredentials *PutAdminMappingsStubMappingIDRequestBodyRequestBasicAuthCredentials `json:"basicAuthCredentials"`
	BodyPatterns         []map[string]interface{}                                             `json:"bodyPatterns"`
	Cookies              map[string]interface{}                                               `json:"cookies"`
	Headers              map[string]interface{}                                               `json:"headers"`
	Method               *string                                                              `json:"method"`
	QueryParameters      map[string]interface{}                                               `json:"queryParameters"`
	URL                  *string                                                              `json:"url"`
	URLPath              *string                                                              `json:"urlPath"`
	URLPathPattern       *string                                                              `json:"urlPathPattern"`
	URLPattern           *string                                                              `json:"urlPattern"`
}

type PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnum string

const (
	PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnumConnectionResetByPeer  PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
	PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnumEmptyResponse          PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnum = "EMPTY_RESPONSE"
	PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnumMalformedResponseChunk PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
	PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnumRandomDataThenClose    PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)

type PutAdminMappingsStubMappingIDRequestBodyResponse struct {
	AdditionalProxyRequestHeaders map[string]interface{}                                     `json:"additionalProxyRequestHeaders"`
	Base64Body                    *string                                                    `json:"base64Body"`
	Body                          *string                                                    `json:"body"`
	BodyFileName                  *string                                                    `json:"bodyFileName"`
	Fault                         *PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnum `json:"fault"`
	FixedDelayMilliseconds        *int64                                                     `json:"fixedDelayMilliseconds"`
	FromConfiguredStub            *bool                                                      `json:"fromConfiguredStub"`
	Headers                       map[string]interface{}                                     `json:"headers"`
	JSONBody                      map[string]interface{}                                     `json:"jsonBody"`
	ProxyBaseURL                  *string                                                    `json:"proxyBaseUrl"`
	Status                        *int64                                                     `json:"status"`
	StatusMessage                 *string                                                    `json:"statusMessage"`
	TransformerParameters         map[string]interface{}                                     `json:"transformerParameters"`
	Transformers                  []string                                                   `json:"transformers"`
}

type PutAdminMappingsStubMappingIDRequestBody struct {
	ID                    *string                                           `json:"id"`
	Metadata              map[string]interface{}                            `json:"metadata"`
	Name                  *string                                           `json:"name"`
	NewScenarioState      *string                                           `json:"newScenarioState"`
	Persistent            *bool                                             `json:"persistent"`
	PostServeActions      map[string]interface{}                            `json:"postServeActions"`
	Priority              *int64                                            `json:"priority"`
	Request               *PutAdminMappingsStubMappingIDRequestBodyRequest  `json:"request"`
	RequiredScenarioState *string                                           `json:"requiredScenarioState"`
	Response              *PutAdminMappingsStubMappingIDRequestBodyResponse `json:"response"`
	ScenarioName          *string                                           `json:"scenarioName"`
	UUID                  *string                                           `json:"uuid"`
}

type PutAdminMappingsStubMappingIDRequest struct {
	PathParams PutAdminMappingsStubMappingIDPathParams
	Request    *PutAdminMappingsStubMappingIDRequestBody `request:"mediaType=application/json"`
}

type PutAdminMappingsStubMappingID200ApplicationJSONRequestBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PutAdminMappingsStubMappingID200ApplicationJSONRequest struct {
	BasicAuthCredentials *PutAdminMappingsStubMappingID200ApplicationJSONRequestBasicAuthCredentials `json:"basicAuthCredentials"`
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

type PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum string

const (
	PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnumConnectionResetByPeer  PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
	PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnumEmptyResponse          PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum = "EMPTY_RESPONSE"
	PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnumMalformedResponseChunk PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
	PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnumRandomDataThenClose    PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)

type PutAdminMappingsStubMappingID200ApplicationJSONResponse struct {
	AdditionalProxyRequestHeaders map[string]interface{}                                            `json:"additionalProxyRequestHeaders"`
	Base64Body                    *string                                                           `json:"base64Body"`
	Body                          *string                                                           `json:"body"`
	BodyFileName                  *string                                                           `json:"bodyFileName"`
	Fault                         *PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum `json:"fault"`
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

type PutAdminMappingsStubMappingID200ApplicationJSON struct {
	ID                    *string                                                  `json:"id"`
	Metadata              map[string]interface{}                                   `json:"metadata"`
	Name                  *string                                                  `json:"name"`
	NewScenarioState      *string                                                  `json:"newScenarioState"`
	Persistent            *bool                                                    `json:"persistent"`
	PostServeActions      map[string]interface{}                                   `json:"postServeActions"`
	Priority              *int64                                                   `json:"priority"`
	Request               *PutAdminMappingsStubMappingID200ApplicationJSONRequest  `json:"request"`
	RequiredScenarioState *string                                                  `json:"requiredScenarioState"`
	Response              *PutAdminMappingsStubMappingID200ApplicationJSONResponse `json:"response"`
	ScenarioName          *string                                                  `json:"scenarioName"`
	UUID                  *string                                                  `json:"uuid"`
}

type PutAdminMappingsStubMappingIDResponse struct {
	ContentType                                           string
	PutAdminMappingsStubMappingID200ApplicationJSONObject *PutAdminMappingsStubMappingID200ApplicationJSON
	StatusCode                                            int64
}
