package operations

import (
	"openapi/pkg/models/shared"
)

type AddChannelCategoriesPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type AddChannelCategoriesRequestBody struct {
	Channels []string `json:"channels"`
}

type AddChannelCategoriesRequest struct {
	PathParams AddChannelCategoriesPathParams
	Request    AddChannelCategoriesRequestBody `request:"mediaType=application/json"`
}

type AddChannelCategoriesResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	LegacyError *shared.LegacyError
}
