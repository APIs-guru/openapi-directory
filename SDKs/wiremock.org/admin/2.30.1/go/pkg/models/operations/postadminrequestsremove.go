package operations

type PostAdminRequestsRemoveRequestBodyBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminRequestsRemoveRequestBody struct {
	BasicAuthCredentials *PostAdminRequestsRemoveRequestBodyBasicAuthCredentials `json:"basicAuthCredentials"`
	BodyPatterns         []map[string]interface{}                                `json:"bodyPatterns"`
	Cookies              map[string]interface{}                                  `json:"cookies"`
	Headers              map[string]interface{}                                  `json:"headers"`
	Method               *string                                                 `json:"method"`
	QueryParameters      map[string]interface{}                                  `json:"queryParameters"`
	URL                  *string                                                 `json:"url"`
	URLPath              *string                                                 `json:"urlPath"`
	URLPathPattern       *string                                                 `json:"urlPathPattern"`
	URLPattern           *string                                                 `json:"urlPattern"`
}

type PostAdminRequestsRemoveRequest struct {
	Request PostAdminRequestsRemoveRequestBody `request:"mediaType=application/json"`
}

type PostAdminRequestsRemoveResponse struct {
	ContentType string
	StatusCode  int64
}
