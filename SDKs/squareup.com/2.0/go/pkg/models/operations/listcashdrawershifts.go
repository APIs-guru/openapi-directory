package operations

import (
	"openapi/pkg/models/shared"
)

type ListCashDrawerShiftsQueryParams struct {
	BeginTime  *string `queryParam:"style=form,explode=true,name=begin_time"`
	Cursor     *string `queryParam:"style=form,explode=true,name=cursor"`
	EndTime    *string `queryParam:"style=form,explode=true,name=end_time"`
	Limit      *int64  `queryParam:"style=form,explode=true,name=limit"`
	LocationID string  `queryParam:"style=form,explode=true,name=location_id"`
	SortOrder  *string `queryParam:"style=form,explode=true,name=sort_order"`
}

type ListCashDrawerShiftsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ListCashDrawerShiftsRequest struct {
	QueryParams ListCashDrawerShiftsQueryParams
	Security    ListCashDrawerShiftsSecurity
}

type ListCashDrawerShiftsResponse struct {
	ContentType                  string
	ListCashDrawerShiftsResponse *shared.ListCashDrawerShiftsResponse
	StatusCode                   int64
}
