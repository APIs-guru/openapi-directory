package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteChannelCategoryPathParams struct {
	Category  string  `pathParam:"style=simple,explode=false,name=category"`
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type DeleteChannelCategorySecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteChannelCategoryRequest struct {
	PathParams DeleteChannelCategoryPathParams
	Security   DeleteChannelCategorySecurity
}

type DeleteChannelCategoryResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	LegacyError *shared.LegacyError
}
