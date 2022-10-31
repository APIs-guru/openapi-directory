package operations

type TeamsBySeasonFormatEnum string

const (
	TeamsBySeasonFormatEnumXML  TeamsBySeasonFormatEnum = "XML"
	TeamsBySeasonFormatEnumJSON TeamsBySeasonFormatEnum = "JSON"
)

type TeamsBySeasonPathParams struct {
	Format TeamsBySeasonFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                  `pathParam:"style=simple,explode=false,name=season"`
}

type TeamsBySeasonRequest struct {
	PathParams TeamsBySeasonPathParams
}

type TeamsBySeasonResponse struct {
	ContentType string
	StatusCode  int64
	Teams       []interface{}
}
