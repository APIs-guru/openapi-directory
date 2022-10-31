package operations

import (
	"openapi/pkg/models/shared"
)

type CheckIfUserSubscribedToCategoryAlt1PathParams struct {
	Category string `pathParam:"style=simple,explode=false,name=category"`
}

type CheckIfUserSubscribedToCategoryAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CheckIfUserSubscribedToCategoryAlt1Request struct {
	PathParams CheckIfUserSubscribedToCategoryAlt1PathParams
	Security   CheckIfUserSubscribedToCategoryAlt1Security
}

type CheckIfUserSubscribedToCategoryAlt1Response struct {
	ContentType string
	StatusCode  int64
}
