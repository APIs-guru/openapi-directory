package operations

import (
	"openapi/pkg/models/shared"
)

var ListDocumentServerList = []string{
	"https://sync.twilio.com",
}

type ListDocumentPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListDocumentQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListDocumentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListDocumentListDocumentResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListDocumentListDocumentResponse struct {
	Documents []shared.SyncV1ServiceDocument        `json:"documents,omitempty"`
	Meta      *ListDocumentListDocumentResponseMeta `json:"meta,omitempty"`
}

type ListDocumentRequest struct {
	ServerURL   *string
	PathParams  ListDocumentPathParams
	QueryParams ListDocumentQueryParams
	Security    ListDocumentSecurity
}

type ListDocumentResponse struct {
	ContentType          string
	ListDocumentResponse *ListDocumentListDocumentResponse
	StatusCode           int64
}
