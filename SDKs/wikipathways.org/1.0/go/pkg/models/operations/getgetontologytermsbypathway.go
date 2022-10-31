package operations




type GetGetOntologyTermsByPathwayFormatEnum string

const (
    GetGetOntologyTermsByPathwayFormatEnumJSON GetGetOntologyTermsByPathwayFormatEnum = "json"
GetGetOntologyTermsByPathwayFormatEnumXML GetGetOntologyTermsByPathwayFormatEnum = "xml"
GetGetOntologyTermsByPathwayFormatEnumHTML GetGetOntologyTermsByPathwayFormatEnum = "html"
GetGetOntologyTermsByPathwayFormatEnumDump GetGetOntologyTermsByPathwayFormatEnum = "dump"
GetGetOntologyTermsByPathwayFormatEnumJpg GetGetOntologyTermsByPathwayFormatEnum = "jpg"
GetGetOntologyTermsByPathwayFormatEnumPdf GetGetOntologyTermsByPathwayFormatEnum = "pdf"
)


type GetGetOntologyTermsByPathwayQueryParams struct {
    Format *GetGetOntologyTermsByPathwayFormatEnum `queryParam:"style=form,explode=true,name=format"`
    PwID string `queryParam:"style=form,explode=true,name=pwId"`
    
}

type GetGetOntologyTermsByPathwayRequest struct {
    QueryParams GetGetOntologyTermsByPathwayQueryParams 
    
}

type GetGetOntologyTermsByPathwayResponse struct {
    ContentType string 
    StatusCode int64 
    
}

