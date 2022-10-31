package operations

type DfsSlatesByWeekFormatEnum string

const (
	DfsSlatesByWeekFormatEnumXML  DfsSlatesByWeekFormatEnum = "XML"
	DfsSlatesByWeekFormatEnumJSON DfsSlatesByWeekFormatEnum = "JSON"
)

type DfsSlatesByWeekPathParams struct {
	Format DfsSlatesByWeekFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                    `pathParam:"style=simple,explode=false,name=season"`
	Week   string                    `pathParam:"style=simple,explode=false,name=week"`
}

type DfsSlatesByWeekRequest struct {
	PathParams DfsSlatesByWeekPathParams
}

type DfsSlatesByWeekResponse struct {
	ContentType string
	DfsSlates   []interface{}
	StatusCode  int64
}
