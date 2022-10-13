package operations

type RotoballerArticlesByPlayerFormatEnum string

const (
	RotoballerArticlesByPlayerFormatEnumXML  RotoballerArticlesByPlayerFormatEnum = "xml"
	RotoballerArticlesByPlayerFormatEnumJSON RotoballerArticlesByPlayerFormatEnum = "json"
)

type RotoballerArticlesByPlayerPathParams struct {
	Format   RotoballerArticlesByPlayerFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Playerid string                               `pathParam:"style=simple,explode=false,name=playerid"`
}

type RotoballerArticlesByPlayerRequest struct {
	PathParams RotoballerArticlesByPlayerPathParams
}

type RotoballerArticlesByPlayerResponse struct {
	Articles    []interface{}
	ContentType string
	StatusCode  int64
}
