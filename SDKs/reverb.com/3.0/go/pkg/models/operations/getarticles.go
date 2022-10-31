package operations



type GetArticlesQueryParams struct {
    ExcludeFeatured *int64 `queryParam:"style=form,explode=true,name=exclude_featured"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    
}

type GetArticlesRequest struct {
    QueryParams GetArticlesQueryParams 
    
}

type GetArticlesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

