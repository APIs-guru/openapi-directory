package operations

type FantasyDefenseGameStatsFormatEnum string

const (
	FantasyDefenseGameStatsFormatEnumXML  FantasyDefenseGameStatsFormatEnum = "XML"
	FantasyDefenseGameStatsFormatEnumJSON FantasyDefenseGameStatsFormatEnum = "JSON"
)

type FantasyDefenseGameStatsPathParams struct {
	Format FantasyDefenseGameStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                            `pathParam:"style=simple,explode=false,name=season"`
	Week   string                            `pathParam:"style=simple,explode=false,name=week"`
}

type FantasyDefenseGameStatsRequest struct {
	PathParams FantasyDefenseGameStatsPathParams
}

type FantasyDefenseGameStatsResponse struct {
	ContentType         string
	FantasyDefenseGames []interface{}
	StatusCode          int64
}
