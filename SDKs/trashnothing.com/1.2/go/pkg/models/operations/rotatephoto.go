package operations

import (
"openapi/pkg/models/shared")

type RotatePhotoPathParams struct {
    PhotoID string `pathParam:"style=simple,explode=false,name=photo_id"`
    
}

type RotatePhotoQueryParams struct {
    Degrees int64 `queryParam:"style=form,explode=true,name=degrees"`
    DevicePixelRatio *float64 `queryParam:"style=form,explode=true,name=device_pixel_ratio"`
    
}

type RotatePhotoRequest struct {
    PathParams RotatePhotoPathParams 
    QueryParams RotatePhotoQueryParams 
    
}

type RotatePhotoResponse struct {
    ContentType string 
    PhotoResult *shared.PhotoResult 
    StatusCode int64 
    
}

