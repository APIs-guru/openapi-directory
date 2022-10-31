package operations

import (
	"openapi/pkg/models/shared"
)

type ListUsersQueryParams struct {
	EntityID *string                `queryParam:"style=form,explode=true,name=entityId"`
	Page     *int32                 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32                 `queryParam:"style=form,explode=true,name=pageSize"`
	Sort     *string                `queryParam:"style=form,explode=true,name=sort"`
	Status   *shared.UserStatusEnum `queryParam:"style=form,explode=true,name=status"`
	Type     *shared.UserTypeEnum   `queryParam:"style=form,explode=true,name=type"`
}

type ListUsersRequest struct {
	QueryParams ListUsersQueryParams
}

type ListUsersResponse struct {
	ContentType       string
	PagedUserResponse *shared.PagedUserResponse
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
}
