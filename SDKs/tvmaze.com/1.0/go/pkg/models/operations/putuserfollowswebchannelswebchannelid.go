package operations

import (
	"openapi/pkg/models/shared"
)

type PutUserFollowsWebchannelsWebchannelIDPathParams struct {
	WebchannelID int64 `pathParam:"style=simple,explode=false,name=webchannel_id"`
}

type PutUserFollowsWebchannelsWebchannelIDRequest struct {
	PathParams PutUserFollowsWebchannelsWebchannelIDPathParams
}

type PutUserFollowsWebchannelsWebchannelIDResponse struct {
	ContentType      string
	StatusCode       int64
	WebchannelFollow *shared.WebchannelFollow
}
