package operations

import (
	"openapi/pkg/models/shared"
)

type UploadVideoAlt1RequestBodyEmbedButtons struct {
	Embed      *bool `json:"embed"`
	Fullscreen *bool `json:"fullscreen"`
	Hd         *bool `json:"hd"`
	Like       *bool `json:"like"`
	Scaling    *bool `json:"scaling"`
	Share      *bool `json:"share"`
	Watchlater *bool `json:"watchlater"`
}

type UploadVideoAlt1RequestBodyEmbedLogosCustom struct {
	Active *bool   `json:"active"`
	Link   *string `json:"link"`
	Sticky *bool   `json:"sticky"`
}

type UploadVideoAlt1RequestBodyEmbedLogos struct {
	Custom *UploadVideoAlt1RequestBodyEmbedLogosCustom `json:"custom"`
	Vimeo  *bool                                       `json:"vimeo"`
}

type UploadVideoAlt1RequestBodyEmbedTitleNameEnum string

const (
	UploadVideoAlt1RequestBodyEmbedTitleNameEnumHide UploadVideoAlt1RequestBodyEmbedTitleNameEnum = "hide"
	UploadVideoAlt1RequestBodyEmbedTitleNameEnumShow UploadVideoAlt1RequestBodyEmbedTitleNameEnum = "show"
	UploadVideoAlt1RequestBodyEmbedTitleNameEnumUser UploadVideoAlt1RequestBodyEmbedTitleNameEnum = "user"
)

type UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum string

const (
	UploadVideoAlt1RequestBodyEmbedTitleOwnerEnumHide UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum = "hide"
	UploadVideoAlt1RequestBodyEmbedTitleOwnerEnumShow UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum = "show"
	UploadVideoAlt1RequestBodyEmbedTitleOwnerEnumUser UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum = "user"
)

type UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum string

const (
	UploadVideoAlt1RequestBodyEmbedTitlePortraitEnumHide UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum = "hide"
	UploadVideoAlt1RequestBodyEmbedTitlePortraitEnumShow UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum = "show"
	UploadVideoAlt1RequestBodyEmbedTitlePortraitEnumUser UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum = "user"
)

type UploadVideoAlt1RequestBodyEmbedTitle struct {
	Name     *UploadVideoAlt1RequestBodyEmbedTitleNameEnum     `json:"name"`
	Owner    *UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum    `json:"owner"`
	Portrait *UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum `json:"portrait"`
}

type UploadVideoAlt1RequestBodyEmbed struct {
	Buttons *UploadVideoAlt1RequestBodyEmbedButtons `json:"buttons"`
	Color   *string                                 `json:"color"`
	Logos   *UploadVideoAlt1RequestBodyEmbedLogos   `json:"logos"`
	Playbar *bool                                   `json:"playbar"`
	Title   *UploadVideoAlt1RequestBodyEmbedTitle   `json:"title"`
	Volume  *bool                                   `json:"volume"`
}

type UploadVideoAlt1RequestBodyLicenseEnum string

const (
	UploadVideoAlt1RequestBodyLicenseEnumBy     UploadVideoAlt1RequestBodyLicenseEnum = "by"
	UploadVideoAlt1RequestBodyLicenseEnumByNc   UploadVideoAlt1RequestBodyLicenseEnum = "by-nc"
	UploadVideoAlt1RequestBodyLicenseEnumByNcNd UploadVideoAlt1RequestBodyLicenseEnum = "by-nc-nd"
	UploadVideoAlt1RequestBodyLicenseEnumByNcSa UploadVideoAlt1RequestBodyLicenseEnum = "by-nc-sa"
	UploadVideoAlt1RequestBodyLicenseEnumByNd   UploadVideoAlt1RequestBodyLicenseEnum = "by-nd"
	UploadVideoAlt1RequestBodyLicenseEnumBySa   UploadVideoAlt1RequestBodyLicenseEnum = "by-sa"
	UploadVideoAlt1RequestBodyLicenseEnumCc0    UploadVideoAlt1RequestBodyLicenseEnum = "cc0"
)

type UploadVideoAlt1RequestBodyPrivacyCommentsEnum string

const (
	UploadVideoAlt1RequestBodyPrivacyCommentsEnumAnybody  UploadVideoAlt1RequestBodyPrivacyCommentsEnum = "anybody"
	UploadVideoAlt1RequestBodyPrivacyCommentsEnumContacts UploadVideoAlt1RequestBodyPrivacyCommentsEnum = "contacts"
	UploadVideoAlt1RequestBodyPrivacyCommentsEnumNobody   UploadVideoAlt1RequestBodyPrivacyCommentsEnum = "nobody"
)

