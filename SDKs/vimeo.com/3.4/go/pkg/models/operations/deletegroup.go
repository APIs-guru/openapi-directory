package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteGroupPathParams struct {
	GroupID float64 `pathParam:"style=simple,explode=false,name=group_id"`
}

type DeleteGroupSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteGroupRequest struct {
	PathParams DeleteGroupPathParams
	Security   DeleteGroupSecurity
}

type DeleteGroupResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
