package operations

import (
	"openapi/pkg/models/shared"
)

type ListApplicationsQueryParams struct {
	Cursor    *string  `queryParam:"style=form,explode=true,name=cursor"`
	EndTime   *float64 `queryParam:"style=form,explode=true,name=end_time"`
	Size      *float64 `queryParam:"style=form,explode=true,name=size"`
	StartTime *float64 `queryParam:"style=form,explode=true,name=start_time"`
}

type ListApplicationsSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type ListApplicationsRequest struct {
	QueryParams ListApplicationsQueryParams
	Security    ListApplicationsSecurity
}

type ListApplicationsResponse struct {
	ContentType       string
	PagedListResponse *shared.PagedListResponse
	StatusCode        int64
}
