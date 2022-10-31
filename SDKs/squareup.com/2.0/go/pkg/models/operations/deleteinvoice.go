package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteInvoicePathParams struct {
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoice_id"`
}

type DeleteInvoiceQueryParams struct {
	Version *int64 `queryParam:"style=form,explode=true,name=version"`
}

type DeleteInvoiceSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteInvoiceRequest struct {
	PathParams  DeleteInvoicePathParams
	QueryParams DeleteInvoiceQueryParams
	Security    DeleteInvoiceSecurity
}

type DeleteInvoiceResponse struct {
	ContentType           string
	DeleteInvoiceResponse *shared.DeleteInvoiceResponse
	StatusCode            int64
}
