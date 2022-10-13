package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserFollowsWebchannelsWebchannelIDPathParams struct {
	WebchannelID int64 `pathParam:"style=simple,explode=false,name=webchannel_id"`
}

type GetUserFollowsWebchannelsWebchannelIDRequest struct {
	PathParams GetUserFollowsWebchannelsWebchannelIDPathParams
}

type GetUserFollowsWebchannelsWebchannelIDResponse struct {
	ContentType      string
	StatusCode       int64
	WebchannelFollow *shared.WebchannelFollow
}
