package operations

import (
	"openapi/pkg/models/shared"
)

type StatusGetQueryParams struct {
	MessageID *string `queryParam:"style=form,explode=true,name=messageId"`
}

type StatusGetRequest struct {
	QueryParams StatusGetQueryParams
}

type StatusGetResponse struct {
	ContentType    string
	MessageStatus  *shared.MessageStatus
	ProblemDetails *shared.ProblemDetails
	StatusCode     int64
}
