package operations

import (
"openapi/pkg/models/shared")

type GetCategoriesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetCategoriesIDRequest struct {
    PathParams GetCategoriesIDPathParams 
    
}

type GetCategoriesIDResponse struct {
    ContentType string 
    GetCategoryResponse *shared.GetCategoryResponse 
    StatusCode int64 
    
}

