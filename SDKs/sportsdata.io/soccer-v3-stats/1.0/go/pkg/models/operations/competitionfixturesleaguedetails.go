package operations




type CompetitionFixturesLeagueDetailsFormatEnum string

const (
    CompetitionFixturesLeagueDetailsFormatEnumXML CompetitionFixturesLeagueDetailsFormatEnum = "xml"
CompetitionFixturesLeagueDetailsFormatEnumJSON CompetitionFixturesLeagueDetailsFormatEnum = "json"
)


type CompetitionFixturesLeagueDetailsPathParams struct {
    Competition string `pathParam:"style=simple,explode=false,name=competition"`
    Format CompetitionFixturesLeagueDetailsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type CompetitionFixturesLeagueDetailsRequest struct {
    PathParams CompetitionFixturesLeagueDetailsPathParams 
    
}

type CompetitionFixturesLeagueDetailsResponse struct {
    CompetitionDetail *interface{} 
    ContentType string 
    StatusCode int64 
    
}

