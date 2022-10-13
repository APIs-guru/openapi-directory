package operations

type ScoresBySeasonFormatEnum string

const (
	ScoresBySeasonFormatEnumXML  ScoresBySeasonFormatEnum = "XML"
	ScoresBySeasonFormatEnumJSON ScoresBySeasonFormatEnum = "JSON"
)

type ScoresBySeasonPathParams struct {
	Format ScoresBySeasonFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                   `pathParam:"style=simple,explode=false,name=season"`
}

type ScoresBySeasonRequest struct {
	PathParams ScoresBySeasonPathParams
}

type ScoresBySeasonResponse struct {
	ContentType string
	Scores      []interface{}
	StatusCode  int64
}
