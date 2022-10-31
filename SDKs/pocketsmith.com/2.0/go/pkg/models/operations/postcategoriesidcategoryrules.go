package operations

import (
"openapi/pkg/models/shared")

type PostCategoriesIDCategoryRulesPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostCategoriesIDCategoryRulesRequestBody struct {
    ApplyToAll *bool `json:"apply_to_all,omitempty"`
    ApplyToUncategorised *bool `json:"apply_to_uncategorised,omitempty"`
    PayeeMatches string `json:"payee_matches"`
    
}

type PostCategoriesIDCategoryRulesRequest struct {
    PathParams PostCategoriesIDCategoryRulesPathParams 
    Request *PostCategoriesIDCategoryRulesRequestBody `request:"mediaType=application/json"`
    
}

type PostCategoriesIDCategoryRulesResponse struct {
    CategoryRule *shared.CategoryRule 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

