package operations

import (
	"openapi/pkg/models/shared"
)

type DiscoveryReceivesRequest struct {
	Request shared.DiscoverableParticipant `request:"mediaType=application/json"`
}

type DiscoveryReceivesResponse struct {
	ContentType           string
	DiscoveredParticipant *shared.DiscoveredParticipant
	ErrorModels           []interface{}
	StatusCode            int64
}
