package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPIV1HeartBeatRequests struct {
	HeartBeatBody  *shared.HeartBeatBody `request:"mediaType=application/*+json"`
	HeartBeatBody1 *shared.HeartBeatBody `request:"mediaType=application/json"`
	HeartBeatBody2 *shared.HeartBeatBody `request:"mediaType=application/json-patch+json"`
	HeartBeatBody3 *shared.HeartBeatBody `request:"mediaType=text/json"`
}

type PostAPIV1HeartBeatRequest struct {
	Request *PostAPIV1HeartBeatRequests
}

type PostAPIV1HeartBeatResponse struct {
	Body           []byte
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
