package operations



type PostAdminRequestsCountRequestBodyBasicAuthCredentials struct {
    Password string `json:"password"`
    Username string `json:"username"`
    
}

type PostAdminRequestsCountRequestBody struct {
    BasicAuthCredentials *PostAdminRequestsCountRequestBodyBasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
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

type PostAdminRequestsCountRequest struct {
    Request PostAdminRequestsCountRequestBody `request:"mediaType=application/json"`
    
}

type PostAdminRequestsCount200ApplicationJSON struct {
    Count *int64 `json:"count,omitempty"`
    
}

type PostAdminRequestsCountResponse struct {
    ContentType string 
    PostAdminRequestsCount200ApplicationJSONObject *PostAdminRequestsCount200ApplicationJSON 
    StatusCode int64 
    
}

