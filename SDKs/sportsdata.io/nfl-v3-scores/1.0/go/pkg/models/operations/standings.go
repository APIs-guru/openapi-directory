package operations

type StandingsFormatEnum string

const (
	StandingsFormatEnumXML  StandingsFormatEnum = "XML"
	StandingsFormatEnumJSON StandingsFormatEnum = "JSON"
)

type StandingsPathParams struct {
	Format StandingsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string              `pathParam:"style=simple,explode=false,name=season"`
}

type StandingsRequest struct {
	PathParams StandingsPathParams
}

type StandingsResponse struct {
	ContentType string
	Standings   []interface{}
	StatusCode  int64
}
