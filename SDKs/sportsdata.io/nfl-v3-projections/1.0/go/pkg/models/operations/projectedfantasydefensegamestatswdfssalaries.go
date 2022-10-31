package operations

type ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum string

const (
	ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnumXML  ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum = "XML"
	ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnumJSON ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum = "JSON"
)

type ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams struct {
	Format ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                                                 `pathParam:"style=simple,explode=false,name=season"`
	Week   string                                                 `pathParam:"style=simple,explode=false,name=week"`
}

type ProjectedFantasyDefenseGameStatsWDfsSalariesRequest struct {
	PathParams ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams
}

type ProjectedFantasyDefenseGameStatsWDfsSalariesResponse struct {
	ContentType                   string
	FantasyDefenseGameProjections []interface{}
	StatusCode                    int64
}
