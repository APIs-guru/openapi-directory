package operations



type DeleteAPIV1SecretsSecretIDPathParams struct {
    SecretID string `pathParam:"style=simple,explode=false,name=secretId"`
    
}

type DeleteAPIV1SecretsSecretIDQueryParams struct {
    PlanID *string `queryParam:"style=form,explode=true,name=planId"`
    Scope *int32 `queryParam:"style=form,explode=true,name=scope"`
    
}

type DeleteAPIV1SecretsSecretIDRequest struct {
    PathParams DeleteAPIV1SecretsSecretIDPathParams 
    QueryParams DeleteAPIV1SecretsSecretIDQueryParams 
    
}

type DeleteAPIV1SecretsSecretIDResponse struct {
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

