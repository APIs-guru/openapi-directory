package operations

type ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum string

const (
	ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnumXML  ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum = "XML"
	ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnumJSON ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum = "JSON"
)

type ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesPathParams struct {
	Date     string                                                         `pathParam:"style=simple,explode=false,name=date"`
	Format   ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Playerid string                                                         `pathParam:"style=simple,explode=false,name=playerid"`
}

type ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesRequest struct {
	PathParams ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesPathParams
}

type ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesResponse struct {
	ContentType          string
	PlayerGameProjection *interface{}
	StatusCode           int64
}
