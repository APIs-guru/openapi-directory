package operations

import (
	"openapi/pkg/models/shared"
)

type SubUserPostRequests struct {
	ApplicationXML []byte              `request:"mediaType=application/xml"`
	SubUserData    *shared.SubUserData `request:"mediaType=application/json"`
	SubUserData1   *shared.SubUserData `request:"mediaType=application/x-www-form-urlencoded"`
	SubUserData2   *shared.SubUserData `request:"mediaType=text/json"`
	TextXML        []byte              `request:"mediaType=text/xml"`
}

type SubUserPostRequest struct {
	Request SubUserPostRequests
}

type SubUserPostResponse struct {
	ContentType string
	StatusCode  int64
}
