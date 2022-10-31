package operations

import (
"openapi/pkg/models/shared")

type UploadVideoPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type UploadVideoRequestBodyEmbedButtons struct {
    Embed *bool `json:"embed,omitempty"`
    Fullscreen *bool `json:"fullscreen,omitempty"`
    Hd *bool `json:"hd,omitempty"`
    Like *bool `json:"like,omitempty"`
    Scaling *bool `json:"scaling,omitempty"`
    Share *bool `json:"share,omitempty"`
    Watchlater *bool `json:"watchlater,omitempty"`
    
}

type UploadVideoRequestBodyEmbedLogosCustom struct {
    Active *bool `json:"active,omitempty"`
    Link *string `json:"link,omitempty"`
    Sticky *bool `json:"sticky,omitempty"`
    
}

type UploadVideoRequestBodyEmbedLogos struct {
    Custom *UploadVideoRequestBodyEmbedLogosCustom `json:"custom,omitempty"`
    Vimeo *bool `json:"vimeo,omitempty"`
    
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
    Name *UploadVideoRequestBodyEmbedTitleNameEnum `json:"name,omitempty"`
    Owner *UploadVideoRequestBodyEmbedTitleOwnerEnum `json:"owner,omitempty"`
    Portrait *UploadVideoRequestBodyEmbedTitlePortraitEnum `json:"portrait,omitempty"`
    
}

type UploadVideoRequestBodyEmbed struct {
    Buttons *UploadVideoRequestBodyEmbedButtons `json:"buttons,omitempty"`
    Color *string `json:"color,omitempty"`
    Logos *UploadVideoRequestBodyEmbedLogos `json:"logos,omitempty"`
    Playbar *bool `json:"playbar,omitempty"`
    Title *UploadVideoRequestBodyEmbedTitle `json:"title,omitempty"`
    Volume *bool `json:"volume,omitempty"`
    
}


type UploadVideoRequestBodyLicenseEnum string

const (
    UploadVideoRequestBodyLicenseEnumBy UploadVideoRequestBodyLicenseEnum = "by"
UploadVideoRequestBodyLicenseEnumByNc UploadVideoRequestBodyLicenseEnum = "by-nc"
UploadVideoRequestBodyLicenseEnumByNcNd UploadVideoRequestBodyLicenseEnum = "by-nc-nd"
UploadVideoRequestBodyLicenseEnumByNcSa UploadVideoRequestBodyLicenseEnum = "by-nc-sa"
UploadVideoRequestBodyLicenseEnumByNd UploadVideoRequestBodyLicenseEnum = "by-nd"
UploadVideoRequestBodyLicenseEnumBySa UploadVideoRequestBodyLicenseEnum = "by-sa"
UploadVideoRequestBodyLicenseEnumCc0 UploadVideoRequestBodyLicenseEnum = "cc0"
)



type UploadVideoRequestBodyPrivacyCommentsEnum string

const (
    UploadVideoRequestBodyPrivacyCommentsEnumAnybody UploadVideoRequestBodyPrivacyCommentsEnum = "anybody"
UploadVideoRequestBodyPrivacyCommentsEnumContacts UploadVideoRequestBodyPrivacyCommentsEnum = "contacts"
UploadVideoRequestBodyPrivacyCommentsEnumNobody UploadVideoRequestBodyPrivacyCommentsEnum = "nobody"
)



type UploadVideoRequestBodyPrivacyEmbedEnum string

const (
    UploadVideoRequestBodyPrivacyEmbedEnumPrivate UploadVideoRequestBodyPrivacyEmbedEnum = "private"
UploadVideoRequestBodyPrivacyEmbedEnumPublic UploadVideoRequestBodyPrivacyEmbedEnum = "public"
UploadVideoRequestBodyPrivacyEmbedEnumWhitelist UploadVideoRequestBodyPrivacyEmbedEnum = "whitelist"
)



type UploadVideoRequestBodyPrivacyViewEnum string

