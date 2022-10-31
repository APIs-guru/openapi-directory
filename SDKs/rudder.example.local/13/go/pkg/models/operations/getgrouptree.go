package operations

type GetGroupTree200ApplicationJSONActionEnum string

const (
	GetGroupTree200ApplicationJSONActionEnumGetGroupTree GetGroupTree200ApplicationJSONActionEnum = "GetGroupTree"
)

type GetGroupTree200ApplicationJSONData struct {
	GroupCategories map[string]interface{} `json:"groupCategories"`
}

type GetGroupTree200ApplicationJSONResultEnum string

const (
	GetGroupTree200ApplicationJSONResultEnumSuccess GetGroupTree200ApplicationJSONResultEnum = "success"
	GetGroupTree200ApplicationJSONResultEnumError   GetGroupTree200ApplicationJSONResultEnum = "error"
)

type GetGroupTree200ApplicationJSON struct {
	Action GetGroupTree200ApplicationJSONActionEnum `json:"action"`
	Data   GetGroupTree200ApplicationJSONData       `json:"data"`
	Result GetGroupTree200ApplicationJSONResultEnum `json:"result"`
}

type GetGroupTreeResponse struct {
	ContentType                          string
	GetGroupTree200ApplicationJSONObject *GetGroupTree200ApplicationJSON
	StatusCode                           int64
}
