package operations

import (
	"openapi/pkg/models/shared"
)

type UploadPhotoRequestBodyPhoto struct {
	Content []byte `multipartForm:"content"`
	Photo   string `multipartForm:"name=photo"`
}

type UploadPhotoRequestBody struct {
	DevicePixelRatio *float64                    `multipartForm:"name=device_pixel_ratio"`
	Photo            UploadPhotoRequestBodyPhoto `multipartForm:"file"`
}

type UploadPhotoRequest struct {
	Request UploadPhotoRequestBody `request:"mediaType=multipart/form-data"`
}

type UploadPhotoResponse struct {
	ContentType string
	PhotoResult *shared.PhotoResult
	StatusCode  int64
}
