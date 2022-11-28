package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
}

type GetGroupSecurity struct {
	Oauth2Implicit *shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
	Oauth2Code     *shared.SchemeOauth2Code     `security:"scheme,type=oauth2"`
	APIKey         *shared.SchemeAPIKey         `security:"scheme,type=apiKey,subtype=query"`
}

type GetGroupRequest struct {
	PathParams GetGroupPathParams
	Security   GetGroupSecurity
}

type GetGroupResponse struct {
	ContentType string
	Group       *shared.Group
	StatusCode  int64
}
