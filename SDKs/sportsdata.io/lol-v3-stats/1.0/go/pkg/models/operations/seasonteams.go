package operations

type SeasonTeamsFormatEnum string

const (
	SeasonTeamsFormatEnumXML  SeasonTeamsFormatEnum = "xml"
	SeasonTeamsFormatEnumJSON SeasonTeamsFormatEnum = "json"
)

type SeasonTeamsPathParams struct {
	Format   SeasonTeamsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Seasonid string                `pathParam:"style=simple,explode=false,name=seasonid"`
}

type SeasonTeamsRequest struct {
	PathParams SeasonTeamsPathParams
}

type SeasonTeamsResponse struct {
	ContentType string
	SeasonTeams []interface{}
	StatusCode  int64
}
