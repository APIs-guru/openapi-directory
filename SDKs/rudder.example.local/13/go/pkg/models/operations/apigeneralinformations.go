package operations

import (
	"openapi/pkg/models/shared"
)

type APIGeneralInformations200ApplicationJSONActionEnum string

const (
	APIGeneralInformations200ApplicationJSONActionEnumAPIGeneralInformations APIGeneralInformations200ApplicationJSONActionEnum = "apiGeneralInformations"
)

type APIGeneralInformations200ApplicationJSONData struct {
	AvailableVersions []shared.APIVersions    `json:"availableVersions"`
	Documentation     string                  `json:"documentation"`
	Endpoints         [][]shared.APIEndpoints `json:"endpoints"`
}

type APIGeneralInformations200ApplicationJSONResultEnum string

const (
	APIGeneralInformations200ApplicationJSONResultEnumSuccess APIGeneralInformations200ApplicationJSONResultEnum = "success"
	APIGeneralInformations200ApplicationJSONResultEnumError   APIGeneralInformations200ApplicationJSONResultEnum = "error"
)

type APIGeneralInformations200ApplicationJSON struct {
	Action APIGeneralInformations200ApplicationJSONActionEnum `json:"action"`
	Data   APIGeneralInformations200ApplicationJSONData       `json:"data"`
	Result APIGeneralInformations200ApplicationJSONResultEnum `json:"result"`
}

type APIGeneralInformationsResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	APIGeneralInformations200ApplicationJSONObject *APIGeneralInformations200ApplicationJSON
}
