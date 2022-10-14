package operations

import (
	"openapi/pkg/models/shared"
)

var ListHostedNumbersAuthorizationDocumentServers = []string{
	"https://preview.twilio.com",
}

type ListHostedNumbersAuthorizationDocumentQueryParams struct {
	Email    *string                                     `queryParam:"style=form,explode=true,name=Email"`
	PageSize *int64                                      `queryParam:"style=form,explode=true,name=PageSize"`
	Status   *shared.AuthorizationDocumentEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListHostedNumbersAuthorizationDocumentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListHostedNumbersAuthorizationDocumentRequest struct {
	ServerURL   *string
	QueryParams ListHostedNumbersAuthorizationDocumentQueryParams
	Security    ListHostedNumbersAuthorizationDocumentSecurity
}

type ListHostedNumbersAuthorizationDocument200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListHostedNumbersAuthorizationDocument200ApplicationJSONListHostedNumbersAuthorizationDocumentResponse struct {
	Items []shared.PreviewHostedNumbersAuthorizationDocument            `json:"items,omitempty"`
	Meta  *ListHostedNumbersAuthorizationDocument200ApplicationJSONMeta `json:"meta,omitempty"`
}

type ListHostedNumbersAuthorizationDocumentResponse struct {
	ContentType                                    string
	ListHostedNumbersAuthorizationDocumentResponse *ListHostedNumbersAuthorizationDocument200ApplicationJSONListHostedNumbersAuthorizationDocumentResponse
	StatusCode                                     int64
}
