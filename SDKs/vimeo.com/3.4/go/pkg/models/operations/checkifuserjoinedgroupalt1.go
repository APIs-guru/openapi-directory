package operations

import (
	"openapi/pkg/models/shared"
)

type CheckIfUserJoinedGroupAlt1PathParams struct {
	GroupID float64 `pathParam:"style=simple,explode=false,name=group_id"`
}

type CheckIfUserJoinedGroupAlt1Request struct {
	PathParams CheckIfUserJoinedGroupAlt1PathParams
}

type CheckIfUserJoinedGroupAlt1Response struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
