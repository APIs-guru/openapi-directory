package operations

type PlayByPlayDeltaFormatEnum string

const (
	PlayByPlayDeltaFormatEnumXML  PlayByPlayDeltaFormatEnum = "XML"
	PlayByPlayDeltaFormatEnumJSON PlayByPlayDeltaFormatEnum = "JSON"
)

type PlayByPlayDeltaPathParams struct {
	Date    string                    `pathParam:"style=simple,explode=false,name=date"`
	Format  PlayByPlayDeltaFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Minutes string                    `pathParam:"style=simple,explode=false,name=minutes"`
}

type PlayByPlayDeltaRequest struct {
	PathParams PlayByPlayDeltaPathParams
}

type PlayByPlayDeltaResponse struct {
	ContentType string
	PlayByPlays []interface{}
	StatusCode  int64
}
