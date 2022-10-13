package operations

import (
	"openapi/pkg/models/shared"
)

var ListAccountServers = []string{
	"https://api.twilio.com",
}

type ListAccountQueryParams struct {
	FriendlyName *string                       `queryParam:"style=form,explode=true,name=FriendlyName"`
	PageSize     *int64                        `queryParam:"style=form,explode=true,name=PageSize"`
	Status       *shared.AccountEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListAccountSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListAccountRequest struct {
	ServerURL   *string
	QueryParams ListAccountQueryParams
	Security    ListAccountSecurity
}

type ListAccount200ApplicationJSONListAccountResponse struct {
	Accounts        []shared.APIV2010Account `json:"accounts"`
	End             *int64                   `json:"end"`
	FirstPageURI    *string                  `json:"first_page_uri"`
	NextPageURI     *string                  `json:"next_page_uri"`
	Page            *int64                   `json:"page"`
	PageSize        *int64                   `json:"page_size"`
	PreviousPageURI *string                  `json:"previous_page_uri"`
	Start           *int64                   `json:"start"`
	URI             *string                  `json:"uri"`
}

type ListAccountResponse struct {
	ContentType         string
	ListAccountResponse *ListAccount200ApplicationJSONListAccountResponse
	StatusCode          int64
}
