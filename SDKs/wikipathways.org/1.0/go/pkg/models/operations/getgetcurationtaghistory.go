package operations




type GetGetCurationTagHistoryFormatEnum string

const (
    GetGetCurationTagHistoryFormatEnumJSON GetGetCurationTagHistoryFormatEnum = "json"
GetGetCurationTagHistoryFormatEnumXML GetGetCurationTagHistoryFormatEnum = "xml"
GetGetCurationTagHistoryFormatEnumHTML GetGetCurationTagHistoryFormatEnum = "html"
GetGetCurationTagHistoryFormatEnumDump GetGetCurationTagHistoryFormatEnum = "dump"
GetGetCurationTagHistoryFormatEnumJpg GetGetCurationTagHistoryFormatEnum = "jpg"
GetGetCurationTagHistoryFormatEnumPdf GetGetCurationTagHistoryFormatEnum = "pdf"
)


type GetGetCurationTagHistoryQueryParams struct {
    Format *GetGetCurationTagHistoryFormatEnum `queryParam:"style=form,explode=true,name=format"`
    PwID string `queryParam:"style=form,explode=true,name=pwId"`
    Timestamp *string `queryParam:"style=form,explode=true,name=timestamp"`
    
}

type GetGetCurationTagHistoryRequest struct {
    QueryParams GetGetCurationTagHistoryQueryParams 
    
}

type GetGetCurationTagHistoryResponse struct {
    ContentType string 
    StatusCode int64 
    
}

