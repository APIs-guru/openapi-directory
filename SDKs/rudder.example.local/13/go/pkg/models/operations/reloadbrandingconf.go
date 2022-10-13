package operations

import (
	"openapi/pkg/models/shared"
)

type ReloadBrandingConf200ApplicationJSONActionEnum string

const (
	ReloadBrandingConf200ApplicationJSONActionEnumGetBrandingConf ReloadBrandingConf200ApplicationJSONActionEnum = "getBrandingConf"
)

type ReloadBrandingConf200ApplicationJSONData struct {
	Branding shared.BrandingConf `json:"branding"`
}

type ReloadBrandingConf200ApplicationJSONResultEnum string

const (
	ReloadBrandingConf200ApplicationJSONResultEnumSuccess ReloadBrandingConf200ApplicationJSONResultEnum = "success"
	ReloadBrandingConf200ApplicationJSONResultEnumError   ReloadBrandingConf200ApplicationJSONResultEnum = "error"
)

type ReloadBrandingConf200ApplicationJSON struct {
	Action ReloadBrandingConf200ApplicationJSONActionEnum `json:"action"`
	Data   ReloadBrandingConf200ApplicationJSONData       `json:"data"`
	Result ReloadBrandingConf200ApplicationJSONResultEnum `json:"result"`
}

type ReloadBrandingConfResponse struct {
	ContentType                                string
	StatusCode                                 int64
	ReloadBrandingConf200ApplicationJSONObject *ReloadBrandingConf200ApplicationJSON
}
