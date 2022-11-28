package shared

type OnDemandPagePictureSizes struct {
	Height             float64 `json:"height"`
	Link               string  `json:"link"`
	LinkWithPlayButton *string `json:"link_with_play_button,omitempty"`
	Width              float64 `json:"width"`
}

type OnDemandPagePictureTypeEnum string

const (
	OnDemandPagePictureTypeEnumCaution OnDemandPagePictureTypeEnum = "caution"
	OnDemandPagePictureTypeEnumCustom  OnDemandPagePictureTypeEnum = "custom"
	OnDemandPagePictureTypeEnumDefault OnDemandPagePictureTypeEnum = "default"
)

// OnDemandPagePicture
// The background image for the On Demand page on Vimeo.
type OnDemandPagePicture struct {
	Active      bool                        `json:"active"`
	Link        *string                     `json:"link,omitempty"`
	ResourceKey string                      `json:"resource_key"`
	Sizes       []OnDemandPagePictureSizes  `json:"sizes"`
	Type        OnDemandPagePictureTypeEnum `json:"type"`
	URI         string                      `json:"uri"`
}

// OnDemandPageColors
// The primary and secondary colors used for rendering this On Demand page.
type OnDemandPageColors struct {
	Primary   string `json:"primary"`
	Secondary string `json:"secondary"`
}

type OnDemandPageEpisodesBuy struct {
	Active bool    `json:"active"`
	Price  float64 `json:"price"`
}

type OnDemandPageEpisodesRentPeriodEnum string

const (
	OnDemandPageEpisodesRentPeriodEnumOneDay         OnDemandPageEpisodesRentPeriodEnum = "1 day"
	OnDemandPageEpisodesRentPeriodEnumOneMonth       OnDemandPageEpisodesRentPeriodEnum = "1 month"
	OnDemandPageEpisodesRentPeriodEnumOneWeek        OnDemandPageEpisodesRentPeriodEnum = "1 week"
	OnDemandPageEpisodesRentPeriodEnumOneYear        OnDemandPageEpisodesRentPeriodEnum = "1 year"
	OnDemandPageEpisodesRentPeriodEnumTwoDay         OnDemandPageEpisodesRentPeriodEnum = "2 day"
	OnDemandPageEpisodesRentPeriodEnumTwentyFourHour OnDemandPageEpisodesRentPeriodEnum = "24 hour"
	OnDemandPageEpisodesRentPeriodEnumThreeDay       OnDemandPageEpisodesRentPeriodEnum = "3 day"
	OnDemandPageEpisodesRentPeriodEnumThreeMonth     OnDemandPageEpisodesRentPeriodEnum = "3 month"
	OnDemandPageEpisodesRentPeriodEnumThirtyDay      OnDemandPageEpisodesRentPeriodEnum = "30 day"
	OnDemandPageEpisodesRentPeriodEnumFortyEightHour OnDemandPageEpisodesRentPeriodEnum = "48 hour"
	OnDemandPageEpisodesRentPeriodEnumSixMonth       OnDemandPageEpisodesRentPeriodEnum = "6 month"
	OnDemandPageEpisodesRentPeriodEnumSixtyDay       OnDemandPageEpisodesRentPeriodEnum = "60 day"
	OnDemandPageEpisodesRentPeriodEnumSevenDay       OnDemandPageEpisodesRentPeriodEnum = "7 day"
	OnDemandPageEpisodesRentPeriodEnumSeventyTwoHour OnDemandPageEpisodesRentPeriodEnum = "72 hour"
)

type OnDemandPageEpisodesRent struct {
	Active bool                               `json:"active"`
	Period OnDemandPageEpisodesRentPeriodEnum `json:"period"`
	Price  float64                            `json:"price"`
}

// OnDemandPageEpisodes
// Information about this On Demand page's episodes, if the page is for a series.
type OnDemandPageEpisodes struct {
	Buy  OnDemandPageEpisodesBuy  `json:"buy"`
	Rent OnDemandPageEpisodesRent `json:"rent"`
}

// OnDemandPageMetadataConnectionsMetadataConnectionsComments
// Information about the comments associated with this page.
type OnDemandPageMetadataConnectionsMetadataConnectionsComments struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageMetadataConnectionsMetadataConnectionsGenres
// Information about the genres associated with this page.
type OnDemandPageMetadataConnectionsMetadataConnectionsGenres struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageMetadataConnectionsMetadataConnectionsLikes
// Information about the likes associated with this page.
type OnDemandPageMetadataConnectionsMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageMetadataConnectionsMetadataConnectionsPictures
// Information about the pictures associated with this page.
type OnDemandPageMetadataConnectionsMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageMetadataConnectionsMetadataConnectionsSeasons
// Information about the seasons associated with this page.
type OnDemandPageMetadataConnectionsMetadataConnectionsSeasons struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageMetadataConnectionsMetadataConnectionsVideos
// Information about the videos associated with this page.
type OnDemandPageMetadataConnectionsMetadataConnectionsVideos struct {
	ExtraTotal    float64  `json:"extra_total"`
	MainTotal     float64  `json:"main_total"`
	Options       []string `json:"options"`
	Total         float64  `json:"total"`
	URI           string   `json:"uri"`
	ViewableTotal float64  `json:"viewable_total"`
}

type OnDemandPageMetadataConnectionsMetadataConnections struct {
	Comments OnDemandPageMetadataConnectionsMetadataConnectionsComments `json:"comments"`
	Genres   OnDemandPageMetadataConnectionsMetadataConnectionsGenres   `json:"genres"`
	Likes    OnDemandPageMetadataConnectionsMetadataConnectionsLikes    `json:"likes"`
	Pictures OnDemandPageMetadataConnectionsMetadataConnectionsPictures `json:"pictures"`
	Seasons  OnDemandPageMetadataConnectionsMetadataConnectionsSeasons  `json:"seasons"`
	Videos   OnDemandPageMetadataConnectionsMetadataConnectionsVideos   `json:"videos"`
}

type OnDemandPageMetadataConnectionsMetadata struct {
	Connections OnDemandPageMetadataConnectionsMetadataConnections `json:"connections"`
}

// OnDemandPageMetadataConnections
// A collection of information that is connected to this resource, including videos, genres, and pictures connections.
type OnDemandPageMetadataConnections struct {
	Metadata OnDemandPageMetadataConnectionsMetadata `json:"metadata"`
}

// OnDemandPageMetadata
// Metadata about the On Demand page.
type OnDemandPageMetadata struct {
	Connections  OnDemandPageMetadataConnections `json:"connections"`
	Interactions PurchaseInteraction             `json:"interactions"`
}

type OnDemandPagePreorder struct {
	Active      bool   `json:"active"`
	CancelTime  string `json:"cancel_time"`
	PublishTime string `json:"publish_time"`
	Time        string `json:"time"`
}

