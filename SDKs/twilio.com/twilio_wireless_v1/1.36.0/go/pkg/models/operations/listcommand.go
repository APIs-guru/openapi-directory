package operations

import (
	"openapi/pkg/models/shared"
)

var ListCommandServers = []string{
	"https://wireless.twilio.com",
}

type ListCommandQueryParams struct {
	Direction *shared.CommandEnumDirectionEnum `queryParam:"style=form,explode=true,name=Direction"`
	PageSize  *int64                           `queryParam:"style=form,explode=true,name=PageSize"`
	Sim       *string                          `queryParam:"style=form,explode=true,name=Sim"`
	Status    *shared.CommandEnumStatusEnum    `queryParam:"style=form,explode=true,name=Status"`
	Transport *shared.CommandEnumTransportEnum `queryParam:"style=form,explode=true,name=Transport"`
}

type ListCommandSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCommandRequest struct {
	ServerURL   *string
	QueryParams ListCommandQueryParams
	Security    ListCommandSecurity
}

type ListCommand200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListCommand200ApplicationJSONListCommandResponse struct {
	Commands []shared.WirelessV1Command         `json:"commands"`
	Meta     *ListCommand200ApplicationJSONMeta `json:"meta"`
}

type ListCommandResponse struct {
	ContentType         string
	ListCommandResponse *ListCommand200ApplicationJSONListCommandResponse
	StatusCode          int64
}
