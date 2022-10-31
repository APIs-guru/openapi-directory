package operations




type GetInvoiceUblPackagingEnum string

const (
    GetInvoiceUblPackagingEnumJSON GetInvoiceUblPackagingEnum = "json"
GetInvoiceUblPackagingEnumUbl GetInvoiceUblPackagingEnum = "ubl"
)


type GetInvoiceUblPathParams struct {
    GUID string `pathParam:"style=simple,explode=false,name=guid"`
    Packaging GetInvoiceUblPackagingEnum `pathParam:"style=simple,explode=false,name=packaging"`
    
}

type GetInvoiceUblRequest struct {
    PathParams GetInvoiceUblPathParams 
    
}

type GetInvoiceUblResponse struct {
    ContentType string 
    PurchaseInvoiceUbl *interface{} 
    StatusCode int64 
    
}

