package operations

import (
	"openapi/pkg/models/shared"
)

type CancelInvoicePathParams struct {
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoice_id"`
}

type CancelInvoiceSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CancelInvoiceRequest struct {
	PathParams CancelInvoicePathParams
	Request    shared.CancelInvoiceRequest `request:"mediaType=application/json"`
	Security   CancelInvoiceSecurity
}

type CancelInvoiceResponse struct {
	CancelInvoiceResponse *shared.CancelInvoiceResponse
	ContentType           string
	StatusCode            int64
}
