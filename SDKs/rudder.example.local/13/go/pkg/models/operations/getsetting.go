package operations

type GetSettingPathParams struct {
	SettingID string `pathParam:"style=simple,explode=false,name=settingId"`
}

type GetSettingRequest struct {
	PathParams GetSettingPathParams
}

type GetSetting200ApplicationJSONActionEnum string

const (
	GetSetting200ApplicationJSONActionEnumGetSetting GetSetting200ApplicationJSONActionEnum = "getSetting"
)

type GetSetting200ApplicationJSONData struct {
	SettingID *string `json:"settingId"`
}

type GetSetting200ApplicationJSONResultEnum string

const (
	GetSetting200ApplicationJSONResultEnumSuccess GetSetting200ApplicationJSONResultEnum = "success"
	GetSetting200ApplicationJSONResultEnumError   GetSetting200ApplicationJSONResultEnum = "error"
)

type GetSetting200ApplicationJSON struct {
	Action GetSetting200ApplicationJSONActionEnum `json:"action"`
	Data   GetSetting200ApplicationJSONData       `json:"data"`
	ID     string                                 `json:"id"`
	Result GetSetting200ApplicationJSONResultEnum `json:"result"`
}

type GetSettingResponse struct {
	ContentType                        string
	StatusCode                         int64
	GetSetting200ApplicationJSONObject *GetSetting200ApplicationJSON
}
