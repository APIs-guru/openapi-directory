package operations




type UpcomingDfsSlatesByCompetitionFormatEnum string

const (
    UpcomingDfsSlatesByCompetitionFormatEnumJSON UpcomingDfsSlatesByCompetitionFormatEnum = "json"
UpcomingDfsSlatesByCompetitionFormatEnumXML UpcomingDfsSlatesByCompetitionFormatEnum = "xml"
)


type UpcomingDfsSlatesByCompetitionPathParams struct {
    CompetitionID string `pathParam:"style=simple,explode=false,name=competitionId"`
    Format UpcomingDfsSlatesByCompetitionFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type UpcomingDfsSlatesByCompetitionRequest struct {
    PathParams UpcomingDfsSlatesByCompetitionPathParams 
    
}

type UpcomingDfsSlatesByCompetitionResponse struct {
    ContentType string 
    DfsSlates []interface{} 
    StatusCode int64 
    
}

