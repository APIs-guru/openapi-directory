package operations




type GetFindPathwaysByXrefFormatEnum string

const (
    GetFindPathwaysByXrefFormatEnumJSON GetFindPathwaysByXrefFormatEnum = "json"
GetFindPathwaysByXrefFormatEnumXML GetFindPathwaysByXrefFormatEnum = "xml"
GetFindPathwaysByXrefFormatEnumHTML GetFindPathwaysByXrefFormatEnum = "html"
GetFindPathwaysByXrefFormatEnumDump GetFindPathwaysByXrefFormatEnum = "dump"
GetFindPathwaysByXrefFormatEnumJpg GetFindPathwaysByXrefFormatEnum = "jpg"
GetFindPathwaysByXrefFormatEnumPdf GetFindPathwaysByXrefFormatEnum = "pdf"
)


type GetFindPathwaysByXrefQueryParams struct {
    Codes []interface{} `queryParam:"style=form,explode=false,name=codes"`
    Format *GetFindPathwaysByXrefFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Ids []interface{} `queryParam:"style=form,explode=false,name=ids"`
    
}

type GetFindPathwaysByXrefRequest struct {
    QueryParams GetFindPathwaysByXrefQueryParams 
    
}

type GetFindPathwaysByXrefResponse struct {
    ContentType string 
    StatusCode int64 
    
}

