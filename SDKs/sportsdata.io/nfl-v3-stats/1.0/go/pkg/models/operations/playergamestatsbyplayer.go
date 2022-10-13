package operations

type PlayerGameStatsByPlayerFormatEnum string

const (
	PlayerGameStatsByPlayerFormatEnumXML  PlayerGameStatsByPlayerFormatEnum = "XML"
	PlayerGameStatsByPlayerFormatEnumJSON PlayerGameStatsByPlayerFormatEnum = "JSON"
)

type PlayerGameStatsByPlayerPathParams struct {
	Format   PlayerGameStatsByPlayerFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Playerid string                            `pathParam:"style=simple,explode=false,name=playerid"`
	Season   string                            `pathParam:"style=simple,explode=false,name=season"`
	Week     string                            `pathParam:"style=simple,explode=false,name=week"`
}

type PlayerGameStatsByPlayerRequest struct {
	PathParams PlayerGameStatsByPlayerPathParams
}

type PlayerGameStatsByPlayerResponse struct {
	ContentType string
	PlayerGame  *interface{}
	StatusCode  int64
}
