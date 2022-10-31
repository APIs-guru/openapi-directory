package operations



type StoryIDOutlineGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type StoryIDOutlineGetRequest struct {
    PathParams StoryIDOutlineGetPathParams 
    
}

type StoryIDOutlineGetResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    Status *interface{} 
    StoryIDOutlineGet200ApplicationJSONString *string 
    
}

