package operations

type NewsByDateFormatEnum string

const (
	NewsByDateFormatEnumXML  NewsByDateFormatEnum = "XML"
	NewsByDateFormatEnumJSON NewsByDateFormatEnum = "JSON"
)

type NewsByDatePathParams struct {
	Date   string               `pathParam:"style=simple,explode=false,name=date"`
	Format NewsByDateFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type NewsByDateRequest struct {
	PathParams NewsByDatePathParams
}

type NewsByDateResponse struct {
	ContentType string
	News        []interface{}
	StatusCode  int64
}
