package operations

import (
"openapi/pkg/models/shared")

type GetInvoicePathParams struct {
    InvoiceID string `pathParam:"style=simple,explode=false,name=invoice_id"`
    
}

type GetInvoiceSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetInvoiceRequest struct {
    PathParams GetInvoicePathParams 
    Security GetInvoiceSecurity 
    
}

type GetInvoiceResponse struct {
    ContentType string 
    GetInvoiceResponse *shared.GetInvoiceResponse 
    StatusCode int64 
    
}

