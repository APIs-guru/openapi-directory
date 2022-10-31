package operations

import (
"openapi/pkg/models/shared")

type PublishInvoicePathParams struct {
    InvoiceID string `pathParam:"style=simple,explode=false,name=invoice_id"`
    
}

type PublishInvoiceSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PublishInvoiceRequest struct {
    PathParams PublishInvoicePathParams 
    Request shared.PublishInvoiceRequest `request:"mediaType=application/json"`
    Security PublishInvoiceSecurity 
    
}

type PublishInvoiceResponse struct {
    ContentType string 
    PublishInvoiceResponse *shared.PublishInvoiceResponse 
    StatusCode int64 
    
}

