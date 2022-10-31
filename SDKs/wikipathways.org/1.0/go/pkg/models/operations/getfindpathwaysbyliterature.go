package operations




type GetFindPathwaysByLiteratureFormatEnum string

const (
    GetFindPathwaysByLiteratureFormatEnumJSON GetFindPathwaysByLiteratureFormatEnum = "json"
GetFindPathwaysByLiteratureFormatEnumXML GetFindPathwaysByLiteratureFormatEnum = "xml"
GetFindPathwaysByLiteratureFormatEnumHTML GetFindPathwaysByLiteratureFormatEnum = "html"
GetFindPathwaysByLiteratureFormatEnumDump GetFindPathwaysByLiteratureFormatEnum = "dump"
GetFindPathwaysByLiteratureFormatEnumJpg GetFindPathwaysByLiteratureFormatEnum = "jpg"
GetFindPathwaysByLiteratureFormatEnumPdf GetFindPathwaysByLiteratureFormatEnum = "pdf"
)


type GetFindPathwaysByLiteratureQueryParams struct {
    Format *GetFindPathwaysByLiteratureFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Query string `queryParam:"style=form,explode=true,name=query"`
    
}

type GetFindPathwaysByLiteratureRequest struct {
    QueryParams GetFindPathwaysByLiteratureQueryParams 
    
}

type GetFindPathwaysByLiteratureResponse struct {
    ContentType string 
    StatusCode int64 
    
}

