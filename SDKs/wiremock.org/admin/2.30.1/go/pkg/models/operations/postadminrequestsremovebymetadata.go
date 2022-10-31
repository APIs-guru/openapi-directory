package operations



type PostAdminRequestsRemoveByMetadataRequestBodyStringEquals struct {
    CaseInsensitive *bool `json:"caseInsensitive,omitempty"`
    EqualTo bool `json:"equalTo"`
    
}

type PostAdminRequestsRemoveByMetadataRequestBodyStringContains struct {
    Contains string `json:"contains"`
    
}

type PostAdminRequestsRemoveByMetadataRequestBodyRegularExpressionMatch struct {
    Matches string `json:"matches"`
    
}

type PostAdminRequestsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch struct {
    DoesNotMatch string `json:"doesNotMatch"`
    
}

type PostAdminRequestsRemoveByMetadataRequestBodyJSONEquals struct {
    EqualToJSON string `json:"equalToJson"`
    
}

type PostAdminRequestsRemoveByMetadataRequestBodyJSONPathMatch struct {
    IgnoreArrayOrder *bool `json:"ignoreArrayOrder,omitempty"`
    IgnoreExtraElements *bool `json:"ignoreExtraElements,omitempty"`
    MatchesJSONPath string `json:"matchesJsonPath"`
    
}

type PostAdminRequestsRemoveByMetadataRequestBodyXMLEquality struct {
    EqualToXML string `json:"equalToXml"`
    
}

type PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch struct {
    MatchesXpath string `json:"matchesXpath"`
    Namespaces map[string]interface{} `json:"namespaces,omitempty"`
    ValuePattern map[string]interface{} `json:"valuePattern,omitempty"`
    
}

type PostAdminRequestsRemoveByMetadataRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostAdminRequestsRemoveByMetadataResponse struct {
    ContentType string 
    StatusCode int64 
    
}

