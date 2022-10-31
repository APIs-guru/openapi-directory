package operations

import (
	"openapi/pkg/models/shared"
)

type QueryBatchStatusV4PathParams struct {
	BatchID string `pathParam:"style=simple,explode=false,name=batchId"`
}

type QueryBatchStatusV4Request struct {
	PathParams QueryBatchStatusV4PathParams
}

type QueryBatchStatusV4Response struct {
	ContentType         string
	QueryBatchResponse2 *shared.QueryBatchResponse2
	StatusCode          int64
	InlineResponse400   *interface{}
	InlineResponse401   *interface{}
	InlineResponse403   *interface{}
	InlineResponse404   *interface{}
}
