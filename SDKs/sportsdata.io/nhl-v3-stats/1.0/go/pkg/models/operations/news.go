package operations

type NewsFormatEnum string

const (
	NewsFormatEnumXML  NewsFormatEnum = "XML"
	NewsFormatEnumJSON NewsFormatEnum = "JSON"
)

type NewsPathParams struct {
	Format NewsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type NewsRequest struct {
	PathParams NewsPathParams
}

type NewsResponse struct {
	ContentType string
	News        []interface{}
	StatusCode  int64
}