const (
    UploadVideoRequestBodyPrivacyViewEnumAnybody UploadVideoRequestBodyPrivacyViewEnum = "anybody"
UploadVideoRequestBodyPrivacyViewEnumContacts UploadVideoRequestBodyPrivacyViewEnum = "contacts"
UploadVideoRequestBodyPrivacyViewEnumDisable UploadVideoRequestBodyPrivacyViewEnum = "disable"
UploadVideoRequestBodyPrivacyViewEnumNobody UploadVideoRequestBodyPrivacyViewEnum = "nobody"
UploadVideoRequestBodyPrivacyViewEnumPassword UploadVideoRequestBodyPrivacyViewEnum = "password"
UploadVideoRequestBodyPrivacyViewEnumUnlisted UploadVideoRequestBodyPrivacyViewEnum = "unlisted"
UploadVideoRequestBodyPrivacyViewEnumUsers UploadVideoRequestBodyPrivacyViewEnum = "users"
)


type UploadVideoRequestBodyPrivacy struct {
    Add *bool `json:"add,omitempty"`
    Comments *UploadVideoRequestBodyPrivacyCommentsEnum `json:"comments,omitempty"`
    Download *bool `json:"download,omitempty"`
    Embed *UploadVideoRequestBodyPrivacyEmbedEnum `json:"embed,omitempty"`
    View *UploadVideoRequestBodyPrivacyViewEnum `json:"view,omitempty"`
    
}


type UploadVideoRequestBodyRatingsMpaaReasonEnum string

const (
    UploadVideoRequestBodyRatingsMpaaReasonEnumAt UploadVideoRequestBodyRatingsMpaaReasonEnum = "at"
UploadVideoRequestBodyRatingsMpaaReasonEnumBn UploadVideoRequestBodyRatingsMpaaReasonEnum = "bn"
UploadVideoRequestBodyRatingsMpaaReasonEnumN UploadVideoRequestBodyRatingsMpaaReasonEnum = "n"
UploadVideoRequestBodyRatingsMpaaReasonEnumSl UploadVideoRequestBodyRatingsMpaaReasonEnum = "sl"
UploadVideoRequestBodyRatingsMpaaReasonEnumSs UploadVideoRequestBodyRatingsMpaaReasonEnum = "ss"
UploadVideoRequestBodyRatingsMpaaReasonEnumV UploadVideoRequestBodyRatingsMpaaReasonEnum = "v"
)


type UploadVideoRequestBodyRatingsMpaa struct {
    Reason *UploadVideoRequestBodyRatingsMpaaReasonEnum `json:"reason,omitempty"`
    
}


type UploadVideoRequestBodyRatingsTvReasonEnum string

const (
    UploadVideoRequestBodyRatingsTvReasonEnumD UploadVideoRequestBodyRatingsTvReasonEnum = "d"
UploadVideoRequestBodyRatingsTvReasonEnumFv UploadVideoRequestBodyRatingsTvReasonEnum = "fv"
UploadVideoRequestBodyRatingsTvReasonEnumL UploadVideoRequestBodyRatingsTvReasonEnum = "l"
UploadVideoRequestBodyRatingsTvReasonEnumSs UploadVideoRequestBodyRatingsTvReasonEnum = "ss"
UploadVideoRequestBodyRatingsTvReasonEnumV UploadVideoRequestBodyRatingsTvReasonEnum = "v"
)


type UploadVideoRequestBodyRatingsTv struct {
    Reason *UploadVideoRequestBodyRatingsTvReasonEnum `json:"reason,omitempty"`
    
}

type UploadVideoRequestBodyRatings struct {
    Mpaa *UploadVideoRequestBodyRatingsMpaa `json:"mpaa,omitempty"`
    Tv *UploadVideoRequestBodyRatingsTv `json:"tv,omitempty"`
    
}

type UploadVideoRequestBodyReviewPage struct {
    Active *bool `json:"active,omitempty"`
    
}

