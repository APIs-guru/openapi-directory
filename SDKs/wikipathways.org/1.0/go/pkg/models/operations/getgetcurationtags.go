package operations

type GetGetCurationTagsFormatEnum string

const (
	GetGetCurationTagsFormatEnumJSON GetGetCurationTagsFormatEnum = "json"
	GetGetCurationTagsFormatEnumXML  GetGetCurationTagsFormatEnum = "xml"
	GetGetCurationTagsFormatEnumHTML GetGetCurationTagsFormatEnum = "html"
	GetGetCurationTagsFormatEnumDump GetGetCurationTagsFormatEnum = "dump"
	GetGetCurationTagsFormatEnumJpg  GetGetCurationTagsFormatEnum = "jpg"
	GetGetCurationTagsFormatEnumPdf  GetGetCurationTagsFormatEnum = "pdf"
)

type GetGetCurationTagsQueryParams struct {
	Format *GetGetCurationTagsFormatEnum `queryParam:"style=form,explode=true,name=format"`
	PwID   string                        `queryParam:"style=form,explode=true,name=pwId"`
}

type GetGetCurationTagsRequest struct {
	QueryParams GetGetCurationTagsQueryParams
}

type GetGetCurationTagsResponse struct {
	ContentType string
	StatusCode  int64
}
