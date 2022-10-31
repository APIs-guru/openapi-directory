package operations




type GetGetPathwaysByOntologyTermFormatEnum string

const (
    GetGetPathwaysByOntologyTermFormatEnumJSON GetGetPathwaysByOntologyTermFormatEnum = "json"
GetGetPathwaysByOntologyTermFormatEnumXML GetGetPathwaysByOntologyTermFormatEnum = "xml"
GetGetPathwaysByOntologyTermFormatEnumHTML GetGetPathwaysByOntologyTermFormatEnum = "html"
GetGetPathwaysByOntologyTermFormatEnumDump GetGetPathwaysByOntologyTermFormatEnum = "dump"
GetGetPathwaysByOntologyTermFormatEnumJpg GetGetPathwaysByOntologyTermFormatEnum = "jpg"
GetGetPathwaysByOntologyTermFormatEnumPdf GetGetPathwaysByOntologyTermFormatEnum = "pdf"
)


type GetGetPathwaysByOntologyTermQueryParams struct {
    Format *GetGetPathwaysByOntologyTermFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Term string `queryParam:"style=form,explode=true,name=term"`
    
}

type GetGetPathwaysByOntologyTermRequest struct {
    QueryParams GetGetPathwaysByOntologyTermQueryParams 
    
}

type GetGetPathwaysByOntologyTermResponse struct {
    ContentType string 
    StatusCode int64 
    
}

