package operations




type GetListPathwaysFormatEnum string

const (
    GetListPathwaysFormatEnumJSON GetListPathwaysFormatEnum = "json"
GetListPathwaysFormatEnumXML GetListPathwaysFormatEnum = "xml"
GetListPathwaysFormatEnumHTML GetListPathwaysFormatEnum = "html"
GetListPathwaysFormatEnumDump GetListPathwaysFormatEnum = "dump"
GetListPathwaysFormatEnumJpg GetListPathwaysFormatEnum = "jpg"
GetListPathwaysFormatEnumPdf GetListPathwaysFormatEnum = "pdf"
)


type GetListPathwaysQueryParams struct {
    Format *GetListPathwaysFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Organism *string `queryParam:"style=form,explode=true,name=organism"`
    
}

type GetListPathwaysRequest struct {
    QueryParams GetListPathwaysQueryParams 
    
}

type GetListPathwaysResponse struct {
    ContentType string 
    StatusCode int64 
    
}

