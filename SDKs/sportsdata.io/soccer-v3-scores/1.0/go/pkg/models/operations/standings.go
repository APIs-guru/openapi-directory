package operations

type StandingsFormatEnum string

const (
	StandingsFormatEnumXML  StandingsFormatEnum = "xml"
	StandingsFormatEnumJSON StandingsFormatEnum = "json"
)

type StandingsPathParams struct {
	Format  StandingsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Roundid string              `pathParam:"style=simple,explode=false,name=roundid"`
}

type StandingsRequest struct {
	PathParams StandingsPathParams
}

type StandingsResponse struct {
	ContentType string
	Standings   []interface{}
	StatusCode  int64
}
