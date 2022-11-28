package operations

// PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials
// Pre-emptive basic auth credentials to match against
type PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminNearMissesRequestPatternRequestBody struct {
	BasicAuthCredentials *PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
	BodyPatterns         []map[string]interface{}                                          `json:"bodyPatterns,omitempty"`
	Cookies              map[string]interface{}                                            `json:"cookies,omitempty"`
	Headers              map[string]interface{}                                            `json:"headers,omitempty"`
	Method               *string                                                           `json:"method,omitempty"`
	QueryParameters      map[string]interface{}                                            `json:"queryParameters,omitempty"`
	URL                  *string                                                           `json:"url,omitempty"`
	URLPath              *string                                                           `json:"urlPath,omitempty"`
	URLPathPattern       *string                                                           `json:"urlPathPattern,omitempty"`
	URLPattern           *string                                                           `json:"urlPattern,omitempty"`
}

type PostAdminNearMissesRequestPattern200ApplicationJSONNearMisses struct {
	AbsoluteURL *string                `json:"absoluteUrl,omitempty"`
	Body        *string                `json:"body,omitempty"`
	Cookies     map[string]interface{} `json:"cookies,omitempty"`
	Headers     map[string]interface{} `json:"headers,omitempty"`
	Method      *string                `json:"method,omitempty"`
	URL         *string                `json:"url,omitempty"`
}

type PostAdminNearMissesRequestPattern200ApplicationJSON struct {
	NearMisses []PostAdminNearMissesRequestPattern200ApplicationJSONNearMisses `json:"nearMisses,omitempty"`
}

type PostAdminNearMissesRequestPatternRequest struct {
	Request PostAdminNearMissesRequestPatternRequestBody `request:"mediaType=application/json"`
}

type PostAdminNearMissesRequestPatternResponse struct {
	ContentType                                               string
	PostAdminNearMissesRequestPattern200ApplicationJSONObject *PostAdminNearMissesRequestPattern200ApplicationJSON
	StatusCode                                                int64
}
