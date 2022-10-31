package operations

import (
	"openapi/pkg/models/shared"
)

type SubscribeToCategoryAlt1PathParams struct {
	Category float64 `pathParam:"style=simple,explode=false,name=category"`
}

type SubscribeToCategoryAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type SubscribeToCategoryAlt1Request struct {
	PathParams SubscribeToCategoryAlt1PathParams
	Security   SubscribeToCategoryAlt1Security
}

type SubscribeToCategoryAlt1Response struct {
	ContentType string
	StatusCode  int64
}
