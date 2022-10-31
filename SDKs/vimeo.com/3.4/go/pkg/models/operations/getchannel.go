package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type GetChannelRequest struct {
	PathParams GetChannelPathParams
}

type GetChannelResponse struct {
	ContentType string
	StatusCode  int64
	Channel     *shared.Channel
}
