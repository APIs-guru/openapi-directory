package operations

import (
"openapi/pkg/models/shared")

type SubmitStoryRequestBody struct {
    Content string `multipartForm:"name=content"`
    DevicePixelRatio *float64 `multipartForm:"name=device_pixel_ratio"`
    PhotoIds *string `multipartForm:"name=photo_ids"`
    Sharing string `multipartForm:"name=sharing"`
    Title string `multipartForm:"name=title"`
    
}

type SubmitStoryRequest struct {
    Request SubmitStoryRequestBody `request:"mediaType=multipart/form-data"`
    
}

type SubmitStoryResponse struct {
    ContentType string 
    StatusCode int64 
    Story *shared.Story 
    
}

