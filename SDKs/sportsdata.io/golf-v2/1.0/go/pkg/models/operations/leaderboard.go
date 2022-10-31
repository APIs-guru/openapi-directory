package operations




type LeaderboardFormatEnum string

const (
    LeaderboardFormatEnumXML LeaderboardFormatEnum = "XML"
LeaderboardFormatEnumJSON LeaderboardFormatEnum = "JSON"
)


type LeaderboardPathParams struct {
    Format LeaderboardFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Tournamentid string `pathParam:"style=simple,explode=false,name=tournamentid"`
    
}

type LeaderboardRequest struct {
    PathParams LeaderboardPathParams 
    
}

type LeaderboardResponse struct {
    ContentType string 
    Leaderboard *interface{} 
    StatusCode int64 
    
}

