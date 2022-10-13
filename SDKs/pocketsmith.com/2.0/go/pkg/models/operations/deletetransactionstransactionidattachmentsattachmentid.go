package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTransactionsTransactionIDAttachmentsAttachmentIDPathParams struct {
	AttachmentID  int64 `pathParam:"style=simple,explode=false,name=attachment_id"`
	TransactionID int64 `pathParam:"style=simple,explode=false,name=transaction_id"`
}

type DeleteTransactionsTransactionIDAttachmentsAttachmentIDRequest struct {
	PathParams DeleteTransactionsTransactionIDAttachmentsAttachmentIDPathParams
}

type DeleteTransactionsTransactionIDAttachmentsAttachmentIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
