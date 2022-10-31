package operations

import (
"openapi/pkg/models/shared")

type UpdateInvoicePathParams struct {
    InvoiceID string `pathParam:"style=simple,explode=false,name=invoice_id"`
    
}

type UpdateInvoiceSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UpdateInvoiceRequest struct {
    PathParams UpdateInvoicePathParams 
    Request shared.UpdateInvoiceRequest `request:"mediaType=application/json"`
    Security UpdateInvoiceSecurity 
    
}

type UpdateInvoiceResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateInvoiceResponse *shared.UpdateInvoiceResponse 
    
}

