package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPILocationBrowseLocationTypeLocationNamePathParams struct {
	LocationName string `pathParam:"style=simple,explode=false,name=locationName"`
	LocationType int32  `pathParam:"style=simple,explode=false,name=locationType"`
}

type GetAPILocationBrowseLocationTypeLocationNameRequest struct {
	PathParams GetAPILocationBrowseLocationTypeLocationNamePathParams
}

type GetAPILocationBrowseLocationTypeLocationNameResponse struct {
	Body         []byte
	ContentType  string
	LocationItem *shared.LocationItem
	StatusCode   int64
}
