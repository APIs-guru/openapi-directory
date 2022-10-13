package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePictureAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreatePictureAlt1Request struct {
	Security CreatePictureAlt1Security
}

type CreatePictureAlt1Response struct {
	ContentType string
	StatusCode  int64
	Picture     *shared.Picture
}
