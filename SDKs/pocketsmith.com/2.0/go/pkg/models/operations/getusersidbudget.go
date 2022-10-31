package operations

import (
"openapi/pkg/models/shared")

type GetUsersIDBudgetPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetUsersIDBudgetQueryParams struct {
    RollUp *bool `queryParam:"style=form,explode=true,name=roll_up"`
    
}

type GetUsersIDBudgetRequest struct {
    PathParams GetUsersIDBudgetPathParams 
    QueryParams GetUsersIDBudgetQueryParams 
    
}

type GetUsersIDBudgetResponse struct {
    BudgetAnalysisPackages []shared.BudgetAnalysisPackage 
    ContentType string 
    StatusCode int64 
    
}

