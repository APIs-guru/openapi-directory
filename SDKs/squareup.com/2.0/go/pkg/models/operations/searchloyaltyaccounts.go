package operations

import (
	"openapi/pkg/models/shared"
)

type SearchLoyaltyAccountsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type SearchLoyaltyAccountsRequest struct {
	Request  shared.SearchLoyaltyAccountsRequest `request:"mediaType=application/json"`
	Security SearchLoyaltyAccountsSecurity
}

type SearchLoyaltyAccountsResponse struct {
	ContentType                   string
	SearchLoyaltyAccountsResponse *shared.SearchLoyaltyAccountsResponse
	StatusCode                    int64
}
