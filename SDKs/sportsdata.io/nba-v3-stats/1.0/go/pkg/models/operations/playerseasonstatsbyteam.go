package operations

type PlayerSeasonStatsByTeamFormatEnum string

const (
	PlayerSeasonStatsByTeamFormatEnumXML  PlayerSeasonStatsByTeamFormatEnum = "XML"
	PlayerSeasonStatsByTeamFormatEnumJSON PlayerSeasonStatsByTeamFormatEnum = "JSON"
)

type PlayerSeasonStatsByTeamPathParams struct {
	Format PlayerSeasonStatsByTeamFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                            `pathParam:"style=simple,explode=false,name=season"`
	Team   string                            `pathParam:"style=simple,explode=false,name=team"`
}

type PlayerSeasonStatsByTeamRequest struct {
	PathParams PlayerSeasonStatsByTeamPathParams
}

type PlayerSeasonStatsByTeamResponse struct {
	ContentType   string
	PlayerSeasons []interface{}
	StatusCode    int64
}
