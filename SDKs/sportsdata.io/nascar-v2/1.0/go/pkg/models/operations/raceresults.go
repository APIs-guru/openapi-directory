package operations




type RaceResultsFormatEnum string

const (
    RaceResultsFormatEnumXML RaceResultsFormatEnum = "xml"
RaceResultsFormatEnumJSON RaceResultsFormatEnum = "json"
)


type RaceResultsPathParams struct {
    Format RaceResultsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Raceid string `pathParam:"style=simple,explode=false,name=raceid"`
    
}

type RaceResultsRequest struct {
    PathParams RaceResultsPathParams 
    
}

type RaceResultsResponse struct {
    ContentType string 
    RaceResult *interface{} 
    StatusCode int64 
    
}

