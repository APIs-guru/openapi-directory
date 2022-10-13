package operations

import (
	"openapi/pkg/models/shared"
)

type UploadVideoPathParams struct {
	UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type UploadVideoRequestBodyEmbedButtons struct {
	Embed      *bool `json:"embed"`
	Fullscreen *bool `json:"fullscreen"`
	Hd         *bool `json:"hd"`
	Like       *bool `json:"like"`
	Scaling    *bool `json:"scaling"`
	Share      *bool `json:"share"`
	Watchlater *bool `json:"watchlater"`
}

type UploadVideoRequestBodyEmbedLogosCustom struct {
	Active *bool   `json:"active"`
	Link   *string `json:"link"`
	Sticky *bool   `json:"sticky"`
}

type UploadVideoRequestBodyEmbedLogos struct {
	Custom *UploadVideoRequestBodyEmbedLogosCustom `json:"custom"`
	Vimeo  *bool                                   `json:"vimeo"`
}

type UploadVideoRequestBodyEmbedTitleNameEnum string

const (
	UploadVideoRequestBodyEmbedTitleNameEnumHide UploadVideoRequestBodyEmbedTitleNameEnum = "hide"
	UploadVideoRequestBodyEmbedTitleNameEnumShow UploadVideoRequestBodyEmbedTitleNameEnum = "show"
	UploadVideoRequestBodyEmbedTitleNameEnumUser UploadVideoRequestBodyEmbedTitleNameEnum = "user"
)

type UploadVideoRequestBodyEmbedTitleOwnerEnum string

const (
	UploadVideoRequestBodyEmbedTitleOwnerEnumHide UploadVideoRequestBodyEmbedTitleOwnerEnum = "hide"
	UploadVideoRequestBodyEmbedTitleOwnerEnumShow UploadVideoRequestBodyEmbedTitleOwnerEnum = "show"
	UploadVideoRequestBodyEmbedTitleOwnerEnumUser UploadVideoRequestBodyEmbedTitleOwnerEnum = "user"
)

type UploadVideoRequestBodyEmbedTitlePortraitEnum string

const (
	UploadVideoRequestBodyEmbedTitlePortraitEnumHide UploadVideoRequestBodyEmbedTitlePortraitEnum = "hide"
	UploadVideoRequestBodyEmbedTitlePortraitEnumShow UploadVideoRequestBodyEmbedTitlePortraitEnum = "show"
	UploadVideoRequestBodyEmbedTitlePortraitEnumUser UploadVideoRequestBodyEmbedTitlePortraitEnum = "user"
)

type UploadVideoRequestBodyEmbedTitle struct {
	Name     *UploadVideoRequestBodyEmbedTitleNameEnum     `json:"name"`
	Owner    *UploadVideoRequestBodyEmbedTitleOwnerEnum    `json:"owner"`
	Portrait *UploadVideoRequestBodyEmbedTitlePortraitEnum `json:"portrait"`
}

type UploadVideoRequestBodyEmbed struct {
	Buttons *UploadVideoRequestBodyEmbedButtons `json:"buttons"`
	Color   *string                             `json:"color"`
	Logos   *UploadVideoRequestBodyEmbedLogos   `json:"logos"`
	Playbar *bool                               `json:"playbar"`
	Title   *UploadVideoRequestBodyEmbedTitle   `json:"title"`
	Volume  *bool                               `json:"volume"`
}

type UploadVideoRequestBodyLicenseEnum string

const (
	UploadVideoRequestBodyLicenseEnumBy     UploadVideoRequestBodyLicenseEnum = "by"
	UploadVideoRequestBodyLicenseEnumByNc   UploadVideoRequestBodyLicenseEnum = "by-nc"
	UploadVideoRequestBodyLicenseEnumByNcNd UploadVideoRequestBodyLicenseEnum = "by-nc-nd"
	UploadVideoRequestBodyLicenseEnumByNcSa UploadVideoRequestBodyLicenseEnum = "by-nc-sa"
	UploadVideoRequestBodyLicenseEnumByNd   UploadVideoRequestBodyLicenseEnum = "by-nd"
	UploadVideoRequestBodyLicenseEnumBySa   UploadVideoRequestBodyLicenseEnum = "by-sa"
	UploadVideoRequestBodyLicenseEnumCc0    UploadVideoRequestBodyLicenseEnum = "cc0"
)

type UploadVideoRequestBodyPrivacyCommentsEnum string

const (
	UploadVideoRequestBodyPrivacyCommentsEnumAnybody  UploadVideoRequestBodyPrivacyCommentsEnum = "anybody"
	UploadVideoRequestBodyPrivacyCommentsEnumContacts UploadVideoRequestBodyPrivacyCommentsEnum = "contacts"
	UploadVideoRequestBodyPrivacyCommentsEnumNobody   UploadVideoRequestBodyPrivacyCommentsEnum = "nobody"
)

type UploadVideoRequestBodyPrivacyEmbedEnum string

const (
	UploadVideoRequestBodyPrivacyEmbedEnumPrivate   UploadVideoRequestBodyPrivacyEmbedEnum = "private"
	UploadVideoRequestBodyPrivacyEmbedEnumPublic    UploadVideoRequestBodyPrivacyEmbedEnum = "public"
	UploadVideoRequestBodyPrivacyEmbedEnumWhitelist UploadVideoRequestBodyPrivacyEmbedEnum = "whitelist"
)

type UploadVideoRequestBodyPrivacyViewEnum string

const (
	UploadVideoRequestBodyPrivacyViewEnumAnybody  UploadVideoRequestBodyPrivacyViewEnum = "anybody"
	UploadVideoRequestBodyPrivacyViewEnumContacts UploadVideoRequestBodyPrivacyViewEnum = "contacts"
	UploadVideoRequestBodyPrivacyViewEnumDisable  UploadVideoRequestBodyPrivacyViewEnum = "disable"
	UploadVideoRequestBodyPrivacyViewEnumNobody   UploadVideoRequestBodyPrivacyViewEnum = "nobody"
	UploadVideoRequestBodyPrivacyViewEnumPassword UploadVideoRequestBodyPrivacyViewEnum = "password"
	UploadVideoRequestBodyPrivacyViewEnumUnlisted UploadVideoRequestBodyPrivacyViewEnum = "unlisted"
	UploadVideoRequestBodyPrivacyViewEnumUsers    UploadVideoRequestBodyPrivacyViewEnum = "users"
)

type UploadVideoRequestBodyPrivacy struct {
	Add      *bool                                      `json:"add"`
	Comments *UploadVideoRequestBodyPrivacyCommentsEnum `json:"comments"`
	Download *bool                                      `json:"download"`
	Embed    *UploadVideoRequestBodyPrivacyEmbedEnum    `json:"embed"`
	View     *UploadVideoRequestBodyPrivacyViewEnum     `json:"view"`
}

type UploadVideoRequestBodyRatingsMpaaReasonEnum string

const (
	UploadVideoRequestBodyRatingsMpaaReasonEnumAt UploadVideoRequestBodyRatingsMpaaReasonEnum = "at"
	UploadVideoRequestBodyRatingsMpaaReasonEnumBn UploadVideoRequestBodyRatingsMpaaReasonEnum = "bn"
	UploadVideoRequestBodyRatingsMpaaReasonEnumN  UploadVideoRequestBodyRatingsMpaaReasonEnum = "n"
	UploadVideoRequestBodyRatingsMpaaReasonEnumSl UploadVideoRequestBodyRatingsMpaaReasonEnum = "sl"
	UploadVideoRequestBodyRatingsMpaaReasonEnumSs UploadVideoRequestBodyRatingsMpaaReasonEnum = "ss"
	UploadVideoRequestBodyRatingsMpaaReasonEnumV  UploadVideoRequestBodyRatingsMpaaReasonEnum = "v"
)

type UploadVideoRequestBodyRatingsMpaa struct {
	Reason *UploadVideoRequestBodyRatingsMpaaReasonEnum `json:"reason"`
}

type UploadVideoRequestBodyRatingsTvReasonEnum string

const (
	UploadVideoRequestBodyRatingsTvReasonEnumD  UploadVideoRequestBodyRatingsTvReasonEnum = "d"
	UploadVideoRequestBodyRatingsTvReasonEnumFv UploadVideoRequestBodyRatingsTvReasonEnum = "fv"
	UploadVideoRequestBodyRatingsTvReasonEnumL  UploadVideoRequestBodyRatingsTvReasonEnum = "l"
	UploadVideoRequestBodyRatingsTvReasonEnumSs UploadVideoRequestBodyRatingsTvReasonEnum = "ss"
	UploadVideoRequestBodyRatingsTvReasonEnumV  UploadVideoRequestBodyRatingsTvReasonEnum = "v"
)

type UploadVideoRequestBodyRatingsTv struct {
	Reason *UploadVideoRequestBodyRatingsTvReasonEnum `json:"reason"`
}

type UploadVideoRequestBodyRatings struct {
	Mpaa *UploadVideoRequestBodyRatingsMpaa `json:"mpaa"`
	Tv   *UploadVideoRequestBodyRatingsTv   `json:"tv"`
}

type UploadVideoRequestBodyReviewPage struct {
	Active *bool `json:"active"`
}

type UploadVideoRequestBodySpatialDirectorTimeline struct {
	Pitch    float64  `json:"pitch"`
	Roll     *float64 `json:"roll"`
	TimeCode float64  `json:"time_code"`
	Yaw      float64  `json:"yaw"`
}

type UploadVideoRequestBodySpatialProjectionEnum string

const (
	UploadVideoRequestBodySpatialProjectionEnumCubical         UploadVideoRequestBodySpatialProjectionEnum = "cubical"
	UploadVideoRequestBodySpatialProjectionEnumCylindrical     UploadVideoRequestBodySpatialProjectionEnum = "cylindrical"
	UploadVideoRequestBodySpatialProjectionEnumDome            UploadVideoRequestBodySpatialProjectionEnum = "dome"
	UploadVideoRequestBodySpatialProjectionEnumEquirectangular UploadVideoRequestBodySpatialProjectionEnum = "equirectangular"
	UploadVideoRequestBodySpatialProjectionEnumPyramid         UploadVideoRequestBodySpatialProjectionEnum = "pyramid"
)

type UploadVideoRequestBodySpatialStereoFormatEnum string

const (
	UploadVideoRequestBodySpatialStereoFormatEnumLeftRight UploadVideoRequestBodySpatialStereoFormatEnum = "left-right"
	UploadVideoRequestBodySpatialStereoFormatEnumMono      UploadVideoRequestBodySpatialStereoFormatEnum = "mono"
	UploadVideoRequestBodySpatialStereoFormatEnumTopBottom UploadVideoRequestBodySpatialStereoFormatEnum = "top-bottom"
)

type UploadVideoRequestBodySpatial struct {
	DirectorTimeline []UploadVideoRequestBodySpatialDirectorTimeline `json:"director_timeline"`
	FieldOfView      *float64                                        `json:"field_of_view"`
	Projection       *UploadVideoRequestBodySpatialProjectionEnum    `json:"projection"`
	StereoFormat     *UploadVideoRequestBodySpatialStereoFormatEnum  `json:"stereo_format"`
}

type UploadVideoRequestBodyUploadApproachEnum string

const (
	UploadVideoRequestBodyUploadApproachEnumPost      UploadVideoRequestBodyUploadApproachEnum = "post"
	UploadVideoRequestBodyUploadApproachEnumPull      UploadVideoRequestBodyUploadApproachEnum = "pull"
	UploadVideoRequestBodyUploadApproachEnumStreaming UploadVideoRequestBodyUploadApproachEnum = "streaming"
	UploadVideoRequestBodyUploadApproachEnumTus       UploadVideoRequestBodyUploadApproachEnum = "tus"
)

type UploadVideoRequestBodyUpload struct {
	Approach    UploadVideoRequestBodyUploadApproachEnum `json:"approach"`
	Link        *string                                  `json:"link"`
	RedirectURL *string                                  `json:"redirect_url"`
	Size        *string                                  `json:"size"`
}

type UploadVideoRequestBody struct {
	ContentRating []string                           `json:"content_rating"`
	Description   *string                            `json:"description"`
	Embed         *UploadVideoRequestBodyEmbed       `json:"embed"`
	License       *UploadVideoRequestBodyLicenseEnum `json:"license"`
	Locale        *string                            `json:"locale"`
	Name          *string                            `json:"name"`
	Password      *string                            `json:"password"`
	Privacy       *UploadVideoRequestBodyPrivacy     `json:"privacy"`
	Ratings       *UploadVideoRequestBodyRatings     `json:"ratings"`
	ReviewPage    *UploadVideoRequestBodyReviewPage  `json:"review_page"`
	Spatial       *UploadVideoRequestBodySpatial     `json:"spatial"`
	Upload        UploadVideoRequestBodyUpload       `json:"upload"`
}

type UploadVideoRequest struct {
	PathParams UploadVideoPathParams
	Request    UploadVideoRequestBody `request:"mediaType=application/vnd.vimeo.video+json"`
}

type UploadVideoResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	Video       *shared.Video
}
