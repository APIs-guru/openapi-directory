package operations

type BoxScoreFormatEnum string

const (
	BoxScoreFormatEnumXML  BoxScoreFormatEnum = "xml"
	BoxScoreFormatEnumJSON BoxScoreFormatEnum = "json"
)

type BoxScorePathParams struct {
	Format BoxScoreFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Gameid string             `pathParam:"style=simple,explode=false,name=gameid"`
}

type BoxScoreRequest struct {
	PathParams BoxScorePathParams
}

type BoxScoreResponse struct {
	BoxScores   []interface{}
	ContentType string
	StatusCode  int64
}
