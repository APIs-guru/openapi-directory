package operations



type PostAdminRequestsFindRequestBodyBasicAuthCredentials struct {
    Password string `json:"password"`
    Username string `json:"username"`
    
}

type PostAdminRequestsFindRequestBody struct {
    BasicAuthCredentials *PostAdminRequestsFindRequestBodyBasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
    BodyPatterns []map[string]interface{} `json:"bodyPatterns,omitempty"`
    Cookies map[string]interface{} `json:"cookies,omitempty"`
    Headers map[string]interface{} `json:"headers,omitempty"`
    Method *string `json:"method,omitempty"`
    QueryParameters map[string]interface{} `json:"queryParameters,omitempty"`
    URL *string `json:"url,omitempty"`
    URLPath *string `json:"urlPath,omitempty"`
    URLPathPattern *string `json:"urlPathPattern,omitempty"`
    URLPattern *string `json:"urlPattern,omitempty"`
    
}

type PostAdminRequestsFindRequest struct {
    Request PostAdminRequestsFindRequestBody `request:"mediaType=application/json"`
    
}

type PostAdminRequestsFindResponse struct {
    ContentType string 
    StatusCode int64 
    
}

