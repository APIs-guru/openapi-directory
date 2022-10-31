package operations

import (
	"openapi/pkg/models/shared"
)

type JoinGroupAlt1PathParams struct {
	GroupID float64 `pathParam:"style=simple,explode=false,name=group_id"`
}

type JoinGroupAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type JoinGroupAlt1Request struct {
	PathParams JoinGroupAlt1PathParams
	Security   JoinGroupAlt1Security
}

type JoinGroupAlt1Response struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
