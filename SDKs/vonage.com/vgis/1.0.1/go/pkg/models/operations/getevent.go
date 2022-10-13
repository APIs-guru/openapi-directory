package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEventRequest struct {
	PathParams GetEventPathParams
}

type GetEventResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Events        []shared.Event
	StatusCode    int64
}
