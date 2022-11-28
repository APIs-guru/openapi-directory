package operations

// PostAdminMappingsRequestBodyRequestBasicAuthCredentials
// Pre-emptive basic auth credentials to match against
type PostAdminMappingsRequestBodyRequestBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminMappingsRequestBodyRequest struct {
	BasicAuthCredentials *PostAdminMappingsRequestBodyRequestBasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
	BodyPatterns         []map[string]interface{}                                 `json:"bodyPatterns,omitempty"`
	Cookies              map[string]interface{}                                   `json:"cookies,omitempty"`
	Headers              map[string]interface{}                                   `json:"headers,omitempty"`
	Method               *string                                                  `json:"method,omitempty"`
	QueryParameters      map[string]interface{}                                   `json:"queryParameters,omitempty"`
	URL                  *string                                                  `json:"url,omitempty"`
	URLPath              *string                                                  `json:"urlPath,omitempty"`
	URLPathPattern       *string                                                  `json:"urlPathPattern,omitempty"`
	URLPattern           *string                                                  `json:"urlPattern,omitempty"`
}

type PostAdminMappingsRequestBodyResponseFaultEnum string

const (
	PostAdminMappingsRequestBodyResponseFaultEnumConnectionResetByPeer  PostAdminMappingsRequestBodyResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
	PostAdminMappingsRequestBodyResponseFaultEnumEmptyResponse          PostAdminMappingsRequestBodyResponseFaultEnum = "EMPTY_RESPONSE"
	PostAdminMappingsRequestBodyResponseFaultEnumMalformedResponseChunk PostAdminMappingsRequestBodyResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
	PostAdminMappingsRequestBodyResponseFaultEnumRandomDataThenClose    PostAdminMappingsRequestBodyResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)

type PostAdminMappingsRequestBodyResponse struct {
	AdditionalProxyRequestHeaders map[string]interface{}                         `json:"additionalProxyRequestHeaders,omitempty"`
	Base64Body                    *string                                        `json:"base64Body,omitempty"`
	Body                          *string                                        `json:"body,omitempty"`
	BodyFileName                  *string                                        `json:"bodyFileName,omitempty"`
	Fault                         *PostAdminMappingsRequestBodyResponseFaultEnum `json:"fault,omitempty"`
	FixedDelayMilliseconds        *int64                                         `json:"fixedDelayMilliseconds,omitempty"`
	FromConfiguredStub            *bool                                          `json:"fromConfiguredStub,omitempty"`
	Headers                       map[string]interface{}                         `json:"headers,omitempty"`
	JSONBody                      map[string]interface{}                         `json:"jsonBody,omitempty"`
	ProxyBaseURL                  *string                                        `json:"proxyBaseUrl,omitempty"`
	Status                        *int64                                         `json:"status,omitempty"`
	StatusMessage                 *string                                        `json:"statusMessage,omitempty"`
	TransformerParameters         map[string]interface{}                         `json:"transformerParameters,omitempty"`
	Transformers                  []string                                       `json:"transformers,omitempty"`
}

type PostAdminMappingsRequestBody struct {
	ID                    *string                               `json:"id,omitempty"`
	Metadata              map[string]interface{}                `json:"metadata,omitempty"`
	Name                  *string                               `json:"name,omitempty"`
	NewScenarioState      *string                               `json:"newScenarioState,omitempty"`
	Persistent            *bool                                 `json:"persistent,omitempty"`
	PostServeActions      map[string]interface{}                `json:"postServeActions,omitempty"`
	Priority              *int64                                `json:"priority,omitempty"`
	Request               *PostAdminMappingsRequestBodyRequest  `json:"request,omitempty"`
	RequiredScenarioState *string                               `json:"requiredScenarioState,omitempty"`
	Response              *PostAdminMappingsRequestBodyResponse `json:"response,omitempty"`
	ScenarioName          *string                               `json:"scenarioName,omitempty"`
	UUID                  *string                               `json:"uuid,omitempty"`
}

