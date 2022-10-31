package operations




type PlayByPlaySimulationFormatEnum string

const (
    PlayByPlaySimulationFormatEnumXML PlayByPlaySimulationFormatEnum = "XML"
PlayByPlaySimulationFormatEnumJSON PlayByPlaySimulationFormatEnum = "JSON"
)


type PlayByPlaySimulationPathParams struct {
    Format PlayByPlaySimulationFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Numberofplays string `pathParam:"style=simple,explode=false,name=numberofplays"`
    
}

type PlayByPlaySimulationRequest struct {
    PathParams PlayByPlaySimulationPathParams 
    
}

type PlayByPlaySimulationResponse struct {
    ContentType string 
    PlayByPlays []interface{} 
    StatusCode int64 
    
}

