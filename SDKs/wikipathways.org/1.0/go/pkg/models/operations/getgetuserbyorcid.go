package operations

type GetGetUserByOrcidFormatEnum string

const (
	GetGetUserByOrcidFormatEnumJSON GetGetUserByOrcidFormatEnum = "json"
	GetGetUserByOrcidFormatEnumXML  GetGetUserByOrcidFormatEnum = "xml"
	GetGetUserByOrcidFormatEnumHTML GetGetUserByOrcidFormatEnum = "html"
	GetGetUserByOrcidFormatEnumDump GetGetUserByOrcidFormatEnum = "dump"
	GetGetUserByOrcidFormatEnumJpg  GetGetUserByOrcidFormatEnum = "jpg"
	GetGetUserByOrcidFormatEnumPdf  GetGetUserByOrcidFormatEnum = "pdf"
)

type GetGetUserByOrcidQueryParams struct {
	Format *GetGetUserByOrcidFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Orcid  string                       `queryParam:"style=form,explode=true,name=orcid"`
}

type GetGetUserByOrcidRequest struct {
	QueryParams GetGetUserByOrcidQueryParams
}

type GetGetUserByOrcidResponse struct {
	ContentType string
	StatusCode  int64
}
