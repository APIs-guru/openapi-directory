package operations

import (
"openapi/pkg/models/shared")

type GetPayeeLocationByIDPathParams struct {
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    PayeeLocationID string `pathParam:"style=simple,explode=false,name=payee_location_id"`
    
}

type GetPayeeLocationByIDRequest struct {
    PathParams GetPayeeLocationByIDPathParams 
    
}

type GetPayeeLocationByIDResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    PayeeLocationResponse *shared.PayeeLocationResponse 
    StatusCode int64 
    
}

