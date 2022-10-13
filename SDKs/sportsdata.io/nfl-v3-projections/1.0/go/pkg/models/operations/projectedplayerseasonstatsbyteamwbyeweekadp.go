package operations

type ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum string

const (
	ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnumXML  ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum = "XML"
	ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnumJSON ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum = "JSON"
)

type ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams struct {
	Format ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                                                `pathParam:"style=simple,explode=false,name=season"`
	Team   string                                                `pathParam:"style=simple,explode=false,name=team"`
}

type ProjectedPlayerSeasonStatsByTeamWByeWeekAdpRequest struct {
	PathParams ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams
}

type ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse struct {
	ContentType             string
	PlayerSeasonProjections []interface{}
	StatusCode              int64
}
