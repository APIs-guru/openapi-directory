package operations




type GetSaveOntologyTagFormatEnum string

const (
    GetSaveOntologyTagFormatEnumJSON GetSaveOntologyTagFormatEnum = "json"
GetSaveOntologyTagFormatEnumXML GetSaveOntologyTagFormatEnum = "xml"
GetSaveOntologyTagFormatEnumHTML GetSaveOntologyTagFormatEnum = "html"
GetSaveOntologyTagFormatEnumDump GetSaveOntologyTagFormatEnum = "dump"
GetSaveOntologyTagFormatEnumJpg GetSaveOntologyTagFormatEnum = "jpg"
GetSaveOntologyTagFormatEnumPdf GetSaveOntologyTagFormatEnum = "pdf"
)


type GetSaveOntologyTagQueryParams struct {
    Auth string `queryParam:"style=form,explode=true,name=auth"`
    Format *GetSaveOntologyTagFormatEnum `queryParam:"style=form,explode=true,name=format"`
    PwID string `queryParam:"style=form,explode=true,name=pwId"`
    Term string `queryParam:"style=form,explode=true,name=term"`
    TermID string `queryParam:"style=form,explode=true,name=termId"`
    User string `queryParam:"style=form,explode=true,name=user"`
    
}

type GetSaveOntologyTagRequest struct {
    QueryParams GetSaveOntologyTagQueryParams 
    
}

type GetSaveOntologyTagResponse struct {
    ContentType string 
    StatusCode int64 
    
}

