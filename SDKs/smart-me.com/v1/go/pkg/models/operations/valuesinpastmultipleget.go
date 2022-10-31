package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ValuesInPastMultipleGetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ValuesInPastMultipleGetQueryParams struct {
	EndDate   time.Time `queryParam:"style=form,explode=true,name=endDate"`
	Interval  int32     `queryParam:"style=form,explode=true,name=interval"`
	StartDate time.Time `queryParam:"style=form,explode=true,name=startDate"`
}

type ValuesInPastMultipleGetRequest struct {
	PathParams  ValuesInPastMultipleGetPathParams
	QueryParams ValuesInPastMultipleGetQueryParams
}

type ValuesInPastMultipleGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	ValuesData  []shared.ValuesData
}
