package operations

type PostAdminRequestsCountRequestBodyBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminRequestsCountRequestBody struct {
	BasicAuthCredentials *PostAdminRequestsCountRequestBodyBasicAuthCredentials `json:"basicAuthCredentials"`
	BodyPatterns         []map[string]interface{}                               `json:"bodyPatterns"`
	Cookies              map[string]interface{}                                 `json:"cookies"`
	Headers              map[string]interface{}                                 `json:"headers"`
	Method               *string                                                `json:"method"`
	QueryParameters      map[string]interface{}                                 `json:"queryParameters"`
	URL                  *string                                                `json:"url"`
	URLPath              *string                                                `json:"urlPath"`
	URLPathPattern       *string                                                `json:"urlPathPattern"`
	URLPattern           *string                                                `json:"urlPattern"`
}

type PostAdminRequestsCountRequest struct {
	Request PostAdminRequestsCountRequestBody `request:"mediaType=application/json"`
}

type PostAdminRequestsCount200ApplicationJSON struct {
	Count *int64 `json:"count"`
}

type PostAdminRequestsCountResponse struct {
	ContentType                                    string
	PostAdminRequestsCount200ApplicationJSONObject *PostAdminRequestsCount200ApplicationJSON
	StatusCode                                     int64
}
