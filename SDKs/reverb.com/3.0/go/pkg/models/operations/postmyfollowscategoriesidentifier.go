package operations

import (
	"openapi/pkg/models/shared"
)

type PostMyFollowsCategoriesIdentifierPathParams struct {
	Identifier string `pathParam:"style=simple,explode=false,name=identifier"`
}

type PostMyFollowsCategoriesIdentifierSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostMyFollowsCategoriesIdentifierRequest struct {
	PathParams PostMyFollowsCategoriesIdentifierPathParams
	Security   PostMyFollowsCategoriesIdentifierSecurity
}

type PostMyFollowsCategoriesIdentifierResponse struct {
	ContentType string
	StatusCode  int64
}
