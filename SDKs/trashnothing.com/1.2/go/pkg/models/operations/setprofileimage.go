package operations

import (
	"openapi/pkg/models/shared"
)

type SetProfileImageRequestBodyPhoto struct {
	Content []byte `multipartForm:"content"`
	Photo   string `multipartForm:"name=photo"`
}

type SetProfileImageRequestBody struct {
	Crop             *string                          `multipartForm:"name=crop"`
	DevicePixelRatio *float64                         `multipartForm:"name=device_pixel_ratio"`
	Photo            *SetProfileImageRequestBodyPhoto `multipartForm:"file"`
	PhotoID          *string                          `multipartForm:"name=photo_id"`
	SetDefault       *int64                           `multipartForm:"name=set_default"`
}

type SetProfileImage200ApplicationJSON struct {
	Photo *shared.PhotoResult `json:"photo,omitempty"`
	User  *shared.CurrentUser `json:"user,omitempty"`
}

type SetProfileImageRequest struct {
	Request *SetProfileImageRequestBody `request:"mediaType=multipart/form-data"`
}

type SetProfileImageResponse struct {
	ContentType                             string
	StatusCode                              int64
	SetProfileImage200ApplicationJSONObject *SetProfileImage200ApplicationJSON
}
