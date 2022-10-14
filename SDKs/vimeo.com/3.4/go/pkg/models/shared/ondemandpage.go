package shared

type OnDemandPageBackgroundSizes struct {
	Height             float64 `json:"height"`
	Link               string  `json:"link"`
	LinkWithPlayButton *string `json:"link_with_play_button,omitempty"`
	Width              float64 `json:"width"`
}

type OnDemandPageBackgroundTypeEnum string

const (
	OnDemandPageBackgroundTypeEnumCaution OnDemandPageBackgroundTypeEnum = "caution"
	OnDemandPageBackgroundTypeEnumCustom  OnDemandPageBackgroundTypeEnum = "custom"
	OnDemandPageBackgroundTypeEnumDefault OnDemandPageBackgroundTypeEnum = "default"
)

type OnDemandPageBackgroundPicture struct {
	Active      bool                           `json:"active"`
	Link        *string                        `json:"link,omitempty"`
	ResourceKey string                         `json:"resource_key"`
	Sizes       []OnDemandPageBackgroundSizes  `json:"sizes"`
	Type        OnDemandPageBackgroundTypeEnum `json:"type"`
	URI         string                         `json:"uri"`
}

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

type OnDemandPageEpisodes struct {
	Buy  OnDemandPageEpisodesBuy  `json:"buy"`
	Rent OnDemandPageEpisodesRent `json:"rent"`
}

type OnDemandPageMetadataConnectionsMetadataConnectionsComments struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageMetadataConnectionsMetadataConnectionsGenres struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageMetadataConnectionsMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageMetadataConnectionsMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageMetadataConnectionsMetadataConnectionsSeasons struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

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

type OnDemandPageMetadataConnections struct {
	Metadata OnDemandPageMetadataConnectionsMetadata `json:"metadata"`
}

type OnDemandPageMetadata struct {
	Connections  OnDemandPageMetadataConnections `json:"connections"`
	Interactions PurchaseInteraction             `json:"interactions"`
}

type OnDemandPagePicturesSizes struct {
	Height             float64 `json:"height"`
	Link               string  `json:"link"`
	LinkWithPlayButton *string `json:"link_with_play_button,omitempty"`
	Width              float64 `json:"width"`
}

type OnDemandPagePicturesTypeEnum string

const (
	OnDemandPagePicturesTypeEnumCaution OnDemandPagePicturesTypeEnum = "caution"
	OnDemandPagePicturesTypeEnumCustom  OnDemandPagePicturesTypeEnum = "custom"
	OnDemandPagePicturesTypeEnumDefault OnDemandPagePicturesTypeEnum = "default"
)

