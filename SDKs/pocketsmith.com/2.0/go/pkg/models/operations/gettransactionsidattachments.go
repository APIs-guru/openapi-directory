package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionsIDAttachmentsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetTransactionsIDAttachmentsRequest struct {
	PathParams GetTransactionsIDAttachmentsPathParams
}

type GetTransactionsIDAttachmentsResponse struct {
	Attachments []shared.Attachment
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
