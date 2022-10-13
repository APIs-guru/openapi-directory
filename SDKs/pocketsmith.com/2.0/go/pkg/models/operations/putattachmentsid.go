package operations

import (
	"openapi/pkg/models/shared"
)

type PutAttachmentsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutAttachmentsIDRequestBody struct {
	Title *string `json:"title"`
}

type PutAttachmentsIDRequest struct {
	PathParams PutAttachmentsIDPathParams
	Request    *PutAttachmentsIDRequestBody `request:"mediaType=application/json"`
}

type PutAttachmentsIDResponse struct {
	Attachment  *shared.Attachment
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
