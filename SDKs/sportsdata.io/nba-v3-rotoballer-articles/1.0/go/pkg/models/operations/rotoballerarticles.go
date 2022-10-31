package operations

type RotoballerArticlesFormatEnum string

const (
	RotoballerArticlesFormatEnumXML  RotoballerArticlesFormatEnum = "xml"
	RotoballerArticlesFormatEnumJSON RotoballerArticlesFormatEnum = "json"
)

type RotoballerArticlesPathParams struct {
	Format RotoballerArticlesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type RotoballerArticlesRequest struct {
	PathParams RotoballerArticlesPathParams
}

type RotoballerArticlesResponse struct {
	Articles    []interface{}
	ContentType string
	StatusCode  int64
}
