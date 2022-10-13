package operations

type PostAdminRequestsFindRequestBodyBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminRequestsFindRequestBody struct {
	BasicAuthCredentials *PostAdminRequestsFindRequestBodyBasicAuthCredentials `json:"basicAuthCredentials"`
	BodyPatterns         []map[string]interface{}                              `json:"bodyPatterns"`
	Cookies              map[string]interface{}                                `json:"cookies"`
	Headers              map[string]interface{}                                `json:"headers"`
	Method               *string                                               `json:"method"`
	QueryParameters      map[string]interface{}                                `json:"queryParameters"`
	URL                  *string                                               `json:"url"`
	URLPath              *string                                               `json:"urlPath"`
	URLPathPattern       *string                                               `json:"urlPathPattern"`
	URLPattern           *string                                               `json:"urlPattern"`
}

type PostAdminRequestsFindRequest struct {
	Request PostAdminRequestsFindRequestBody `request:"mediaType=application/json"`
}

type PostAdminRequestsFindResponse struct {
	ContentType string
	StatusCode  int64
}
