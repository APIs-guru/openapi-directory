package operations

type RotoballerArticlesByDateFormatEnum string

const (
	RotoballerArticlesByDateFormatEnumXML  RotoballerArticlesByDateFormatEnum = "xml"
	RotoballerArticlesByDateFormatEnumJSON RotoballerArticlesByDateFormatEnum = "json"
)

type RotoballerArticlesByDatePathParams struct {
	Date   string                             `pathParam:"style=simple,explode=false,name=date"`
	Format RotoballerArticlesByDateFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type RotoballerArticlesByDateRequest struct {
	PathParams RotoballerArticlesByDatePathParams
}

type RotoballerArticlesByDateResponse struct {
	Articles    []interface{}
	ContentType string
	StatusCode  int64
}
