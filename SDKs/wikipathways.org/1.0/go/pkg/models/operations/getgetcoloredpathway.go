package operations

type GetGetColoredPathwayFormatEnum string

const (
	GetGetColoredPathwayFormatEnumJSON GetGetColoredPathwayFormatEnum = "json"
	GetGetColoredPathwayFormatEnumXML  GetGetColoredPathwayFormatEnum = "xml"
	GetGetColoredPathwayFormatEnumHTML GetGetColoredPathwayFormatEnum = "html"
	GetGetColoredPathwayFormatEnumDump GetGetColoredPathwayFormatEnum = "dump"
	GetGetColoredPathwayFormatEnumJpg  GetGetColoredPathwayFormatEnum = "jpg"
	GetGetColoredPathwayFormatEnumPdf  GetGetColoredPathwayFormatEnum = "pdf"
)

type GetGetColoredPathwayQueryParams struct {
	Color    []interface{}                   `queryParam:"style=form,explode=false,name=color"`
	FileType string                          `queryParam:"style=form,explode=true,name=fileType"`
	Format   *GetGetColoredPathwayFormatEnum `queryParam:"style=form,explode=true,name=format"`
	GraphID  []interface{}                   `queryParam:"style=form,explode=false,name=graphId"`
	PwID     string                          `queryParam:"style=form,explode=true,name=pwId"`
	Revision string                          `queryParam:"style=form,explode=true,name=revision"`
}

type GetGetColoredPathwayRequest struct {
	QueryParams GetGetColoredPathwayQueryParams
}

type GetGetColoredPathwayResponse struct {
	ContentType string
	StatusCode  int64
}
