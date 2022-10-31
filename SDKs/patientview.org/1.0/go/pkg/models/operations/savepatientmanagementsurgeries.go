package operations

import (
"openapi/pkg/models/shared")

type SavePatientManagementSurgeriesPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
    IdentifierID int64 `pathParam:"style=simple,explode=false,name=identifierId"`
    UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
    
}

type SavePatientManagementSurgeriesRequest struct {
    PathParams SavePatientManagementSurgeriesPathParams 
    Request *shared.PatientManagement `request:"mediaType=application/json"`
    
}

type SavePatientManagementSurgeriesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

