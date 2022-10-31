package operations




type GetUpdatePathwayFormatEnum string

const (
    GetUpdatePathwayFormatEnumJSON GetUpdatePathwayFormatEnum = "json"
GetUpdatePathwayFormatEnumXML GetUpdatePathwayFormatEnum = "xml"
GetUpdatePathwayFormatEnumHTML GetUpdatePathwayFormatEnum = "html"
GetUpdatePathwayFormatEnumDump GetUpdatePathwayFormatEnum = "dump"
GetUpdatePathwayFormatEnumJpg GetUpdatePathwayFormatEnum = "jpg"
GetUpdatePathwayFormatEnumPdf GetUpdatePathwayFormatEnum = "pdf"
)


type GetUpdatePathwayQueryParams struct {
    Auth string `queryParam:"style=form,explode=true,name=auth"`
    Description string `queryParam:"style=form,explode=true,name=description"`
    Format *GetUpdatePathwayFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Gpml string `queryParam:"style=form,explode=true,name=gpml"`
    PwID string `queryParam:"style=form,explode=true,name=pwId"`
    Revision int64 `queryParam:"style=form,explode=true,name=revision"`
    Username string `queryParam:"style=form,explode=true,name=username"`
    
}

type GetUpdatePathwayRequest struct {
    QueryParams GetUpdatePathwayQueryParams 
    
}

type GetUpdatePathwayResponse struct {
    ContentType string 
    StatusCode int64 
    
}

