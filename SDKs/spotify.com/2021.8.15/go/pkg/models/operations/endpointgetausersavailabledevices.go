package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetAUsersAvailableDevicesHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetAUsersAvailableDevicesSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetAUsersAvailableDevicesRequest struct {
	Headers  EndpointGetAUsersAvailableDevicesHeaders
	Security EndpointGetAUsersAvailableDevicesSecurity
}

type EndpointGetAUsersAvailableDevicesResponse struct {
	ContentType         string
	DevicesObject       *shared.DevicesObject
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
