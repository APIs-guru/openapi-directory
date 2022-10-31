package operations




type GetGetPathwayFormatEnum string

const (
    GetGetPathwayFormatEnumJSON GetGetPathwayFormatEnum = "json"
GetGetPathwayFormatEnumXML GetGetPathwayFormatEnum = "xml"
GetGetPathwayFormatEnumHTML GetGetPathwayFormatEnum = "html"
GetGetPathwayFormatEnumDump GetGetPathwayFormatEnum = "dump"
GetGetPathwayFormatEnumJpg GetGetPathwayFormatEnum = "jpg"
GetGetPathwayFormatEnumPdf GetGetPathwayFormatEnum = "pdf"
)


type GetGetPathwayQueryParams struct {
    Format *GetGetPathwayFormatEnum `queryParam:"style=form,explode=true,name=format"`
    PwID string `queryParam:"style=form,explode=true,name=pwId"`
    Revision *int64 `queryParam:"style=form,explode=true,name=revision"`
    
}

type GetGetPathwayRequest struct {
    QueryParams GetGetPathwayQueryParams 
    
}

type GetGetPathwayResponse struct {
    ContentType string 
    StatusCode int64 
    
}

