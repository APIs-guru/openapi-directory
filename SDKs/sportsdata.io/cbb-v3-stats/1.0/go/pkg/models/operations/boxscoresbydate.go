package operations

type BoxScoresByDateFormatEnum string

const (
	BoxScoresByDateFormatEnumXML  BoxScoresByDateFormatEnum = "XML"
	BoxScoresByDateFormatEnumJSON BoxScoresByDateFormatEnum = "JSON"
)

type BoxScoresByDatePathParams struct {
	Date   string                    `pathParam:"style=simple,explode=false,name=date"`
	Format BoxScoresByDateFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type BoxScoresByDateRequest struct {
	PathParams BoxScoresByDatePathParams
}

type BoxScoresByDateResponse struct {
	BoxScores   []interface{}
	ContentType string
	StatusCode  int64
}