// PostAdminMappings201ApplicationJSONRequestBasicAuthCredentials
// Pre-emptive basic auth credentials to match against
type PostAdminMappings201ApplicationJSONRequestBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminMappings201ApplicationJSONRequest struct {
	BasicAuthCredentials *PostAdminMappings201ApplicationJSONRequestBasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
	BodyPatterns         []map[string]interface{}                                        `json:"bodyPatterns,omitempty"`
	Cookies              map[string]interface{}                                          `json:"cookies,omitempty"`
	Headers              map[string]interface{}                                          `json:"headers,omitempty"`
	Method               *string                                                         `json:"method,omitempty"`
	QueryParameters      map[string]interface{}                                          `json:"queryParameters,omitempty"`
	URL                  *string                                                         `json:"url,omitempty"`
	URLPath              *string                                                         `json:"urlPath,omitempty"`
	URLPathPattern       *string                                                         `json:"urlPathPattern,omitempty"`
	URLPattern           *string                                                         `json:"urlPattern,omitempty"`
}

type PostAdminMappings201ApplicationJSONResponseFaultEnum string

const (
	PostAdminMappings201ApplicationJSONResponseFaultEnumConnectionResetByPeer  PostAdminMappings201ApplicationJSONResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
	PostAdminMappings201ApplicationJSONResponseFaultEnumEmptyResponse          PostAdminMappings201ApplicationJSONResponseFaultEnum = "EMPTY_RESPONSE"
	PostAdminMappings201ApplicationJSONResponseFaultEnumMalformedResponseChunk PostAdminMappings201ApplicationJSONResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
	PostAdminMappings201ApplicationJSONResponseFaultEnumRandomDataThenClose    PostAdminMappings201ApplicationJSONResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)

type PostAdminMappings201ApplicationJSONResponse struct {
	AdditionalProxyRequestHeaders map[string]interface{}                                `json:"additionalProxyRequestHeaders,omitempty"`
	Base64Body                    *string                                               `json:"base64Body,omitempty"`
	Body                          *string                                               `json:"body,omitempty"`
	BodyFileName                  *string                                               `json:"bodyFileName,omitempty"`
	Fault                         *PostAdminMappings201ApplicationJSONResponseFaultEnum `json:"fault,omitempty"`
	FixedDelayMilliseconds        *int64                                                `json:"fixedDelayMilliseconds,omitempty"`
	FromConfiguredStub            *bool                                                 `json:"fromConfiguredStub,omitempty"`
	Headers                       map[string]interface{}                                `json:"headers,omitempty"`
	JSONBody                      map[string]interface{}                                `json:"jsonBody,omitempty"`
	ProxyBaseURL                  *string                                               `json:"proxyBaseUrl,omitempty"`
	Status                        *int64                                                `json:"status,omitempty"`
	StatusMessage                 *string                                               `json:"statusMessage,omitempty"`
	TransformerParameters         map[string]interface{}                                `json:"transformerParameters,omitempty"`
	Transformers                  []string                                              `json:"transformers,omitempty"`
}

type PostAdminMappings201ApplicationJSON struct {
	ID                    *string                                      `json:"id,omitempty"`
	Metadata              map[string]interface{}                       `json:"metadata,omitempty"`
	Name                  *string                                      `json:"name,omitempty"`
	NewScenarioState      *string                                      `json:"newScenarioState,omitempty"`
	Persistent            *bool                                        `json:"persistent,omitempty"`
	PostServeActions      map[string]interface{}                       `json:"postServeActions,omitempty"`
	Priority              *int64                                       `json:"priority,omitempty"`
	Request               *PostAdminMappings201ApplicationJSONRequest  `json:"request,omitempty"`
	RequiredScenarioState *string                                      `json:"requiredScenarioState,omitempty"`
	Response              *PostAdminMappings201ApplicationJSONResponse `json:"response,omitempty"`
	ScenarioName          *string                                      `json:"scenarioName,omitempty"`
	UUID                  *string                                      `json:"uuid,omitempty"`
}

type PostAdminMappingsRequest struct {
	Request *PostAdminMappingsRequestBody `request:"mediaType=application/json"`
}

type PostAdminMappingsResponse struct {
	ContentType                               string
	PostAdminMappings201ApplicationJSONObject *PostAdminMappings201ApplicationJSON
	StatusCode                                int64
}
