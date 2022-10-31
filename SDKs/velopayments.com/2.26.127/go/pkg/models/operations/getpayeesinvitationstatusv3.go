package operations

import (
"openapi/pkg/models/shared")

type GetPayeesInvitationStatusV3PathParams struct {
    PayorID string `pathParam:"style=simple,explode=false,name=payorId"`
    
}

type GetPayeesInvitationStatusV3QueryParams struct {
    InvitationStatus *shared.InvitationStatusEnum `queryParam:"style=form,explode=true,name=invitationStatus"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=pageSize"`
    PayeeID *string `queryParam:"style=form,explode=true,name=payeeId"`
    
}

type GetPayeesInvitationStatusV3Request struct {
    PathParams GetPayeesInvitationStatusV3PathParams 
    QueryParams GetPayeesInvitationStatusV3QueryParams 
    
}

type GetPayeesInvitationStatusV3Response struct {
    ContentType string 
    PagedPayeeInvitationStatusResponse *shared.PagedPayeeInvitationStatusResponse 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