type UploadVideoAlt1RequestBodyPrivacyEmbedEnum string

const (
	UploadVideoAlt1RequestBodyPrivacyEmbedEnumPrivate   UploadVideoAlt1RequestBodyPrivacyEmbedEnum = "private"
	UploadVideoAlt1RequestBodyPrivacyEmbedEnumPublic    UploadVideoAlt1RequestBodyPrivacyEmbedEnum = "public"
	UploadVideoAlt1RequestBodyPrivacyEmbedEnumWhitelist UploadVideoAlt1RequestBodyPrivacyEmbedEnum = "whitelist"
)

type UploadVideoAlt1RequestBodyPrivacyViewEnum string

const (
	UploadVideoAlt1RequestBodyPrivacyViewEnumAnybody  UploadVideoAlt1RequestBodyPrivacyViewEnum = "anybody"
	UploadVideoAlt1RequestBodyPrivacyViewEnumContacts UploadVideoAlt1RequestBodyPrivacyViewEnum = "contacts"
	UploadVideoAlt1RequestBodyPrivacyViewEnumDisable  UploadVideoAlt1RequestBodyPrivacyViewEnum = "disable"
	UploadVideoAlt1RequestBodyPrivacyViewEnumNobody   UploadVideoAlt1RequestBodyPrivacyViewEnum = "nobody"
	UploadVideoAlt1RequestBodyPrivacyViewEnumPassword UploadVideoAlt1RequestBodyPrivacyViewEnum = "password"
	UploadVideoAlt1RequestBodyPrivacyViewEnumUnlisted UploadVideoAlt1RequestBodyPrivacyViewEnum = "unlisted"
	UploadVideoAlt1RequestBodyPrivacyViewEnumUsers    UploadVideoAlt1RequestBodyPrivacyViewEnum = "users"
)

type UploadVideoAlt1RequestBodyPrivacy struct {
	Add      *bool                                          `json:"add"`
	Comments *UploadVideoAlt1RequestBodyPrivacyCommentsEnum `json:"comments"`
	Download *bool                                          `json:"download"`
	Embed    *UploadVideoAlt1RequestBodyPrivacyEmbedEnum    `json:"embed"`
	View     *UploadVideoAlt1RequestBodyPrivacyViewEnum     `json:"view"`
}

type UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum string

const (
	UploadVideoAlt1RequestBodyRatingsMpaaReasonEnumAt UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum = "at"
	UploadVideoAlt1RequestBodyRatingsMpaaReasonEnumBn UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum = "bn"
	UploadVideoAlt1RequestBodyRatingsMpaaReasonEnumN  UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum = "n"
	UploadVideoAlt1RequestBodyRatingsMpaaReasonEnumSl UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum = "sl"
	UploadVideoAlt1RequestBodyRatingsMpaaReasonEnumSs UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum = "ss"
	UploadVideoAlt1RequestBodyRatingsMpaaReasonEnumV  UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum = "v"
)

type UploadVideoAlt1RequestBodyRatingsMpaa struct {
	Reason *UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum `json:"reason"`
}

type UploadVideoAlt1RequestBodyRatingsTvReasonEnum string

const (
	UploadVideoAlt1RequestBodyRatingsTvReasonEnumD  UploadVideoAlt1RequestBodyRatingsTvReasonEnum = "d"
	UploadVideoAlt1RequestBodyRatingsTvReasonEnumFv UploadVideoAlt1RequestBodyRatingsTvReasonEnum = "fv"
	UploadVideoAlt1RequestBodyRatingsTvReasonEnumL  UploadVideoAlt1RequestBodyRatingsTvReasonEnum = "l"
	UploadVideoAlt1RequestBodyRatingsTvReasonEnumSs UploadVideoAlt1RequestBodyRatingsTvReasonEnum = "ss"
	UploadVideoAlt1RequestBodyRatingsTvReasonEnumV  UploadVideoAlt1RequestBodyRatingsTvReasonEnum = "v"
)

type UploadVideoAlt1RequestBodyRatingsTv struct {
	Reason *UploadVideoAlt1RequestBodyRatingsTvReasonEnum `json:"reason"`
}

type UploadVideoAlt1RequestBodyRatings struct {
	Mpaa *UploadVideoAlt1RequestBodyRatingsMpaa `json:"mpaa"`
	Tv   *UploadVideoAlt1RequestBodyRatingsTv   `json:"tv"`
}

