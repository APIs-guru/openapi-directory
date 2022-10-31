package operations

type ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum string

const (
	ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnumXML  ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum = "XML"
	ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnumJSON ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum = "JSON"
)

type ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams struct {
	Date   string                                                       `pathParam:"style=simple,explode=false,name=date"`
	Format ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest struct {
	PathParams ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams
}

type ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesResponse struct {
	ContentType           string
	PlayerGameProjections []interface{}
	StatusCode            int64
}
