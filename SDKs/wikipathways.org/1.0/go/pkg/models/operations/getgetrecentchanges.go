package operations




type GetGetRecentChangesFormatEnum string

const (
    GetGetRecentChangesFormatEnumJSON GetGetRecentChangesFormatEnum = "json"
GetGetRecentChangesFormatEnumXML GetGetRecentChangesFormatEnum = "xml"
GetGetRecentChangesFormatEnumHTML GetGetRecentChangesFormatEnum = "html"
GetGetRecentChangesFormatEnumDump GetGetRecentChangesFormatEnum = "dump"
GetGetRecentChangesFormatEnumJpg GetGetRecentChangesFormatEnum = "jpg"
GetGetRecentChangesFormatEnumPdf GetGetRecentChangesFormatEnum = "pdf"
)


type GetGetRecentChangesQueryParams struct {
    Format *GetGetRecentChangesFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Timestamp string `queryParam:"style=form,explode=true,name=timestamp"`
    
}

type GetGetRecentChangesRequest struct {
    QueryParams GetGetRecentChangesQueryParams 
    
}

type GetGetRecentChangesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

