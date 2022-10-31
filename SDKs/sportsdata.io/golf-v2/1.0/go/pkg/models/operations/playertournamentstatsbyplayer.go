package operations




type PlayerTournamentStatsByPlayerFormatEnum string

const (
    PlayerTournamentStatsByPlayerFormatEnumXML PlayerTournamentStatsByPlayerFormatEnum = "XML"
PlayerTournamentStatsByPlayerFormatEnumJSON PlayerTournamentStatsByPlayerFormatEnum = "JSON"
)


type PlayerTournamentStatsByPlayerPathParams struct {
    Format PlayerTournamentStatsByPlayerFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Playerid string `pathParam:"style=simple,explode=false,name=playerid"`
    Tournamentid string `pathParam:"style=simple,explode=false,name=tournamentid"`
    
}

type PlayerTournamentStatsByPlayerRequest struct {
    PathParams PlayerTournamentStatsByPlayerPathParams 
    
}

type PlayerTournamentStatsByPlayerResponse struct {
    ContentType string 
    PlayerTournament *interface{} 
    StatusCode int64 
    
}

