package operations

import (
	"openapi/pkg/models/shared"
)

var ListSmsCommandServers = []string{
	"https://supersim.twilio.com",
}

type ListSmsCommandQueryParams struct {
	Direction *shared.SmsCommandEnumDirectionEnum `queryParam:"style=form,explode=true,name=Direction"`
	PageSize  *int64                              `queryParam:"style=form,explode=true,name=PageSize"`
	Sim       *string                             `queryParam:"style=form,explode=true,name=Sim"`
	Status    *shared.SmsCommandEnumStatusEnum    `queryParam:"style=form,explode=true,name=Status"`
}

type ListSmsCommandSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSmsCommandRequest struct {
	ServerURL   *string
	QueryParams ListSmsCommandQueryParams
	Security    ListSmsCommandSecurity
}

type ListSmsCommand200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSmsCommand200ApplicationJSONListSmsCommandResponse struct {
	Meta        *ListSmsCommand200ApplicationJSONMeta `json:"meta"`
	SmsCommands []shared.SupersimV1SmsCommand         `json:"sms_commands"`
}

type ListSmsCommandResponse struct {
	ContentType            string
	ListSmsCommandResponse *ListSmsCommand200ApplicationJSONListSmsCommandResponse
	StatusCode             int64
}
