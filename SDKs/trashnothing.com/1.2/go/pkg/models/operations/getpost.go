package operations

import (
	"openapi/pkg/models/shared"
)

type GetPostPathParams struct {
	PostID string `pathParam:"style=simple,explode=false,name=post_id"`
}

type GetPostSecurity struct {
	Oauth2Implicit *shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
	Oauth2Code     *shared.SchemeOauth2Code     `security:"scheme,type=oauth2"`
	APIKey         *shared.SchemeAPIKey         `security:"scheme,type=apiKey,subtype=query"`
}

type GetPostRequest struct {
	PathParams GetPostPathParams
	Security   GetPostSecurity
}

type GetPostResponse struct {
	ContentType string
	Post        *shared.Post
	StatusCode  int64
}
