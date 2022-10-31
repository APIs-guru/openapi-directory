package operations




type PlayerDetailsByFreeAgentFormatEnum string

const (
    PlayerDetailsByFreeAgentFormatEnumXML PlayerDetailsByFreeAgentFormatEnum = "XML"
PlayerDetailsByFreeAgentFormatEnumJSON PlayerDetailsByFreeAgentFormatEnum = "JSON"
)


type PlayerDetailsByFreeAgentPathParams struct {
    Format PlayerDetailsByFreeAgentFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type PlayerDetailsByFreeAgentRequest struct {
    PathParams PlayerDetailsByFreeAgentPathParams 
    
}

type PlayerDetailsByFreeAgentResponse struct {
    ContentType string 
    Players []interface{} 
    StatusCode int64 
    
}

