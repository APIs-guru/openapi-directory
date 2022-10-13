package operations

type PostAdminRequestsRemoveByMetadataRequestBody1StringEquals struct {
	CaseInsensitive *bool `json:"caseInsensitive"`
	EqualTo         bool  `json:"equalTo"`
}

type PostAdminRequestsRemoveByMetadataRequestBody2StringContains struct {
	Contains string `json:"contains"`
}

type PostAdminRequestsRemoveByMetadataRequestBody3RegularExpressionMatch struct {
	Matches string `json:"matches"`
}

type PostAdminRequestsRemoveByMetadataRequestBody4NegativeRegularExpressionMatch struct {
	DoesNotMatch string `json:"doesNotMatch"`
}

type PostAdminRequestsRemoveByMetadataRequestBody5JSONEquals struct {
	EqualToJSON string `json:"equalToJson"`
}

type PostAdminRequestsRemoveByMetadataRequestBody6JSONPathMatch struct {
	IgnoreArrayOrder    *bool  `json:"ignoreArrayOrder"`
	IgnoreExtraElements *bool  `json:"ignoreExtraElements"`
	MatchesJSONPath     string `json:"matchesJsonPath"`
}

type PostAdminRequestsRemoveByMetadataRequestBody7XMLEquality struct {
	EqualToXML string `json:"equalToXml"`
}

type PostAdminRequestsRemoveByMetadataRequestBody8XPathMatch struct {
	MatchesXpath string                 `json:"matchesXpath"`
	Namespaces   map[string]interface{} `json:"namespaces"`
	ValuePattern map[string]interface{} `json:"valuePattern"`
}

type PostAdminRequestsRemoveByMetadataRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostAdminRequestsRemoveByMetadataResponse struct {
	ContentType string
	StatusCode  int64
}
