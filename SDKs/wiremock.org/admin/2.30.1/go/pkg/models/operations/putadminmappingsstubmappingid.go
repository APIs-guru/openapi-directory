package operations

type PutAdminMappingsStubMappingIDPathParams struct {
	StubMappingID string `pathParam:"style=simple,explode=false,name=stubMappingId"`
}

// PutAdminMappingsStubMappingIDRequestBodyRequestBasicAuthCredentials
// Pre-emptive basic auth credentials to match against
type PutAdminMappingsStubMappingIDRequestBodyRequestBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PutAdminMappingsStubMappingIDRequestBodyRequest struct {
	BasicAuthCredentials *PutAdminMappingsStubMappingIDRequestBodyRequestBasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
	BodyPatterns         []map[string]interface{}                                             `json:"bodyPatterns,omitempty"`
	Cookies              map[string]interface{}                                               `json:"cookies,omitempty"`
	Headers              map[string]interface{}                                               `json:"headers,omitempty"`
	Method               *string                                                              `json:"method,omitempty"`
	QueryParameters      map[string]interface{}                                               `json:"queryParameters,omitempty"`
	URL                  *string                                                              `json:"url,omitempty"`
	URLPath              *string                                                              `json:"urlPath,omitempty"`
	URLPathPattern       *string                                                              `json:"urlPathPattern,omitempty"`
	URLPattern           *string                                                              `json:"urlPattern,omitempty"`
}

type PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnum string

const (
	PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnumConnectionResetByPeer  PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
	PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnumEmptyResponse          PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnum = "EMPTY_RESPONSE"
	PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnumMalformedResponseChunk PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
	PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnumRandomDataThenClose    PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)

type PutAdminMappingsStubMappingIDRequestBodyResponse struct {
	AdditionalProxyRequestHeaders map[string]interface{}                                     `json:"additionalProxyRequestHeaders,omitempty"`
	Base64Body                    *string                                                    `json:"base64Body,omitempty"`
	Body                          *string                                                    `json:"body,omitempty"`
	BodyFileName                  *string                                                    `json:"bodyFileName,omitempty"`
	Fault                         *PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnum `json:"fault,omitempty"`
	FixedDelayMilliseconds        *int64                                                     `json:"fixedDelayMilliseconds,omitempty"`
	FromConfiguredStub            *bool                                                      `json:"fromConfiguredStub,omitempty"`
	Headers                       map[string]interface{}                                     `json:"headers,omitempty"`
	JSONBody                      map[string]interface{}                                     `json:"jsonBody,omitempty"`
	ProxyBaseURL                  *string                                                    `json:"proxyBaseUrl,omitempty"`
	Status                        *int64                                                     `json:"status,omitempty"`
	StatusMessage                 *string                                                    `json:"statusMessage,omitempty"`
	TransformerParameters         map[string]interface{}                                     `json:"transformerParameters,omitempty"`
	Transformers                  []string                                                   `json:"transformers,omitempty"`
}

type PutAdminMappingsStubMappingIDRequestBody struct {
	ID                    *string                                           `json:"id,omitempty"`
	Metadata              map[string]interface{}                            `json:"metadata,omitempty"`
	Name                  *string                                           `json:"name,omitempty"`
	NewScenarioState      *string                                           `json:"newScenarioState,omitempty"`
	Persistent            *bool                                             `json:"persistent,omitempty"`
	PostServeActions      map[string]interface{}                            `json:"postServeActions,omitempty"`
	Priority              *int64                                            `json:"priority,omitempty"`
	Request               *PutAdminMappingsStubMappingIDRequestBodyRequest  `json:"request,omitempty"`
	RequiredScenarioState *string                                           `json:"requiredScenarioState,omitempty"`
	Response              *PutAdminMappingsStubMappingIDRequestBodyResponse `json:"response,omitempty"`
	ScenarioName          *string                                           `json:"scenarioName,omitempty"`
	UUID                  *string                                           `json:"uuid,omitempty"`
}

// PutAdminMappingsStubMappingID200ApplicationJSONRequestBasicAuthCredentials
// Pre-emptive basic auth credentials to match against
type PutAdminMappingsStubMappingID200ApplicationJSONRequestBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PutAdminMappingsStubMappingID200ApplicationJSONRequest struct {
	BasicAuthCredentials *PutAdminMappingsStubMappingID200ApplicationJSONRequestBasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
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

type PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum string

const (
	PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnumConnectionResetByPeer  PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
	PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnumEmptyResponse          PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum = "EMPTY_RESPONSE"
	PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnumMalformedResponseChunk PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
	PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnumRandomDataThenClose    PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)

type PutAdminMappingsStubMappingID200ApplicationJSONResponse struct {
	AdditionalProxyRequestHeaders map[string]interface{}                                            `json:"additionalProxyRequestHeaders,omitempty"`
	Base64Body                    *string                                                           `json:"base64Body,omitempty"`
	Body                          *string                                                           `json:"body,omitempty"`
	BodyFileName                  *string                                                           `json:"bodyFileName,omitempty"`
	Fault                         *PutAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum `json:"fault,omitempty"`
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

type PutAdminMappingsStubMappingID200ApplicationJSON struct {
	ID                    *string                                                  `json:"id,omitempty"`
	Metadata              map[string]interface{}                                   `json:"metadata,omitempty"`
	Name                  *string                                                  `json:"name,omitempty"`
	NewScenarioState      *string                                                  `json:"newScenarioState,omitempty"`
	Persistent            *bool                                                    `json:"persistent,omitempty"`
	PostServeActions      map[string]interface{}                                   `json:"postServeActions,omitempty"`
	Priority              *int64                                                   `json:"priority,omitempty"`
	Request               *PutAdminMappingsStubMappingID200ApplicationJSONRequest  `json:"request,omitempty"`
	RequiredScenarioState *string                                                  `json:"requiredScenarioState,omitempty"`
	Response              *PutAdminMappingsStubMappingID200ApplicationJSONResponse `json:"response,omitempty"`
	ScenarioName          *string                                                  `json:"scenarioName,omitempty"`
	UUID                  *string                                                  `json:"uuid,omitempty"`
}

type PutAdminMappingsStubMappingIDRequest struct {
	PathParams PutAdminMappingsStubMappingIDPathParams
	Request    *PutAdminMappingsStubMappingIDRequestBody `request:"mediaType=application/json"`
}

type PutAdminMappingsStubMappingIDResponse struct {
	ContentType                                           string
	PutAdminMappingsStubMappingID200ApplicationJSONObject *PutAdminMappingsStubMappingID200ApplicationJSON
	StatusCode                                            int64
}
