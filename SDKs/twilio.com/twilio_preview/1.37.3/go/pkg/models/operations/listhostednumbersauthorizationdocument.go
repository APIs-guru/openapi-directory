package operations

import (
	"openapi/pkg/models/shared"
)

var ListHostedNumbersAuthorizationDocumentServerList = []string{
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

type ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse struct {
	Items []shared.PreviewHostedNumbersAuthorizationDocument                                        `json:"items,omitempty"`
	Meta  *ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta `json:"meta,omitempty"`
}

type ListHostedNumbersAuthorizationDocumentRequest struct {
	ServerURL   *string
	QueryParams ListHostedNumbersAuthorizationDocumentQueryParams
	Security    ListHostedNumbersAuthorizationDocumentSecurity
}

type ListHostedNumbersAuthorizationDocumentResponse struct {
	ContentType                                    string
	ListHostedNumbersAuthorizationDocumentResponse *ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse
	StatusCode                                     int64
}
