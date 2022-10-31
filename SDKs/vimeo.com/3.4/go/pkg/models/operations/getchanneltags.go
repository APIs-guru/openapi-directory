package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelTagsPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type GetChannelTagsRequest struct {
	PathParams GetChannelTagsPathParams
}

type GetChannelTagsResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Tags        []shared.Tag
}
