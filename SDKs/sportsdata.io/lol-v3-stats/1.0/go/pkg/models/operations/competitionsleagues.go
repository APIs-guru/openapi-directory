package operations

type CompetitionsLeaguesFormatEnum string

const (
	CompetitionsLeaguesFormatEnumXML  CompetitionsLeaguesFormatEnum = "xml"
	CompetitionsLeaguesFormatEnumJSON CompetitionsLeaguesFormatEnum = "json"
)

type CompetitionsLeaguesPathParams struct {
	Format CompetitionsLeaguesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type CompetitionsLeaguesRequest struct {
	PathParams CompetitionsLeaguesPathParams
}

type CompetitionsLeaguesResponse struct {
	Competitions []interface{}
	ContentType  string
	StatusCode   int64
}
