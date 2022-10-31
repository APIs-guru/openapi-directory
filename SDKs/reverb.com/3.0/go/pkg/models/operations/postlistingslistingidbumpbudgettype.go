package operations

import (
"openapi/pkg/models/shared")

type PostListingsListingIDBumpBudgetTypePathParams struct {
    BudgetType string `pathParam:"style=simple,explode=false,name=budget_type"`
    ListingID string `pathParam:"style=simple,explode=false,name=listing_id"`
    
}

type PostListingsListingIDBumpBudgetTypeSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostListingsListingIDBumpBudgetTypeRequest struct {
    PathParams PostListingsListingIDBumpBudgetTypePathParams 
    Security PostListingsListingIDBumpBudgetTypeSecurity 
    
}

type PostListingsListingIDBumpBudgetTypeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

