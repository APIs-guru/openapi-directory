package operations

import (
	"openapi/pkg/models/shared"
)

type StopsStopDetailsPathParams struct {
	RouteType int32 `pathParam:"style=simple,explode=false,name=route_type"`
	StopID    int32 `pathParam:"style=simple,explode=false,name=stop_id"`
}

type StopsStopDetailsQueryParams struct {
	Devid             *string `queryParam:"style=form,explode=true,name=devid"`
	Gtfs              *bool   `queryParam:"style=form,explode=true,name=gtfs"`
	Signature         *string `queryParam:"style=form,explode=true,name=signature"`
	StopAccessibility *bool   `queryParam:"style=form,explode=true,name=stop_accessibility"`
	StopAmenities     *bool   `queryParam:"style=form,explode=true,name=stop_amenities"`
	StopContact       *bool   `queryParam:"style=form,explode=true,name=stop_contact"`
	StopDisruptions   *bool   `queryParam:"style=form,explode=true,name=stop_disruptions"`
	StopLocation      *bool   `queryParam:"style=form,explode=true,name=stop_location"`
	StopStaffing      *bool   `queryParam:"style=form,explode=true,name=stop_staffing"`
	StopTicket        *bool   `queryParam:"style=form,explode=true,name=stop_ticket"`
	Token             *string `queryParam:"style=form,explode=true,name=token"`
}

type StopsStopDetailsRequest struct {
	PathParams  StopsStopDetailsPathParams
	QueryParams StopsStopDetailsQueryParams
}

type StopsStopDetailsResponse struct {
	Body            []byte
	ContentType     string
	StatusCode      int64
	V3ErrorResponse *shared.V3ErrorResponse
	V3StopResponse  *shared.V3StopResponse
}
