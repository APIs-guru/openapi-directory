package operations



type GetAPINameSuggestionsQueryParams struct {
    StartingWords string `queryParam:"style=form,explode=true,name=startingWords"`
    
}

type GetAPINameSuggestionsHeaders struct {
    XAPIKey *string `header:"style=simple,explode=false,name=X-Api-Key"`
    
}

type GetAPINameSuggestionsRequest struct {
    QueryParams GetAPINameSuggestionsQueryParams 
    Headers GetAPINameSuggestionsHeaders 
    
}

type GetAPINameSuggestionsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

