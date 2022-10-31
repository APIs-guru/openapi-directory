package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyWishlistSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyWishlistRequest struct {
	Security GetMyWishlistSecurity
}

type GetMyWishlistResponse struct {
	ContentType string
	StatusCode  int64
}
