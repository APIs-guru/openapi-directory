package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetRecentlyPlayedQueryParams struct {
	After  *int32 `queryParam:"style=form,explode=true,name=after"`
	Before *int32 `queryParam:"style=form,explode=true,name=before"`
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
}

type EndpointGetRecentlyPlayedHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointGetRecentlyPlayedSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetRecentlyPlayedRequest struct {
	QueryParams EndpointGetRecentlyPlayedQueryParams
	Headers     EndpointGetRecentlyPlayedHeaders
	Security    EndpointGetRecentlyPlayedSecurity
}

type EndpointGetRecentlyPlayed200ApplicationJSON struct {
	Cursors *shared.CursorObject       `json:"cursors,omitempty"`
	Href    *string                    `json:"href,omitempty"`
	Items   []shared.PlayHistoryObject `json:"items,omitempty"`
	Limit   *int32                     `json:"limit,omitempty"`
	Next    *string                    `json:"next,omitempty"`
	Total   *int32                     `json:"total,omitempty"`
}

type EndpointGetRecentlyPlayedResponse struct {
	ContentType                                       string
	ErrorResponseObject                               *shared.ErrorResponseObject
	StatusCode                                        int64
	EndpointGetRecentlyPlayed200ApplicationJSONObject *EndpointGetRecentlyPlayed200ApplicationJSON
}
