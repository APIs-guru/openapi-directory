package operations



type DeleteAPIV1GenevaActionsEnvironmentsEnvironmentIDPathParams struct {
    EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
    
}

type DeleteAPIV1GenevaActionsEnvironmentsEnvironmentIDQueryParams struct {
    DeletionType *string `queryParam:"style=form,explode=true,name=deletionType"`
    
}

type DeleteAPIV1GenevaActionsEnvironmentsEnvironmentIDRequest struct {
    PathParams DeleteAPIV1GenevaActionsEnvironmentsEnvironmentIDPathParams 
    QueryParams DeleteAPIV1GenevaActionsEnvironmentsEnvironmentIDQueryParams 
    
}

type DeleteAPIV1GenevaActionsEnvironmentsEnvironmentIDResponse struct {
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

