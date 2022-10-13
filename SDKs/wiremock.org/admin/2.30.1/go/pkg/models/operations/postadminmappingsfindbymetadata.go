package operations

type PostAdminMappingsFindByMetadataRequestBody1StringEquals struct {
	CaseInsensitive *bool `json:"caseInsensitive"`
	EqualTo         bool  `json:"equalTo"`
}

type PostAdminMappingsFindByMetadataRequestBody2StringContains struct {
	Contains string `json:"contains"`
}

type PostAdminMappingsFindByMetadataRequestBody3RegularExpressionMatch struct {
	Matches string `json:"matches"`
}

type PostAdminMappingsFindByMetadataRequestBody4NegativeRegularExpressionMatch struct {
	DoesNotMatch string `json:"doesNotMatch"`
}

type PostAdminMappingsFindByMetadataRequestBody5JSONEquals struct {
	EqualToJSON string `json:"equalToJson"`
}

type PostAdminMappingsFindByMetadataRequestBody6JSONPathMatch struct {
	IgnoreArrayOrder    *bool  `json:"ignoreArrayOrder"`
	IgnoreExtraElements *bool  `json:"ignoreExtraElements"`
	MatchesJSONPath     string `json:"matchesJsonPath"`
}

type PostAdminMappingsFindByMetadataRequestBody7XMLEquality struct {
	EqualToXML string `json:"equalToXml"`
}

type PostAdminMappingsFindByMetadataRequestBody8XPathMatch struct {
	MatchesXpath string                 `json:"matchesXpath"`
	Namespaces   map[string]interface{} `json:"namespaces"`
	ValuePattern map[string]interface{} `json:"valuePattern"`
}

type PostAdminMappingsFindByMetadataRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequestBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequest struct {
	BasicAuthCredentials *PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequestBasicAuthCredentials `json:"basicAuthCredentials"`
	BodyPatterns         []map[string]interface{}                                                              `json:"bodyPatterns"`
	Cookies              map[string]interface{}                                                                `json:"cookies"`
	Headers              map[string]interface{}                                                                `json:"headers"`
	Method               *string                                                                               `json:"method"`
	QueryParameters      map[string]interface{}                                                                `json:"queryParameters"`
	URL                  *string                                                                               `json:"url"`
	URLPath              *string                                                                               `json:"urlPath"`
	URLPathPattern       *string                                                                               `json:"urlPathPattern"`
	URLPattern           *string                                                                               `json:"urlPattern"`
}

type PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum string

const (
	PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnumConnectionResetByPeer  PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
	PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnumEmptyResponse          PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum = "EMPTY_RESPONSE"
	PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnumMalformedResponseChunk PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
	PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnumRandomDataThenClose    PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)

type PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponse struct {
	AdditionalProxyRequestHeaders map[string]interface{}                                                      `json:"additionalProxyRequestHeaders"`
	Base64Body                    *string                                                                     `json:"base64Body"`
	Body                          *string                                                                     `json:"body"`
	BodyFileName                  *string                                                                     `json:"bodyFileName"`
	Fault                         *PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum `json:"fault"`
	FixedDelayMilliseconds        *int64                                                                      `json:"fixedDelayMilliseconds"`
	FromConfiguredStub            *bool                                                                       `json:"fromConfiguredStub"`
	Headers                       map[string]interface{}                                                      `json:"headers"`
	JSONBody                      map[string]interface{}                                                      `json:"jsonBody"`
	ProxyBaseURL                  *string                                                                     `json:"proxyBaseUrl"`
	Status                        *int64                                                                      `json:"status"`
	StatusMessage                 *string                                                                     `json:"statusMessage"`
	TransformerParameters         map[string]interface{}                                                      `json:"transformerParameters"`
	Transformers                  []string                                                                    `json:"transformers"`
}

type PostAdminMappingsFindByMetadata200ApplicationJSONMappings struct {
	ID                    *string                                                            `json:"id"`
	Metadata              map[string]interface{}                                             `json:"metadata"`
	Name                  *string                                                            `json:"name"`
	NewScenarioState      *string                                                            `json:"newScenarioState"`
	Persistent            *bool                                                              `json:"persistent"`
	PostServeActions      map[string]interface{}                                             `json:"postServeActions"`
	Priority              *int64                                                             `json:"priority"`
	Request               *PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequest  `json:"request"`
	RequiredScenarioState *string                                                            `json:"requiredScenarioState"`
	Response              *PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponse `json:"response"`
	ScenarioName          *string                                                            `json:"scenarioName"`
	UUID                  *string                                                            `json:"uuid"`
}

type PostAdminMappingsFindByMetadata200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type PostAdminMappingsFindByMetadata200ApplicationJSON struct {
	Mappings []PostAdminMappingsFindByMetadata200ApplicationJSONMappings `json:"mappings"`
	Meta     *PostAdminMappingsFindByMetadata200ApplicationJSONMeta      `json:"meta"`
}

type PostAdminMappingsFindByMetadataResponse struct {
	ContentType                                             string
	PostAdminMappingsFindByMetadata200ApplicationJSONObject *PostAdminMappingsFindByMetadata200ApplicationJSON
	StatusCode                                              int64
}
