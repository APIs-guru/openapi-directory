package operations

type BoxScoreVFormatEnum string

const (
	BoxScoreVFormatEnumXML  BoxScoreVFormatEnum = "XML"
	BoxScoreVFormatEnumJSON BoxScoreVFormatEnum = "JSON"
)

type BoxScoreVPathParams struct {
	Format   BoxScoreVFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Hometeam string              `pathParam:"style=simple,explode=false,name=hometeam"`
	Season   string              `pathParam:"style=simple,explode=false,name=season"`
	Week     string              `pathParam:"style=simple,explode=false,name=week"`
}

type BoxScoreVRequest struct {
	PathParams BoxScoreVPathParams
}

type BoxScoreVResponse struct {
	BoxScoreV3  *interface{}
	ContentType string
	StatusCode  int64
}
