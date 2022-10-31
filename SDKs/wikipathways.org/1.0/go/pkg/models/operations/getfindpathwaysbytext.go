package operations




type GetFindPathwaysByTextFormatEnum string

const (
    GetFindPathwaysByTextFormatEnumJSON GetFindPathwaysByTextFormatEnum = "json"
GetFindPathwaysByTextFormatEnumXML GetFindPathwaysByTextFormatEnum = "xml"
GetFindPathwaysByTextFormatEnumHTML GetFindPathwaysByTextFormatEnum = "html"
GetFindPathwaysByTextFormatEnumDump GetFindPathwaysByTextFormatEnum = "dump"
GetFindPathwaysByTextFormatEnumJpg GetFindPathwaysByTextFormatEnum = "jpg"
GetFindPathwaysByTextFormatEnumPdf GetFindPathwaysByTextFormatEnum = "pdf"
)


type GetFindPathwaysByTextQueryParams struct {
    Format *GetFindPathwaysByTextFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Query string `queryParam:"style=form,explode=true,name=query"`
    Species *string `queryParam:"style=form,explode=true,name=species"`
    
}

type GetFindPathwaysByTextRequest struct {
    QueryParams GetFindPathwaysByTextQueryParams 
    
}

type GetFindPathwaysByTextResponse struct {
    ContentType string 
    StatusCode int64 
    
}

