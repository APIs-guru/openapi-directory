package operations

type GamesByDateFormatEnum string

const (
	GamesByDateFormatEnumXML  GamesByDateFormatEnum = "XML"
	GamesByDateFormatEnumJSON GamesByDateFormatEnum = "JSON"
)

type GamesByDatePathParams struct {
	Date   string                `pathParam:"style=simple,explode=false,name=date"`
	Format GamesByDateFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type GamesByDateRequest struct {
	PathParams GamesByDatePathParams
}

type GamesByDateResponse struct {
	ContentType string
	Games       []interface{}
	StatusCode  int64
}
