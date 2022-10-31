package operations

type ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnum string

const (
	ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnumXML  ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnum = "XML"
	ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnumJSON ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnum = "JSON"
)

type ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpPathParams struct {
	Format   ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Playerid string                                                  `pathParam:"style=simple,explode=false,name=playerid"`
	Season   string                                                  `pathParam:"style=simple,explode=false,name=season"`
}

type ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpRequest struct {
	PathParams ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpPathParams
}

type ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse struct {
	ContentType            string
	PlayerSeasonProjection *interface{}
	StatusCode             int64
}
