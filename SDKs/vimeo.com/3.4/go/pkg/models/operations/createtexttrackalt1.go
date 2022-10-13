package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTextTrackAlt1PathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	VideoID   float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type CreateTextTrackAlt1RequestBodyTypeEnum string

const (
	CreateTextTrackAlt1RequestBodyTypeEnumCaptions     CreateTextTrackAlt1RequestBodyTypeEnum = "captions"
	CreateTextTrackAlt1RequestBodyTypeEnumChapters     CreateTextTrackAlt1RequestBodyTypeEnum = "chapters"
	CreateTextTrackAlt1RequestBodyTypeEnumDescriptions CreateTextTrackAlt1RequestBodyTypeEnum = "descriptions"
	CreateTextTrackAlt1RequestBodyTypeEnumMetadata     CreateTextTrackAlt1RequestBodyTypeEnum = "metadata"
	CreateTextTrackAlt1RequestBodyTypeEnumSubtitles    CreateTextTrackAlt1RequestBodyTypeEnum = "subtitles"
)

type CreateTextTrackAlt1RequestBody struct {
	Active   *bool                                  `json:"active"`
	Language string                                 `json:"language"`
	Name     string                                 `json:"name"`
	Type     CreateTextTrackAlt1RequestBodyTypeEnum `json:"type"`
}

type CreateTextTrackAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateTextTrackAlt1Request struct {
	PathParams CreateTextTrackAlt1PathParams
	Request    CreateTextTrackAlt1RequestBody `request:"mediaType=application/vnd.vimeo.video.texttrack+json"`
	Security   CreateTextTrackAlt1Security
}

type CreateTextTrackAlt1Response struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	TextTrack   *shared.TextTrack
}
