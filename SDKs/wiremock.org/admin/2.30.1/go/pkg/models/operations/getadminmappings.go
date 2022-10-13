package operations

type GetAdminMappingsQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
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
	BasicAuthCredentials *GetAdminMappings200ApplicationJSONMappingsRequestBasicAuthCredentials `json:"basicAuthCredentials"`
	BodyPatterns         []map[string]interface{}                                               `json:"bodyPatterns"`
	Cookies              map[string]interface{}                                                 `json:"cookies"`
	Headers              map[string]interface{}                                                 `json:"headers"`
	Method               *string                                                                `json:"method"`
	QueryParameters      map[string]interface{}                                                 `json:"queryParameters"`
	URL                  *string                                                                `json:"url"`
	URLPath              *string                                                                `json:"urlPath"`
	URLPathPattern       *string                                                                `json:"urlPathPattern"`
	URLPattern           *string                                                                `json:"urlPattern"`
}

type GetAdminMappings200ApplicationJSONMappingsResponseFaultEnum string

const (
	GetAdminMappings200ApplicationJSONMappingsResponseFaultEnumConnectionResetByPeer  GetAdminMappings200ApplicationJSONMappingsResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
	GetAdminMappings200ApplicationJSONMappingsResponseFaultEnumEmptyResponse          GetAdminMappings200ApplicationJSONMappingsResponseFaultEnum = "EMPTY_RESPONSE"
	GetAdminMappings200ApplicationJSONMappingsResponseFaultEnumMalformedResponseChunk GetAdminMappings200ApplicationJSONMappingsResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
	GetAdminMappings200ApplicationJSONMappingsResponseFaultEnumRandomDataThenClose    GetAdminMappings200ApplicationJSONMappingsResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)

type GetAdminMappings200ApplicationJSONMappingsResponse struct {
	AdditionalProxyRequestHeaders map[string]interface{}                                       `json:"additionalProxyRequestHeaders"`
	Base64Body                    *string                                                      `json:"base64Body"`
	Body                          *string                                                      `json:"body"`
	BodyFileName                  *string                                                      `json:"bodyFileName"`
	Fault                         *GetAdminMappings200ApplicationJSONMappingsResponseFaultEnum `json:"fault"`
	FixedDelayMilliseconds        *int64                                                       `json:"fixedDelayMilliseconds"`
	FromConfiguredStub            *bool                                                        `json:"fromConfiguredStub"`
	Headers                       map[string]interface{}                                       `json:"headers"`
	JSONBody                      map[string]interface{}                                       `json:"jsonBody"`
	ProxyBaseURL                  *string                                                      `json:"proxyBaseUrl"`
	Status                        *int64                                                       `json:"status"`
	StatusMessage                 *string                                                      `json:"statusMessage"`
	TransformerParameters         map[string]interface{}                                       `json:"transformerParameters"`
	Transformers                  []string                                                     `json:"transformers"`
}

type GetAdminMappings200ApplicationJSONMappings struct {
	ID                    *string                                             `json:"id"`
	Metadata              map[string]interface{}                              `json:"metadata"`
	Name                  *string                                             `json:"name"`
	NewScenarioState      *string                                             `json:"newScenarioState"`
	Persistent            *bool                                               `json:"persistent"`
	PostServeActions      map[string]interface{}                              `json:"postServeActions"`
	Priority              *int64                                              `json:"priority"`
	Request               *GetAdminMappings200ApplicationJSONMappingsRequest  `json:"request"`
	RequiredScenarioState *string                                             `json:"requiredScenarioState"`
	Response              *GetAdminMappings200ApplicationJSONMappingsResponse `json:"response"`
	ScenarioName          *string                                             `json:"scenarioName"`
	UUID                  *string                                             `json:"uuid"`
}

type GetAdminMappings200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type GetAdminMappings200ApplicationJSON struct {
	Mappings []GetAdminMappings200ApplicationJSONMappings `json:"mappings"`
	Meta     *GetAdminMappings200ApplicationJSONMeta      `json:"meta"`
}

type GetAdminMappingsResponse struct {
	ContentType                              string
	GetAdminMappings200ApplicationJSONObject *GetAdminMappings200ApplicationJSON
	StatusCode                               int64
}
