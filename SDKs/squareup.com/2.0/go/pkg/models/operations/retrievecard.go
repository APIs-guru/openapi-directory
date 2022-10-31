package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveCardPathParams struct {
	CardID string `pathParam:"style=simple,explode=false,name=card_id"`
}

type RetrieveCardSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RetrieveCardRequest struct {
	PathParams RetrieveCardPathParams
	Security   RetrieveCardSecurity
}

type RetrieveCardResponse struct {
	ContentType          string
	RetrieveCardResponse *shared.RetrieveCardResponse
	StatusCode           int64
}
