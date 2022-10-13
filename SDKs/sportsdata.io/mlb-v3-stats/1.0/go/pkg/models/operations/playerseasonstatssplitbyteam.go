package operations

type PlayerSeasonStatsSplitByTeamFormatEnum string

const (
	PlayerSeasonStatsSplitByTeamFormatEnumXML  PlayerSeasonStatsSplitByTeamFormatEnum = "XML"
	PlayerSeasonStatsSplitByTeamFormatEnumJSON PlayerSeasonStatsSplitByTeamFormatEnum = "JSON"
)

type PlayerSeasonStatsSplitByTeamPathParams struct {
	Format PlayerSeasonStatsSplitByTeamFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                                 `pathParam:"style=simple,explode=false,name=season"`
}

type PlayerSeasonStatsSplitByTeamRequest struct {
	PathParams PlayerSeasonStatsSplitByTeamPathParams
}

type PlayerSeasonStatsSplitByTeamResponse struct {
	ContentType   string
	PlayerSeasons []interface{}
	StatusCode    int64
}
