package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAPIPostsSpeakerAndDeputiesForDatePathParams struct {
	ForDate time.Time `pathParam:"style=simple,explode=false,name=forDate"`
}

type GetAPIPostsSpeakerAndDeputiesForDateRequest struct {
	PathParams GetAPIPostsSpeakerAndDeputiesForDatePathParams
}

type GetAPIPostsSpeakerAndDeputiesForDateResponse struct {
	Body        []byte
	ContentType string
	MemberItems []shared.MemberItem
	StatusCode  int64
}
