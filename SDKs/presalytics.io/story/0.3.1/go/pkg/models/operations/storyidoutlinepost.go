package operations



type StoryIDOutlinePostPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type StoryIDOutlinePostRequest struct {
    PathParams StoryIDOutlinePostPathParams 
    Request string `request:"mediaType=application/json"`
    
}

type StoryIDOutlinePostResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    
}

