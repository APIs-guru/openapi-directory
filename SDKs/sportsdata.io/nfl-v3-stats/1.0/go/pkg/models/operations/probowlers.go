package operations

type ProBowlersFormatEnum string

const (
	ProBowlersFormatEnumXML  ProBowlersFormatEnum = "XML"
	ProBowlersFormatEnumJSON ProBowlersFormatEnum = "JSON"
)

type ProBowlersPathParams struct {
	Format ProBowlersFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string               `pathParam:"style=simple,explode=false,name=season"`
}

type ProBowlersRequest struct {
	PathParams ProBowlersPathParams
}

type ProBowlersResponse struct {
	ContentType string
	PlayerInfos []interface{}
	StatusCode  int64
}