type OnDemandPagePicturesPicture struct {
	Active      bool                         `json:"active"`
	Link        *string                      `json:"link,omitempty"`
	ResourceKey string                       `json:"resource_key"`
	Sizes       []OnDemandPagePicturesSizes  `json:"sizes"`
	Type        OnDemandPagePicturesTypeEnum `json:"type"`
	URI         string                       `json:"uri"`
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

type OnDemandPageSubscription struct {
	Active bool                   `json:"active"`
	Link   string                 `json:"link"`
	Period *string                `json:"period,omitempty"`
	Price  map[string]interface{} `json:"price"`
}

type OnDemandPageThumbnailSizes struct {
	Height             float64 `json:"height"`
	Link               string  `json:"link"`
	LinkWithPlayButton *string `json:"link_with_play_button,omitempty"`
	Width              float64 `json:"width"`
}

type OnDemandPageThumbnailTypeEnum string

const (
	OnDemandPageThumbnailTypeEnumCaution OnDemandPageThumbnailTypeEnum = "caution"
	OnDemandPageThumbnailTypeEnumCustom  OnDemandPageThumbnailTypeEnum = "custom"
	OnDemandPageThumbnailTypeEnumDefault OnDemandPageThumbnailTypeEnum = "default"
)

type OnDemandPageThumbnailPicture struct {
	Active      bool                          `json:"active"`
	Link        *string                       `json:"link,omitempty"`
	ResourceKey string                        `json:"resource_key"`
	Sizes       []OnDemandPageThumbnailSizes  `json:"sizes"`
	Type        OnDemandPageThumbnailTypeEnum `json:"type"`
	URI         string                        `json:"uri"`
}

type OnDemandPageTrailerContextActionEnum string

const (
	OnDemandPageTrailerContextActionEnumAddedTo      OnDemandPageTrailerContextActionEnum = "Added to"
	OnDemandPageTrailerContextActionEnumAppearanceBy OnDemandPageTrailerContextActionEnum = "Appearance by"
	OnDemandPageTrailerContextActionEnumLikedBy      OnDemandPageTrailerContextActionEnum = "Liked by"
	OnDemandPageTrailerContextActionEnumUploadedBy   OnDemandPageTrailerContextActionEnum = "Uploaded by"
)

type OnDemandPageTrailerContext struct {
	Action       OnDemandPageTrailerContextActionEnum `json:"action"`
	Resource     map[string]interface{}               `json:"resource"`
	ResourceType string                               `json:"resource_type"`
}

type OnDemandPageTrailerLicenseEnum string

const (
	OnDemandPageTrailerLicenseEnumBy     OnDemandPageTrailerLicenseEnum = "by"
	OnDemandPageTrailerLicenseEnumByNc   OnDemandPageTrailerLicenseEnum = "by-nc"
	OnDemandPageTrailerLicenseEnumByNcNd OnDemandPageTrailerLicenseEnum = "by-nc-nd"
	OnDemandPageTrailerLicenseEnumByNcSa OnDemandPageTrailerLicenseEnum = "by-nc-sa"
	OnDemandPageTrailerLicenseEnumByNd   OnDemandPageTrailerLicenseEnum = "by-nd"
	OnDemandPageTrailerLicenseEnumBySa   OnDemandPageTrailerLicenseEnum = "by-sa"
	OnDemandPageTrailerLicenseEnumCc0    OnDemandPageTrailerLicenseEnum = "cc0"
)

type OnDemandPageTrailerMetadataConnectionsComments struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerMetadataConnectionsCredits struct {
	Options []string `json:"options,omitempty"`
	Total   *float64 `json:"total,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

type OnDemandPageTrailerMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerMetadataConnectionsOndemand struct {
	Options     []string `json:"options"`
	ResourceKey string   `json:"resource_key"`
	URI         string   `json:"uri"`
}

type OnDemandPageTrailerMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerMetadataConnectionsPlayback struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerMetadataConnectionsRecommendations struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

type OnDemandPageTrailerMetadataConnectionsRelated struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

type OnDemandPageTrailerMetadataConnectionsSeason struct {
	Name    string   `json:"name"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerMetadataConnectionsTexttracks struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerMetadataConnectionsTrailer struct {
	Options     []string `json:"options"`
	ResourceKey string   `json:"resource_key"`
	URI         string   `json:"uri"`
}

type OnDemandPageTrailerMetadataConnectionsUsersWithAccess struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerMetadataConnectionsVersions struct {
	CurrentURI *string  `json:"current_uri,omitempty"`
	Options    []string `json:"options"`
	Total      float64  `json:"total"`
	URI        string   `json:"uri"`
}

type OnDemandPageTrailerMetadataConnections struct {
	Comments        OnDemandPageTrailerMetadataConnectionsComments        `json:"comments"`
	Credits         OnDemandPageTrailerMetadataConnectionsCredits         `json:"credits"`
	Likes           OnDemandPageTrailerMetadataConnectionsLikes           `json:"likes"`
	Ondemand        OnDemandPageTrailerMetadataConnectionsOndemand        `json:"ondemand"`
	Pictures        OnDemandPageTrailerMetadataConnectionsPictures        `json:"pictures"`
	Playback        OnDemandPageTrailerMetadataConnectionsPlayback        `json:"playback"`
	Recommendations OnDemandPageTrailerMetadataConnectionsRecommendations `json:"recommendations"`
	Related         OnDemandPageTrailerMetadataConnectionsRelated         `json:"related"`
	Season          OnDemandPageTrailerMetadataConnectionsSeason          `json:"season"`
	Texttracks      OnDemandPageTrailerMetadataConnectionsTexttracks      `json:"texttracks"`
	Trailer         OnDemandPageTrailerMetadataConnectionsTrailer         `json:"trailer"`
	UsersWithAccess OnDemandPageTrailerMetadataConnectionsUsersWithAccess `json:"users_with_access"`
	Versions        OnDemandPageTrailerMetadataConnectionsVersions        `json:"versions"`
}

type OnDemandPageTrailerMetadataInteractionsBuyDownloadEnum string

const (
	OnDemandPageTrailerMetadataInteractionsBuyDownloadEnumAvailable   OnDemandPageTrailerMetadataInteractionsBuyDownloadEnum = "available"
	OnDemandPageTrailerMetadataInteractionsBuyDownloadEnumPurchased   OnDemandPageTrailerMetadataInteractionsBuyDownloadEnum = "purchased"
	OnDemandPageTrailerMetadataInteractionsBuyDownloadEnumRestricted  OnDemandPageTrailerMetadataInteractionsBuyDownloadEnum = "restricted"
	OnDemandPageTrailerMetadataInteractionsBuyDownloadEnumUnavailable OnDemandPageTrailerMetadataInteractionsBuyDownloadEnum = "unavailable"
)

type OnDemandPageTrailerMetadataInteractionsBuyStreamEnum string

const (
	OnDemandPageTrailerMetadataInteractionsBuyStreamEnumAvailable   OnDemandPageTrailerMetadataInteractionsBuyStreamEnum = "available"
	OnDemandPageTrailerMetadataInteractionsBuyStreamEnumPurchased   OnDemandPageTrailerMetadataInteractionsBuyStreamEnum = "purchased"
	OnDemandPageTrailerMetadataInteractionsBuyStreamEnumRestricted  OnDemandPageTrailerMetadataInteractionsBuyStreamEnum = "restricted"
	OnDemandPageTrailerMetadataInteractionsBuyStreamEnumUnavailable OnDemandPageTrailerMetadataInteractionsBuyStreamEnum = "unavailable"
)

type OnDemandPageTrailerMetadataInteractionsBuy struct {
	Currency     string                                                 `json:"currency"`
	DisplayPrice string                                                 `json:"display_price"`
	Download     OnDemandPageTrailerMetadataInteractionsBuyDownloadEnum `json:"download"`
	Drm          bool                                                   `json:"drm"`
	Link         string                                                 `json:"link"`
	Price        float64                                                `json:"price"`
	PurchaseTime string                                                 `json:"purchase_time"`
	Stream       OnDemandPageTrailerMetadataInteractionsBuyStreamEnum   `json:"stream"`
	URI          string                                                 `json:"uri"`
}

type OnDemandPageTrailerMetadataInteractionsChannel struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerMetadataInteractionsLike struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

type OnDemandPageTrailerMetadataInteractionsRentStreamEnum string

const (
	OnDemandPageTrailerMetadataInteractionsRentStreamEnumAvailable   OnDemandPageTrailerMetadataInteractionsRentStreamEnum = "available"
	OnDemandPageTrailerMetadataInteractionsRentStreamEnumPurchased   OnDemandPageTrailerMetadataInteractionsRentStreamEnum = "purchased"
	OnDemandPageTrailerMetadataInteractionsRentStreamEnumRestricted  OnDemandPageTrailerMetadataInteractionsRentStreamEnum = "restricted"
	OnDemandPageTrailerMetadataInteractionsRentStreamEnumUnavailable OnDemandPageTrailerMetadataInteractionsRentStreamEnum = "unavailable"
)

type OnDemandPageTrailerMetadataInteractionsRent struct {
	Currency     string                                                `json:"currency"`
	DisplayPrice string                                                `json:"display_price"`
	Drm          bool                                                  `json:"drm"`
	ExpiresTime  string                                                `json:"expires_time"`
	Link         string                                                `json:"link"`
	Price        float64                                               `json:"price"`
	PurchaseTime string                                                `json:"purchase_time"`
	Stream       OnDemandPageTrailerMetadataInteractionsRentStreamEnum `json:"stream"`
	URI          string                                                `json:"uri"`
}

type OnDemandPageTrailerMetadataInteractionsReport struct {
	Options []string `json:"options"`
	Reason  []string `json:"reason"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerMetadataInteractionsSubscribe struct {
	Drm          *bool   `json:"drm,omitempty"`
	ExpiresTime  *string `json:"expires_time,omitempty"`
	PurchaseTime *string `json:"purchase_time,omitempty"`
	Stream       *string `json:"stream,omitempty"`
}

type OnDemandPageTrailerMetadataInteractionsWatched struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

type OnDemandPageTrailerMetadataInteractionsWatchlater struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

type OnDemandPageTrailerMetadataInteractions struct {
	Buy        OnDemandPageTrailerMetadataInteractionsBuy        `json:"buy"`
	Channel    OnDemandPageTrailerMetadataInteractionsChannel    `json:"channel"`
	Like       OnDemandPageTrailerMetadataInteractionsLike       `json:"like"`
	Rent       OnDemandPageTrailerMetadataInteractionsRent       `json:"rent"`
	Report     OnDemandPageTrailerMetadataInteractionsReport     `json:"report"`
	Subscribe  *OnDemandPageTrailerMetadataInteractionsSubscribe `json:"subscribe,omitempty"`
	Watched    OnDemandPageTrailerMetadataInteractionsWatched    `json:"watched"`
	Watchlater OnDemandPageTrailerMetadataInteractionsWatchlater `json:"watchlater"`
}

type OnDemandPageTrailerMetadata struct {
	Connections  OnDemandPageTrailerMetadataConnections  `json:"connections"`
	Interactions OnDemandPageTrailerMetadataInteractions `json:"interactions"`
}

type OnDemandPageTrailerParentFolderMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerParentFolderMetadataConnections struct {
	Videos OnDemandPageTrailerParentFolderMetadataConnectionsVideos `json:"videos"`
}

type OnDemandPageTrailerParentFolderMetadata struct {
	Connections OnDemandPageTrailerParentFolderMetadataConnections `json:"connections"`
}

type OnDemandPageTrailerParentFolderProject struct {
	CreatedTime  string                                  `json:"created_time"`
	Metadata     OnDemandPageTrailerParentFolderMetadata `json:"metadata"`
	ModifiedTime string                                  `json:"modified_time"`
	Name         string                                  `json:"name"`
	ResourceKey  string                                  `json:"resource_key"`
	URI          string                                  `json:"uri"`
	User         User                                    `json:"user"`
}

type OnDemandPageTrailerPrivacyCommentsEnum string

const (
	OnDemandPageTrailerPrivacyCommentsEnumAnybody  OnDemandPageTrailerPrivacyCommentsEnum = "anybody"
	OnDemandPageTrailerPrivacyCommentsEnumContacts OnDemandPageTrailerPrivacyCommentsEnum = "contacts"
	OnDemandPageTrailerPrivacyCommentsEnumNobody   OnDemandPageTrailerPrivacyCommentsEnum = "nobody"
)

type OnDemandPageTrailerPrivacyEmbedEnum string

const (
	OnDemandPageTrailerPrivacyEmbedEnumPrivate OnDemandPageTrailerPrivacyEmbedEnum = "private"
	OnDemandPageTrailerPrivacyEmbedEnumPublic  OnDemandPageTrailerPrivacyEmbedEnum = "public"
)

type OnDemandPageTrailerPrivacyViewEnum string

const (
	OnDemandPageTrailerPrivacyViewEnumAnybody  OnDemandPageTrailerPrivacyViewEnum = "anybody"
	OnDemandPageTrailerPrivacyViewEnumContacts OnDemandPageTrailerPrivacyViewEnum = "contacts"
	OnDemandPageTrailerPrivacyViewEnumDisable  OnDemandPageTrailerPrivacyViewEnum = "disable"
	OnDemandPageTrailerPrivacyViewEnumNobody   OnDemandPageTrailerPrivacyViewEnum = "nobody"
	OnDemandPageTrailerPrivacyViewEnumPassword OnDemandPageTrailerPrivacyViewEnum = "password"
	OnDemandPageTrailerPrivacyViewEnumUnlisted OnDemandPageTrailerPrivacyViewEnum = "unlisted"
	OnDemandPageTrailerPrivacyViewEnumUsers    OnDemandPageTrailerPrivacyViewEnum = "users"
)

type OnDemandPageTrailerPrivacy struct {
	Add      bool                                   `json:"add"`
	Comments OnDemandPageTrailerPrivacyCommentsEnum `json:"comments"`
	Download bool                                   `json:"download"`
	Embed    OnDemandPageTrailerPrivacyEmbedEnum    `json:"embed"`
	View     OnDemandPageTrailerPrivacyViewEnum     `json:"view"`
}

type OnDemandPageTrailerSpatialDirectorTimeline struct {
	Pitch    *float64 `json:"pitch,omitempty"`
	Roll     *float64 `json:"roll,omitempty"`
	TimeCode *float64 `json:"time_code,omitempty"`
	Yaw      *float64 `json:"yaw,omitempty"`
}

type OnDemandPageTrailerSpatialProjectionEnum string

const (
	OnDemandPageTrailerSpatialProjectionEnumCubical         OnDemandPageTrailerSpatialProjectionEnum = "cubical"
	OnDemandPageTrailerSpatialProjectionEnumCylindrical     OnDemandPageTrailerSpatialProjectionEnum = "cylindrical"
	OnDemandPageTrailerSpatialProjectionEnumDome            OnDemandPageTrailerSpatialProjectionEnum = "dome"
	OnDemandPageTrailerSpatialProjectionEnumEquirectangular OnDemandPageTrailerSpatialProjectionEnum = "equirectangular"
	OnDemandPageTrailerSpatialProjectionEnumPyramid         OnDemandPageTrailerSpatialProjectionEnum = "pyramid"
)

type OnDemandPageTrailerSpatialStereoFormatEnum string

const (
	OnDemandPageTrailerSpatialStereoFormatEnumLeftRight OnDemandPageTrailerSpatialStereoFormatEnum = "left-right"
	OnDemandPageTrailerSpatialStereoFormatEnumMono      OnDemandPageTrailerSpatialStereoFormatEnum = "mono"
	OnDemandPageTrailerSpatialStereoFormatEnumTopBottom OnDemandPageTrailerSpatialStereoFormatEnum = "top-bottom"
)

type OnDemandPageTrailerSpatial struct {
	DirectorTimeline []OnDemandPageTrailerSpatialDirectorTimeline `json:"director_timeline"`
	FieldOfView      float64                                      `json:"field_of_view"`
	Projection       OnDemandPageTrailerSpatialProjectionEnum     `json:"projection"`
	StereoFormat     OnDemandPageTrailerSpatialStereoFormatEnum   `json:"stereo_format"`
}

type OnDemandPageTrailerStats struct {
	Plays float64 `json:"plays"`
}

type OnDemandPageTrailerStatusEnum string

const (
	OnDemandPageTrailerStatusEnumAvailable         OnDemandPageTrailerStatusEnum = "available"
	OnDemandPageTrailerStatusEnumQuotaExceeded     OnDemandPageTrailerStatusEnum = "quota_exceeded"
	OnDemandPageTrailerStatusEnumTotalCapExceeded  OnDemandPageTrailerStatusEnum = "total_cap_exceeded"
	OnDemandPageTrailerStatusEnumTranscodeStarting OnDemandPageTrailerStatusEnum = "transcode_starting"
	OnDemandPageTrailerStatusEnumTranscoding       OnDemandPageTrailerStatusEnum = "transcoding"
	OnDemandPageTrailerStatusEnumTranscodingError  OnDemandPageTrailerStatusEnum = "transcoding_error"
	OnDemandPageTrailerStatusEnumUnavailable       OnDemandPageTrailerStatusEnum = "unavailable"
	OnDemandPageTrailerStatusEnumUploading         OnDemandPageTrailerStatusEnum = "uploading"
	OnDemandPageTrailerStatusEnumUploadingError    OnDemandPageTrailerStatusEnum = "uploading_error"
)

type OnDemandPageTrailerTranscodeStatusEnum string

const (
	OnDemandPageTrailerTranscodeStatusEnumComplete   OnDemandPageTrailerTranscodeStatusEnum = "complete"
	OnDemandPageTrailerTranscodeStatusEnumError      OnDemandPageTrailerTranscodeStatusEnum = "error"
	OnDemandPageTrailerTranscodeStatusEnumInProgress OnDemandPageTrailerTranscodeStatusEnum = "in_progress"
)

type OnDemandPageTrailerTranscode struct {
	Status *OnDemandPageTrailerTranscodeStatusEnum `json:"status,omitempty"`
}

type OnDemandPageTrailerUploadApproachEnum string

const (
	OnDemandPageTrailerUploadApproachEnumPost      OnDemandPageTrailerUploadApproachEnum = "post"
	OnDemandPageTrailerUploadApproachEnumPull      OnDemandPageTrailerUploadApproachEnum = "pull"
	OnDemandPageTrailerUploadApproachEnumStreaming OnDemandPageTrailerUploadApproachEnum = "streaming"
	OnDemandPageTrailerUploadApproachEnumTus       OnDemandPageTrailerUploadApproachEnum = "tus"
)

type OnDemandPageTrailerUploadStatusEnum string

const (
	OnDemandPageTrailerUploadStatusEnumComplete   OnDemandPageTrailerUploadStatusEnum = "complete"
	OnDemandPageTrailerUploadStatusEnumError      OnDemandPageTrailerUploadStatusEnum = "error"
	OnDemandPageTrailerUploadStatusEnumInProgress OnDemandPageTrailerUploadStatusEnum = "in_progress"
)

type OnDemandPageTrailerUpload struct {
	Approach    *OnDemandPageTrailerUploadApproachEnum `json:"approach,omitempty"`
	CompleteURI *string                                `json:"complete_uri,omitempty"`
	Form        *string                                `json:"form,omitempty"`
	Link        *string                                `json:"link,omitempty"`
	RedirectURL *string                                `json:"redirect_url,omitempty"`
	Size        *float64                               `json:"size,omitempty"`
	Status      OnDemandPageTrailerUploadStatusEnum    `json:"status"`
	UploadLink  *string                                `json:"upload_link,omitempty"`
}

type OnDemandPageTrailerUserAccountEnum string

const (
	OnDemandPageTrailerUserAccountEnumBasic        OnDemandPageTrailerUserAccountEnum = "basic"
	OnDemandPageTrailerUserAccountEnumBusiness     OnDemandPageTrailerUserAccountEnum = "business"
	OnDemandPageTrailerUserAccountEnumLiveBusiness OnDemandPageTrailerUserAccountEnum = "live_business"
	OnDemandPageTrailerUserAccountEnumLivePremium  OnDemandPageTrailerUserAccountEnum = "live_premium"
	OnDemandPageTrailerUserAccountEnumLivePro      OnDemandPageTrailerUserAccountEnum = "live_pro"
	OnDemandPageTrailerUserAccountEnumPlus         OnDemandPageTrailerUserAccountEnum = "plus"
	OnDemandPageTrailerUserAccountEnumPro          OnDemandPageTrailerUserAccountEnum = "pro"
	OnDemandPageTrailerUserAccountEnumProUnlimited OnDemandPageTrailerUserAccountEnum = "pro_unlimited"
	OnDemandPageTrailerUserAccountEnumProducer     OnDemandPageTrailerUserAccountEnum = "producer"
)

type OnDemandPageTrailerUserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataConnections struct {
	Albums              OnDemandPageTrailerUserMetadataConnectionsAlbums              `json:"albums"`
	Appearances         OnDemandPageTrailerUserMetadataConnectionsAppearances         `json:"appearances"`
	Block               OnDemandPageTrailerUserMetadataConnectionsBlock               `json:"block"`
	Categories          OnDemandPageTrailerUserMetadataConnectionsCategories          `json:"categories"`
	Channels            OnDemandPageTrailerUserMetadataConnectionsChannels            `json:"channels"`
	Feed                OnDemandPageTrailerUserMetadataConnectionsFeed                `json:"feed"`
	Folders             OnDemandPageTrailerUserMetadataConnectionsFolders             `json:"folders"`
	Followers           OnDemandPageTrailerUserMetadataConnectionsFollowers           `json:"followers"`
	Following           OnDemandPageTrailerUserMetadataConnectionsFollowing           `json:"following"`
	Groups              OnDemandPageTrailerUserMetadataConnectionsGroups              `json:"groups"`
	Likes               OnDemandPageTrailerUserMetadataConnectionsLikes               `json:"likes"`
	ModeratedChannels   OnDemandPageTrailerUserMetadataConnectionsModeratedChannels   `json:"moderated_channels"`
	Pictures            OnDemandPageTrailerUserMetadataConnectionsPictures            `json:"pictures"`
	Portfolios          OnDemandPageTrailerUserMetadataConnectionsPortfolios          `json:"portfolios"`
	RecommendedChannels OnDemandPageTrailerUserMetadataConnectionsRecommendedChannels `json:"recommended_channels"`
	RecommendedUsers    OnDemandPageTrailerUserMetadataConnectionsRecommendedUsers    `json:"recommended_users"`
	Shared              OnDemandPageTrailerUserMetadataConnectionsShared              `json:"shared"`
	Videos              OnDemandPageTrailerUserMetadataConnectionsVideos              `json:"videos"`
	WatchedVideos       OnDemandPageTrailerUserMetadataConnectionsWatchedVideos       `json:"watched_videos"`
	Watchlater          OnDemandPageTrailerUserMetadataConnectionsWatchlater          `json:"watchlater"`
}

type OnDemandPageTrailerUserMetadataInteractionsAddPrivacyUser struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

type OnDemandPageTrailerUserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataInteractionsReport struct {
	Options []string `json:"options"`
	Reason  []string `json:"reason"`
	URI     string   `json:"uri"`
}

type OnDemandPageTrailerUserMetadataInteractions struct {
	AddPrivacyUser *OnDemandPageTrailerUserMetadataInteractionsAddPrivacyUser `json:"add_privacy_user,omitempty"`
	Block          OnDemandPageTrailerUserMetadataInteractionsBlock           `json:"block"`
	Follow         OnDemandPageTrailerUserMetadataInteractionsFollow          `json:"follow"`
	Report         OnDemandPageTrailerUserMetadataInteractionsReport          `json:"report"`
}

type OnDemandPageTrailerUserMetadata struct {
	Connections  OnDemandPageTrailerUserMetadataConnections  `json:"connections"`
	Interactions OnDemandPageTrailerUserMetadataInteractions `json:"interactions"`
}

type OnDemandPageTrailerUserPreferencesVideosPrivacyCommentsEnum string

const (
	OnDemandPageTrailerUserPreferencesVideosPrivacyCommentsEnumAnybody  OnDemandPageTrailerUserPreferencesVideosPrivacyCommentsEnum = "anybody"
	OnDemandPageTrailerUserPreferencesVideosPrivacyCommentsEnumContacts OnDemandPageTrailerUserPreferencesVideosPrivacyCommentsEnum = "contacts"
	OnDemandPageTrailerUserPreferencesVideosPrivacyCommentsEnumNobody   OnDemandPageTrailerUserPreferencesVideosPrivacyCommentsEnum = "nobody"
)

type OnDemandPageTrailerUserPreferencesVideosPrivacyEmbedEnum string

const (
	OnDemandPageTrailerUserPreferencesVideosPrivacyEmbedEnumPrivate   OnDemandPageTrailerUserPreferencesVideosPrivacyEmbedEnum = "private"
	OnDemandPageTrailerUserPreferencesVideosPrivacyEmbedEnumPublic    OnDemandPageTrailerUserPreferencesVideosPrivacyEmbedEnum = "public"
	OnDemandPageTrailerUserPreferencesVideosPrivacyEmbedEnumWhitelist OnDemandPageTrailerUserPreferencesVideosPrivacyEmbedEnum = "whitelist"
)

type OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnum string

const (
	OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnumAnybody  OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnum = "anybody"
	OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnumContacts OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnum = "contacts"
	OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnumDisable  OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnum = "disable"
	OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnumNobody   OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnum = "nobody"
	OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnumPassword OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnum = "password"
	OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnumUnlisted OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnum = "unlisted"
	OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnumUsers    OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnum = "users"
)

type OnDemandPageTrailerUserPreferencesVideosPrivacy struct {
	Add      *bool                                                        `json:"add,omitempty"`
	Comments *OnDemandPageTrailerUserPreferencesVideosPrivacyCommentsEnum `json:"comments,omitempty"`
	Download *bool                                                        `json:"download,omitempty"`
	Embed    *OnDemandPageTrailerUserPreferencesVideosPrivacyEmbedEnum    `json:"embed,omitempty"`
	View     *OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnum     `json:"view,omitempty"`
}

type OnDemandPageTrailerUserPreferencesVideos struct {
	Privacy *OnDemandPageTrailerUserPreferencesVideosPrivacy `json:"privacy,omitempty"`
}

type OnDemandPageTrailerUserPreferences struct {
	Videos *OnDemandPageTrailerUserPreferencesVideos `json:"videos,omitempty"`
}

type OnDemandPageTrailerUserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

type OnDemandPageTrailerUserUploadQuotaPeriodic struct {
	Free      float64 `json:"free"`
	Max       float64 `json:"max"`
	ResetDate string  `json:"reset_date"`
	Used      float64 `json:"used"`
}

type OnDemandPageTrailerUserUploadQuotaSpaceShowingEnum string

const (
	OnDemandPageTrailerUserUploadQuotaSpaceShowingEnumLifetime OnDemandPageTrailerUserUploadQuotaSpaceShowingEnum = "lifetime"
	OnDemandPageTrailerUserUploadQuotaSpaceShowingEnumPeriodic OnDemandPageTrailerUserUploadQuotaSpaceShowingEnum = "periodic"
)

type OnDemandPageTrailerUserUploadQuotaSpace struct {
	Free    float64                                            `json:"free"`
	Max     float64                                            `json:"max"`
	Showing OnDemandPageTrailerUserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                                            `json:"used"`
}

type OnDemandPageTrailerUserUploadQuota struct {
	Lifetime OnDemandPageTrailerUserUploadQuotaLifetime `json:"lifetime"`
	Periodic OnDemandPageTrailerUserUploadQuotaPeriodic `json:"periodic"`
	Space    OnDemandPageTrailerUserUploadQuotaSpace    `json:"space"`
}

type OnDemandPageTrailerUserWebsites struct {
	Description string `json:"description"`
	Link        string `json:"link"`
	Name        string `json:"name"`
}

type OnDemandPageTrailerUserUser struct {
	Account       OnDemandPageTrailerUserAccountEnum  `json:"account"`
	Bio           string                              `json:"bio"`
	ContentFilter []string                            `json:"content_filter,omitempty"`
	CreatedTime   string                              `json:"created_time"`
	Email         *string                             `json:"email,omitempty"`
	Link          string                              `json:"link"`
	Location      string                              `json:"location"`
	Metadata      OnDemandPageTrailerUserMetadata     `json:"metadata"`
	Name          string                              `json:"name"`
	Pictures      Picture                             `json:"pictures"`
	Preferences   *OnDemandPageTrailerUserPreferences `json:"preferences,omitempty"`
	ResourceKey   string                              `json:"resource_key"`
	UploadQuota   OnDemandPageTrailerUserUploadQuota  `json:"upload_quota"`
	URI           string                              `json:"uri"`
	Websites      []OnDemandPageTrailerUserWebsites   `json:"websites"`
}

type OnDemandPageTrailerVideo struct {
	Categories              []Category                              `json:"categories"`
	ContentRating           []string                                `json:"content_rating"`
	Context                 OnDemandPageTrailerContext              `json:"context"`
	CreatedTime             string                                  `json:"created_time"`
	Description             string                                  `json:"description"`
	Duration                float64                                 `json:"duration"`
	Embed                   EmbedSettings                           `json:"embed"`
	Height                  float64                                 `json:"height"`
	Language                string                                  `json:"language"`
	LastUserActionEventDate *string                                 `json:"last_user_action_event_date,omitempty"`
	License                 OnDemandPageTrailerLicenseEnum          `json:"license"`
	Link                    string                                  `json:"link"`
	Metadata                OnDemandPageTrailerMetadata             `json:"metadata"`
	ModifiedTime            string                                  `json:"modified_time"`
	Name                    string                                  `json:"name"`
	ParentFolder            *OnDemandPageTrailerParentFolderProject `json:"parent_folder,omitempty"`
	Password                *string                                 `json:"password,omitempty"`
	Pictures                Picture                                 `json:"pictures"`
	Privacy                 OnDemandPageTrailerPrivacy              `json:"privacy"`
	ReleaseTime             string                                  `json:"release_time"`
	ResourceKey             string                                  `json:"resource_key"`
	Spatial                 OnDemandPageTrailerSpatial              `json:"spatial"`
	Stats                   OnDemandPageTrailerStats                `json:"stats"`
	Status                  OnDemandPageTrailerStatusEnum           `json:"status"`
	Tags                    []Tag                                   `json:"tags"`
	Transcode               OnDemandPageTrailerTranscode            `json:"transcode"`
	Upload                  OnDemandPageTrailerUpload               `json:"upload"`
	URI                     string                                  `json:"uri"`
	User                    OnDemandPageTrailerUserUser             `json:"user"`
	Width                   float64                                 `json:"width"`
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

type OnDemandPageUserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageUserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

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

type OnDemandPageUserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

type OnDemandPageUserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

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

type OnDemandPageUserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

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

type OnDemandPageUserUploadQuotaSpace struct {
	Free    float64                                     `json:"free"`
	Max     float64                                     `json:"max"`
	Showing OnDemandPageUserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                                     `json:"used"`
}

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

type OnDemandPageUserUser struct {
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
	Background    OnDemandPageBackgroundPicture `json:"background"`
	Colors        OnDemandPageColors            `json:"colors"`
	ContentRating []string                      `json:"content_rating"`
	CreatedTime   *string                       `json:"created_time,omitempty"`
	Description   string                        `json:"description"`
	DomainLink    string                        `json:"domain_link"`
	Episodes      OnDemandPageEpisodes          `json:"episodes"`
	Film          *Video                        `json:"film,omitempty"`
	Genres        []OnDemandGenre               `json:"genres"`
	Link          string                        `json:"link"`
	Metadata      OnDemandPageMetadata          `json:"metadata"`
	ModifiedTime  *string                       `json:"modified_time,omitempty"`
	Name          string                        `json:"name"`
	Pictures      OnDemandPagePicturesPicture   `json:"pictures"`
	Preorder      OnDemandPagePreorder          `json:"preorder"`
	Published     OnDemandPagePublished         `json:"published"`
	Rating        float64                       `json:"rating"`
	ResourceKey   string                        `json:"resource_key"`
	Sku           *string                       `json:"sku,omitempty"`
	Subscription  OnDemandPageSubscription      `json:"subscription"`
	Theme         string                        `json:"theme"`
	Thumbnail     OnDemandPageThumbnailPicture  `json:"thumbnail"`
	Trailer       OnDemandPageTrailerVideo      `json:"trailer"`
	Type          OnDemandPageTypeEnum          `json:"type"`
	URI           string                        `json:"uri"`
	User          OnDemandPageUserUser          `json:"user"`
}
