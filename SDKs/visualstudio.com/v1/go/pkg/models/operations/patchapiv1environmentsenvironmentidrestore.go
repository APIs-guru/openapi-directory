package operations



type PatchAPIV1EnvironmentsEnvironmentIDRestorePathParams struct {
    EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
    
}

type PatchAPIV1EnvironmentsEnvironmentIDRestoreRequest struct {
    PathParams PatchAPIV1EnvironmentsEnvironmentIDRestorePathParams 
    
}

type PatchAPIV1EnvironmentsEnvironmentIDRestoreResponse struct {
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

