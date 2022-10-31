package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventsEventIDOverviewPathParams struct {
	EventID string `pathParam:"style=simple,explode=false,name=eventId"`
}

type GetEventsEventIDOverviewRequest struct {
	PathParams GetEventsEventIDOverviewPathParams
}

type GetEventsEventIDOverviewResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	OverviewEvent        *shared.OverviewEvent
	StatusCode           int64
}
