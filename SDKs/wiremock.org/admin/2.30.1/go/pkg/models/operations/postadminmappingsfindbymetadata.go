package operations

type PostAdminMappingsFindByMetadataRequestBodyStringEquals struct {
	CaseInsensitive *bool `json:"caseInsensitive,omitempty"`
	EqualTo         bool  `json:"equalTo"`
}

type PostAdminMappingsFindByMetadataRequestBodyStringContains struct {
	Contains string `json:"contains"`
}

type PostAdminMappingsFindByMetadataRequestBodyRegularExpressionMatch struct {
	Matches string `json:"matches"`
}

type PostAdminMappingsFindByMetadataRequestBodyNegativeRegularExpressionMatch struct {
	DoesNotMatch string `json:"doesNotMatch"`
}

type PostAdminMappingsFindByMetadataRequestBodyJSONEquals struct {
	EqualToJSON string `json:"equalToJson"`
}

type PostAdminMappingsFindByMetadataRequestBodyJSONPathMatch struct {
	IgnoreArrayOrder    *bool  `json:"ignoreArrayOrder,omitempty"`
	IgnoreExtraElements *bool  `json:"ignoreExtraElements,omitempty"`
	MatchesJSONPath     string `json:"matchesJsonPath"`
}

type PostAdminMappingsFindByMetadataRequestBodyXMLEquality struct {
	EqualToXML string `json:"equalToXml"`
}

type PostAdminMappingsFindByMetadataRequestBodyXPathMatch struct {
	MatchesXpath string                 `json:"matchesXpath"`
	Namespaces   map[string]interface{} `json:"namespaces,omitempty"`
	ValuePattern map[string]interface{} `json:"valuePattern,omitempty"`
}

type PostAdminMappingsFindByMetadataRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequestBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequest struct {
	BasicAuthCredentials *PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequestBasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
	BodyPatterns         []map[string]interface{}                                                              `json:"bodyPatterns,omitempty"`
	Cookies              map[string]interface{}                                                                `json:"cookies,omitempty"`
	Headers              map[string]interface{}                                                                `json:"headers,omitempty"`
	Method               *string                                                                               `json:"method,omitempty"`
	QueryParameters      map[string]interface{}                                                                `json:"queryParameters,omitempty"`
	URL                  *string                                                                               `json:"url,omitempty"`
	URLPath              *string                                                                               `json:"urlPath,omitempty"`
	URLPathPattern       *string                                                                               `json:"urlPathPattern,omitempty"`
	URLPattern           *string                                                                               `json:"urlPattern,omitempty"`
}

type PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum string

const (
	PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnumConnectionResetByPeer  PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum = "CONNECTION_RESET_BY_PEER"
	PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnumEmptyResponse          PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum = "EMPTY_RESPONSE"
	PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnumMalformedResponseChunk PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum = "MALFORMED_RESPONSE_CHUNK"
	PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnumRandomDataThenClose    PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum = "RANDOM_DATA_THEN_CLOSE"
)

type PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponse struct {
	AdditionalProxyRequestHeaders map[string]interface{}                                                      `json:"additionalProxyRequestHeaders,omitempty"`
	Base64Body                    *string                                                                     `json:"base64Body,omitempty"`
	Body                          *string                                                                     `json:"body,omitempty"`
	BodyFileName                  *string                                                                     `json:"bodyFileName,omitempty"`
	Fault                         *PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum `json:"fault,omitempty"`
	FixedDelayMilliseconds        *int64                                                                      `json:"fixedDelayMilliseconds,omitempty"`
	FromConfiguredStub            *bool                                                                       `json:"fromConfiguredStub,omitempty"`
	Headers                       map[string]interface{}                                                      `json:"headers,omitempty"`
	JSONBody                      map[string]interface{}                                                      `json:"jsonBody,omitempty"`
	ProxyBaseURL                  *string                                                                     `json:"proxyBaseUrl,omitempty"`
	Status                        *int64                                                                      `json:"status,omitempty"`
	StatusMessage                 *string                                                                     `json:"statusMessage,omitempty"`
	TransformerParameters         map[string]interface{}                                                      `json:"transformerParameters,omitempty"`
	Transformers                  []string                                                                    `json:"transformers,omitempty"`
}

type PostAdminMappingsFindByMetadata200ApplicationJSONMappings struct {
	ID                    *string                                                            `json:"id,omitempty"`
	Metadata              map[string]interface{}                                             `json:"metadata,omitempty"`
	Name                  *string                                                            `json:"name,omitempty"`
	NewScenarioState      *string                                                            `json:"newScenarioState,omitempty"`
	Persistent            *bool                                                              `json:"persistent,omitempty"`
	PostServeActions      map[string]interface{}                                             `json:"postServeActions,omitempty"`
	Priority              *int64                                                             `json:"priority,omitempty"`
	Request               *PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequest  `json:"request,omitempty"`
	RequiredScenarioState *string                                                            `json:"requiredScenarioState,omitempty"`
	Response              *PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponse `json:"response,omitempty"`
	ScenarioName          *string                                                            `json:"scenarioName,omitempty"`
	UUID                  *string                                                            `json:"uuid,omitempty"`
}

type PostAdminMappingsFindByMetadata200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type PostAdminMappingsFindByMetadata200ApplicationJSON struct {
	Mappings []PostAdminMappingsFindByMetadata200ApplicationJSONMappings `json:"mappings,omitempty"`
	Meta     *PostAdminMappingsFindByMetadata200ApplicationJSONMeta      `json:"meta,omitempty"`
}

type PostAdminMappingsFindByMetadataResponse struct {
	ContentType                                             string
	PostAdminMappingsFindByMetadata200ApplicationJSONObject *PostAdminMappingsFindByMetadata200ApplicationJSON
	StatusCode                                              int64
}
