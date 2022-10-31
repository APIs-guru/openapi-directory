package operations

type PlayerGameStatsByTeamFormatEnum string

const (
	PlayerGameStatsByTeamFormatEnumXML  PlayerGameStatsByTeamFormatEnum = "XML"
	PlayerGameStatsByTeamFormatEnumJSON PlayerGameStatsByTeamFormatEnum = "JSON"
)

type PlayerGameStatsByTeamPathParams struct {
	Format PlayerGameStatsByTeamFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                          `pathParam:"style=simple,explode=false,name=season"`
	Team   string                          `pathParam:"style=simple,explode=false,name=team"`
	Week   string                          `pathParam:"style=simple,explode=false,name=week"`
}

type PlayerGameStatsByTeamRequest struct {
	PathParams PlayerGameStatsByTeamPathParams
}

type PlayerGameStatsByTeamResponse struct {
	ContentType string
	PlayerGames []interface{}
	StatusCode  int64
}
