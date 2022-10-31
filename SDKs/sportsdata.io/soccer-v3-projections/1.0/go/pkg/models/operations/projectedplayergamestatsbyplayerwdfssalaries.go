package operations

type ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnum string

const (
	ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnumXML  ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnum = "xml"
	ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnumJSON ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnum = "json"
)

type ProjectedPlayerGameStatsByPlayerWDfsSalariesPathParams struct {
	Date     string                                                 `pathParam:"style=simple,explode=false,name=date"`
	Format   ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Playerid string                                                 `pathParam:"style=simple,explode=false,name=playerid"`
}

type ProjectedPlayerGameStatsByPlayerWDfsSalariesRequest struct {
	PathParams ProjectedPlayerGameStatsByPlayerWDfsSalariesPathParams
}

type ProjectedPlayerGameStatsByPlayerWDfsSalariesResponse struct {
	ContentType           string
	PlayerGameProjections []interface{}
	StatusCode            int64
}
