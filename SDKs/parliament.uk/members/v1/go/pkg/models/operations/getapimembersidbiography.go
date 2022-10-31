package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIMembersIDBiographyPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPIMembersIDBiographyRequest struct {
	PathParams GetAPIMembersIDBiographyPathParams
}

type GetAPIMembersIDBiographyResponse struct {
	Body                []byte
	ContentType         string
	MemberBiographyItem *shared.MemberBiographyItem
	StatusCode          int64
}
