package operations

type GetStatus200ApplicationJSONActionEnum string

const (
	GetStatus200ApplicationJSONActionEnumGetStatus GetStatus200ApplicationJSONActionEnum = "getStatus"
)

type GetStatus200ApplicationJSONDataGlobalEnum string

const (
	GetStatus200ApplicationJSONDataGlobalEnumOk GetStatus200ApplicationJSONDataGlobalEnum = "OK"
)

type GetStatus200ApplicationJSONData struct {
	Global *GetStatus200ApplicationJSONDataGlobalEnum `json:"global"`
}

type GetStatus200ApplicationJSONResultEnum string

const (
	GetStatus200ApplicationJSONResultEnumSuccess GetStatus200ApplicationJSONResultEnum = "success"
	GetStatus200ApplicationJSONResultEnumError   GetStatus200ApplicationJSONResultEnum = "error"
)

type GetStatus200ApplicationJSON struct {
	Action GetStatus200ApplicationJSONActionEnum `json:"action"`
	Data   GetStatus200ApplicationJSONData       `json:"data"`
	Result GetStatus200ApplicationJSONResultEnum `json:"result"`
}

type GetStatusResponse struct {
	ContentType                       string
	StatusCode                        int64
	GetStatus200ApplicationJSONObject *GetStatus200ApplicationJSON
}
