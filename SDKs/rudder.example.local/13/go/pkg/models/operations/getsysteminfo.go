package operations

type GetSystemInfo200ApplicationJSONActionEnum string

const (
	GetSystemInfo200ApplicationJSONActionEnumGetSystemInfo GetSystemInfo200ApplicationJSONActionEnum = "getSystemInfo"
)

// GetSystemInfo200ApplicationJSONData
// Information about the service
type GetSystemInfo200ApplicationJSONData struct {
	Rudder interface{} `json:"rudder"`
}

type GetSystemInfo200ApplicationJSONResultEnum string

const (
	GetSystemInfo200ApplicationJSONResultEnumSuccess GetSystemInfo200ApplicationJSONResultEnum = "success"
	GetSystemInfo200ApplicationJSONResultEnumError   GetSystemInfo200ApplicationJSONResultEnum = "error"
)

type GetSystemInfo200ApplicationJSON struct {
	Action GetSystemInfo200ApplicationJSONActionEnum `json:"action"`
	Data   GetSystemInfo200ApplicationJSONData       `json:"data"`
	Result GetSystemInfo200ApplicationJSONResultEnum `json:"result"`
}

type GetSystemInfoResponse struct {
	ContentType                           string
	StatusCode                            int64
	GetSystemInfo200ApplicationJSONObject *GetSystemInfo200ApplicationJSON
}
