package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVideoVersionPathParams struct {
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type CreateVideoVersionRequestBodyUploadApproachEnum string

const (
	CreateVideoVersionRequestBodyUploadApproachEnumPost      CreateVideoVersionRequestBodyUploadApproachEnum = "post"
	CreateVideoVersionRequestBodyUploadApproachEnumPull      CreateVideoVersionRequestBodyUploadApproachEnum = "pull"
	CreateVideoVersionRequestBodyUploadApproachEnumStreaming CreateVideoVersionRequestBodyUploadApproachEnum = "streaming"
	CreateVideoVersionRequestBodyUploadApproachEnumTus       CreateVideoVersionRequestBodyUploadApproachEnum = "tus"
)

type CreateVideoVersionRequestBodyUpload struct {
	Approach    CreateVideoVersionRequestBodyUploadApproachEnum `json:"approach"`
	Link        *string                                         `json:"link,omitempty"`
	RedirectURL *string                                         `json:"redirect_url,omitempty"`
	Size        *string                                         `json:"size,omitempty"`
}

type CreateVideoVersionRequestBody struct {
	FileName string                              `json:"file_name"`
	Upload   CreateVideoVersionRequestBodyUpload `json:"upload"`
}

type CreateVideoVersionRequest struct {
	PathParams CreateVideoVersionPathParams
	Request    CreateVideoVersionRequestBody `request:"mediaType=application/vnd.vimeo.video.version+json"`
}

type CreateVideoVersionResponse struct {
	ContentType   string
	StatusCode    int64
	Error         *shared.Error
	VideoVersions *shared.VideoVersions
}
