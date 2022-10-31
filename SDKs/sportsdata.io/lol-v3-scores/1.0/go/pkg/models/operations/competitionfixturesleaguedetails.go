package operations

type CompetitionFixturesLeagueDetailsFormatEnum string

const (
	CompetitionFixturesLeagueDetailsFormatEnumXML  CompetitionFixturesLeagueDetailsFormatEnum = "xml"
	CompetitionFixturesLeagueDetailsFormatEnumJSON CompetitionFixturesLeagueDetailsFormatEnum = "json"
)

type CompetitionFixturesLeagueDetailsPathParams struct {
	Competitionid string                                     `pathParam:"style=simple,explode=false,name=competitionid"`
	Format        CompetitionFixturesLeagueDetailsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type CompetitionFixturesLeagueDetailsRequest struct {
	PathParams CompetitionFixturesLeagueDetailsPathParams
}

type CompetitionFixturesLeagueDetailsResponse struct {
	CompetitionDetail *interface{}
	ContentType       string
	StatusCode        int64
}
