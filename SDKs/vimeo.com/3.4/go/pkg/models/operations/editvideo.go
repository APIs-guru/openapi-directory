package operations

import (
"openapi/pkg/models/shared")

type EditVideoPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type EditVideoRequestBodyEmbedButtons struct {
    Embed *bool `json:"embed,omitempty"`
    Fullscreen *bool `json:"fullscreen,omitempty"`
    Hd *bool `json:"hd,omitempty"`
    Like *bool `json:"like,omitempty"`
    Scaling *bool `json:"scaling,omitempty"`
    Share *bool `json:"share,omitempty"`
    Watchlater *bool `json:"watchlater,omitempty"`
    
}

type EditVideoRequestBodyEmbedLogosCustom struct {
    Active *bool `json:"active,omitempty"`
    Link *string `json:"link,omitempty"`
    Sticky *bool `json:"sticky,omitempty"`
    
}

type EditVideoRequestBodyEmbedLogos struct {
    Custom *EditVideoRequestBodyEmbedLogosCustom `json:"custom,omitempty"`
    Vimeo *bool `json:"vimeo,omitempty"`
    
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
    Name *EditVideoRequestBodyEmbedTitleNameEnum `json:"name,omitempty"`
    Owner *EditVideoRequestBodyEmbedTitleOwnerEnum `json:"owner,omitempty"`
    Portrait *EditVideoRequestBodyEmbedTitlePortraitEnum `json:"portrait,omitempty"`
    
}

type EditVideoRequestBodyEmbed struct {
    Buttons *EditVideoRequestBodyEmbedButtons `json:"buttons,omitempty"`
    Color *string `json:"color,omitempty"`
    Logos *EditVideoRequestBodyEmbedLogos `json:"logos,omitempty"`
    Playbar *bool `json:"playbar,omitempty"`
    Title *EditVideoRequestBodyEmbedTitle `json:"title,omitempty"`
    Volume *bool `json:"volume,omitempty"`
    
}


type EditVideoRequestBodyLicenseEnum string

const (
    EditVideoRequestBodyLicenseEnumBy EditVideoRequestBodyLicenseEnum = "by"
EditVideoRequestBodyLicenseEnumByNc EditVideoRequestBodyLicenseEnum = "by-nc"
EditVideoRequestBodyLicenseEnumByNcNd EditVideoRequestBodyLicenseEnum = "by-nc-nd"
EditVideoRequestBodyLicenseEnumByNcSa EditVideoRequestBodyLicenseEnum = "by-nc-sa"
EditVideoRequestBodyLicenseEnumByNd EditVideoRequestBodyLicenseEnum = "by-nd"
EditVideoRequestBodyLicenseEnumBySa EditVideoRequestBodyLicenseEnum = "by-sa"
EditVideoRequestBodyLicenseEnumCc0 EditVideoRequestBodyLicenseEnum = "cc0"
)



type EditVideoRequestBodyPrivacyCommentsEnum string

const (
    EditVideoRequestBodyPrivacyCommentsEnumAnybody EditVideoRequestBodyPrivacyCommentsEnum = "anybody"
EditVideoRequestBodyPrivacyCommentsEnumContacts EditVideoRequestBodyPrivacyCommentsEnum = "contacts"
EditVideoRequestBodyPrivacyCommentsEnumNobody EditVideoRequestBodyPrivacyCommentsEnum = "nobody"
)



type EditVideoRequestBodyPrivacyEmbedEnum string

const (
    EditVideoRequestBodyPrivacyEmbedEnumPrivate EditVideoRequestBodyPrivacyEmbedEnum = "private"
EditVideoRequestBodyPrivacyEmbedEnumPublic EditVideoRequestBodyPrivacyEmbedEnum = "public"
EditVideoRequestBodyPrivacyEmbedEnumWhitelist EditVideoRequestBodyPrivacyEmbedEnum = "whitelist"
)



type EditVideoRequestBodyPrivacyViewEnum string

const (
    EditVideoRequestBodyPrivacyViewEnumAnybody EditVideoRequestBodyPrivacyViewEnum = "anybody"
EditVideoRequestBodyPrivacyViewEnumContacts EditVideoRequestBodyPrivacyViewEnum = "contacts"
EditVideoRequestBodyPrivacyViewEnumDisable EditVideoRequestBodyPrivacyViewEnum = "disable"
EditVideoRequestBodyPrivacyViewEnumNobody EditVideoRequestBodyPrivacyViewEnum = "nobody"
EditVideoRequestBodyPrivacyViewEnumPassword EditVideoRequestBodyPrivacyViewEnum = "password"
EditVideoRequestBodyPrivacyViewEnumUnlisted EditVideoRequestBodyPrivacyViewEnum = "unlisted"
EditVideoRequestBodyPrivacyViewEnumUsers EditVideoRequestBodyPrivacyViewEnum = "users"
)


type EditVideoRequestBodyPrivacy struct {
    Add *bool `json:"add,omitempty"`
    Comments *EditVideoRequestBodyPrivacyCommentsEnum `json:"comments,omitempty"`
    Download *bool `json:"download,omitempty"`
    Embed *EditVideoRequestBodyPrivacyEmbedEnum `json:"embed,omitempty"`
    View *EditVideoRequestBodyPrivacyViewEnum `json:"view,omitempty"`
    
}


type EditVideoRequestBodyRatingsMpaaReasonEnum string

