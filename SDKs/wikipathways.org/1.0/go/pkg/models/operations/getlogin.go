package operations

type GetLoginFormatEnum string

const (
	GetLoginFormatEnumJSON GetLoginFormatEnum = "json"
	GetLoginFormatEnumXML  GetLoginFormatEnum = "xml"
	GetLoginFormatEnumHTML GetLoginFormatEnum = "html"
	GetLoginFormatEnumDump GetLoginFormatEnum = "dump"
	GetLoginFormatEnumJpg  GetLoginFormatEnum = "jpg"
	GetLoginFormatEnumPdf  GetLoginFormatEnum = "pdf"
)

type GetLoginQueryParams struct {
	Format *GetLoginFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Name   string              `queryParam:"style=form,explode=true,name=name"`
	Pass   string              `queryParam:"style=form,explode=true,name=pass"`
}

type GetLoginRequest struct {
	QueryParams GetLoginQueryParams
}

type GetLoginResponse struct {
	ContentType string
	StatusCode  int64
}
