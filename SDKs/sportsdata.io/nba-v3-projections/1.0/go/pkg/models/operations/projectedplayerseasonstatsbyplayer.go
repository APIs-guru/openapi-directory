package operations

type ProjectedPlayerSeasonStatsByPlayerFormatEnum string

const (
	ProjectedPlayerSeasonStatsByPlayerFormatEnumXML  ProjectedPlayerSeasonStatsByPlayerFormatEnum = "XML"
	ProjectedPlayerSeasonStatsByPlayerFormatEnumJSON ProjectedPlayerSeasonStatsByPlayerFormatEnum = "JSON"
)

type ProjectedPlayerSeasonStatsByPlayerPathParams struct {
	Format   ProjectedPlayerSeasonStatsByPlayerFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Playerid string                                       `pathParam:"style=simple,explode=false,name=playerid"`
	Season   string                                       `pathParam:"style=simple,explode=false,name=season"`
}

type ProjectedPlayerSeasonStatsByPlayerRequest struct {
	PathParams ProjectedPlayerSeasonStatsByPlayerPathParams
}

type ProjectedPlayerSeasonStatsByPlayerResponse struct {
	ContentType            string
	PlayerSeasonProjection *interface{}
	StatusCode             int64
}
