package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIMembersIDExperiencePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPIMembersIDExperienceRequest struct {
	PathParams GetAPIMembersIDExperiencePathParams
}

type GetAPIMembersIDExperienceResponse struct {
	BiographyExperienceListItem *shared.BiographyExperienceListItem
	Body                        []byte
	ContentType                 string
	StatusCode                  int64
}
