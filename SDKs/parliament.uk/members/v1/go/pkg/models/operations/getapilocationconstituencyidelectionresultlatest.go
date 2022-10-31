package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPILocationConstituencyIDElectionResultLatestPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPILocationConstituencyIDElectionResultLatestRequest struct {
	PathParams GetAPILocationConstituencyIDElectionResultLatestPathParams
}

type GetAPILocationConstituencyIDElectionResultLatestResponse struct {
	Body               []byte
	ContentType        string
	ElectionResultItem *shared.ElectionResultItem
	StatusCode         int64
}
