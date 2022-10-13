package operations

type PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminNearMissesRequestPatternRequestBody struct {
	BasicAuthCredentials *PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials `json:"basicAuthCredentials"`
	BodyPatterns         []map[string]interface{}                                          `json:"bodyPatterns"`
	Cookies              map[string]interface{}                                            `json:"cookies"`
	Headers              map[string]interface{}                                            `json:"headers"`
	Method               *string                                                           `json:"method"`
	QueryParameters      map[string]interface{}                                            `json:"queryParameters"`
	URL                  *string                                                           `json:"url"`
	URLPath              *string                                                           `json:"urlPath"`
	URLPathPattern       *string                                                           `json:"urlPathPattern"`
	URLPattern           *string                                                           `json:"urlPattern"`
}

type PostAdminNearMissesRequestPatternRequest struct {
	Request PostAdminNearMissesRequestPatternRequestBody `request:"mediaType=application/json"`
}

type PostAdminNearMissesRequestPattern200ApplicationJSONNearMisses struct {
	AbsoluteURL *string                `json:"absoluteUrl"`
	Body        *string                `json:"body"`
	Cookies     map[string]interface{} `json:"cookies"`
	Headers     map[string]interface{} `json:"headers"`
	Method      *string                `json:"method"`
	URL         *string                `json:"url"`
}

type PostAdminNearMissesRequestPattern200ApplicationJSON struct {
	NearMisses []PostAdminNearMissesRequestPattern200ApplicationJSONNearMisses `json:"nearMisses"`
}

type PostAdminNearMissesRequestPatternResponse struct {
	ContentType                                               string
	PostAdminNearMissesRequestPattern200ApplicationJSONObject *PostAdminNearMissesRequestPattern200ApplicationJSON
	StatusCode                                                int64
}
