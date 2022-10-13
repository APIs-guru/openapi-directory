package operations

import (
	"openapi/pkg/models/shared"
)

var ListIPCommandServers = []string{
	"https://supersim.twilio.com",
}

type ListIPCommandQueryParams struct {
	Direction *shared.IPCommandEnumDirectionEnum `queryParam:"style=form,explode=true,name=Direction"`
	PageSize  *int64                             `queryParam:"style=form,explode=true,name=PageSize"`
	Sim       *string                            `queryParam:"style=form,explode=true,name=Sim"`
	SimIccid  *string                            `queryParam:"style=form,explode=true,name=SimIccid"`
	Status    *shared.IPCommandEnumStatusEnum    `queryParam:"style=form,explode=true,name=Status"`
}

type ListIPCommandSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListIPCommandRequest struct {
	ServerURL   *string
	QueryParams ListIPCommandQueryParams
	Security    ListIPCommandSecurity
}

type ListIPCommand200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListIPCommand200ApplicationJSONListIPCommandResponse struct {
	IPCommands []shared.SupersimV1IPCommand         `json:"ip_commands"`
	Meta       *ListIPCommand200ApplicationJSONMeta `json:"meta"`
}

type ListIPCommandResponse struct {
	ContentType           string
	ListIPCommandResponse *ListIPCommand200ApplicationJSONListIPCommandResponse
	StatusCode            int64
}
