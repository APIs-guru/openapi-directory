package operations

type PlayerGameStatsByPlayerFormatEnum string

const (
	PlayerGameStatsByPlayerFormatEnumXML  PlayerGameStatsByPlayerFormatEnum = "xml"
	PlayerGameStatsByPlayerFormatEnumJSON PlayerGameStatsByPlayerFormatEnum = "json"
)

type PlayerGameStatsByPlayerPathParams struct {
	Date     string                            `pathParam:"style=simple,explode=false,name=date"`
	Format   PlayerGameStatsByPlayerFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Playerid string                            `pathParam:"style=simple,explode=false,name=playerid"`
}

type PlayerGameStatsByPlayerRequest struct {
	PathParams PlayerGameStatsByPlayerPathParams
}

type PlayerGameStatsByPlayerResponse struct {
	ContentType string
	PlayerGames []interface{}
	StatusCode  int64
}
