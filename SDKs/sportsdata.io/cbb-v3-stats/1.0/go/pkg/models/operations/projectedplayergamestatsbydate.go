package operations

type ProjectedPlayerGameStatsByDateFormatEnum string

const (
	ProjectedPlayerGameStatsByDateFormatEnumXML  ProjectedPlayerGameStatsByDateFormatEnum = "XML"
	ProjectedPlayerGameStatsByDateFormatEnumJSON ProjectedPlayerGameStatsByDateFormatEnum = "JSON"
)

type ProjectedPlayerGameStatsByDatePathParams struct {
	Date   string                                   `pathParam:"style=simple,explode=false,name=date"`
	Format ProjectedPlayerGameStatsByDateFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type ProjectedPlayerGameStatsByDateRequest struct {
	PathParams ProjectedPlayerGameStatsByDatePathParams
}

type ProjectedPlayerGameStatsByDateResponse struct {
	ContentType           string
	PlayerGameProjections []interface{}
	StatusCode            int64
}
