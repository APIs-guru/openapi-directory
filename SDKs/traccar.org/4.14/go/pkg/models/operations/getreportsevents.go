package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetReportsEventsQueryParams struct {
	DeviceID []int64   `queryParam:"style=form,explode=true,name=deviceId"`
	From     time.Time `queryParam:"style=form,explode=true,name=from"`
	GroupID  []int64   `queryParam:"style=form,explode=true,name=groupId"`
	To       time.Time `queryParam:"style=form,explode=true,name=to"`
	Type     []string  `queryParam:"style=form,explode=false,name=type"`
}

type GetReportsEventsRequest struct {
	QueryParams GetReportsEventsQueryParams
}

type GetReportsEventsResponse struct {
	Body        []byte
	ContentType string
	Events      []shared.Event
	StatusCode  int64
}
