package operations

import (
	"openapi/pkg/models/shared"
)

type GetPrepaidBalanceResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	PrepaidBalanceInfo   *shared.PrepaidBalanceInfo
	StatusCode           int64
}
