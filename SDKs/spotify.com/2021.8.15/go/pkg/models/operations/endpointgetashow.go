package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetAShowPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type EndpointGetAShowQueryParams struct {
	Market *string `queryParam:"style=form,explode=true,name=market"`
}

type EndpointGetAShowHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetAShowSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetAShowRequest struct {
	PathParams  EndpointGetAShowPathParams
	QueryParams EndpointGetAShowQueryParams
	Headers     EndpointGetAShowHeaders
	Security    EndpointGetAShowSecurity
}

type EndpointGetAShowResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	ShowObject          *shared.ShowObject
	StatusCode          int64
}
