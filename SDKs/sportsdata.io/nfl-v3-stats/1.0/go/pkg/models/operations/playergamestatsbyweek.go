package operations

type PlayerGameStatsByWeekFormatEnum string

const (
	PlayerGameStatsByWeekFormatEnumXML  PlayerGameStatsByWeekFormatEnum = "XML"
	PlayerGameStatsByWeekFormatEnumJSON PlayerGameStatsByWeekFormatEnum = "JSON"
)

type PlayerGameStatsByWeekPathParams struct {
	Format PlayerGameStatsByWeekFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                          `pathParam:"style=simple,explode=false,name=season"`
	Week   string                          `pathParam:"style=simple,explode=false,name=week"`
}

type PlayerGameStatsByWeekRequest struct {
	PathParams PlayerGameStatsByWeekPathParams
}

type PlayerGameStatsByWeekResponse struct {
	ContentType string
	PlayerGames []interface{}
	StatusCode  int64
}
