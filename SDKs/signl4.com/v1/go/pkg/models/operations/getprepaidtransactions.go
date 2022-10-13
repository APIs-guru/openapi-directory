package operations

import (
	"openapi/pkg/models/shared"
)

type GetPrepaidTransactionsResponse struct {
	Body                    []byte
	ContentType             string
	ErrorResponseContent    *shared.ErrorResponseContent
	PrepaidTransactionInfos []shared.PrepaidTransactionInfo
	StatusCode              int64
}
