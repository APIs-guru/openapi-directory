package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListFaxServers = []string{
	"https://fax.twilio.com",
}

type ListFaxQueryParams struct {
	DateCreatedAfter      *time.Time `queryParam:"style=form,explode=true,name=DateCreatedAfter"`
	DateCreatedOnOrBefore *time.Time `queryParam:"style=form,explode=true,name=DateCreatedOnOrBefore"`
	From                  *string    `queryParam:"style=form,explode=true,name=From"`
	PageSize              *int64     `queryParam:"style=form,explode=true,name=PageSize"`
	To                    *string    `queryParam:"style=form,explode=true,name=To"`
}

type ListFaxSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListFaxRequest struct {
	ServerURL   *string
	QueryParams ListFaxQueryParams
	Security    ListFaxSecurity
}

type ListFax200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListFax200ApplicationJSONListFaxResponse struct {
	Faxes []shared.FaxV1Fax              `json:"faxes"`
	Meta  *ListFax200ApplicationJSONMeta `json:"meta"`
}

type ListFaxResponse struct {
	ContentType     string
	ListFaxResponse *ListFax200ApplicationJSONListFaxResponse
	StatusCode      int64
}
