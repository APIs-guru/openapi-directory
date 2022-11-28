package operations

type PostAdminNearMissesRequestRequestBody struct {
	AbsoluteURL *string                `json:"absoluteUrl,omitempty"`
	Body        *string                `json:"body,omitempty"`
	Cookies     map[string]interface{} `json:"cookies,omitempty"`
	Headers     map[string]interface{} `json:"headers,omitempty"`
	Method      *string                `json:"method,omitempty"`
	URL         *string                `json:"url,omitempty"`
}

type PostAdminNearMissesRequest200ApplicationJSONNearMisses struct {
	AbsoluteURL *string                `json:"absoluteUrl,omitempty"`
	Body        *string                `json:"body,omitempty"`
	Cookies     map[string]interface{} `json:"cookies,omitempty"`
	Headers     map[string]interface{} `json:"headers,omitempty"`
	Method      *string                `json:"method,omitempty"`
	URL         *string                `json:"url,omitempty"`
}

type PostAdminNearMissesRequest200ApplicationJSON struct {
	NearMisses []PostAdminNearMissesRequest200ApplicationJSONNearMisses `json:"nearMisses,omitempty"`
}

type PostAdminNearMissesRequestRequest struct {
	Request PostAdminNearMissesRequestRequestBody `request:"mediaType=application/json"`
}

type PostAdminNearMissesRequestResponse struct {
	ContentType                                        string
	PostAdminNearMissesRequest200ApplicationJSONObject *PostAdminNearMissesRequest200ApplicationJSON
	StatusCode                                         int64
}
