package operations

import (
	"openapi/pkg/models/shared"
)

type GetBrandingConf200ApplicationJSONActionEnum string

const (
	GetBrandingConf200ApplicationJSONActionEnumGetBrandingConf GetBrandingConf200ApplicationJSONActionEnum = "getBrandingConf"
)

type GetBrandingConf200ApplicationJSONData struct {
	Branding shared.BrandingConf `json:"branding"`
}

type GetBrandingConf200ApplicationJSONResultEnum string

const (
	GetBrandingConf200ApplicationJSONResultEnumSuccess GetBrandingConf200ApplicationJSONResultEnum = "success"
	GetBrandingConf200ApplicationJSONResultEnumError   GetBrandingConf200ApplicationJSONResultEnum = "error"
)

type GetBrandingConf200ApplicationJSON struct {
	Action GetBrandingConf200ApplicationJSONActionEnum `json:"action"`
	Data   GetBrandingConf200ApplicationJSONData       `json:"data"`
	Result GetBrandingConf200ApplicationJSONResultEnum `json:"result"`
}

type GetBrandingConfResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetBrandingConf200ApplicationJSONObject *GetBrandingConf200ApplicationJSON
}
