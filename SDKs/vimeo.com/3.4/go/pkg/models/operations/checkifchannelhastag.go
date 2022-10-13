package operations

import (
	"openapi/pkg/models/shared"
)

type CheckIfChannelHasTagPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	Word      string  `pathParam:"style=simple,explode=false,name=word"`
}

type CheckIfChannelHasTagRequest struct {
	PathParams CheckIfChannelHasTagPathParams
}

type CheckIfChannelHasTagResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	LegacyError *shared.LegacyError
}
