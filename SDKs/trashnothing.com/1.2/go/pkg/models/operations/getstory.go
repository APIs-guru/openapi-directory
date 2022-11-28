package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoryPathParams struct {
	StoryID string `pathParam:"style=simple,explode=false,name=story_id"`
}

type GetStoryQueryParams struct {
	DevicePixelRatio *float64 `queryParam:"style=form,explode=true,name=device_pixel_ratio"`
}

type GetStorySecurity struct {
	Oauth2Implicit *shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
	Oauth2Code     *shared.SchemeOauth2Code     `security:"scheme,type=oauth2"`
	APIKey         *shared.SchemeAPIKey         `security:"scheme,type=apiKey,subtype=query"`
}

type GetStoryRequest struct {
	PathParams  GetStoryPathParams
	QueryParams GetStoryQueryParams
	Security    GetStorySecurity
}

type GetStoryResponse struct {
	ContentType string
	StatusCode  int64
	Story       *shared.Story
}
