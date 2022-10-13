package operations

import (
	"openapi/pkg/models/shared"
)

type GetPhotosByIdsQueryParams struct {
	DevicePixelRatio *float64 `queryParam:"style=form,explode=true,name=device_pixel_ratio"`
	PhotoIds         string   `queryParam:"style=form,explode=true,name=photo_ids"`
}

type GetPhotosByIdsRequest struct {
	QueryParams GetPhotosByIdsQueryParams
}

type GetPhotosByIdsResponse struct {
	ContentType  string
	PhotoResults []shared.PhotoResult
	StatusCode   int64
}
