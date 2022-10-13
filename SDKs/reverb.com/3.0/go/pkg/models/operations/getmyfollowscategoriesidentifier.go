package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyFollowsCategoriesIdentifierPathParams struct {
	Identifier string `pathParam:"style=simple,explode=false,name=identifier"`
}

type GetMyFollowsCategoriesIdentifierSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyFollowsCategoriesIdentifierRequest struct {
	PathParams GetMyFollowsCategoriesIdentifierPathParams
	Security   GetMyFollowsCategoriesIdentifierSecurity
}

type GetMyFollowsCategoriesIdentifierResponse struct {
	ContentType string
	StatusCode  int64
}
