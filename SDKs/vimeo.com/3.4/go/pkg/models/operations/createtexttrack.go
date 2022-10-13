package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTextTrackPathParams struct {
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type CreateTextTrackRequestBodyTypeEnum string

const (
	CreateTextTrackRequestBodyTypeEnumCaptions     CreateTextTrackRequestBodyTypeEnum = "captions"
	CreateTextTrackRequestBodyTypeEnumChapters     CreateTextTrackRequestBodyTypeEnum = "chapters"
	CreateTextTrackRequestBodyTypeEnumDescriptions CreateTextTrackRequestBodyTypeEnum = "descriptions"
	CreateTextTrackRequestBodyTypeEnumMetadata     CreateTextTrackRequestBodyTypeEnum = "metadata"
	CreateTextTrackRequestBodyTypeEnumSubtitles    CreateTextTrackRequestBodyTypeEnum = "subtitles"
)

type CreateTextTrackRequestBody struct {
	Active   *bool                              `json:"active"`
	Language string                             `json:"language"`
	Name     string                             `json:"name"`
	Type     CreateTextTrackRequestBodyTypeEnum `json:"type"`
}

type CreateTextTrackSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateTextTrackRequest struct {
	PathParams CreateTextTrackPathParams
	Request    CreateTextTrackRequestBody `request:"mediaType=application/vnd.vimeo.video.texttrack+json"`
	Security   CreateTextTrackSecurity
}

type CreateTextTrackResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	TextTrack   *shared.TextTrack
}
