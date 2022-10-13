package operations

type PostAdminMappingsRemoveByMetadataRequestBody1StringEquals struct {
	CaseInsensitive *bool `json:"caseInsensitive"`
	EqualTo         bool  `json:"equalTo"`
}

type PostAdminMappingsRemoveByMetadataRequestBody2StringContains struct {
	Contains string `json:"contains"`
}

type PostAdminMappingsRemoveByMetadataRequestBody3RegularExpressionMatch struct {
	Matches string `json:"matches"`
}

type PostAdminMappingsRemoveByMetadataRequestBody4NegativeRegularExpressionMatch struct {
	DoesNotMatch string `json:"doesNotMatch"`
}

type PostAdminMappingsRemoveByMetadataRequestBody5JSONEquals struct {
	EqualToJSON string `json:"equalToJson"`
}

type PostAdminMappingsRemoveByMetadataRequestBody6JSONPathMatch struct {
	IgnoreArrayOrder    *bool  `json:"ignoreArrayOrder"`
	IgnoreExtraElements *bool  `json:"ignoreExtraElements"`
	MatchesJSONPath     string `json:"matchesJsonPath"`
}

type PostAdminMappingsRemoveByMetadataRequestBody7XMLEquality struct {
	EqualToXML string `json:"equalToXml"`
}

type PostAdminMappingsRemoveByMetadataRequestBody8XPathMatch struct {
	MatchesXpath string                 `json:"matchesXpath"`
	Namespaces   map[string]interface{} `json:"namespaces"`
	ValuePattern map[string]interface{} `json:"valuePattern"`
}

type PostAdminMappingsRemoveByMetadataRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostAdminMappingsRemoveByMetadataResponse struct {
	ContentType string
	StatusCode  int64
}