type OnDemandPagePublished struct {
	Enabled bool   `json:"enabled"`
	Time    string `json:"time"`
}

// OnDemandPageSubscription
// Information about subscribing to this On Demand page, if enabled.
type OnDemandPageSubscription struct {
	Active bool                   `json:"active"`
	Link   string                 `json:"link"`
	Period *string                `json:"period,omitempty"`
	Price  map[string]interface{} `json:"price"`
}

type OnDemandPageVideoContextActionEnum string

const (
	OnDemandPageVideoContextActionEnumAddedTo      OnDemandPageVideoContextActionEnum = "Added to"
	OnDemandPageVideoContextActionEnumAppearanceBy OnDemandPageVideoContextActionEnum = "Appearance by"
	OnDemandPageVideoContextActionEnumLikedBy      OnDemandPageVideoContextActionEnum = "Liked by"
	OnDemandPageVideoContextActionEnumUploadedBy   OnDemandPageVideoContextActionEnum = "Uploaded by"
)

// OnDemandPageVideoContext
// The context of the video's subscription, if this video is part of a subscription.
type OnDemandPageVideoContext struct {
	Action       OnDemandPageVideoContextActionEnum `json:"action"`
	Resource     map[string]interface{}             `json:"resource"`
	ResourceType string                             `json:"resource_type"`
}

type OnDemandPageVideoLicenseEnum string

const (
	OnDemandPageVideoLicenseEnumBy     OnDemandPageVideoLicenseEnum = "by"
	OnDemandPageVideoLicenseEnumByNc   OnDemandPageVideoLicenseEnum = "by-nc"
	OnDemandPageVideoLicenseEnumByNcNd OnDemandPageVideoLicenseEnum = "by-nc-nd"
	OnDemandPageVideoLicenseEnumByNcSa OnDemandPageVideoLicenseEnum = "by-nc-sa"
	OnDemandPageVideoLicenseEnumByNd   OnDemandPageVideoLicenseEnum = "by-nd"
	OnDemandPageVideoLicenseEnumBySa   OnDemandPageVideoLicenseEnum = "by-sa"
	OnDemandPageVideoLicenseEnumCc0    OnDemandPageVideoLicenseEnum = "cc0"
)

