package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1GenevaActionsBillingEnvironmentIDPathParams struct {
    EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
    
}

type GetAPIV1GenevaActionsBillingEnvironmentIDQueryParams struct {
    EndTime *string `queryParam:"style=form,explode=true,name=endTime"`
    StartTime *string `queryParam:"style=form,explode=true,name=startTime"`
    
}

type GetAPIV1GenevaActionsBillingEnvironmentIDRequest struct {
    PathParams GetAPIV1GenevaActionsBillingEnvironmentIDPathParams 
    QueryParams GetAPIV1GenevaActionsBillingEnvironmentIDQueryParams 
    
}

type GetAPIV1GenevaActionsBillingEnvironmentIDResponse struct {
    BillSummary *shared.BillSummary 
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

