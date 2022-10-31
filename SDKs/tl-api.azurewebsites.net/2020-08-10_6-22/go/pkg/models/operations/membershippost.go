package operations

import (
	"openapi/pkg/models/shared"
)

type MembershipPostRequest struct {
	Request shared.MemberDto `request:"mediaType=application/json"`
}

type MembershipPostResponse struct {
	ContentType                             string
	MembershipPost200ApplicationJSONBoolean *bool
	ProblemDetails                          *shared.ProblemDetails
	StatusCode                              int64
}
