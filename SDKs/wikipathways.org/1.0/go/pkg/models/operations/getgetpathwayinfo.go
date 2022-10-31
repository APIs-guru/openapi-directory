package operations




type GetGetPathwayInfoFormatEnum string

const (
    GetGetPathwayInfoFormatEnumJSON GetGetPathwayInfoFormatEnum = "json"
GetGetPathwayInfoFormatEnumXML GetGetPathwayInfoFormatEnum = "xml"
GetGetPathwayInfoFormatEnumHTML GetGetPathwayInfoFormatEnum = "html"
GetGetPathwayInfoFormatEnumDump GetGetPathwayInfoFormatEnum = "dump"
GetGetPathwayInfoFormatEnumJpg GetGetPathwayInfoFormatEnum = "jpg"
GetGetPathwayInfoFormatEnumPdf GetGetPathwayInfoFormatEnum = "pdf"
)


type GetGetPathwayInfoQueryParams struct {
    Format *GetGetPathwayInfoFormatEnum `queryParam:"style=form,explode=true,name=format"`
    PwID string `queryParam:"style=form,explode=true,name=pwId"`
    
}

type GetGetPathwayInfoRequest struct {
    QueryParams GetGetPathwayInfoQueryParams 
    
}

type GetGetPathwayInfoResponse struct {
    ContentType string 
    StatusCode int64 
    
}

