package operations




type GetListOrganismsFormatEnum string

const (
    GetListOrganismsFormatEnumJSON GetListOrganismsFormatEnum = "json"
GetListOrganismsFormatEnumXML GetListOrganismsFormatEnum = "xml"
GetListOrganismsFormatEnumHTML GetListOrganismsFormatEnum = "html"
GetListOrganismsFormatEnumDump GetListOrganismsFormatEnum = "dump"
GetListOrganismsFormatEnumJpg GetListOrganismsFormatEnum = "jpg"
GetListOrganismsFormatEnumPdf GetListOrganismsFormatEnum = "pdf"
)


type GetListOrganismsQueryParams struct {
    Format *GetListOrganismsFormatEnum `queryParam:"style=form,explode=true,name=format"`
    
}

type GetListOrganismsRequest struct {
    QueryParams GetListOrganismsQueryParams 
    
}

type GetListOrganismsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

