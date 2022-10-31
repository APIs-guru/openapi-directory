package operations

import (
	"openapi/pkg/models/shared"
)

type ListDatacentersQueryParams struct {
	Cursor    *string  `queryParam:"style=form,explode=true,name=cursor"`
	EndTime   *float64 `queryParam:"style=form,explode=true,name=end_time"`
	Size      *float64 `queryParam:"style=form,explode=true,name=size"`
	StartTime *float64 `queryParam:"style=form,explode=true,name=start_time"`
}

type ListDatacentersSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type ListDatacentersRequest struct {
	QueryParams ListDatacentersQueryParams
	Security    ListDatacentersSecurity
}

type ListDatacentersResponse struct {
	APIError                  *shared.APIError
	ContentType               string
	PagedListResponseWithTime *shared.PagedListResponseWithTime
	StatusCode                int64
}
