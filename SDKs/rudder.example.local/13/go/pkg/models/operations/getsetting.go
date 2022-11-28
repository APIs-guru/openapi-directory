package operations

type GetSettingPathParams struct {
	SettingID string `pathParam:"style=simple,explode=false,name=settingId"`
}

type GetSetting200ApplicationJSONActionEnum string

const (
	GetSetting200ApplicationJSONActionEnumGetSetting GetSetting200ApplicationJSONActionEnum = "getSetting"
)

// GetSetting200ApplicationJSONData
// Information about the setting
type GetSetting200ApplicationJSONData struct {
	SettingID *string `json:"settingId,omitempty"`
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

type GetSettingRequest struct {
	PathParams GetSettingPathParams
}

type GetSettingResponse struct {
	ContentType                        string
	StatusCode                         int64
	GetSetting200ApplicationJSONObject *GetSetting200ApplicationJSON
}
