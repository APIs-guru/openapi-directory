package operations

type ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum string

const (
	ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnumXML  ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum = "XML"
	ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnumJSON ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum = "JSON"
)

type ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams struct {
	Format ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                                                              `pathParam:"style=simple,explode=false,name=season"`
	Week   string                                                              `pathParam:"style=simple,explode=false,name=week"`
}

type ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest struct {
	PathParams ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams
}

type ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse struct {
	ContentType           string
	PlayerGameProjections []interface{}
	StatusCode            int64
}
