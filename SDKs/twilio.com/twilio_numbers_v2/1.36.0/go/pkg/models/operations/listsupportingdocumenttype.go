package operations

import (
	"openapi/pkg/models/shared"
)

var ListSupportingDocumentTypeServers = []string{
	"https://numbers.twilio.com",
}

type ListSupportingDocumentTypeQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSupportingDocumentTypeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSupportingDocumentTypeRequest struct {
	ServerURL   *string
	QueryParams ListSupportingDocumentTypeQueryParams
	Security    ListSupportingDocumentTypeSecurity
}

type ListSupportingDocumentTypeListSupportingDocumentTypeResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSupportingDocumentTypeListSupportingDocumentTypeResponse struct {
	Meta                    *ListSupportingDocumentTypeListSupportingDocumentTypeResponseMeta `json:"meta,omitempty"`
	SupportingDocumentTypes []shared.NumbersV2RegulatoryComplianceSupportingDocumentType      `json:"supporting_document_types,omitempty"`
}

type ListSupportingDocumentTypeResponse struct {
	ContentType                        string
	ListSupportingDocumentTypeResponse *ListSupportingDocumentTypeListSupportingDocumentTypeResponse
	StatusCode                         int64
}
