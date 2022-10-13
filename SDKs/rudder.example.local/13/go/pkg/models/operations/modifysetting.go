package operations

type ModifySettingPathParams struct {
	SettingID string `pathParam:"style=simple,explode=false,name=settingId"`
}

type ModifySettingRequestBody struct {
	Value *string `json:"value"`
}

type ModifySettingRequest struct {
	PathParams ModifySettingPathParams
	Request    ModifySettingRequestBody `request:"mediaType=application/json"`
}

type ModifySetting200ApplicationJSONActionEnum string

const (
	ModifySetting200ApplicationJSONActionEnumModifySetting ModifySetting200ApplicationJSONActionEnum = "modifySetting"
)

type ModifySetting200ApplicationJSONData struct {
	SettingID *string `json:"settingId"`
}

type ModifySetting200ApplicationJSONResultEnum string

const (
	ModifySetting200ApplicationJSONResultEnumSuccess ModifySetting200ApplicationJSONResultEnum = "success"
	ModifySetting200ApplicationJSONResultEnumError   ModifySetting200ApplicationJSONResultEnum = "error"
)

type ModifySetting200ApplicationJSON struct {
	Action ModifySetting200ApplicationJSONActionEnum `json:"action"`
	Data   ModifySetting200ApplicationJSONData       `json:"data"`
	ID     string                                    `json:"id"`
	Result ModifySetting200ApplicationJSONResultEnum `json:"result"`
}

type ModifySettingResponse struct {
	ContentType                           string
	StatusCode                            int64
	ModifySetting200ApplicationJSONObject *ModifySetting200ApplicationJSON
}
