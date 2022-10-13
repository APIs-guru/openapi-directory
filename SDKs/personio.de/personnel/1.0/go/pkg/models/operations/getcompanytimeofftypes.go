package operations

import (
	"openapi/pkg/models/shared"
)

type GetCompanyTimeOffTypesQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type GetCompanyTimeOffTypesRequest struct {
	QueryParams GetCompanyTimeOffTypesQueryParams
}

type GetCompanyTimeOffTypes200ApplicationJSON struct {
	Data    []shared.TimeOffTypeResource `json:"data"`
	Success *bool                        `json:"success"`
}

type GetCompanyTimeOffTypesResponse struct {
	ContentType                                    string
	GetCompanyTimeOffTypes200ApplicationJSONObject *GetCompanyTimeOffTypes200ApplicationJSON
	StatusCode                                     int64
}
