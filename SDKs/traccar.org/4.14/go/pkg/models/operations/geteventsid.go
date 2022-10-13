package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetEventsIDRequest struct {
	PathParams GetEventsIDPathParams
}

type GetEventsIDResponse struct {
	ContentType string
	Event       *shared.Event
	StatusCode  int64
}
