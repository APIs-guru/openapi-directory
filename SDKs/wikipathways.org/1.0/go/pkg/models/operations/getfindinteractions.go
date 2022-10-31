package operations




type GetFindInteractionsFormatEnum string

const (
    GetFindInteractionsFormatEnumJSON GetFindInteractionsFormatEnum = "json"
GetFindInteractionsFormatEnumXML GetFindInteractionsFormatEnum = "xml"
GetFindInteractionsFormatEnumHTML GetFindInteractionsFormatEnum = "html"
GetFindInteractionsFormatEnumDump GetFindInteractionsFormatEnum = "dump"
GetFindInteractionsFormatEnumJpg GetFindInteractionsFormatEnum = "jpg"
GetFindInteractionsFormatEnumPdf GetFindInteractionsFormatEnum = "pdf"
)


type GetFindInteractionsQueryParams struct {
    Format *GetFindInteractionsFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Query string `queryParam:"style=form,explode=true,name=query"`
    
}

type GetFindInteractionsRequest struct {
    QueryParams GetFindInteractionsQueryParams 
    
}

type GetFindInteractionsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

