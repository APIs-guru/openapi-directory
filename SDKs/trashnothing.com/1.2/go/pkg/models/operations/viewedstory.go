package operations

import (
	"openapi/pkg/models/shared"
)

type ViewedStoryPathParams struct {
	StoryID string `pathParam:"style=simple,explode=false,name=story_id"`
}

type ViewedStorySecurity struct {
	Oauth2Implicit *shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
	Oauth2Code     *shared.SchemeOauth2Code     `security:"scheme,type=oauth2"`
	APIKey         *shared.SchemeAPIKey         `security:"scheme,type=apiKey,subtype=query"`
}

type ViewedStoryRequest struct {
	PathParams ViewedStoryPathParams
	Security   ViewedStorySecurity
}

type ViewedStoryResponse struct {
	ContentType string
	StatusCode  int64
}
