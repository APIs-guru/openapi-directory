package operations

type DailyFantasyPlayersFormatEnum string

const (
	DailyFantasyPlayersFormatEnumXML  DailyFantasyPlayersFormatEnum = "XML"
	DailyFantasyPlayersFormatEnumJSON DailyFantasyPlayersFormatEnum = "JSON"
)

type DailyFantasyPlayersPathParams struct {
	Date   string                        `pathParam:"style=simple,explode=false,name=date"`
	Format DailyFantasyPlayersFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type DailyFantasyPlayersRequest struct {
	PathParams DailyFantasyPlayersPathParams
}

type DailyFantasyPlayersResponse struct {
	ContentType         string
	DailyFantasyPlayers []interface{}
	StatusCode          int64
}
