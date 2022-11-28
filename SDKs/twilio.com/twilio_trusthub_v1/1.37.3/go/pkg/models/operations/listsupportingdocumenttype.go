package operations

import (
	"openapi/pkg/models/shared"
)

var ListSupportingDocumentTypeServerList = []string{
	"https://trusthub.twilio.com",
}

type ListSupportingDocumentTypeQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSupportingDocumentTypeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
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
	SupportingDocumentTypes []shared.TrusthubV1SupportingDocumentType                         `json:"supporting_document_types,omitempty"`
}

type ListSupportingDocumentTypeRequest struct {
	ServerURL   *string
	QueryParams ListSupportingDocumentTypeQueryParams
	Security    ListSupportingDocumentTypeSecurity
}

type ListSupportingDocumentTypeResponse struct {
	ContentType                        string
	ListSupportingDocumentTypeResponse *ListSupportingDocumentTypeListSupportingDocumentTypeResponse
	StatusCode                         int64
}