type UploadVideoRequestBodySpatialDirectorTimeline struct {
    Pitch float64 `json:"pitch"`
    Roll *float64 `json:"roll,omitempty"`
    TimeCode float64 `json:"time_code"`
    Yaw float64 `json:"yaw"`
    
}


type UploadVideoRequestBodySpatialProjectionEnum string

const (
    UploadVideoRequestBodySpatialProjectionEnumCubical UploadVideoRequestBodySpatialProjectionEnum = "cubical"
UploadVideoRequestBodySpatialProjectionEnumCylindrical UploadVideoRequestBodySpatialProjectionEnum = "cylindrical"
UploadVideoRequestBodySpatialProjectionEnumDome UploadVideoRequestBodySpatialProjectionEnum = "dome"
UploadVideoRequestBodySpatialProjectionEnumEquirectangular UploadVideoRequestBodySpatialProjectionEnum = "equirectangular"
UploadVideoRequestBodySpatialProjectionEnumPyramid UploadVideoRequestBodySpatialProjectionEnum = "pyramid"
)



type UploadVideoRequestBodySpatialStereoFormatEnum string

const (
    UploadVideoRequestBodySpatialStereoFormatEnumLeftRight UploadVideoRequestBodySpatialStereoFormatEnum = "left-right"
UploadVideoRequestBodySpatialStereoFormatEnumMono UploadVideoRequestBodySpatialStereoFormatEnum = "mono"
UploadVideoRequestBodySpatialStereoFormatEnumTopBottom UploadVideoRequestBodySpatialStereoFormatEnum = "top-bottom"
)


type UploadVideoRequestBodySpatial struct {
    DirectorTimeline []UploadVideoRequestBodySpatialDirectorTimeline `json:"director_timeline,omitempty"`
    FieldOfView *float64 `json:"field_of_view,omitempty"`
    Projection *UploadVideoRequestBodySpatialProjectionEnum `json:"projection,omitempty"`
    StereoFormat *UploadVideoRequestBodySpatialStereoFormatEnum `json:"stereo_format,omitempty"`
    
}


type UploadVideoRequestBodyUploadApproachEnum string

const (
    UploadVideoRequestBodyUploadApproachEnumPost UploadVideoRequestBodyUploadApproachEnum = "post"
UploadVideoRequestBodyUploadApproachEnumPull UploadVideoRequestBodyUploadApproachEnum = "pull"
UploadVideoRequestBodyUploadApproachEnumStreaming UploadVideoRequestBodyUploadApproachEnum = "streaming"
UploadVideoRequestBodyUploadApproachEnumTus UploadVideoRequestBodyUploadApproachEnum = "tus"
)


type UploadVideoRequestBodyUpload struct {
    Approach UploadVideoRequestBodyUploadApproachEnum `json:"approach"`
    Link *string `json:"link,omitempty"`
    RedirectURL *string `json:"redirect_url,omitempty"`
    Size *string `json:"size,omitempty"`
    
}

type UploadVideoRequestBody struct {
    ContentRating []string `json:"content_rating,omitempty"`
    Description *string `json:"description,omitempty"`
    Embed *UploadVideoRequestBodyEmbed `json:"embed,omitempty"`
    License *UploadVideoRequestBodyLicenseEnum `json:"license,omitempty"`
    Locale *string `json:"locale,omitempty"`
    Name *string `json:"name,omitempty"`
    Password *string `json:"password,omitempty"`
    Privacy *UploadVideoRequestBodyPrivacy `json:"privacy,omitempty"`
    Ratings *UploadVideoRequestBodyRatings `json:"ratings,omitempty"`
    ReviewPage *UploadVideoRequestBodyReviewPage `json:"review_page,omitempty"`
    Spatial *UploadVideoRequestBodySpatial `json:"spatial,omitempty"`
    Upload UploadVideoRequestBodyUpload `json:"upload"`
    
}

type UploadVideoRequest struct {
    PathParams UploadVideoPathParams 
    Request UploadVideoRequestBody `request:"mediaType=application/vnd.vimeo.video+json"`
    
}

type UploadVideoResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    Video *shared.Video 
    
}

