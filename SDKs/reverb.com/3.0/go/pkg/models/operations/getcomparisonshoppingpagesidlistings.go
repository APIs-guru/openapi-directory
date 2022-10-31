package operations



type GetComparisonShoppingPagesIDListingsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetComparisonShoppingPagesIDListingsQueryParams struct {
    Condition string `queryParam:"style=form,explode=true,name=condition"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetComparisonShoppingPagesIDListingsRequest struct {
    PathParams GetComparisonShoppingPagesIDListingsPathParams 
    QueryParams GetComparisonShoppingPagesIDListingsQueryParams 
    
}

type GetComparisonShoppingPagesIDListingsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