type UploadVideoAlt1RequestBodyReviewPage struct {
	Active *bool `json:"active"`
}

type UploadVideoAlt1RequestBodySpatialDirectorTimeline struct {
	Pitch    float64  `json:"pitch"`
	Roll     *float64 `json:"roll"`
	TimeCode float64  `json:"time_code"`
	Yaw      float64  `json:"yaw"`
}

type UploadVideoAlt1RequestBodySpatialProjectionEnum string

const (
	UploadVideoAlt1RequestBodySpatialProjectionEnumCubical         UploadVideoAlt1RequestBodySpatialProjectionEnum = "cubical"
	UploadVideoAlt1RequestBodySpatialProjectionEnumCylindrical     UploadVideoAlt1RequestBodySpatialProjectionEnum = "cylindrical"
	UploadVideoAlt1RequestBodySpatialProjectionEnumDome            UploadVideoAlt1RequestBodySpatialProjectionEnum = "dome"
	UploadVideoAlt1RequestBodySpatialProjectionEnumEquirectangular UploadVideoAlt1RequestBodySpatialProjectionEnum = "equirectangular"
	UploadVideoAlt1RequestBodySpatialProjectionEnumPyramid         UploadVideoAlt1RequestBodySpatialProjectionEnum = "pyramid"
)

type UploadVideoAlt1RequestBodySpatialStereoFormatEnum string

const (
	UploadVideoAlt1RequestBodySpatialStereoFormatEnumLeftRight UploadVideoAlt1RequestBodySpatialStereoFormatEnum = "left-right"
	UploadVideoAlt1RequestBodySpatialStereoFormatEnumMono      UploadVideoAlt1RequestBodySpatialStereoFormatEnum = "mono"
	UploadVideoAlt1RequestBodySpatialStereoFormatEnumTopBottom UploadVideoAlt1RequestBodySpatialStereoFormatEnum = "top-bottom"
)

type UploadVideoAlt1RequestBodySpatial struct {
	DirectorTimeline []UploadVideoAlt1RequestBodySpatialDirectorTimeline `json:"director_timeline"`
	FieldOfView      *float64                                            `json:"field_of_view"`
	Projection       *UploadVideoAlt1RequestBodySpatialProjectionEnum    `json:"projection"`
	StereoFormat     *UploadVideoAlt1RequestBodySpatialStereoFormatEnum  `json:"stereo_format"`
}

type UploadVideoAlt1RequestBodyUploadApproachEnum string

const (
	UploadVideoAlt1RequestBodyUploadApproachEnumPost      UploadVideoAlt1RequestBodyUploadApproachEnum = "post"
	UploadVideoAlt1RequestBodyUploadApproachEnumPull      UploadVideoAlt1RequestBodyUploadApproachEnum = "pull"
	UploadVideoAlt1RequestBodyUploadApproachEnumStreaming UploadVideoAlt1RequestBodyUploadApproachEnum = "streaming"
	UploadVideoAlt1RequestBodyUploadApproachEnumTus       UploadVideoAlt1RequestBodyUploadApproachEnum = "tus"
)

type UploadVideoAlt1RequestBodyUpload struct {
	Approach    UploadVideoAlt1RequestBodyUploadApproachEnum `json:"approach"`
	Link        *string                                      `json:"link"`
	RedirectURL *string                                      `json:"redirect_url"`
	Size        *string                                      `json:"size"`
}

type UploadVideoAlt1RequestBody struct {
	ContentRating []string                               `json:"content_rating"`
	Description   *string                                `json:"description"`
	Embed         *UploadVideoAlt1RequestBodyEmbed       `json:"embed"`
	License       *UploadVideoAlt1RequestBodyLicenseEnum `json:"license"`
	Locale        *string                                `json:"locale"`
	Name          *string                                `json:"name"`
	Password      *string                                `json:"password"`
	Privacy       *UploadVideoAlt1RequestBodyPrivacy     `json:"privacy"`
	Ratings       *UploadVideoAlt1RequestBodyRatings     `json:"ratings"`
	ReviewPage    *UploadVideoAlt1RequestBodyReviewPage  `json:"review_page"`
	Spatial       *UploadVideoAlt1RequestBodySpatial     `json:"spatial"`
	Upload        UploadVideoAlt1RequestBodyUpload       `json:"upload"`
}

type UploadVideoAlt1Request struct {
	Request UploadVideoAlt1RequestBody `request:"mediaType=application/vnd.vimeo.video+json"`
}

type UploadVideoAlt1Response struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	Video       *shared.Video
}
