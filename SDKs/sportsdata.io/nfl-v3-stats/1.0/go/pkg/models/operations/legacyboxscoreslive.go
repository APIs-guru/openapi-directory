package operations

type LegacyBoxScoresLiveFormatEnum string

const (
	LegacyBoxScoresLiveFormatEnumXML  LegacyBoxScoresLiveFormatEnum = "XML"
	LegacyBoxScoresLiveFormatEnumJSON LegacyBoxScoresLiveFormatEnum = "JSON"
)

type LegacyBoxScoresLivePathParams struct {
	Format LegacyBoxScoresLiveFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type LegacyBoxScoresLiveRequest struct {
	PathParams LegacyBoxScoresLivePathParams
}

type LegacyBoxScoresLiveResponse struct {
	BoxScores   []interface{}
	ContentType string
	StatusCode  int64
}
