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

type OnDemandPagePicture struct {
	Active      bool                        `json:"active"`
	Link        *string                     `json:"link,omitempty"`
	ResourceKey string                      `json:"resource_key"`
	Sizes       []OnDemandPagePictureSizes  `json:"sizes"`
	Type        OnDemandPagePictureTypeEnum `json:"type"`
	URI         string                      `json:"uri"`
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

type OnDemandPageVideoContextActionEnum string

const (
	OnDemandPageVideoContextActionEnumAddedTo      OnDemandPageVideoContextActionEnum = "Added to"
	OnDemandPageVideoContextActionEnumAppearanceBy OnDemandPageVideoContextActionEnum = "Appearance by"
	OnDemandPageVideoContextActionEnumLikedBy      OnDemandPageVideoContextActionEnum = "Liked by"
	OnDemandPageVideoContextActionEnumUploadedBy   OnDemandPageVideoContextActionEnum = "Uploaded by"
)

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

type OnDemandPageVideoMetadataConnectionsComments struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoMetadataConnectionsCredits struct {
	Options []string `json:"options,omitempty"`
	Total   *float64 `json:"total,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

type OnDemandPageVideoMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoMetadataConnectionsOndemand struct {
	Options     []string `json:"options"`
	ResourceKey string   `json:"resource_key"`
	URI         string   `json:"uri"`
}

type OnDemandPageVideoMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoMetadataConnectionsPlayback struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoMetadataConnectionsRecommendations struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

type OnDemandPageVideoMetadataConnectionsRelated struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

type OnDemandPageVideoMetadataConnectionsSeason struct {
	Name    string   `json:"name"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoMetadataConnectionsTexttracks struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoMetadataConnectionsTrailer struct {
	Options     []string `json:"options"`
	ResourceKey string   `json:"resource_key"`
	URI         string   `json:"uri"`
}

type OnDemandPageVideoMetadataConnectionsUsersWithAccess struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoMetadataConnectionsVersions struct {
	CurrentURI *string  `json:"current_uri,omitempty"`
	Options    []string `json:"options"`
	Total      float64  `json:"total"`
	URI        string   `json:"uri"`
}

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

type OnDemandPageVideoMetadataInteractionsChannel struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

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

type OnDemandPageVideoMetadataInteractionsReport struct {
	Options []string `json:"options"`
	Reason  []string `json:"reason"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoMetadataInteractionsSubscribe struct {
	Drm          *bool   `json:"drm,omitempty"`
	ExpiresTime  *string `json:"expires_time,omitempty"`
	PurchaseTime *string `json:"purchase_time,omitempty"`
	Stream       *string `json:"stream,omitempty"`
}

type OnDemandPageVideoMetadataInteractionsWatched struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

type OnDemandPageVideoMetadataInteractionsWatchlater struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

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

type OnDemandPageVideoMetadata struct {
	Connections  OnDemandPageVideoMetadataConnections  `json:"connections"`
	Interactions OnDemandPageVideoMetadataInteractions `json:"interactions"`
}

type OnDemandPageVideoProjectMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoProjectMetadataConnections struct {
	Videos OnDemandPageVideoProjectMetadataConnectionsVideos `json:"videos"`
}

type OnDemandPageVideoProjectMetadata struct {
	Connections OnDemandPageVideoProjectMetadataConnections `json:"connections"`
}

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

type OnDemandPageVideoSpatial struct {
	DirectorTimeline []OnDemandPageVideoSpatialDirectorTimeline `json:"director_timeline"`
	FieldOfView      float64                                    `json:"field_of_view"`
	Projection       OnDemandPageVideoSpatialProjectionEnum     `json:"projection"`
	StereoFormat     OnDemandPageVideoSpatialStereoFormatEnum   `json:"stereo_format"`
}

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

type OnDemandPageVideoUserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

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

type OnDemandPageVideoUserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

type OnDemandPageVideoUserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

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

type OnDemandPageVideoUserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

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

type OnDemandPageVideoUserUploadQuotaSpace struct {
	Free    float64                                          `json:"free"`
	Max     float64                                          `json:"max"`
	Showing OnDemandPageVideoUserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                                          `json:"used"`
}

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
