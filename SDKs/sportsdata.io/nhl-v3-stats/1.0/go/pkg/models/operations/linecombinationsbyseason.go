package operations

type LineCombinationsBySeasonFormatEnum string

const (
	LineCombinationsBySeasonFormatEnumXML  LineCombinationsBySeasonFormatEnum = "XML"
	LineCombinationsBySeasonFormatEnumJSON LineCombinationsBySeasonFormatEnum = "JSON"
)

type LineCombinationsBySeasonPathParams struct {
	Format LineCombinationsBySeasonFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                             `pathParam:"style=simple,explode=false,name=season"`
}

type LineCombinationsBySeasonRequest struct {
	PathParams LineCombinationsBySeasonPathParams
}

type LineCombinationsBySeasonResponse struct {
	ContentType string
	StatusCode  int64
	TeamLines   []interface{}
}
