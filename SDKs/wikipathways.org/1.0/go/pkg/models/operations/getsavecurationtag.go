package operations

type GetSaveCurationTagFormatEnum string

const (
	GetSaveCurationTagFormatEnumJSON GetSaveCurationTagFormatEnum = "json"
	GetSaveCurationTagFormatEnumXML  GetSaveCurationTagFormatEnum = "xml"
	GetSaveCurationTagFormatEnumHTML GetSaveCurationTagFormatEnum = "html"
	GetSaveCurationTagFormatEnumDump GetSaveCurationTagFormatEnum = "dump"
	GetSaveCurationTagFormatEnumJpg  GetSaveCurationTagFormatEnum = "jpg"
	GetSaveCurationTagFormatEnumPdf  GetSaveCurationTagFormatEnum = "pdf"
)

type GetSaveCurationTagQueryParams struct {
	Auth     string                        `queryParam:"style=form,explode=true,name=auth"`
	Format   *GetSaveCurationTagFormatEnum `queryParam:"style=form,explode=true,name=format"`
	PwID     string                        `queryParam:"style=form,explode=true,name=pwId"`
	Revision int64                         `queryParam:"style=form,explode=true,name=revision"`
	TagName  string                        `queryParam:"style=form,explode=true,name=tagName"`
	Text     string                        `queryParam:"style=form,explode=true,name=text"`
	Username string                        `queryParam:"style=form,explode=true,name=username"`
}

type GetSaveCurationTagRequest struct {
	QueryParams GetSaveCurationTagQueryParams
}

type GetSaveCurationTagResponse struct {
	ContentType string
	StatusCode  int64
}
