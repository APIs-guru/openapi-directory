package operations

import (
	"openapi/pkg/models/shared"
)

var ListChallengeServers = []string{
	"https://verify.twilio.com",
}

type ListChallengePathParams struct {
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListChallengeQueryParams struct {
	FactorSid *string                                    `queryParam:"style=form,explode=true,name=FactorSid"`
	Order     *shared.ChallengeEnumListOrdersEnum        `queryParam:"style=form,explode=true,name=Order"`
	PageSize  *int64                                     `queryParam:"style=form,explode=true,name=PageSize"`
	Status    *shared.ChallengeEnumChallengeStatusesEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListChallengeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListChallengeRequest struct {
	ServerURL   *string
	PathParams  ListChallengePathParams
	QueryParams ListChallengeQueryParams
	Security    ListChallengeSecurity
}

type ListChallenge200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListChallenge200ApplicationJSONListChallengeResponse struct {
	Challenges []shared.VerifyV2ServiceEntityChallenge `json:"challenges"`
	Meta       *ListChallenge200ApplicationJSONMeta    `json:"meta"`
}

type ListChallengeResponse struct {
	ContentType           string
	ListChallengeResponse *ListChallenge200ApplicationJSONListChallengeResponse
	StatusCode            int64
}
