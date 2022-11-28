package operations

import (
	"openapi/pkg/models/shared"
)

var ListSmsCommandServerList = []string{
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

type ListSmsCommandListSmsCommandResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSmsCommandListSmsCommandResponse struct {
	Meta        *ListSmsCommandListSmsCommandResponseMeta `json:"meta,omitempty"`
	SmsCommands []shared.SupersimV1SmsCommand             `json:"sms_commands,omitempty"`
}

type ListSmsCommandRequest struct {
	ServerURL   *string
	QueryParams ListSmsCommandQueryParams
	Security    ListSmsCommandSecurity
}

type ListSmsCommandResponse struct {
	ContentType            string
	ListSmsCommandResponse *ListSmsCommandListSmsCommandResponse
	StatusCode             int64
}
