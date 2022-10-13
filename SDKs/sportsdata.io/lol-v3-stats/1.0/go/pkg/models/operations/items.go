package operations

type ItemsFormatEnum string

const (
	ItemsFormatEnumXML  ItemsFormatEnum = "xml"
	ItemsFormatEnumJSON ItemsFormatEnum = "json"
)

type ItemsPathParams struct {
	Format ItemsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type ItemsRequest struct {
	PathParams ItemsPathParams
}

type ItemsResponse struct {
	ContentType string
	Items       []interface{}
	StatusCode  int64
}
