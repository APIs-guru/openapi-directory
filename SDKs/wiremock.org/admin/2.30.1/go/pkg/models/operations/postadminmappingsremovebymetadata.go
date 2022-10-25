package operations

type PostAdminMappingsRemoveByMetadataRequestBodyStringEquals struct {
	CaseInsensitive *bool `json:"caseInsensitive,omitempty"`
	EqualTo         bool  `json:"equalTo"`
}

type PostAdminMappingsRemoveByMetadataRequestBodyStringContains struct {
	Contains string `json:"contains"`
}

type PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch struct {
	Matches string `json:"matches"`
}

type PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch struct {
	DoesNotMatch string `json:"doesNotMatch"`
}

type PostAdminMappingsRemoveByMetadataRequestBodyJSONEquals struct {
	EqualToJSON string `json:"equalToJson"`
}

type PostAdminMappingsRemoveByMetadataRequestBodyJSONPathMatch struct {
	IgnoreArrayOrder    *bool  `json:"ignoreArrayOrder,omitempty"`
	IgnoreExtraElements *bool  `json:"ignoreExtraElements,omitempty"`
	MatchesJSONPath     string `json:"matchesJsonPath"`
}

type PostAdminMappingsRemoveByMetadataRequestBodyXMLEquality struct {
	EqualToXML string `json:"equalToXml"`
}

type PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch struct {
	MatchesXpath string                 `json:"matchesXpath"`
	Namespaces   map[string]interface{} `json:"namespaces,omitempty"`
	ValuePattern map[string]interface{} `json:"valuePattern,omitempty"`
}

type PostAdminMappingsRemoveByMetadataRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostAdminMappingsRemoveByMetadataResponse struct {
	ContentType string
	StatusCode  int64
}
