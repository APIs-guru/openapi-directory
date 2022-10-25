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

type ListChallengeListChallengeResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListChallengeListChallengeResponse struct {
	Challenges []shared.VerifyV2ServiceEntityChallenge `json:"challenges,omitempty"`
	Meta       *ListChallengeListChallengeResponseMeta `json:"meta,omitempty"`
}

type ListChallengeResponse struct {
	ContentType           string
	ListChallengeResponse *ListChallengeListChallengeResponse
	StatusCode            int64
}
