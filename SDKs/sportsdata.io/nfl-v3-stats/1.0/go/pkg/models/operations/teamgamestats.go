package operations

type TeamGameStatsFormatEnum string

const (
	TeamGameStatsFormatEnumXML  TeamGameStatsFormatEnum = "XML"
	TeamGameStatsFormatEnumJSON TeamGameStatsFormatEnum = "JSON"
)

type TeamGameStatsPathParams struct {
	Format TeamGameStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                  `pathParam:"style=simple,explode=false,name=season"`
	Week   string                  `pathParam:"style=simple,explode=false,name=week"`
}

type TeamGameStatsRequest struct {
	PathParams TeamGameStatsPathParams
}

type TeamGameStatsResponse struct {
	ContentType string
	StatusCode  int64
	TeamGames   []interface{}
}
