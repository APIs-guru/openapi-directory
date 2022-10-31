package operations

import (
	"openapi/pkg/models/shared"
)

type SearchLoyaltyEventsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type SearchLoyaltyEventsRequest struct {
	Request  shared.SearchLoyaltyEventsRequest `request:"mediaType=application/json"`
	Security SearchLoyaltyEventsSecurity
}

type SearchLoyaltyEventsResponse struct {
	ContentType                 string
	SearchLoyaltyEventsResponse *shared.SearchLoyaltyEventsResponse
	StatusCode                  int64
}
