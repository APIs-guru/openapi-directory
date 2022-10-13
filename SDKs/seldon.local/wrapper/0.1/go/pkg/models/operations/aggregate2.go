package operations

import (
	"openapi/pkg/models/shared"
)

type Aggregate2RequestBody struct {
	JSON *shared.SeldonMessageList `form:"name=json,json"`
}

type Aggregate2Request struct {
	Request Aggregate2RequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type Aggregate2Response struct {
	ContentType   string
	SeldonMessage *shared.SeldonMessage
	StatusCode    int64
}
