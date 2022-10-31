package operations




type AreGamesInProgressFormatEnum string

const (
    AreGamesInProgressFormatEnumXML AreGamesInProgressFormatEnum = "XML"
AreGamesInProgressFormatEnumJSON AreGamesInProgressFormatEnum = "JSON"
)


type AreGamesInProgressPathParams struct {
    Format AreGamesInProgressFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type AreGamesInProgressRequest struct {
    PathParams AreGamesInProgressPathParams 
    
}

type AreGamesInProgressResponse struct {
    AreGamesInProgress200ApplicationJSONBoolean *bool 
    ContentType string 
    StatusCode int64 
    
}

