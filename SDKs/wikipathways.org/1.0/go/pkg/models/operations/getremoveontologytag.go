package operations




type GetRemoveOntologyTagFormatEnum string

const (
    GetRemoveOntologyTagFormatEnumJSON GetRemoveOntologyTagFormatEnum = "json"
GetRemoveOntologyTagFormatEnumXML GetRemoveOntologyTagFormatEnum = "xml"
GetRemoveOntologyTagFormatEnumHTML GetRemoveOntologyTagFormatEnum = "html"
GetRemoveOntologyTagFormatEnumDump GetRemoveOntologyTagFormatEnum = "dump"
GetRemoveOntologyTagFormatEnumJpg GetRemoveOntologyTagFormatEnum = "jpg"
GetRemoveOntologyTagFormatEnumPdf GetRemoveOntologyTagFormatEnum = "pdf"
)


type GetRemoveOntologyTagQueryParams struct {
    Auth string `queryParam:"style=form,explode=true,name=auth"`
    Format *GetRemoveOntologyTagFormatEnum `queryParam:"style=form,explode=true,name=format"`
    PwID string `queryParam:"style=form,explode=true,name=pwId"`
    TermID string `queryParam:"style=form,explode=true,name=termId"`
    User string `queryParam:"style=form,explode=true,name=user"`
    
}

type GetRemoveOntologyTagRequest struct {
    QueryParams GetRemoveOntologyTagQueryParams 
    
}

type GetRemoveOntologyTagResponse struct {
    ContentType string 
    StatusCode int64 
    
}

