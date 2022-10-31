package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersIDAttachmentsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetUsersIDAttachmentsQueryParams struct {
	Unassigned *int64 `queryParam:"style=form,explode=true,name=unassigned"`
}

type GetUsersIDAttachmentsRequest struct {
	PathParams  GetUsersIDAttachmentsPathParams
	QueryParams GetUsersIDAttachmentsQueryParams
}

type GetUsersIDAttachmentsResponse struct {
	Attachments []shared.Attachment
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
