package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInvoiceSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateInvoiceRequest struct {
	Request  shared.CreateInvoiceRequest `request:"mediaType=application/json"`
	Security CreateInvoiceSecurity
}

type CreateInvoiceResponse struct {
	ContentType           string
	CreateInvoiceResponse *shared.CreateInvoiceResponse
	StatusCode            int64
}