const (
    EditVideoRequestBodyRatingsMpaaReasonEnumAt EditVideoRequestBodyRatingsMpaaReasonEnum = "at"
EditVideoRequestBodyRatingsMpaaReasonEnumBn EditVideoRequestBodyRatingsMpaaReasonEnum = "bn"
EditVideoRequestBodyRatingsMpaaReasonEnumN EditVideoRequestBodyRatingsMpaaReasonEnum = "n"
EditVideoRequestBodyRatingsMpaaReasonEnumSl EditVideoRequestBodyRatingsMpaaReasonEnum = "sl"
EditVideoRequestBodyRatingsMpaaReasonEnumSs EditVideoRequestBodyRatingsMpaaReasonEnum = "ss"
EditVideoRequestBodyRatingsMpaaReasonEnumV EditVideoRequestBodyRatingsMpaaReasonEnum = "v"
)


type EditVideoRequestBodyRatingsMpaa struct {
    Reason *EditVideoRequestBodyRatingsMpaaReasonEnum `json:"reason,omitempty"`
    
}


type EditVideoRequestBodyRatingsTvReasonEnum string

const (
    EditVideoRequestBodyRatingsTvReasonEnumD EditVideoRequestBodyRatingsTvReasonEnum = "d"
EditVideoRequestBodyRatingsTvReasonEnumFv EditVideoRequestBodyRatingsTvReasonEnum = "fv"
EditVideoRequestBodyRatingsTvReasonEnumL EditVideoRequestBodyRatingsTvReasonEnum = "l"
EditVideoRequestBodyRatingsTvReasonEnumSs EditVideoRequestBodyRatingsTvReasonEnum = "ss"
EditVideoRequestBodyRatingsTvReasonEnumV EditVideoRequestBodyRatingsTvReasonEnum = "v"
)


type EditVideoRequestBodyRatingsTv struct {
    Reason *EditVideoRequestBodyRatingsTvReasonEnum `json:"reason,omitempty"`
    
}

type EditVideoRequestBodyRatings struct {
    Mpaa *EditVideoRequestBodyRatingsMpaa `json:"mpaa,omitempty"`
    Tv *EditVideoRequestBodyRatingsTv `json:"tv,omitempty"`
    
}

type EditVideoRequestBodyReviewPage struct {
    Active *bool `json:"active,omitempty"`
    
}

type EditVideoRequestBodySpatialDirectorTimeline struct {
    Pitch float64 `json:"pitch"`
    Roll *float64 `json:"roll,omitempty"`
    TimeCode float64 `json:"time_code"`
    Yaw float64 `json:"yaw"`
    
}


type EditVideoRequestBodySpatialProjectionEnum string

const (
    EditVideoRequestBodySpatialProjectionEnumCubical EditVideoRequestBodySpatialProjectionEnum = "cubical"
EditVideoRequestBodySpatialProjectionEnumCylindrical EditVideoRequestBodySpatialProjectionEnum = "cylindrical"
EditVideoRequestBodySpatialProjectionEnumDome EditVideoRequestBodySpatialProjectionEnum = "dome"
EditVideoRequestBodySpatialProjectionEnumEquirectangular EditVideoRequestBodySpatialProjectionEnum = "equirectangular"
EditVideoRequestBodySpatialProjectionEnumPyramid EditVideoRequestBodySpatialProjectionEnum = "pyramid"
)



type EditVideoRequestBodySpatialStereoFormatEnum string

const (
    EditVideoRequestBodySpatialStereoFormatEnumLeftRight EditVideoRequestBodySpatialStereoFormatEnum = "left-right"
EditVideoRequestBodySpatialStereoFormatEnumMono EditVideoRequestBodySpatialStereoFormatEnum = "mono"
EditVideoRequestBodySpatialStereoFormatEnumTopBottom EditVideoRequestBodySpatialStereoFormatEnum = "top-bottom"
)


type EditVideoRequestBodySpatial struct {
    DirectorTimeline []EditVideoRequestBodySpatialDirectorTimeline `json:"director_timeline,omitempty"`
    FieldOfView *float64 `json:"field_of_view,omitempty"`
    Projection *EditVideoRequestBodySpatialProjectionEnum `json:"projection,omitempty"`
    StereoFormat *EditVideoRequestBodySpatialStereoFormatEnum `json:"stereo_format,omitempty"`
    
}

type EditVideoRequestBody struct {
    ContentRating []string `json:"content_rating,omitempty"`
    Description *string `json:"description,omitempty"`
    Embed *EditVideoRequestBodyEmbed `json:"embed,omitempty"`
    License *EditVideoRequestBodyLicenseEnum `json:"license,omitempty"`
    Locale *string `json:"locale,omitempty"`
    Name *string `json:"name,omitempty"`
    Password *string `json:"password,omitempty"`
    Privacy *EditVideoRequestBodyPrivacy `json:"privacy,omitempty"`
    Ratings *EditVideoRequestBodyRatings `json:"ratings,omitempty"`
    ReviewPage *EditVideoRequestBodyReviewPage `json:"review_page,omitempty"`
    Spatial *EditVideoRequestBodySpatial `json:"spatial,omitempty"`
    
}

type EditVideoSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type EditVideoRequest struct {
    PathParams EditVideoPathParams 
    Request EditVideoRequestBody `request:"mediaType=application/vnd.vimeo.video+json"`
    Security EditVideoSecurity 
    
}

type EditVideoResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Video *shared.Video 
    
}

