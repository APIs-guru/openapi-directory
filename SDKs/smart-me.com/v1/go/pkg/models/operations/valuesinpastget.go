package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ValuesInPastGetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ValuesInPastGetQueryParams struct {
	Date time.Time `queryParam:"style=form,explode=true,name=date"`
}

type ValuesInPastGetRequest struct {
	PathParams  ValuesInPastGetPathParams
	QueryParams ValuesInPastGetQueryParams
}

type ValuesInPastGetResponse struct {
	ContentType string
	StatusCode  int64
	ValuesData  *shared.ValuesData
}
