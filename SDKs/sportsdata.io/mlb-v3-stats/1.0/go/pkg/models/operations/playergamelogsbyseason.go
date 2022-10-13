package operations

type PlayerGameLogsBySeasonFormatEnum string

const (
	PlayerGameLogsBySeasonFormatEnumJSON PlayerGameLogsBySeasonFormatEnum = "JSON"
	PlayerGameLogsBySeasonFormatEnumXML  PlayerGameLogsBySeasonFormatEnum = "XML"
)

type PlayerGameLogsBySeasonPathParams struct {
	Format        PlayerGameLogsBySeasonFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Numberofgames string                           `pathParam:"style=simple,explode=false,name=numberofgames"`
	Playerid      string                           `pathParam:"style=simple,explode=false,name=playerid"`
	Season        string                           `pathParam:"style=simple,explode=false,name=season"`
}

type PlayerGameLogsBySeasonRequest struct {
	PathParams PlayerGameLogsBySeasonPathParams
}

type PlayerGameLogsBySeasonResponse struct {
	ContentType string
	PlayerGames []interface{}
	StatusCode  int64
}
