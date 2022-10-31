package operations

import (
	"time"
)

type ExportTransactionsCsvv3QueryParams struct {
	EndDate   *time.Time `queryParam:"style=form,explode=true,name=endDate"`
	PayorID   *string    `queryParam:"style=form,explode=true,name=payorId"`
	StartDate *time.Time `queryParam:"style=form,explode=true,name=startDate"`
}

type ExportTransactionsCsvv3Request struct {
	QueryParams ExportTransactionsCsvv3QueryParams
}

type ExportTransactionsCsvv3Response struct {
	Body              []byte
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
}
