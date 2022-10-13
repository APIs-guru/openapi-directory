package operations

import (
	"openapi/pkg/models/shared"
)

type ListPayeesV4QueryParams struct {
	Disabled        *bool                       `queryParam:"style=form,explode=true,name=disabled"`
	DisplayName     *string                     `queryParam:"style=form,explode=true,name=displayName"`
	Email           *string                     `queryParam:"style=form,explode=true,name=email"`
	OfacStatus      *shared.OfacStatusEnum      `queryParam:"style=form,explode=true,name=ofacStatus"`
	OnboardedStatus *shared.OnboardedStatusEnum `queryParam:"style=form,explode=true,name=onboardedStatus"`
	Page            *int32                      `queryParam:"style=form,explode=true,name=page"`
	PageSize        *int32                      `queryParam:"style=form,explode=true,name=pageSize"`
	PayeeCountry    *string                     `queryParam:"style=form,explode=true,name=payeeCountry"`
	PayeeType       *shared.PayeeTypeEnum       `queryParam:"style=form,explode=true,name=payeeType"`
	PayorID         string                      `queryParam:"style=form,explode=true,name=payorId"`
	RemoteID        *string                     `queryParam:"style=form,explode=true,name=remoteId"`
	Sort            *string                     `queryParam:"style=form,explode=true,name=sort"`
	WatchlistStatus *shared.WatchlistStatusEnum `queryParam:"style=form,explode=true,name=watchlistStatus"`
}

type ListPayeesV4Request struct {
	QueryParams ListPayeesV4QueryParams
}

type ListPayeesV4Response struct {
	ContentType         string
	PagedPayeeResponse2 *shared.PagedPayeeResponse2
	StatusCode          int64
	InlineResponse400   *interface{}
	InlineResponse401   *interface{}
	InlineResponse403   *interface{}
	InlineResponse404   *interface{}
}
