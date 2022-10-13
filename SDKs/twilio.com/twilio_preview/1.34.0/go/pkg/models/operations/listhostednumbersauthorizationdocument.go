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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListHostedNumbersAuthorizationDocument200ApplicationJSONListHostedNumbersAuthorizationDocumentResponse struct {
	Items []shared.PreviewHostedNumbersAuthorizationDocument            `json:"items"`
	Meta  *ListHostedNumbersAuthorizationDocument200ApplicationJSONMeta `json:"meta"`
}

type ListHostedNumbersAuthorizationDocumentResponse struct {
	ContentType                                    string
	ListHostedNumbersAuthorizationDocumentResponse *ListHostedNumbersAuthorizationDocument200ApplicationJSONListHostedNumbersAuthorizationDocumentResponse
	StatusCode                                     int64
}
