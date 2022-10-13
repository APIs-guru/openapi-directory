package operations

import (
	"openapi/pkg/models/shared"
)

var ListSupportingDocumentServers = []string{
	"https://numbers.twilio.com",
}

type ListSupportingDocumentQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSupportingDocumentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSupportingDocumentRequest struct {
	ServerURL   *string
	QueryParams ListSupportingDocumentQueryParams
	Security    ListSupportingDocumentSecurity
}

type ListSupportingDocument200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSupportingDocument200ApplicationJSONListSupportingDocumentResponse struct {
	Meta    *ListSupportingDocument200ApplicationJSONMeta            `json:"meta"`
	Results []shared.NumbersV2RegulatoryComplianceSupportingDocument `json:"results"`
}

type ListSupportingDocumentResponse struct {
	ContentType                    string
	ListSupportingDocumentResponse *ListSupportingDocument200ApplicationJSONListSupportingDocumentResponse
	StatusCode                     int64
}
