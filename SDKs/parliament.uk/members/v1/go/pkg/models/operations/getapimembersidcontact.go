package operations

import (
"openapi/pkg/models/shared")

type GetAPIMembersIDContactPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAPIMembersIDContactRequest struct {
    PathParams GetAPIMembersIDContactPathParams 
    
}

type GetAPIMembersIDContactResponse struct {
    Body []byte 
    ContactInformationListItem *shared.ContactInformationListItem 
    ContentType string 
    StatusCode int64 
    
}

