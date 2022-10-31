package operations




type GetGetPathwayHistoryFormatEnum string

const (
    GetGetPathwayHistoryFormatEnumJSON GetGetPathwayHistoryFormatEnum = "json"
GetGetPathwayHistoryFormatEnumXML GetGetPathwayHistoryFormatEnum = "xml"
GetGetPathwayHistoryFormatEnumHTML GetGetPathwayHistoryFormatEnum = "html"
GetGetPathwayHistoryFormatEnumDump GetGetPathwayHistoryFormatEnum = "dump"
GetGetPathwayHistoryFormatEnumJpg GetGetPathwayHistoryFormatEnum = "jpg"
GetGetPathwayHistoryFormatEnumPdf GetGetPathwayHistoryFormatEnum = "pdf"
)


type GetGetPathwayHistoryQueryParams struct {
    Format *GetGetPathwayHistoryFormatEnum `queryParam:"style=form,explode=true,name=format"`
    PwID string `queryParam:"style=form,explode=true,name=pwId"`
    Timestamp string `queryParam:"style=form,explode=true,name=timestamp"`
    
}

type GetGetPathwayHistoryRequest struct {
    QueryParams GetGetPathwayHistoryQueryParams 
    
}

type GetGetPathwayHistoryResponse struct {
    ContentType string 
    StatusCode int64 
    
}

