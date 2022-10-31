package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIMembersIDStaffPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPIMembersIDStaffRequest struct {
	PathParams GetAPIMembersIDStaffPathParams
}

type GetAPIMembersIDStaffResponse struct {
	Body          []byte
	ContentType   string
	StaffListItem *shared.StaffListItem
	StatusCode    int64
}
