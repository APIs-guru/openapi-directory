package operations

import (
	"openapi/pkg/models/shared"
)

type APISubInformationsPathParams struct {
	SectionID string `pathParam:"style=simple,explode=false,name=sectionId"`
}

type APISubInformationsRequest struct {
	PathParams APISubInformationsPathParams
}

type APISubInformations200ApplicationJSONActionEnum string

const (
	APISubInformations200ApplicationJSONActionEnumAPISubInformations APISubInformations200ApplicationJSONActionEnum = "apiSubInformations"
)

type APISubInformations200ApplicationJSONData struct {
	AvailableVersions []shared.APIVersions    `json:"availableVersions"`
	Documentation     string                  `json:"documentation"`
	Endpoints         [][]shared.APIEndpoints `json:"endpoints"`
}

type APISubInformations200ApplicationJSONResultEnum string

const (
	APISubInformations200ApplicationJSONResultEnumSuccess APISubInformations200ApplicationJSONResultEnum = "success"
	APISubInformations200ApplicationJSONResultEnumError   APISubInformations200ApplicationJSONResultEnum = "error"
)

type APISubInformations200ApplicationJSON struct {
	Action APISubInformations200ApplicationJSONActionEnum `json:"action"`
	Data   APISubInformations200ApplicationJSONData       `json:"data"`
	Result APISubInformations200ApplicationJSONResultEnum `json:"result"`
}

type APISubInformationsResponse struct {
	ContentType                                string
	StatusCode                                 int64
	APISubInformations200ApplicationJSONObject *APISubInformations200ApplicationJSON
}
