package operations



type GetShopsSlugPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type GetShopsSlugQueryParams struct {
    IncludeListingCount *bool `queryParam:"style=form,explode=true,name=include_listing_count"`
    
}

type GetShopsSlugRequest struct {
    PathParams GetShopsSlugPathParams 
    QueryParams GetShopsSlugQueryParams 
    
}

type GetShopsSlugResponse struct {
    ContentType string 
    StatusCode int64 
    
}

