package operations

type GetGetXrefListFormatEnum string

const (
	GetGetXrefListFormatEnumJSON GetGetXrefListFormatEnum = "json"
	GetGetXrefListFormatEnumXML  GetGetXrefListFormatEnum = "xml"
	GetGetXrefListFormatEnumHTML GetGetXrefListFormatEnum = "html"
	GetGetXrefListFormatEnumDump GetGetXrefListFormatEnum = "dump"
	GetGetXrefListFormatEnumJpg  GetGetXrefListFormatEnum = "jpg"
	GetGetXrefListFormatEnumPdf  GetGetXrefListFormatEnum = "pdf"
)

type GetGetXrefListQueryParams struct {
	Code   string                    `queryParam:"style=form,explode=true,name=code"`
	Format *GetGetXrefListFormatEnum `queryParam:"style=form,explode=true,name=format"`
	PwID   string                    `queryParam:"style=form,explode=true,name=pwId"`
}

type GetGetXrefListRequest struct {
	QueryParams GetGetXrefListQueryParams
}

type GetGetXrefListResponse struct {
	ContentType string
	StatusCode  int64
}
