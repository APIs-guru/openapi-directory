package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBRandingConfRequest struct {
	Request shared.BrandingConf `request:"mediaType=application/json"`
}

type UpdateBRandingConf200ApplicationJSONActionEnum string

const (
	UpdateBRandingConf200ApplicationJSONActionEnumUpdateBRandingConf UpdateBRandingConf200ApplicationJSONActionEnum = "updateBRandingConf"
)

type UpdateBRandingConf200ApplicationJSONData struct {
	Branding shared.BrandingConf `json:"branding"`
}

type UpdateBRandingConf200ApplicationJSONResultEnum string

const (
	UpdateBRandingConf200ApplicationJSONResultEnumSuccess UpdateBRandingConf200ApplicationJSONResultEnum = "success"
	UpdateBRandingConf200ApplicationJSONResultEnumError   UpdateBRandingConf200ApplicationJSONResultEnum = "error"
)

type UpdateBRandingConf200ApplicationJSON struct {
	Action UpdateBRandingConf200ApplicationJSONActionEnum `json:"action"`
	Data   UpdateBRandingConf200ApplicationJSONData       `json:"data"`
	Result UpdateBRandingConf200ApplicationJSONResultEnum `json:"result"`
}

type UpdateBRandingConfResponse struct {
	ContentType                                string
	StatusCode                                 int64
	UpdateBRandingConf200ApplicationJSONObject *UpdateBRandingConf200ApplicationJSON
}
