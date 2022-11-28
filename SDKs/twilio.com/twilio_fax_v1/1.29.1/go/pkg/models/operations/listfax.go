package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListFaxServerList = []string{
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

type ListFaxListFaxResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListFaxListFaxResponse struct {
	Faxes []shared.FaxV1Fax           `json:"faxes,omitempty"`
	Meta  *ListFaxListFaxResponseMeta `json:"meta,omitempty"`
}

type ListFaxRequest struct {
	ServerURL   *string
	QueryParams ListFaxQueryParams
	Security    ListFaxSecurity
}

type ListFaxResponse struct {
	ContentType     string
	ListFaxResponse *ListFaxListFaxResponse
	StatusCode      int64
}
