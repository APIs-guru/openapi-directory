package operations

import (
	"openapi/pkg/models/shared"
)

type GetVodBackgroundsPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type GetVodBackgroundsQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetVodBackgroundsRequest struct {
	PathParams  GetVodBackgroundsPathParams
	QueryParams GetVodBackgroundsQueryParams
}

type GetVodBackgroundsResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Pictures    []shared.Picture
}
