package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEnergyCostPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type UpdateEnergyCostRequest struct {
	PathParams UpdateEnergyCostPathParams
	Request    *shared.GroupConfiguration `request:"mediaType=application/json"`
}

type UpdateEnergyCostResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
