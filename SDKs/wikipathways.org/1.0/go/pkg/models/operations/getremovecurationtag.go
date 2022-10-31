package operations




type GetRemoveCurationTagFormatEnum string

const (
    GetRemoveCurationTagFormatEnumJSON GetRemoveCurationTagFormatEnum = "json"
GetRemoveCurationTagFormatEnumXML GetRemoveCurationTagFormatEnum = "xml"
GetRemoveCurationTagFormatEnumHTML GetRemoveCurationTagFormatEnum = "html"
GetRemoveCurationTagFormatEnumDump GetRemoveCurationTagFormatEnum = "dump"
GetRemoveCurationTagFormatEnumJpg GetRemoveCurationTagFormatEnum = "jpg"
GetRemoveCurationTagFormatEnumPdf GetRemoveCurationTagFormatEnum = "pdf"
)


type GetRemoveCurationTagQueryParams struct {
    Auth string `queryParam:"style=form,explode=true,name=auth"`
    Format *GetRemoveCurationTagFormatEnum `queryParam:"style=form,explode=true,name=format"`
    PwID string `queryParam:"style=form,explode=true,name=pwId"`
    TagName string `queryParam:"style=form,explode=true,name=tagName"`
    Username string `queryParam:"style=form,explode=true,name=username"`
    
}

type GetRemoveCurationTagRequest struct {
    QueryParams GetRemoveCurationTagQueryParams 
    
}

type GetRemoveCurationTagResponse struct {
    ContentType string 
    StatusCode int64 
    
}

