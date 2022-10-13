package operations

import (
	"openapi/pkg/models/shared"
)

type EditVideoPathParams struct {
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type EditVideoRequestBodyEmbedButtons struct {
	Embed      *bool `json:"embed"`
	Fullscreen *bool `json:"fullscreen"`
	Hd         *bool `json:"hd"`
	Like       *bool `json:"like"`
	Scaling    *bool `json:"scaling"`
	Share      *bool `json:"share"`
	Watchlater *bool `json:"watchlater"`
}

type EditVideoRequestBodyEmbedLogosCustom struct {
	Active *bool   `json:"active"`
	Link   *string `json:"link"`
	Sticky *bool   `json:"sticky"`
}

type EditVideoRequestBodyEmbedLogos struct {
	Custom *EditVideoRequestBodyEmbedLogosCustom `json:"custom"`
	Vimeo  *bool                                 `json:"vimeo"`
}

type EditVideoRequestBodyEmbedTitleNameEnum string

const (
	EditVideoRequestBodyEmbedTitleNameEnumHide EditVideoRequestBodyEmbedTitleNameEnum = "hide"
	EditVideoRequestBodyEmbedTitleNameEnumShow EditVideoRequestBodyEmbedTitleNameEnum = "show"
	EditVideoRequestBodyEmbedTitleNameEnumUser EditVideoRequestBodyEmbedTitleNameEnum = "user"
)

type EditVideoRequestBodyEmbedTitleOwnerEnum string

const (
	EditVideoRequestBodyEmbedTitleOwnerEnumHide EditVideoRequestBodyEmbedTitleOwnerEnum = "hide"
	EditVideoRequestBodyEmbedTitleOwnerEnumShow EditVideoRequestBodyEmbedTitleOwnerEnum = "show"
	EditVideoRequestBodyEmbedTitleOwnerEnumUser EditVideoRequestBodyEmbedTitleOwnerEnum = "user"
)

type EditVideoRequestBodyEmbedTitlePortraitEnum string

const (
	EditVideoRequestBodyEmbedTitlePortraitEnumHide EditVideoRequestBodyEmbedTitlePortraitEnum = "hide"
	EditVideoRequestBodyEmbedTitlePortraitEnumShow EditVideoRequestBodyEmbedTitlePortraitEnum = "show"
	EditVideoRequestBodyEmbedTitlePortraitEnumUser EditVideoRequestBodyEmbedTitlePortraitEnum = "user"
)

type EditVideoRequestBodyEmbedTitle struct {
	Name     *EditVideoRequestBodyEmbedTitleNameEnum     `json:"name"`
	Owner    *EditVideoRequestBodyEmbedTitleOwnerEnum    `json:"owner"`
	Portrait *EditVideoRequestBodyEmbedTitlePortraitEnum `json:"portrait"`
}

type EditVideoRequestBodyEmbed struct {
	Buttons *EditVideoRequestBodyEmbedButtons `json:"buttons"`
	Color   *string                           `json:"color"`
	Logos   *EditVideoRequestBodyEmbedLogos   `json:"logos"`
	Playbar *bool                             `json:"playbar"`
	Title   *EditVideoRequestBodyEmbedTitle   `json:"title"`
	Volume  *bool                             `json:"volume"`
}

type EditVideoRequestBodyLicenseEnum string

const (
	EditVideoRequestBodyLicenseEnumBy     EditVideoRequestBodyLicenseEnum = "by"
	EditVideoRequestBodyLicenseEnumByNc   EditVideoRequestBodyLicenseEnum = "by-nc"
	EditVideoRequestBodyLicenseEnumByNcNd EditVideoRequestBodyLicenseEnum = "by-nc-nd"
	EditVideoRequestBodyLicenseEnumByNcSa EditVideoRequestBodyLicenseEnum = "by-nc-sa"
	EditVideoRequestBodyLicenseEnumByNd   EditVideoRequestBodyLicenseEnum = "by-nd"
	EditVideoRequestBodyLicenseEnumBySa   EditVideoRequestBodyLicenseEnum = "by-sa"
	EditVideoRequestBodyLicenseEnumCc0    EditVideoRequestBodyLicenseEnum = "cc0"
)

type EditVideoRequestBodyPrivacyCommentsEnum string

const (
	EditVideoRequestBodyPrivacyCommentsEnumAnybody  EditVideoRequestBodyPrivacyCommentsEnum = "anybody"
	EditVideoRequestBodyPrivacyCommentsEnumContacts EditVideoRequestBodyPrivacyCommentsEnum = "contacts"
	EditVideoRequestBodyPrivacyCommentsEnumNobody   EditVideoRequestBodyPrivacyCommentsEnum = "nobody"
)

type EditVideoRequestBodyPrivacyEmbedEnum string

const (
	EditVideoRequestBodyPrivacyEmbedEnumPrivate   EditVideoRequestBodyPrivacyEmbedEnum = "private"
	EditVideoRequestBodyPrivacyEmbedEnumPublic    EditVideoRequestBodyPrivacyEmbedEnum = "public"
	EditVideoRequestBodyPrivacyEmbedEnumWhitelist EditVideoRequestBodyPrivacyEmbedEnum = "whitelist"
)

type EditVideoRequestBodyPrivacyViewEnum string

const (
	EditVideoRequestBodyPrivacyViewEnumAnybody  EditVideoRequestBodyPrivacyViewEnum = "anybody"
	EditVideoRequestBodyPrivacyViewEnumContacts EditVideoRequestBodyPrivacyViewEnum = "contacts"
	EditVideoRequestBodyPrivacyViewEnumDisable  EditVideoRequestBodyPrivacyViewEnum = "disable"
	EditVideoRequestBodyPrivacyViewEnumNobody   EditVideoRequestBodyPrivacyViewEnum = "nobody"
	EditVideoRequestBodyPrivacyViewEnumPassword EditVideoRequestBodyPrivacyViewEnum = "password"
	EditVideoRequestBodyPrivacyViewEnumUnlisted EditVideoRequestBodyPrivacyViewEnum = "unlisted"
	EditVideoRequestBodyPrivacyViewEnumUsers    EditVideoRequestBodyPrivacyViewEnum = "users"
)

type EditVideoRequestBodyPrivacy struct {
	Add      *bool                                    `json:"add"`
	Comments *EditVideoRequestBodyPrivacyCommentsEnum `json:"comments"`
	Download *bool                                    `json:"download"`
	Embed    *EditVideoRequestBodyPrivacyEmbedEnum    `json:"embed"`
	View     *EditVideoRequestBodyPrivacyViewEnum     `json:"view"`
}

type EditVideoRequestBodyRatingsMpaaReasonEnum string

const (
	EditVideoRequestBodyRatingsMpaaReasonEnumAt EditVideoRequestBodyRatingsMpaaReasonEnum = "at"
	EditVideoRequestBodyRatingsMpaaReasonEnumBn EditVideoRequestBodyRatingsMpaaReasonEnum = "bn"
	EditVideoRequestBodyRatingsMpaaReasonEnumN  EditVideoRequestBodyRatingsMpaaReasonEnum = "n"
	EditVideoRequestBodyRatingsMpaaReasonEnumSl EditVideoRequestBodyRatingsMpaaReasonEnum = "sl"
	EditVideoRequestBodyRatingsMpaaReasonEnumSs EditVideoRequestBodyRatingsMpaaReasonEnum = "ss"
	EditVideoRequestBodyRatingsMpaaReasonEnumV  EditVideoRequestBodyRatingsMpaaReasonEnum = "v"
)

type EditVideoRequestBodyRatingsMpaa struct {
	Reason *EditVideoRequestBodyRatingsMpaaReasonEnum `json:"reason"`
}

type EditVideoRequestBodyRatingsTvReasonEnum string

const (
	EditVideoRequestBodyRatingsTvReasonEnumD  EditVideoRequestBodyRatingsTvReasonEnum = "d"
	EditVideoRequestBodyRatingsTvReasonEnumFv EditVideoRequestBodyRatingsTvReasonEnum = "fv"
	EditVideoRequestBodyRatingsTvReasonEnumL  EditVideoRequestBodyRatingsTvReasonEnum = "l"
	EditVideoRequestBodyRatingsTvReasonEnumSs EditVideoRequestBodyRatingsTvReasonEnum = "ss"
	EditVideoRequestBodyRatingsTvReasonEnumV  EditVideoRequestBodyRatingsTvReasonEnum = "v"
)

type EditVideoRequestBodyRatingsTv struct {
	Reason *EditVideoRequestBodyRatingsTvReasonEnum `json:"reason"`
}

type EditVideoRequestBodyRatings struct {
	Mpaa *EditVideoRequestBodyRatingsMpaa `json:"mpaa"`
	Tv   *EditVideoRequestBodyRatingsTv   `json:"tv"`
}

type EditVideoRequestBodyReviewPage struct {
	Active *bool `json:"active"`
}

type EditVideoRequestBodySpatialDirectorTimeline struct {
	Pitch    float64  `json:"pitch"`
	Roll     *float64 `json:"roll"`
	TimeCode float64  `json:"time_code"`
	Yaw      float64  `json:"yaw"`
}

type EditVideoRequestBodySpatialProjectionEnum string

const (
	EditVideoRequestBodySpatialProjectionEnumCubical         EditVideoRequestBodySpatialProjectionEnum = "cubical"
	EditVideoRequestBodySpatialProjectionEnumCylindrical     EditVideoRequestBodySpatialProjectionEnum = "cylindrical"
	EditVideoRequestBodySpatialProjectionEnumDome            EditVideoRequestBodySpatialProjectionEnum = "dome"
	EditVideoRequestBodySpatialProjectionEnumEquirectangular EditVideoRequestBodySpatialProjectionEnum = "equirectangular"
	EditVideoRequestBodySpatialProjectionEnumPyramid         EditVideoRequestBodySpatialProjectionEnum = "pyramid"
)

type EditVideoRequestBodySpatialStereoFormatEnum string

const (
	EditVideoRequestBodySpatialStereoFormatEnumLeftRight EditVideoRequestBodySpatialStereoFormatEnum = "left-right"
	EditVideoRequestBodySpatialStereoFormatEnumMono      EditVideoRequestBodySpatialStereoFormatEnum = "mono"
	EditVideoRequestBodySpatialStereoFormatEnumTopBottom EditVideoRequestBodySpatialStereoFormatEnum = "top-bottom"
)

type EditVideoRequestBodySpatial struct {
	DirectorTimeline []EditVideoRequestBodySpatialDirectorTimeline `json:"director_timeline"`
	FieldOfView      *float64                                      `json:"field_of_view"`
	Projection       *EditVideoRequestBodySpatialProjectionEnum    `json:"projection"`
	StereoFormat     *EditVideoRequestBodySpatialStereoFormatEnum  `json:"stereo_format"`
}

type EditVideoRequestBody struct {
	ContentRating []string                         `json:"content_rating"`
	Description   *string                          `json:"description"`
	Embed         *EditVideoRequestBodyEmbed       `json:"embed"`
	License       *EditVideoRequestBodyLicenseEnum `json:"license"`
	Locale        *string                          `json:"locale"`
	Name          *string                          `json:"name"`
	Password      *string                          `json:"password"`
	Privacy       *EditVideoRequestBodyPrivacy     `json:"privacy"`
	Ratings       *EditVideoRequestBodyRatings     `json:"ratings"`
	ReviewPage    *EditVideoRequestBodyReviewPage  `json:"review_page"`
	Spatial       *EditVideoRequestBodySpatial     `json:"spatial"`
}

type EditVideoSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type EditVideoRequest struct {
	PathParams EditVideoPathParams
	Request    EditVideoRequestBody `request:"mediaType=application/vnd.vimeo.video+json"`
	Security   EditVideoSecurity
}

type EditVideoResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Video       *shared.Video
}
