package operations

type GetAdminRequestsUnmatchedNearMisses200ApplicationJSONNearMisses struct {
	AbsoluteURL *string                `json:"absoluteUrl,omitempty"`
	Body        *string                `json:"body,omitempty"`
	Cookies     map[string]interface{} `json:"cookies,omitempty"`
	Headers     map[string]interface{} `json:"headers,omitempty"`
	Method      *string                `json:"method,omitempty"`
	URL         *string                `json:"url,omitempty"`
}

type GetAdminRequestsUnmatchedNearMisses200ApplicationJSON struct {
	NearMisses []GetAdminRequestsUnmatchedNearMisses200ApplicationJSONNearMisses `json:"nearMisses,omitempty"`
}

type GetAdminRequestsUnmatchedNearMissesResponse struct {
	ContentType                                                 string
	GetAdminRequestsUnmatchedNearMisses200ApplicationJSONObject *GetAdminRequestsUnmatchedNearMisses200ApplicationJSON
	StatusCode                                                  int64
}
