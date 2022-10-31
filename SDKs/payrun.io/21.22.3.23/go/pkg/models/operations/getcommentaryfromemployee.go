package operations

import (
"openapi/pkg/models/shared")

type GetCommentaryFromEmployeePathParams struct {
    CommentaryID string `pathParam:"style=simple,explode=false,name=CommentaryId"`
    EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetCommentaryFromEmployeeHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetCommentaryFromEmployeeRequest struct {
    PathParams GetCommentaryFromEmployeePathParams 
    Headers GetCommentaryFromEmployeeHeaders 
    
}

type GetCommentaryFromEmployeeResponse struct {
    Commentary *shared.Commentary 
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

