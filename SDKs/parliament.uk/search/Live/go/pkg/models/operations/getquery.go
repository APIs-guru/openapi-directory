package operations



type GetQueryQueryParams struct {
    Count *float64 `queryParam:"style=form,explode=true,name=count"`
    InURLPrefixes *string `queryParam:"style=form,explode=true,name=inUrlPrefixes"`
    Q string `queryParam:"style=form,explode=true,name=q"`
    Start *float64 `queryParam:"style=form,explode=true,name=start"`
    Subdomains *string `queryParam:"style=form,explode=true,name=subdomains"`
    
}

type GetQueryRequest struct {
    QueryParams GetQueryQueryParams 
    
}

type GetQueryResponse struct {
    ContentType string 
    StatusCode int64 
    
}

