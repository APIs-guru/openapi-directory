package operations

import (
"openapi/pkg/models/shared")

type GetPayCodesFromNominalCodePathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    NominalCodeID string `pathParam:"style=simple,explode=false,name=NominalCodeId"`
    
}

type GetPayCodesFromNominalCodeHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPayCodesFromNominalCodeRequest struct {
    PathParams GetPayCodesFromNominalCodePathParams 
    Headers GetPayCodesFromNominalCodeHeaders 
    
}

type GetPayCodesFromNominalCodeResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

