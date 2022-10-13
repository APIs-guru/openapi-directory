package operations

type LegacyBoxScoresActiveFormatEnum string

const (
	LegacyBoxScoresActiveFormatEnumXML  LegacyBoxScoresActiveFormatEnum = "XML"
	LegacyBoxScoresActiveFormatEnumJSON LegacyBoxScoresActiveFormatEnum = "JSON"
)

type LegacyBoxScoresActivePathParams struct {
	Format LegacyBoxScoresActiveFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type LegacyBoxScoresActiveRequest struct {
	PathParams LegacyBoxScoresActivePathParams
}

type LegacyBoxScoresActiveResponse struct {
	BoxScores   []interface{}
	ContentType string
	StatusCode  int64
}
