package operations

type PlayerSeasonThirdDownStatsFormatEnum string

const (
	PlayerSeasonThirdDownStatsFormatEnumXML  PlayerSeasonThirdDownStatsFormatEnum = "XML"
	PlayerSeasonThirdDownStatsFormatEnumJSON PlayerSeasonThirdDownStatsFormatEnum = "JSON"
)

type PlayerSeasonThirdDownStatsPathParams struct {
	Format PlayerSeasonThirdDownStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                               `pathParam:"style=simple,explode=false,name=season"`
}

type PlayerSeasonThirdDownStatsRequest struct {
	PathParams PlayerSeasonThirdDownStatsPathParams
}

type PlayerSeasonThirdDownStatsResponse struct {
	ContentType            string
	PlayerSeasonThirdDowns []interface{}
	StatusCode             int64
}
