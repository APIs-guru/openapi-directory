package operations

import (
	"openapi/pkg/models/shared"
)

type EditTextTrackPathParams struct {
	TexttrackID float64 `pathParam:"style=simple,explode=false,name=texttrack_id"`
	VideoID     float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type EditTextTrackRequestBodyTypeEnum string

const (
	EditTextTrackRequestBodyTypeEnumCaptions     EditTextTrackRequestBodyTypeEnum = "captions"
	EditTextTrackRequestBodyTypeEnumChapters     EditTextTrackRequestBodyTypeEnum = "chapters"
	EditTextTrackRequestBodyTypeEnumDescriptions EditTextTrackRequestBodyTypeEnum = "descriptions"
	EditTextTrackRequestBodyTypeEnumMetadata     EditTextTrackRequestBodyTypeEnum = "metadata"
	EditTextTrackRequestBodyTypeEnumSubtitles    EditTextTrackRequestBodyTypeEnum = "subtitles"
)

type EditTextTrackRequestBody struct {
	Active   *bool                             `json:"active,omitempty"`
	Language *string                           `json:"language,omitempty"`
	Name     *string                           `json:"name,omitempty"`
	Type     *EditTextTrackRequestBodyTypeEnum `json:"type,omitempty"`
}

type EditTextTrackSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type EditTextTrackRequest struct {
	PathParams EditTextTrackPathParams
	Request    *EditTextTrackRequestBody `request:"mediaType=application/vnd.vimeo.video.texttrack+json"`
	Security   EditTextTrackSecurity
}

type EditTextTrackResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	TextTrack   *shared.TextTrack
}
