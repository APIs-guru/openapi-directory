package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelCategoriesPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type GetChannelCategoriesRequest struct {
	PathParams GetChannelCategoriesPathParams
}

type GetChannelCategoriesResponse struct {
	ContentType string
	StatusCode  int64
	Categories  []shared.Category
	LegacyError *shared.LegacyError
}
