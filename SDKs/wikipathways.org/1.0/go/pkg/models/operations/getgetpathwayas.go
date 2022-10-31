package operations

type GetGetPathwayAsFormatEnum string

const (
	GetGetPathwayAsFormatEnumJSON GetGetPathwayAsFormatEnum = "json"
	GetGetPathwayAsFormatEnumXML  GetGetPathwayAsFormatEnum = "xml"
	GetGetPathwayAsFormatEnumHTML GetGetPathwayAsFormatEnum = "html"
	GetGetPathwayAsFormatEnumDump GetGetPathwayAsFormatEnum = "dump"
	GetGetPathwayAsFormatEnumJpg  GetGetPathwayAsFormatEnum = "jpg"
	GetGetPathwayAsFormatEnumPdf  GetGetPathwayAsFormatEnum = "pdf"
)

type GetGetPathwayAsQueryParams struct {
	FileType string                     `queryParam:"style=form,explode=true,name=fileType"`
	Format   *GetGetPathwayAsFormatEnum `queryParam:"style=form,explode=true,name=format"`
	PwID     string                     `queryParam:"style=form,explode=true,name=pwId"`
	Revision *int64                     `queryParam:"style=form,explode=true,name=revision"`
}

type GetGetPathwayAsRequest struct {
	QueryParams GetGetPathwayAsQueryParams
}

type GetGetPathwayAsResponse struct {
	ContentType string
	StatusCode  int64
}
