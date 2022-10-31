package operations



type GetCategoriesProductTypeCategoryPathParams struct {
    Category string `pathParam:"style=simple,explode=false,name=category"`
    ProductType string `pathParam:"style=simple,explode=false,name=product_type"`
    
}

type GetCategoriesProductTypeCategoryRequest struct {
    PathParams GetCategoriesProductTypeCategoryPathParams 
    
}

type GetCategoriesProductTypeCategoryResponse struct {
    ContentType string 
    StatusCode int64 
    
}

