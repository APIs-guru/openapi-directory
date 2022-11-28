package operations

import (
	"openapi/pkg/models/shared"
)

var ListWirelessCommandServerList = []string{
	"https://preview.twilio.com",
}

type ListWirelessCommandQueryParams struct {
	Device    *string `queryParam:"style=form,explode=true,name=Device"`
	Direction *string `queryParam:"style=form,explode=true,name=Direction"`
	PageSize  *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	Sim       *string `queryParam:"style=form,explode=true,name=Sim"`
	Status    *string `queryParam:"style=form,explode=true,name=Status"`
}

type ListWirelessCommandSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListWirelessCommandListWirelessCommandResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListWirelessCommandListWirelessCommandResponse struct {
	Commands []shared.PreviewWirelessCommand                     `json:"commands,omitempty"`
	Meta     *ListWirelessCommandListWirelessCommandResponseMeta `json:"meta,omitempty"`
}

type ListWirelessCommandRequest struct {
	ServerURL   *string
	QueryParams ListWirelessCommandQueryParams
	Security    ListWirelessCommandSecurity
}

type ListWirelessCommandResponse struct {
	ContentType                 string
	ListWirelessCommandResponse *ListWirelessCommandListWirelessCommandResponse
	StatusCode                  int64
}
