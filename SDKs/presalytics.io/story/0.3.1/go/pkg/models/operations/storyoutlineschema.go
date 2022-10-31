package operations



type StoryOutlineSchemaPathParams struct {
    SchemaVersion string `pathParam:"style=simple,explode=false,name=schema_version"`
    
}

type StoryOutlineSchemaRequest struct {
    PathParams StoryOutlineSchemaPathParams 
    
}

type StoryOutlineSchemaResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    
}

