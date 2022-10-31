package operations

import (
	"openapi/pkg/models/shared"
)

type GymGetPathParams struct {
	GymID int32 `pathParam:"style=simple,explode=false,name=gymID"`
}

type GymGetRequest struct {
	PathParams GymGetPathParams
}

type GymGetResponse struct {
	APIResponse                *shared.APIResponse
	ContentType                string
	DefaultResponseDtoOfGymDto *shared.DefaultResponseDtoOfGymDto
	StatusCode                 int64
}
