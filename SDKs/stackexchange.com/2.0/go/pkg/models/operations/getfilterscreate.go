package operations



type GetFiltersCreateQueryParams struct {
    Base *string `queryParam:"style=form,explode=true,name=base"`
    Exclude *string `queryParam:"style=form,explode=true,name=exclude"`
    Include *string `queryParam:"style=form,explode=true,name=include"`
    Unsafe *bool `queryParam:"style=form,explode=true,name=unsafe"`
    
}

type GetFiltersCreateRequest struct {
    QueryParams GetFiltersCreateQueryParams 
    
}

type GetFiltersCreateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

