package operations

import (
	"openapi/pkg/models/shared"
)

var ListSupportingDocumentTypeServers = []string{
	"https://trusthub.twilio.com",
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

type ListSupportingDocumentType200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSupportingDocumentType200ApplicationJSONListSupportingDocumentTypeResponse struct {
	Meta                    *ListSupportingDocumentType200ApplicationJSONMeta `json:"meta"`
	SupportingDocumentTypes []shared.TrusthubV1SupportingDocumentType         `json:"supporting_document_types"`
}

type ListSupportingDocumentTypeResponse struct {
	ContentType                        string
	ListSupportingDocumentTypeResponse *ListSupportingDocumentType200ApplicationJSONListSupportingDocumentTypeResponse
	StatusCode                         int64
}
