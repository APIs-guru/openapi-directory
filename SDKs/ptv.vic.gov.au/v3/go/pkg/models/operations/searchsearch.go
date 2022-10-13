package operations

import (
	"openapi/pkg/models/shared"
)

type SearchSearchPathParams struct {
	SearchTerm string `pathParam:"style=simple,explode=false,name=search_term"`
}

type SearchSearchQueryParams struct {
	Devid                 *string  `queryParam:"style=form,explode=true,name=devid"`
	IncludeAddresses      *bool    `queryParam:"style=form,explode=true,name=include_addresses"`
	IncludeOutlets        *bool    `queryParam:"style=form,explode=true,name=include_outlets"`
	Latitude              *float32 `queryParam:"style=form,explode=true,name=latitude"`
	Longitude             *float32 `queryParam:"style=form,explode=true,name=longitude"`
	MatchRouteBySuburb    *bool    `queryParam:"style=form,explode=true,name=match_route_by_suburb"`
	MatchStopByGtfsStopID *bool    `queryParam:"style=form,explode=true,name=match_stop_by_gtfs_stop_id"`
	MatchStopBySuburb     *bool    `queryParam:"style=form,explode=true,name=match_stop_by_suburb"`
	MaxDistance           *float32 `queryParam:"style=form,explode=true,name=max_distance"`
	RouteTypes            []int32  `queryParam:"style=form,explode=true,name=route_types"`
	Signature             *string  `queryParam:"style=form,explode=true,name=signature"`
	Token                 *string  `queryParam:"style=form,explode=true,name=token"`
}

type SearchSearchRequest struct {
	PathParams  SearchSearchPathParams
	QueryParams SearchSearchQueryParams
}

type SearchSearchResponse struct {
	Body            []byte
	ContentType     string
	StatusCode      int64
	V3ErrorResponse *shared.V3ErrorResponse
	V3SearchResult  *shared.V3SearchResult
}
