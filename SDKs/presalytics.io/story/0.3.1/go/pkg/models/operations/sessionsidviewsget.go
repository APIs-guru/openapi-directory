package operations

import (
	"openapi/pkg/models/shared"
)

type SessionsIDViewsGetPathParams struct {
	SessionID string `pathParam:"style=simple,explode=false,name=session_id"`
}

type SessionsIDViewsGetRequest struct {
	PathParams SessionsIDViewsGetPathParams
}

type SessionsIDViewsGetResponse struct {
	ContentType   string
	StatusCode    int64
	ProblemDetail *interface{}
	Views         []shared.View
}
