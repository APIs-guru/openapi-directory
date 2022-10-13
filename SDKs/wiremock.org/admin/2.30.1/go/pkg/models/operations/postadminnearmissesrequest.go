package operations

type PostAdminNearMissesRequestRequestBody struct {
	AbsoluteURL *string                `json:"absoluteUrl"`
	Body        *string                `json:"body"`
	Cookies     map[string]interface{} `json:"cookies"`
	Headers     map[string]interface{} `json:"headers"`
	Method      *string                `json:"method"`
	URL         *string                `json:"url"`
}

type PostAdminNearMissesRequestRequest struct {
	Request PostAdminNearMissesRequestRequestBody `request:"mediaType=application/json"`
}

type PostAdminNearMissesRequest200ApplicationJSONNearMisses struct {
	AbsoluteURL *string                `json:"absoluteUrl"`
	Body        *string                `json:"body"`
	Cookies     map[string]interface{} `json:"cookies"`
	Headers     map[string]interface{} `json:"headers"`
	Method      *string                `json:"method"`
	URL         *string                `json:"url"`
}

type PostAdminNearMissesRequest200ApplicationJSON struct {
	NearMisses []PostAdminNearMissesRequest200ApplicationJSONNearMisses `json:"nearMisses"`
}

type PostAdminNearMissesRequestResponse struct {
	ContentType                                        string
	PostAdminNearMissesRequest200ApplicationJSONObject *PostAdminNearMissesRequest200ApplicationJSON
	StatusCode                                         int64
}
