package operations

import (
	"openapi/pkg/models/shared"
)

type GetPostPathParams struct {
	PostID string `pathParam:"style=simple,explode=false,name=post_id"`
}

type GetPostSecurityOption1 struct {
	Oauth2Implicit shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
}

type GetPostSecurityOption2 struct {
	Oauth2Code shared.SchemeOauth2Code `security:"scheme,type=oauth2"`
}

type GetPostSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetPostSecurity struct {
	Option1 *GetPostSecurityOption1 `security:"option"`
	Option2 *GetPostSecurityOption2 `security:"option"`
	Option3 *GetPostSecurityOption3 `security:"option"`
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
