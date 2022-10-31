package operations




type GetGetCurationTagsByNameFormatEnum string

const (
    GetGetCurationTagsByNameFormatEnumJSON GetGetCurationTagsByNameFormatEnum = "json"
GetGetCurationTagsByNameFormatEnumXML GetGetCurationTagsByNameFormatEnum = "xml"
GetGetCurationTagsByNameFormatEnumHTML GetGetCurationTagsByNameFormatEnum = "html"
GetGetCurationTagsByNameFormatEnumDump GetGetCurationTagsByNameFormatEnum = "dump"
GetGetCurationTagsByNameFormatEnumJpg GetGetCurationTagsByNameFormatEnum = "jpg"
GetGetCurationTagsByNameFormatEnumPdf GetGetCurationTagsByNameFormatEnum = "pdf"
)


type GetGetCurationTagsByNameQueryParams struct {
    Format *GetGetCurationTagsByNameFormatEnum `queryParam:"style=form,explode=true,name=format"`
    TagName string `queryParam:"style=form,explode=true,name=tagName"`
    
}

type GetGetCurationTagsByNameRequest struct {
    QueryParams GetGetCurationTagsByNameQueryParams 
    
}

type GetGetCurationTagsByNameResponse struct {
    ContentType string 
    StatusCode int64 
    
}

