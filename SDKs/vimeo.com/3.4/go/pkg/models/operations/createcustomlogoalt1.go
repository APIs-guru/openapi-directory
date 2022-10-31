package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCustomLogoAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateCustomLogoAlt1Request struct {
	Security CreateCustomLogoAlt1Security
}

type CreateCustomLogoAlt1Response struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Picture     *shared.Picture
}
