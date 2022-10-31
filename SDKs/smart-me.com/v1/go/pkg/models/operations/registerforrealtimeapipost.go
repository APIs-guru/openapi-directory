package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterForRealtimeAPIPostRequests struct {
	ApplicationXML           []byte                          `request:"mediaType=application/xml"`
	RegisterRealtimeAPIData  *shared.RegisterRealtimeAPIData `request:"mediaType=application/json"`
	RegisterRealtimeAPIData1 *shared.RegisterRealtimeAPIData `request:"mediaType=application/x-www-form-urlencoded"`
	RegisterRealtimeAPIData2 *shared.RegisterRealtimeAPIData `request:"mediaType=text/json"`
	TextXML                  []byte                          `request:"mediaType=text/xml"`
}

type RegisterForRealtimeAPIPostRequest struct {
	Request RegisterForRealtimeAPIPostRequests
}

type RegisterForRealtimeAPIPostResponse struct {
	ContentType string
	StatusCode  int64
}
