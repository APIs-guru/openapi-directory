package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayeesInvitationStatusV4PathParams struct {
	PayorID string `pathParam:"style=simple,explode=false,name=payorId"`
}

type GetPayeesInvitationStatusV4QueryParams struct {
	InvitationStatus *shared.InvitationStatusEnum `queryParam:"style=form,explode=true,name=invitationStatus"`
	Page             *int32                       `queryParam:"style=form,explode=true,name=page"`
	PageSize         *int32                       `queryParam:"style=form,explode=true,name=pageSize"`
	PayeeID          *string                      `queryParam:"style=form,explode=true,name=payeeId"`
}

type GetPayeesInvitationStatusV4Request struct {
	PathParams  GetPayeesInvitationStatusV4PathParams
	QueryParams GetPayeesInvitationStatusV4QueryParams
}

type GetPayeesInvitationStatusV4Response struct {
	ContentType                         string
	PagedPayeeInvitationStatusResponse2 *shared.PagedPayeeInvitationStatusResponse2
	StatusCode                          int64
	InlineResponse400                   *interface{}
	InlineResponse401                   *interface{}
	InlineResponse403                   *interface{}
	InlineResponse404                   *interface{}
}
