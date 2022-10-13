package operations

type IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum string

const (
	IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnumXML  IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum = "XML"
	IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnumJSON IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum = "JSON"
)

type IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams struct {
	Format IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                                                                 `pathParam:"style=simple,explode=false,name=season"`
	Week   string                                                                 `pathParam:"style=simple,explode=false,name=week"`
}

type IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest struct {
	PathParams IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams
}

type IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse struct {
	ContentType           string
	PlayerGameProjections []interface{}
	StatusCode            int64
}
