package operations



type StoryIDPublicPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type StoryIDPublicRequest struct {
    PathParams StoryIDPublicPathParams 
    
}

type StoryIDPublicResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    RevealJsPresenation *string 
    
}

