package operations

import (
	"openapi/pkg/models/shared"
)

type CheckIfUserSubscribedToChannelPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	UserID    float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type CheckIfUserSubscribedToChannelRequest struct {
	PathParams CheckIfUserSubscribedToChannelPathParams
}

type CheckIfUserSubscribedToChannelResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
