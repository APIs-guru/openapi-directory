package operations

type PostAdminMappingsRequestBodyRequestBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminMappingsRequestBodyRequest struct {
	BasicAuthCredentials *PostAdminMappingsRequestBodyRequestBasicAuthCredentials `json:"basicAuthCredentials"`
	BodyPatterns         []map[string]interface{}                                 `json:"bodyPatterns"`
	Cookies              map[string]interface{}                                   `json:"cookies"`
	Headers              map[string]interface{}                                   `json:"headers"`
	Method               *string                                                  `json:"method"`
	QueryParameters      map[string]interface{}                                   `json:"queryParameters"`
	URL                  *string                                                  `json:"url"`
	URLPath              *string                                                  `json:"urlPath"`
	URLPathPattern       *string                                                  `json:"urlPathPattern"`
	URLPattern           *string                                                  `json:"urlPattern"`
}

type PostAdminMappingsRequestBodyResponseFaultEnum string

const (
	PostAdminMappingsRequestBodyResponseFaultEnumConnectionResetByPeer  PostAdminMappingsRequestBodyResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
	PostAdminMappingsRequestBodyResponseFaultEnumEmptyResponse          PostAdminMappingsRequestBodyResponseFaultEnum = "EMPTY_RESPONSE"
	PostAdminMappingsRequestBodyResponseFaultEnumMalformedResponseChunk PostAdminMappingsRequestBodyResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
	PostAdminMappingsRequestBodyResponseFaultEnumRandomDataThenClose    PostAdminMappingsRequestBodyResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)

type PostAdminMappingsRequestBodyResponse struct {
	AdditionalProxyRequestHeaders map[string]interface{}                         `json:"additionalProxyRequestHeaders"`
	Base64Body                    *string                                        `json:"base64Body"`
	Body                          *string                                        `json:"body"`
	BodyFileName                  *string                                        `json:"bodyFileName"`
	Fault                         *PostAdminMappingsRequestBodyResponseFaultEnum `json:"fault"`
	FixedDelayMilliseconds        *int64                                         `json:"fixedDelayMilliseconds"`
	FromConfiguredStub            *bool                                          `json:"fromConfiguredStub"`
	Headers                       map[string]interface{}                         `json:"headers"`
	JSONBody                      map[string]interface{}                         `json:"jsonBody"`
	ProxyBaseURL                  *string                                        `json:"proxyBaseUrl"`
	Status                        *int64                                         `json:"status"`
	StatusMessage                 *string                                        `json:"statusMessage"`
	TransformerParameters         map[string]interface{}                         `json:"transformerParameters"`
	Transformers                  []string                                       `json:"transformers"`
}

type PostAdminMappingsRequestBody struct {
	ID                    *string                               `json:"id"`
	Metadata              map[string]interface{}                `json:"metadata"`
	Name                  *string                               `json:"name"`
	NewScenarioState      *string                               `json:"newScenarioState"`
	Persistent            *bool                                 `json:"persistent"`
	PostServeActions      map[string]interface{}                `json:"postServeActions"`
	Priority              *int64                                `json:"priority"`
	Request               *PostAdminMappingsRequestBodyRequest  `json:"request"`
	RequiredScenarioState *string                               `json:"requiredScenarioState"`
	Response              *PostAdminMappingsRequestBodyResponse `json:"response"`
	ScenarioName          *string                               `json:"scenarioName"`
	UUID                  *string                               `json:"uuid"`
}

type PostAdminMappingsRequest struct {
	Request *PostAdminMappingsRequestBody `request:"mediaType=application/json"`
}

type PostAdminMappings201ApplicationJSONRequestBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminMappings201ApplicationJSONRequest struct {
	BasicAuthCredentials *PostAdminMappings201ApplicationJSONRequestBasicAuthCredentials `json:"basicAuthCredentials"`
	BodyPatterns         []map[string]interface{}                                        `json:"bodyPatterns"`
	Cookies              map[string]interface{}                                          `json:"cookies"`
	Headers              map[string]interface{}                                          `json:"headers"`
	Method               *string                                                         `json:"method"`
	QueryParameters      map[string]interface{}                                          `json:"queryParameters"`
	URL                  *string                                                         `json:"url"`
	URLPath              *string                                                         `json:"urlPath"`
	URLPathPattern       *string                                                         `json:"urlPathPattern"`
	URLPattern           *string                                                         `json:"urlPattern"`
}

type PostAdminMappings201ApplicationJSONResponseFaultEnum string

const (
	PostAdminMappings201ApplicationJSONResponseFaultEnumConnectionResetByPeer  PostAdminMappings201ApplicationJSONResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
	PostAdminMappings201ApplicationJSONResponseFaultEnumEmptyResponse          PostAdminMappings201ApplicationJSONResponseFaultEnum = "EMPTY_RESPONSE"
	PostAdminMappings201ApplicationJSONResponseFaultEnumMalformedResponseChunk PostAdminMappings201ApplicationJSONResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
	PostAdminMappings201ApplicationJSONResponseFaultEnumRandomDataThenClose    PostAdminMappings201ApplicationJSONResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)

type PostAdminMappings201ApplicationJSONResponse struct {
	AdditionalProxyRequestHeaders map[string]interface{}                                `json:"additionalProxyRequestHeaders"`
	Base64Body                    *string                                               `json:"base64Body"`
	Body                          *string                                               `json:"body"`
	BodyFileName                  *string                                               `json:"bodyFileName"`
	Fault                         *PostAdminMappings201ApplicationJSONResponseFaultEnum `json:"fault"`
	FixedDelayMilliseconds        *int64                                                `json:"fixedDelayMilliseconds"`
	FromConfiguredStub            *bool                                                 `json:"fromConfiguredStub"`
	Headers                       map[string]interface{}                                `json:"headers"`
	JSONBody                      map[string]interface{}                                `json:"jsonBody"`
	ProxyBaseURL                  *string                                               `json:"proxyBaseUrl"`
	Status                        *int64                                                `json:"status"`
	StatusMessage                 *string                                               `json:"statusMessage"`
	TransformerParameters         map[string]interface{}                                `json:"transformerParameters"`
	Transformers                  []string                                              `json:"transformers"`
}

type PostAdminMappings201ApplicationJSON struct {
	ID                    *string                                      `json:"id"`
	Metadata              map[string]interface{}                       `json:"metadata"`
	Name                  *string                                      `json:"name"`
	NewScenarioState      *string                                      `json:"newScenarioState"`
	Persistent            *bool                                        `json:"persistent"`
	PostServeActions      map[string]interface{}                       `json:"postServeActions"`
	Priority              *int64                                       `json:"priority"`
	Request               *PostAdminMappings201ApplicationJSONRequest  `json:"request"`
	RequiredScenarioState *string                                      `json:"requiredScenarioState"`
	Response              *PostAdminMappings201ApplicationJSONResponse `json:"response"`
	ScenarioName          *string                                      `json:"scenarioName"`
	UUID                  *string                                      `json:"uuid"`
}

type PostAdminMappingsResponse struct {
	ContentType                               string
	PostAdminMappings201ApplicationJSONObject *PostAdminMappings201ApplicationJSON
	StatusCode                                int64
}
