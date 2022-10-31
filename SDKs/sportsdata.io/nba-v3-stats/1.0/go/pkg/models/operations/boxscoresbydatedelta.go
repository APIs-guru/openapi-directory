package operations

type BoxScoresByDateDeltaFormatEnum string

const (
	BoxScoresByDateDeltaFormatEnumXML  BoxScoresByDateDeltaFormatEnum = "XML"
	BoxScoresByDateDeltaFormatEnumJSON BoxScoresByDateDeltaFormatEnum = "JSON"
)

type BoxScoresByDateDeltaPathParams struct {
	Date    string                         `pathParam:"style=simple,explode=false,name=date"`
	Format  BoxScoresByDateDeltaFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Minutes string                         `pathParam:"style=simple,explode=false,name=minutes"`
}

type BoxScoresByDateDeltaRequest struct {
	PathParams BoxScoresByDateDeltaPathParams
}

type BoxScoresByDateDeltaResponse struct {
	BoxScores   []interface{}
	ContentType string
	StatusCode  int64
}