// OnDemandPageVideoMetadataConnectionsComments
// Information about the comments on this video.
type OnDemandPageVideoMetadataConnectionsComments struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoMetadataConnectionsCredits
// Information about the users credited in this video.
type OnDemandPageVideoMetadataConnectionsCredits struct {
	Options []string `json:"options,omitempty"`
	Total   *float64 `json:"total,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

// OnDemandPageVideoMetadataConnectionsLikes
// Information about the users who have liked this video.
type OnDemandPageVideoMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoMetadataConnectionsOndemand
// Information about this video's ondemand data.
type OnDemandPageVideoMetadataConnectionsOndemand struct {
	Options     []string `json:"options"`
	ResourceKey string   `json:"resource_key"`
	URI         string   `json:"uri"`
}

// OnDemandPageVideoMetadataConnectionsPictures
// Information about this video's thumbnails.
type OnDemandPageVideoMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoMetadataConnectionsPlayback
// The DRM playback status connection for this video.
type OnDemandPageVideoMetadataConnectionsPlayback struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoMetadataConnectionsRecommendations
// The recommendations for this video.
type OnDemandPageVideoMetadataConnectionsRecommendations struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

// OnDemandPageVideoMetadataConnectionsRelated
// Related content for this video.
type OnDemandPageVideoMetadataConnectionsRelated struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

// OnDemandPageVideoMetadataConnectionsSeason
// Information about the video's season.
type OnDemandPageVideoMetadataConnectionsSeason struct {
	Name    string   `json:"name"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoMetadataConnectionsTexttracks
// Information about this video's text tracks.
type OnDemandPageVideoMetadataConnectionsTexttracks struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoMetadataConnectionsTrailer
// Information about this video's VOD trailer.
type OnDemandPageVideoMetadataConnectionsTrailer struct {
	Options     []string `json:"options"`
	ResourceKey string   `json:"resource_key"`
	URI         string   `json:"uri"`
}

// OnDemandPageVideoMetadataConnectionsUsersWithAccess
// Information about the user privacy of this video, if the video privacy is `users`.
type OnDemandPageVideoMetadataConnectionsUsersWithAccess struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoMetadataConnectionsVersions
// Information about the versions of this video.
type OnDemandPageVideoMetadataConnectionsVersions struct {
	CurrentURI *string  `json:"current_uri,omitempty"`
	Options    []string `json:"options"`
	Total      float64  `json:"total"`
	URI        string   `json:"uri"`
}

// OnDemandPageVideoMetadataConnections
// A list of resource URIs related to the video.
type OnDemandPageVideoMetadataConnections struct {
	Comments        OnDemandPageVideoMetadataConnectionsComments        `json:"comments"`
	Credits         OnDemandPageVideoMetadataConnectionsCredits         `json:"credits"`
	Likes           OnDemandPageVideoMetadataConnectionsLikes           `json:"likes"`
	Ondemand        OnDemandPageVideoMetadataConnectionsOndemand        `json:"ondemand"`
	Pictures        OnDemandPageVideoMetadataConnectionsPictures        `json:"pictures"`
	Playback        OnDemandPageVideoMetadataConnectionsPlayback        `json:"playback"`
	Recommendations OnDemandPageVideoMetadataConnectionsRecommendations `json:"recommendations"`
	Related         OnDemandPageVideoMetadataConnectionsRelated         `json:"related"`
	Season          OnDemandPageVideoMetadataConnectionsSeason          `json:"season"`
	Texttracks      OnDemandPageVideoMetadataConnectionsTexttracks      `json:"texttracks"`
	Trailer         OnDemandPageVideoMetadataConnectionsTrailer         `json:"trailer"`
	UsersWithAccess OnDemandPageVideoMetadataConnectionsUsersWithAccess `json:"users_with_access"`
	Versions        OnDemandPageVideoMetadataConnectionsVersions        `json:"versions"`
}

type OnDemandPageVideoMetadataInteractionsBuyDownloadEnum string

const (
	OnDemandPageVideoMetadataInteractionsBuyDownloadEnumAvailable   OnDemandPageVideoMetadataInteractionsBuyDownloadEnum = "available"
	OnDemandPageVideoMetadataInteractionsBuyDownloadEnumPurchased   OnDemandPageVideoMetadataInteractionsBuyDownloadEnum = "purchased"
	OnDemandPageVideoMetadataInteractionsBuyDownloadEnumRestricted  OnDemandPageVideoMetadataInteractionsBuyDownloadEnum = "restricted"
	OnDemandPageVideoMetadataInteractionsBuyDownloadEnumUnavailable OnDemandPageVideoMetadataInteractionsBuyDownloadEnum = "unavailable"
)

type OnDemandPageVideoMetadataInteractionsBuyStreamEnum string

const (
	OnDemandPageVideoMetadataInteractionsBuyStreamEnumAvailable   OnDemandPageVideoMetadataInteractionsBuyStreamEnum = "available"
	OnDemandPageVideoMetadataInteractionsBuyStreamEnumPurchased   OnDemandPageVideoMetadataInteractionsBuyStreamEnum = "purchased"
	OnDemandPageVideoMetadataInteractionsBuyStreamEnumRestricted  OnDemandPageVideoMetadataInteractionsBuyStreamEnum = "restricted"
	OnDemandPageVideoMetadataInteractionsBuyStreamEnumUnavailable OnDemandPageVideoMetadataInteractionsBuyStreamEnum = "unavailable"
)

// OnDemandPageVideoMetadataInteractionsBuy
// The Buy interaction for a On Demand video.
type OnDemandPageVideoMetadataInteractionsBuy struct {
	Currency     string                                               `json:"currency"`
	DisplayPrice string                                               `json:"display_price"`
	Download     OnDemandPageVideoMetadataInteractionsBuyDownloadEnum `json:"download"`
	Drm          bool                                                 `json:"drm"`
	Link         string                                               `json:"link"`
	Price        float64                                              `json:"price"`
	PurchaseTime string                                               `json:"purchase_time"`
	Stream       OnDemandPageVideoMetadataInteractionsBuyStreamEnum   `json:"stream"`
	URI          string                                               `json:"uri"`
}

// OnDemandPageVideoMetadataInteractionsChannel
// When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
type OnDemandPageVideoMetadataInteractionsChannel struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoMetadataInteractionsLike
// Information about whether the authenticated user has liked this video.
type OnDemandPageVideoMetadataInteractionsLike struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

type OnDemandPageVideoMetadataInteractionsRentStreamEnum string

const (
	OnDemandPageVideoMetadataInteractionsRentStreamEnumAvailable   OnDemandPageVideoMetadataInteractionsRentStreamEnum = "available"
	OnDemandPageVideoMetadataInteractionsRentStreamEnumPurchased   OnDemandPageVideoMetadataInteractionsRentStreamEnum = "purchased"
	OnDemandPageVideoMetadataInteractionsRentStreamEnumRestricted  OnDemandPageVideoMetadataInteractionsRentStreamEnum = "restricted"
	OnDemandPageVideoMetadataInteractionsRentStreamEnumUnavailable OnDemandPageVideoMetadataInteractionsRentStreamEnum = "unavailable"
)

// OnDemandPageVideoMetadataInteractionsRent
// The Rent interaction for an On Demand video.
type OnDemandPageVideoMetadataInteractionsRent struct {
	Currency     string                                              `json:"currency"`
	DisplayPrice string                                              `json:"display_price"`
	Drm          bool                                                `json:"drm"`
	ExpiresTime  string                                              `json:"expires_time"`
	Link         string                                              `json:"link"`
	Price        float64                                             `json:"price"`
	PurchaseTime string                                              `json:"purchase_time"`
	Stream       OnDemandPageVideoMetadataInteractionsRentStreamEnum `json:"stream"`
	URI          string                                              `json:"uri"`
}

// OnDemandPageVideoMetadataInteractionsReport
// Information about where and how to report a video.
type OnDemandPageVideoMetadataInteractionsReport struct {
	Options []string `json:"options"`
	Reason  []string `json:"reason"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoMetadataInteractionsSubscribe
// Subscription information for an On Demand video.
type OnDemandPageVideoMetadataInteractionsSubscribe struct {
	Drm          *bool   `json:"drm,omitempty"`
	ExpiresTime  *string `json:"expires_time,omitempty"`
	PurchaseTime *string `json:"purchase_time,omitempty"`
	Stream       *string `json:"stream,omitempty"`
}

// OnDemandPageVideoMetadataInteractionsWatched
// Information about removing this video from the user's list of watched videos.
type OnDemandPageVideoMetadataInteractionsWatched struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

// OnDemandPageVideoMetadataInteractionsWatchlater
// Information about whether this video appears on the authenticated user's Watch Later list.
type OnDemandPageVideoMetadataInteractionsWatchlater struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

// OnDemandPageVideoMetadataInteractions
// A list of resource URIs related to the video.
type OnDemandPageVideoMetadataInteractions struct {
	Buy        OnDemandPageVideoMetadataInteractionsBuy        `json:"buy"`
	Channel    OnDemandPageVideoMetadataInteractionsChannel    `json:"channel"`
	Like       OnDemandPageVideoMetadataInteractionsLike       `json:"like"`
	Rent       OnDemandPageVideoMetadataInteractionsRent       `json:"rent"`
	Report     OnDemandPageVideoMetadataInteractionsReport     `json:"report"`
	Subscribe  *OnDemandPageVideoMetadataInteractionsSubscribe `json:"subscribe,omitempty"`
	Watched    OnDemandPageVideoMetadataInteractionsWatched    `json:"watched"`
	Watchlater OnDemandPageVideoMetadataInteractionsWatchlater `json:"watchlater"`
}

// OnDemandPageVideoMetadata
// The video's metadata.
type OnDemandPageVideoMetadata struct {
	Connections  OnDemandPageVideoMetadataConnections  `json:"connections"`
	Interactions OnDemandPageVideoMetadataInteractions `json:"interactions"`
}

// OnDemandPageVideoProjectMetadataConnectionsVideos
// A standard connection object indicating how to get all the videos in this project.
type OnDemandPageVideoProjectMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoProjectMetadataConnections
// A list of resource URIs related to the project.
type OnDemandPageVideoProjectMetadataConnections struct {
	Videos OnDemandPageVideoProjectMetadataConnectionsVideos `json:"videos"`
}

// OnDemandPageVideoProjectMetadata
// The project's metadata.
type OnDemandPageVideoProjectMetadata struct {
	Connections OnDemandPageVideoProjectMetadataConnections `json:"connections"`
}

// OnDemandPageVideoProject
// Information about the folder that contains this video.
type OnDemandPageVideoProject struct {
	CreatedTime  string                           `json:"created_time"`
	Metadata     OnDemandPageVideoProjectMetadata `json:"metadata"`
	ModifiedTime string                           `json:"modified_time"`
	Name         string                           `json:"name"`
	ResourceKey  string                           `json:"resource_key"`
	URI          string                           `json:"uri"`
	User         User                             `json:"user"`
}

type OnDemandPageVideoPrivacyCommentsEnum string

const (
	OnDemandPageVideoPrivacyCommentsEnumAnybody  OnDemandPageVideoPrivacyCommentsEnum = "anybody"
	OnDemandPageVideoPrivacyCommentsEnumContacts OnDemandPageVideoPrivacyCommentsEnum = "contacts"
	OnDemandPageVideoPrivacyCommentsEnumNobody   OnDemandPageVideoPrivacyCommentsEnum = "nobody"
)

type OnDemandPageVideoPrivacyEmbedEnum string

const (
	OnDemandPageVideoPrivacyEmbedEnumPrivate OnDemandPageVideoPrivacyEmbedEnum = "private"
	OnDemandPageVideoPrivacyEmbedEnumPublic  OnDemandPageVideoPrivacyEmbedEnum = "public"
)

type OnDemandPageVideoPrivacyViewEnum string

const (
	OnDemandPageVideoPrivacyViewEnumAnybody  OnDemandPageVideoPrivacyViewEnum = "anybody"
	OnDemandPageVideoPrivacyViewEnumContacts OnDemandPageVideoPrivacyViewEnum = "contacts"
	OnDemandPageVideoPrivacyViewEnumDisable  OnDemandPageVideoPrivacyViewEnum = "disable"
	OnDemandPageVideoPrivacyViewEnumNobody   OnDemandPageVideoPrivacyViewEnum = "nobody"
	OnDemandPageVideoPrivacyViewEnumPassword OnDemandPageVideoPrivacyViewEnum = "password"
	OnDemandPageVideoPrivacyViewEnumUnlisted OnDemandPageVideoPrivacyViewEnum = "unlisted"
	OnDemandPageVideoPrivacyViewEnumUsers    OnDemandPageVideoPrivacyViewEnum = "users"
)

// OnDemandPageVideoPrivacy
// The video's privacy setting.
type OnDemandPageVideoPrivacy struct {
	Add      bool                                 `json:"add"`
	Comments OnDemandPageVideoPrivacyCommentsEnum `json:"comments"`
	Download bool                                 `json:"download"`
	Embed    OnDemandPageVideoPrivacyEmbedEnum    `json:"embed"`
	View     OnDemandPageVideoPrivacyViewEnum     `json:"view"`
}

type OnDemandPageVideoSpatialDirectorTimeline struct {
	Pitch    *float64 `json:"pitch,omitempty"`
	Roll     *float64 `json:"roll,omitempty"`
	TimeCode *float64 `json:"time_code,omitempty"`
	Yaw      *float64 `json:"yaw,omitempty"`
}

type OnDemandPageVideoSpatialProjectionEnum string

const (
	OnDemandPageVideoSpatialProjectionEnumCubical         OnDemandPageVideoSpatialProjectionEnum = "cubical"
	OnDemandPageVideoSpatialProjectionEnumCylindrical     OnDemandPageVideoSpatialProjectionEnum = "cylindrical"
	OnDemandPageVideoSpatialProjectionEnumDome            OnDemandPageVideoSpatialProjectionEnum = "dome"
	OnDemandPageVideoSpatialProjectionEnumEquirectangular OnDemandPageVideoSpatialProjectionEnum = "equirectangular"
	OnDemandPageVideoSpatialProjectionEnumPyramid         OnDemandPageVideoSpatialProjectionEnum = "pyramid"
)

type OnDemandPageVideoSpatialStereoFormatEnum string

const (
	OnDemandPageVideoSpatialStereoFormatEnumLeftRight OnDemandPageVideoSpatialStereoFormatEnum = "left-right"
	OnDemandPageVideoSpatialStereoFormatEnumMono      OnDemandPageVideoSpatialStereoFormatEnum = "mono"
	OnDemandPageVideoSpatialStereoFormatEnumTopBottom OnDemandPageVideoSpatialStereoFormatEnum = "top-bottom"
)

// OnDemandPageVideoSpatial
// 360 spatial data.
type OnDemandPageVideoSpatial struct {
	DirectorTimeline []OnDemandPageVideoSpatialDirectorTimeline `json:"director_timeline"`
	FieldOfView      float64                                    `json:"field_of_view"`
	Projection       OnDemandPageVideoSpatialProjectionEnum     `json:"projection"`
	StereoFormat     OnDemandPageVideoSpatialStereoFormatEnum   `json:"stereo_format"`
}

// OnDemandPageVideoStats
// A collection of stats associated with this video.
type OnDemandPageVideoStats struct {
	Plays float64 `json:"plays"`
}

type OnDemandPageVideoStatusEnum string

const (
	OnDemandPageVideoStatusEnumAvailable         OnDemandPageVideoStatusEnum = "available"
	OnDemandPageVideoStatusEnumQuotaExceeded     OnDemandPageVideoStatusEnum = "quota_exceeded"
	OnDemandPageVideoStatusEnumTotalCapExceeded  OnDemandPageVideoStatusEnum = "total_cap_exceeded"
	OnDemandPageVideoStatusEnumTranscodeStarting OnDemandPageVideoStatusEnum = "transcode_starting"
	OnDemandPageVideoStatusEnumTranscoding       OnDemandPageVideoStatusEnum = "transcoding"
	OnDemandPageVideoStatusEnumTranscodingError  OnDemandPageVideoStatusEnum = "transcoding_error"
	OnDemandPageVideoStatusEnumUnavailable       OnDemandPageVideoStatusEnum = "unavailable"
	OnDemandPageVideoStatusEnumUploading         OnDemandPageVideoStatusEnum = "uploading"
	OnDemandPageVideoStatusEnumUploadingError    OnDemandPageVideoStatusEnum = "uploading_error"
)

type OnDemandPageVideoTranscodeStatusEnum string

const (
	OnDemandPageVideoTranscodeStatusEnumComplete   OnDemandPageVideoTranscodeStatusEnum = "complete"
	OnDemandPageVideoTranscodeStatusEnumError      OnDemandPageVideoTranscodeStatusEnum = "error"
	OnDemandPageVideoTranscodeStatusEnumInProgress OnDemandPageVideoTranscodeStatusEnum = "in_progress"
)

// OnDemandPageVideoTranscode
// The transcode information for a video upload.
type OnDemandPageVideoTranscode struct {
	Status *OnDemandPageVideoTranscodeStatusEnum `json:"status,omitempty"`
}

type OnDemandPageVideoUploadApproachEnum string

const (
	OnDemandPageVideoUploadApproachEnumPost      OnDemandPageVideoUploadApproachEnum = "post"
	OnDemandPageVideoUploadApproachEnumPull      OnDemandPageVideoUploadApproachEnum = "pull"
	OnDemandPageVideoUploadApproachEnumStreaming OnDemandPageVideoUploadApproachEnum = "streaming"
	OnDemandPageVideoUploadApproachEnumTus       OnDemandPageVideoUploadApproachEnum = "tus"
)

type OnDemandPageVideoUploadStatusEnum string

const (
	OnDemandPageVideoUploadStatusEnumComplete   OnDemandPageVideoUploadStatusEnum = "complete"
	OnDemandPageVideoUploadStatusEnumError      OnDemandPageVideoUploadStatusEnum = "error"
	OnDemandPageVideoUploadStatusEnumInProgress OnDemandPageVideoUploadStatusEnum = "in_progress"
)

// OnDemandPageVideoUpload
// The upload information for this video.
type OnDemandPageVideoUpload struct {
	Approach    *OnDemandPageVideoUploadApproachEnum `json:"approach,omitempty"`
	CompleteURI *string                              `json:"complete_uri,omitempty"`
	Form        *string                              `json:"form,omitempty"`
	Link        *string                              `json:"link,omitempty"`
	RedirectURL *string                              `json:"redirect_url,omitempty"`
	Size        *float64                             `json:"size,omitempty"`
	Status      OnDemandPageVideoUploadStatusEnum    `json:"status"`
	UploadLink  *string                              `json:"upload_link,omitempty"`
}

type OnDemandPageVideoUserAccountEnum string

const (
	OnDemandPageVideoUserAccountEnumBasic        OnDemandPageVideoUserAccountEnum = "basic"
	OnDemandPageVideoUserAccountEnumBusiness     OnDemandPageVideoUserAccountEnum = "business"
	OnDemandPageVideoUserAccountEnumLiveBusiness OnDemandPageVideoUserAccountEnum = "live_business"
	OnDemandPageVideoUserAccountEnumLivePremium  OnDemandPageVideoUserAccountEnum = "live_premium"
	OnDemandPageVideoUserAccountEnumLivePro      OnDemandPageVideoUserAccountEnum = "live_pro"
	OnDemandPageVideoUserAccountEnumPlus         OnDemandPageVideoUserAccountEnum = "plus"
	OnDemandPageVideoUserAccountEnumPro          OnDemandPageVideoUserAccountEnum = "pro"
	OnDemandPageVideoUserAccountEnumProUnlimited OnDemandPageVideoUserAccountEnum = "pro_unlimited"
	OnDemandPageVideoUserAccountEnumProducer     OnDemandPageVideoUserAccountEnum = "producer"
)

// OnDemandPageVideoUserMetadataConnectionsAlbums
// Information about the albums created by this user.
type OnDemandPageVideoUserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsAppearances
// Information about the appearances of this user in other videos.
type OnDemandPageVideoUserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsBlock
// Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
type OnDemandPageVideoUserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsCategories
// Information about this user's followed categories.
type OnDemandPageVideoUserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsChannels
// Information about this user's subscribed channels.
type OnDemandPageVideoUserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsFeed
// Information about this user's feed.
type OnDemandPageVideoUserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsFolders
// Information about this user's folders.
type OnDemandPageVideoUserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsFollowers
// Information about the user's followers.
type OnDemandPageVideoUserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsFollowing
// Information about the users that the current user is following.
type OnDemandPageVideoUserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsGroups
// Information about the groups created by this user.
type OnDemandPageVideoUserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsLikes
// Information about the videos that this user has liked.
type OnDemandPageVideoUserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsModeratedChannels
// Information about the channels that this user moderates.
type OnDemandPageVideoUserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsPictures
// Information about this user's portraits.
type OnDemandPageVideoUserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsPortfolios
// Information about this user's portfolios.
type OnDemandPageVideoUserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsRecommendedChannels
// A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
type OnDemandPageVideoUserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsRecommendedUsers
// A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
type OnDemandPageVideoUserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsShared
// Information about the videos that have been shared with this user.
type OnDemandPageVideoUserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsVideos
// Information about the videos uploaded by this user.
type OnDemandPageVideoUserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsWatchedVideos
// Information about the videos that this user has watched.
type OnDemandPageVideoUserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnectionsWatchlater
// Information about the videos that this user wants to watch later.
type OnDemandPageVideoUserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataConnections
// The list of resource URIs related to the user.
type OnDemandPageVideoUserMetadataConnections struct {
	Albums              OnDemandPageVideoUserMetadataConnectionsAlbums              `json:"albums"`
	Appearances         OnDemandPageVideoUserMetadataConnectionsAppearances         `json:"appearances"`
	Block               OnDemandPageVideoUserMetadataConnectionsBlock               `json:"block"`
	Categories          OnDemandPageVideoUserMetadataConnectionsCategories          `json:"categories"`
	Channels            OnDemandPageVideoUserMetadataConnectionsChannels            `json:"channels"`
	Feed                OnDemandPageVideoUserMetadataConnectionsFeed                `json:"feed"`
	Folders             OnDemandPageVideoUserMetadataConnectionsFolders             `json:"folders"`
	Followers           OnDemandPageVideoUserMetadataConnectionsFollowers           `json:"followers"`
	Following           OnDemandPageVideoUserMetadataConnectionsFollowing           `json:"following"`
	Groups              OnDemandPageVideoUserMetadataConnectionsGroups              `json:"groups"`
	Likes               OnDemandPageVideoUserMetadataConnectionsLikes               `json:"likes"`
	ModeratedChannels   OnDemandPageVideoUserMetadataConnectionsModeratedChannels   `json:"moderated_channels"`
	Pictures            OnDemandPageVideoUserMetadataConnectionsPictures            `json:"pictures"`
	Portfolios          OnDemandPageVideoUserMetadataConnectionsPortfolios          `json:"portfolios"`
	RecommendedChannels OnDemandPageVideoUserMetadataConnectionsRecommendedChannels `json:"recommended_channels"`
	RecommendedUsers    OnDemandPageVideoUserMetadataConnectionsRecommendedUsers    `json:"recommended_users"`
	Shared              OnDemandPageVideoUserMetadataConnectionsShared              `json:"shared"`
	Videos              OnDemandPageVideoUserMetadataConnectionsVideos              `json:"videos"`
	WatchedVideos       OnDemandPageVideoUserMetadataConnectionsWatchedVideos       `json:"watched_videos"`
	Watchlater          OnDemandPageVideoUserMetadataConnectionsWatchlater          `json:"watchlater"`
}

type OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

// OnDemandPageVideoUserMetadataInteractionsBlock
// Information related to the block status of this user.
type OnDemandPageVideoUserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataInteractionsFollow
// Information related to the followed status of this user.
type OnDemandPageVideoUserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// OnDemandPageVideoUserMetadataInteractionsReport
// Information regarding where and how to report a user.
type OnDemandPageVideoUserMetadataInteractionsReport struct {
	Options []string `json:"options"`
	Reason  []string `json:"reason"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataInteractions struct {
	AddPrivacyUser *OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser `json:"add_privacy_user,omitempty"`
	Block          OnDemandPageVideoUserMetadataInteractionsBlock           `json:"block"`
	Follow         OnDemandPageVideoUserMetadataInteractionsFollow          `json:"follow"`
	Report         OnDemandPageVideoUserMetadataInteractionsReport          `json:"report"`
}

// OnDemandPageVideoUserMetadata
// The user's metadata.
type OnDemandPageVideoUserMetadata struct {
	Connections  OnDemandPageVideoUserMetadataConnections  `json:"connections"`
	Interactions OnDemandPageVideoUserMetadataInteractions `json:"interactions"`
}

type OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum string

const (
	OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnumAnybody  OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum = "anybody"
	OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnumContacts OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum = "contacts"
	OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnumNobody   OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum = "nobody"
)

type OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum string

const (
	OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnumPrivate   OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum = "private"
	OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnumPublic    OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum = "public"
	OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnumWhitelist OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum = "whitelist"
)

type OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum string

const (
	OnDemandPageVideoUserPreferencesVideosPrivacyViewEnumAnybody  OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum = "anybody"
	OnDemandPageVideoUserPreferencesVideosPrivacyViewEnumContacts OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum = "contacts"
	OnDemandPageVideoUserPreferencesVideosPrivacyViewEnumDisable  OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum = "disable"
	OnDemandPageVideoUserPreferencesVideosPrivacyViewEnumNobody   OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum = "nobody"
	OnDemandPageVideoUserPreferencesVideosPrivacyViewEnumPassword OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum = "password"
	OnDemandPageVideoUserPreferencesVideosPrivacyViewEnumUnlisted OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum = "unlisted"
	OnDemandPageVideoUserPreferencesVideosPrivacyViewEnumUsers    OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum = "users"
)

type OnDemandPageVideoUserPreferencesVideosPrivacy struct {
	Add      *bool                                                      `json:"add,omitempty"`
	Comments *OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum `json:"comments,omitempty"`
	Download *bool                                                      `json:"download,omitempty"`
	Embed    *OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum    `json:"embed,omitempty"`
	View     *OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum     `json:"view,omitempty"`
}

type OnDemandPageVideoUserPreferencesVideos struct {
	Privacy *OnDemandPageVideoUserPreferencesVideosPrivacy `json:"privacy,omitempty"`
}

type OnDemandPageVideoUserPreferences struct {
	Videos *OnDemandPageVideoUserPreferencesVideos `json:"videos,omitempty"`
}

// OnDemandPageVideoUserUploadQuotaLifetime
// Information about the user's lifetime upload usage.
type OnDemandPageVideoUserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

// OnDemandPageVideoUserUploadQuotaPeriodic
// Information about the user's usage for the current period.
type OnDemandPageVideoUserUploadQuotaPeriodic struct {
	Free      float64 `json:"free"`
	Max       float64 `json:"max"`
	ResetDate string  `json:"reset_date"`
	Used      float64 `json:"used"`
}

type OnDemandPageVideoUserUploadQuotaSpaceShowingEnum string

const (
	OnDemandPageVideoUserUploadQuotaSpaceShowingEnumLifetime OnDemandPageVideoUserUploadQuotaSpaceShowingEnum = "lifetime"
	OnDemandPageVideoUserUploadQuotaSpaceShowingEnumPeriodic OnDemandPageVideoUserUploadQuotaSpaceShowingEnum = "periodic"
)

// OnDemandPageVideoUserUploadQuotaSpace
// Information about the user's upload space remaining for the current period.
type OnDemandPageVideoUserUploadQuotaSpace struct {
	Free    float64                                          `json:"free"`
	Max     float64                                          `json:"max"`
	Showing OnDemandPageVideoUserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                                          `json:"used"`
}

// OnDemandPageVideoUserUploadQuota
// Appears only when the user has upload access and is looking at their own user record.
type OnDemandPageVideoUserUploadQuota struct {
	Lifetime OnDemandPageVideoUserUploadQuotaLifetime `json:"lifetime"`
	Periodic OnDemandPageVideoUserUploadQuotaPeriodic `json:"periodic"`
	Space    OnDemandPageVideoUserUploadQuotaSpace    `json:"space"`
}

type OnDemandPageVideoUserWebsites struct {
	Description string `json:"description"`
	Link        string `json:"link"`
	Name        string `json:"name"`
}

// OnDemandPageVideoUser
// The video owner.
type OnDemandPageVideoUser struct {
	Account       OnDemandPageVideoUserAccountEnum  `json:"account"`
	Bio           string                            `json:"bio"`
	ContentFilter []string                          `json:"content_filter,omitempty"`
	CreatedTime   string                            `json:"created_time"`
	Email         *string                           `json:"email,omitempty"`
	Link          string                            `json:"link"`
	Location      string                            `json:"location"`
	Metadata      OnDemandPageVideoUserMetadata     `json:"metadata"`
	Name          string                            `json:"name"`
	Pictures      Picture                           `json:"pictures"`
	Preferences   *OnDemandPageVideoUserPreferences `json:"preferences,omitempty"`
	ResourceKey   string                            `json:"resource_key"`
	UploadQuota   OnDemandPageVideoUserUploadQuota  `json:"upload_quota"`
	URI           string                            `json:"uri"`
	Websites      []OnDemandPageVideoUserWebsites   `json:"websites"`
}

// OnDemandPageVideo
// The trailer for this On Demand page.
type OnDemandPageVideo struct {
	Categories              []Category                   `json:"categories"`
	ContentRating           []string                     `json:"content_rating"`
	Context                 OnDemandPageVideoContext     `json:"context"`
	CreatedTime             string                       `json:"created_time"`
	Description             string                       `json:"description"`
	Duration                float64                      `json:"duration"`
	Embed                   EmbedSettings                `json:"embed"`
	Height                  float64                      `json:"height"`
	Language                string                       `json:"language"`
	LastUserActionEventDate *string                      `json:"last_user_action_event_date,omitempty"`
	License                 OnDemandPageVideoLicenseEnum `json:"license"`
	Link                    string                       `json:"link"`
	Metadata                OnDemandPageVideoMetadata    `json:"metadata"`
	ModifiedTime            string                       `json:"modified_time"`
	Name                    string                       `json:"name"`
	ParentFolder            *OnDemandPageVideoProject    `json:"parent_folder,omitempty"`
	Password                *string                      `json:"password,omitempty"`
	Pictures                Picture                      `json:"pictures"`
	Privacy                 OnDemandPageVideoPrivacy     `json:"privacy"`
	ReleaseTime             string                       `json:"release_time"`
	ResourceKey             string                       `json:"resource_key"`
	Spatial                 OnDemandPageVideoSpatial     `json:"spatial"`
	Stats                   OnDemandPageVideoStats       `json:"stats"`
	Status                  OnDemandPageVideoStatusEnum  `json:"status"`
	Tags                    []Tag                        `json:"tags"`
	Transcode               OnDemandPageVideoTranscode   `json:"transcode"`
	Upload                  OnDemandPageVideoUpload      `json:"upload"`
	URI                     string                       `json:"uri"`
	User                    OnDemandPageVideoUser        `json:"user"`
	Width                   float64                      `json:"width"`
}

type OnDemandPageTypeEnum string

const (
	OnDemandPageTypeEnumFilm   OnDemandPageTypeEnum = "film"
	OnDemandPageTypeEnumSeries OnDemandPageTypeEnum = "series"
)

type OnDemandPageUserAccountEnum string

const (
	OnDemandPageUserAccountEnumBasic        OnDemandPageUserAccountEnum = "basic"
	OnDemandPageUserAccountEnumBusiness     OnDemandPageUserAccountEnum = "business"
	OnDemandPageUserAccountEnumLiveBusiness OnDemandPageUserAccountEnum = "live_business"
	OnDemandPageUserAccountEnumLivePremium  OnDemandPageUserAccountEnum = "live_premium"
	OnDemandPageUserAccountEnumLivePro      OnDemandPageUserAccountEnum = "live_pro"
	OnDemandPageUserAccountEnumPlus         OnDemandPageUserAccountEnum = "plus"
	OnDemandPageUserAccountEnumPro          OnDemandPageUserAccountEnum = "pro"
	OnDemandPageUserAccountEnumProUnlimited OnDemandPageUserAccountEnum = "pro_unlimited"
	OnDemandPageUserAccountEnumProducer     OnDemandPageUserAccountEnum = "producer"
)

// OnDemandPageUserMetadataConnectionsAlbums
// Information about the albums created by this user.
type OnDemandPageUserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsAppearances
// Information about the appearances of this user in other videos.
type OnDemandPageUserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsBlock
// Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
type OnDemandPageUserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsCategories
// Information about this user's followed categories.
type OnDemandPageUserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsChannels
// Information about this user's subscribed channels.
type OnDemandPageUserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsFeed
// Information about this user's feed.
type OnDemandPageUserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsFolders
// Information about this user's folders.
type OnDemandPageUserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsFollowers
// Information about the user's followers.
type OnDemandPageUserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsFollowing
// Information about the users that the current user is following.
type OnDemandPageUserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsGroups
// Information about the groups created by this user.
type OnDemandPageUserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsLikes
// Information about the videos that this user has liked.
type OnDemandPageUserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsModeratedChannels
// Information about the channels that this user moderates.
type OnDemandPageUserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsPictures
// Information about this user's portraits.
type OnDemandPageUserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsPortfolios
// Information about this user's portfolios.
type OnDemandPageUserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsRecommendedChannels
// A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
type OnDemandPageUserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsRecommendedUsers
// A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
type OnDemandPageUserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsShared
// Information about the videos that have been shared with this user.
type OnDemandPageUserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsVideos
// Information about the videos uploaded by this user.
type OnDemandPageUserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsWatchedVideos
// Information about the videos that this user has watched.
type OnDemandPageUserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnectionsWatchlater
// Information about the videos that this user wants to watch later.
type OnDemandPageUserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataConnections
// The list of resource URIs related to the user.
type OnDemandPageUserMetadataConnections struct {
	Albums              OnDemandPageUserMetadataConnectionsAlbums              `json:"albums"`
	Appearances         OnDemandPageUserMetadataConnectionsAppearances         `json:"appearances"`
	Block               OnDemandPageUserMetadataConnectionsBlock               `json:"block"`
	Categories          OnDemandPageUserMetadataConnectionsCategories          `json:"categories"`
	Channels            OnDemandPageUserMetadataConnectionsChannels            `json:"channels"`
	Feed                OnDemandPageUserMetadataConnectionsFeed                `json:"feed"`
	Folders             OnDemandPageUserMetadataConnectionsFolders             `json:"folders"`
	Followers           OnDemandPageUserMetadataConnectionsFollowers           `json:"followers"`
	Following           OnDemandPageUserMetadataConnectionsFollowing           `json:"following"`
	Groups              OnDemandPageUserMetadataConnectionsGroups              `json:"groups"`
	Likes               OnDemandPageUserMetadataConnectionsLikes               `json:"likes"`
	ModeratedChannels   OnDemandPageUserMetadataConnectionsModeratedChannels   `json:"moderated_channels"`
	Pictures            OnDemandPageUserMetadataConnectionsPictures            `json:"pictures"`
	Portfolios          OnDemandPageUserMetadataConnectionsPortfolios          `json:"portfolios"`
	RecommendedChannels OnDemandPageUserMetadataConnectionsRecommendedChannels `json:"recommended_channels"`
	RecommendedUsers    OnDemandPageUserMetadataConnectionsRecommendedUsers    `json:"recommended_users"`
	Shared              OnDemandPageUserMetadataConnectionsShared              `json:"shared"`
	Videos              OnDemandPageUserMetadataConnectionsVideos              `json:"videos"`
	WatchedVideos       OnDemandPageUserMetadataConnectionsWatchedVideos       `json:"watched_videos"`
	Watchlater          OnDemandPageUserMetadataConnectionsWatchlater          `json:"watchlater"`
}

type OnDemandPageUserMetadataInteractionsAddPrivacyUser struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

// OnDemandPageUserMetadataInteractionsBlock
// Information related to the block status of this user.
type OnDemandPageUserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

// OnDemandPageUserMetadataInteractionsFollow
// Information related to the followed status of this user.
type OnDemandPageUserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// OnDemandPageUserMetadataInteractionsReport
// Information regarding where and how to report a user.
type OnDemandPageUserMetadataInteractionsReport struct {
	Options []string `json:"options"`
	Reason  []string `json:"reason"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataInteractions struct {
	AddPrivacyUser *OnDemandPageUserMetadataInteractionsAddPrivacyUser `json:"add_privacy_user,omitempty"`
	Block          OnDemandPageUserMetadataInteractionsBlock           `json:"block"`
	Follow         OnDemandPageUserMetadataInteractionsFollow          `json:"follow"`
	Report         OnDemandPageUserMetadataInteractionsReport          `json:"report"`
}

// OnDemandPageUserMetadata
// The user's metadata.
type OnDemandPageUserMetadata struct {
	Connections  OnDemandPageUserMetadataConnections  `json:"connections"`
	Interactions OnDemandPageUserMetadataInteractions `json:"interactions"`
}

type OnDemandPageUserPreferencesVideosPrivacyCommentsEnum string

const (
	OnDemandPageUserPreferencesVideosPrivacyCommentsEnumAnybody  OnDemandPageUserPreferencesVideosPrivacyCommentsEnum = "anybody"
	OnDemandPageUserPreferencesVideosPrivacyCommentsEnumContacts OnDemandPageUserPreferencesVideosPrivacyCommentsEnum = "contacts"
	OnDemandPageUserPreferencesVideosPrivacyCommentsEnumNobody   OnDemandPageUserPreferencesVideosPrivacyCommentsEnum = "nobody"
)

type OnDemandPageUserPreferencesVideosPrivacyEmbedEnum string

const (
	OnDemandPageUserPreferencesVideosPrivacyEmbedEnumPrivate   OnDemandPageUserPreferencesVideosPrivacyEmbedEnum = "private"
	OnDemandPageUserPreferencesVideosPrivacyEmbedEnumPublic    OnDemandPageUserPreferencesVideosPrivacyEmbedEnum = "public"
	OnDemandPageUserPreferencesVideosPrivacyEmbedEnumWhitelist OnDemandPageUserPreferencesVideosPrivacyEmbedEnum = "whitelist"
)

type OnDemandPageUserPreferencesVideosPrivacyViewEnum string

const (
	OnDemandPageUserPreferencesVideosPrivacyViewEnumAnybody  OnDemandPageUserPreferencesVideosPrivacyViewEnum = "anybody"
	OnDemandPageUserPreferencesVideosPrivacyViewEnumContacts OnDemandPageUserPreferencesVideosPrivacyViewEnum = "contacts"
	OnDemandPageUserPreferencesVideosPrivacyViewEnumDisable  OnDemandPageUserPreferencesVideosPrivacyViewEnum = "disable"
	OnDemandPageUserPreferencesVideosPrivacyViewEnumNobody   OnDemandPageUserPreferencesVideosPrivacyViewEnum = "nobody"
	OnDemandPageUserPreferencesVideosPrivacyViewEnumPassword OnDemandPageUserPreferencesVideosPrivacyViewEnum = "password"
	OnDemandPageUserPreferencesVideosPrivacyViewEnumUnlisted OnDemandPageUserPreferencesVideosPrivacyViewEnum = "unlisted"
	OnDemandPageUserPreferencesVideosPrivacyViewEnumUsers    OnDemandPageUserPreferencesVideosPrivacyViewEnum = "users"
)

type OnDemandPageUserPreferencesVideosPrivacy struct {
	Add      *bool                                                 `json:"add,omitempty"`
	Comments *OnDemandPageUserPreferencesVideosPrivacyCommentsEnum `json:"comments,omitempty"`
	Download *bool                                                 `json:"download,omitempty"`
	Embed    *OnDemandPageUserPreferencesVideosPrivacyEmbedEnum    `json:"embed,omitempty"`
	View     *OnDemandPageUserPreferencesVideosPrivacyViewEnum     `json:"view,omitempty"`
}

type OnDemandPageUserPreferencesVideos struct {
	Privacy *OnDemandPageUserPreferencesVideosPrivacy `json:"privacy,omitempty"`
}

type OnDemandPageUserPreferences struct {
	Videos *OnDemandPageUserPreferencesVideos `json:"videos,omitempty"`
}

// OnDemandPageUserUploadQuotaLifetime
// Information about the user's lifetime upload usage.
type OnDemandPageUserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

// OnDemandPageUserUploadQuotaPeriodic
// Information about the user's usage for the current period.
type OnDemandPageUserUploadQuotaPeriodic struct {
	Free      float64 `json:"free"`
	Max       float64 `json:"max"`
	ResetDate string  `json:"reset_date"`
	Used      float64 `json:"used"`
}

type OnDemandPageUserUploadQuotaSpaceShowingEnum string

const (
	OnDemandPageUserUploadQuotaSpaceShowingEnumLifetime OnDemandPageUserUploadQuotaSpaceShowingEnum = "lifetime"
	OnDemandPageUserUploadQuotaSpaceShowingEnumPeriodic OnDemandPageUserUploadQuotaSpaceShowingEnum = "periodic"
)

// OnDemandPageUserUploadQuotaSpace
// Information about the user's upload space remaining for the current period.
type OnDemandPageUserUploadQuotaSpace struct {
	Free    float64                                     `json:"free"`
	Max     float64                                     `json:"max"`
	Showing OnDemandPageUserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                                     `json:"used"`
}

// OnDemandPageUserUploadQuota
// Appears only when the user has upload access and is looking at their own user record.
type OnDemandPageUserUploadQuota struct {
	Lifetime OnDemandPageUserUploadQuotaLifetime `json:"lifetime"`
	Periodic OnDemandPageUserUploadQuotaPeriodic `json:"periodic"`
	Space    OnDemandPageUserUploadQuotaSpace    `json:"space"`
}

type OnDemandPageUserWebsites struct {
	Description string `json:"description"`
	Link        string `json:"link"`
	Name        string `json:"name"`
}

// OnDemandPageUser
// The user who created this On Demand page.
type OnDemandPageUser struct {
	Account       OnDemandPageUserAccountEnum  `json:"account"`
	Bio           string                       `json:"bio"`
	ContentFilter []string                     `json:"content_filter,omitempty"`
	CreatedTime   string                       `json:"created_time"`
	Email         *string                      `json:"email,omitempty"`
	Link          string                       `json:"link"`
	Location      string                       `json:"location"`
	Metadata      OnDemandPageUserMetadata     `json:"metadata"`
	Name          string                       `json:"name"`
	Pictures      Picture                      `json:"pictures"`
	Preferences   *OnDemandPageUserPreferences `json:"preferences,omitempty"`
	ResourceKey   string                       `json:"resource_key"`
	UploadQuota   OnDemandPageUserUploadQuota  `json:"upload_quota"`
	URI           string                       `json:"uri"`
	Websites      []OnDemandPageUserWebsites   `json:"websites"`
}

type OnDemandPage struct {
	Background    OnDemandPagePicture      `json:"background"`
	Colors        OnDemandPageColors       `json:"colors"`
	ContentRating []string                 `json:"content_rating"`
	CreatedTime   *string                  `json:"created_time,omitempty"`
	Description   string                   `json:"description"`
	DomainLink    string                   `json:"domain_link"`
	Episodes      OnDemandPageEpisodes     `json:"episodes"`
	Film          *Video                   `json:"film,omitempty"`
	Genres        []OnDemandGenre          `json:"genres"`
	Link          string                   `json:"link"`
	Metadata      OnDemandPageMetadata     `json:"metadata"`
	ModifiedTime  *string                  `json:"modified_time,omitempty"`
	Name          string                   `json:"name"`
	Pictures      OnDemandPagePicture      `json:"pictures"`
	Preorder      OnDemandPagePreorder     `json:"preorder"`
	Published     OnDemandPagePublished    `json:"published"`
	Rating        float64                  `json:"rating"`
	ResourceKey   string                   `json:"resource_key"`
	Sku           *string                  `json:"sku,omitempty"`
	Subscription  OnDemandPageSubscription `json:"subscription"`
	Theme         string                   `json:"theme"`
	Thumbnail     OnDemandPagePicture      `json:"thumbnail"`
	Trailer       OnDemandPageVideo        `json:"trailer"`
	Type          OnDemandPageTypeEnum     `json:"type"`
	URI           string                   `json:"uri"`
	User          OnDemandPageUser         `json:"user"`
}
