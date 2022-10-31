package operations



type AddOrDeleteRulesQueryParams struct {
    DryRun *bool `queryParam:"style=form,explode=true,name=dry_run"`
    
}

type AddOrDeleteRulesRequest struct {
    QueryParams AddOrDeleteRulesQueryParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type AddOrDeleteRulesResponse struct {
    ContentType string 
    Error *interface{} 
    Problem *interface{} 
    StatusCode int64 
    AddOrDeleteRules200ApplicationJSONOneOf *interface{} 
    
}

