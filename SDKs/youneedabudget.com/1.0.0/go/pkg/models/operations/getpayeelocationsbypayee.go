package operations

import (
"openapi/pkg/models/shared")

type GetPayeeLocationsByPayeePathParams struct {
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    PayeeID string `pathParam:"style=simple,explode=false,name=payee_id"`
    
}

type GetPayeeLocationsByPayeeRequest struct {
    PathParams GetPayeeLocationsByPayeePathParams 
    
}

type GetPayeeLocationsByPayeeResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    PayeeLocationsResponse *shared.PayeeLocationsResponse 
    StatusCode int64 
    
}

