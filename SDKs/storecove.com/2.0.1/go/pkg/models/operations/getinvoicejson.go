package operations

type GetInvoiceJSONPathParams struct {
	GUID string `pathParam:"style=simple,explode=false,name=guid"`
}

type GetInvoiceJSONQueryParams struct {
	Pmv *string `queryParam:"style=form,explode=true,name=pmv"`
}

type GetInvoiceJSONRequest struct {
	PathParams  GetInvoiceJSONPathParams
	QueryParams GetInvoiceJSONQueryParams
}

type GetInvoiceJSONResponse struct {
	ContentType     string
	PurchaseInvoice *interface{}
	StatusCode      int64
}
