package operations

type GetAdminRequestsUnmatchedNearMisses200ApplicationJSONNearMisses struct {
	AbsoluteURL *string                `json:"absoluteUrl"`
	Body        *string                `json:"body"`
	Cookies     map[string]interface{} `json:"cookies"`
	Headers     map[string]interface{} `json:"headers"`
	Method      *string                `json:"method"`
	URL         *string                `json:"url"`
}

type GetAdminRequestsUnmatchedNearMisses200ApplicationJSON struct {
	NearMisses []GetAdminRequestsUnmatchedNearMisses200ApplicationJSONNearMisses `json:"nearMisses"`
}

type GetAdminRequestsUnmatchedNearMissesResponse struct {
	ContentType                                                 string
	GetAdminRequestsUnmatchedNearMisses200ApplicationJSONObject *GetAdminRequestsUnmatchedNearMisses200ApplicationJSON
	StatusCode                                                  int64
}
