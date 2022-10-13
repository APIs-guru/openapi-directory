package operations

import (
	"openapi/pkg/models/shared"
)

type PostUsersIDAttachmentsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostUsersIDAttachmentsRequestBody struct {
	FileData *string `json:"file_data"`
	FileName *string `json:"file_name"`
	Title    *string `json:"title"`
}

type PostUsersIDAttachmentsRequest struct {
	PathParams PostUsersIDAttachmentsPathParams
	Request    *PostUsersIDAttachmentsRequestBody `request:"mediaType=application/json"`
}

type PostUsersIDAttachmentsResponse struct {
	Attachment  *shared.Attachment
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
