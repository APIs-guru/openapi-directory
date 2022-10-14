package shared

type VideoContextActionEnum string

const (
	VideoContextActionEnumAddedTo      VideoContextActionEnum = "Added to"
	VideoContextActionEnumAppearanceBy VideoContextActionEnum = "Appearance by"
	VideoContextActionEnumLikedBy      VideoContextActionEnum = "Liked by"
	VideoContextActionEnumUploadedBy   VideoContextActionEnum = "Uploaded by"
)

type VideoContext struct {
	Action       VideoContextActionEnum `json:"action"`
	Resource     map[string]interface{} `json:"resource"`
	ResourceType string                 `json:"resource_type"`
}

type VideoLicenseEnum string

const (
	VideoLicenseEnumBy     VideoLicenseEnum = "by"
	VideoLicenseEnumByNc   VideoLicenseEnum = "by-nc"
	VideoLicenseEnumByNcNd VideoLicenseEnum = "by-nc-nd"
	VideoLicenseEnumByNcSa VideoLicenseEnum = "by-nc-sa"
	VideoLicenseEnumByNd   VideoLicenseEnum = "by-nd"
	VideoLicenseEnumBySa   VideoLicenseEnum = "by-sa"
	VideoLicenseEnumCc0    VideoLicenseEnum = "cc0"
)

type VideoMetadataConnectionsComments struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoMetadataConnectionsCredits struct {
	Options []string `json:"options,omitempty"`
	Total   *float64 `json:"total,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

type VideoMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoMetadataConnectionsOndemand struct {
	Options     []string `json:"options"`
	ResourceKey string   `json:"resource_key"`
	URI         string   `json:"uri"`
}

type VideoMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoMetadataConnectionsPlayback struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type VideoMetadataConnectionsRecommendations struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

type VideoMetadataConnectionsRelated struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

type VideoMetadataConnectionsSeason struct {
	Name    string   `json:"name"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type VideoMetadataConnectionsTexttracks struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoMetadataConnectionsTrailer struct {
	Options     []string `json:"options"`
	ResourceKey string   `json:"resource_key"`
	URI         string   `json:"uri"`
}

type VideoMetadataConnectionsUsersWithAccess struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoMetadataConnectionsVersions struct {
	CurrentURI *string  `json:"current_uri,omitempty"`
	Options    []string `json:"options"`
	Total      float64  `json:"total"`
	URI        string   `json:"uri"`
}

type VideoMetadataConnections struct {
	Comments        VideoMetadataConnectionsComments        `json:"comments"`
	Credits         VideoMetadataConnectionsCredits         `json:"credits"`
	Likes           VideoMetadataConnectionsLikes           `json:"likes"`
	Ondemand        VideoMetadataConnectionsOndemand        `json:"ondemand"`
	Pictures        VideoMetadataConnectionsPictures        `json:"pictures"`
	Playback        VideoMetadataConnectionsPlayback        `json:"playback"`
	Recommendations VideoMetadataConnectionsRecommendations `json:"recommendations"`
	Related         VideoMetadataConnectionsRelated         `json:"related"`
	Season          VideoMetadataConnectionsSeason          `json:"season"`
	Texttracks      VideoMetadataConnectionsTexttracks      `json:"texttracks"`
	Trailer         VideoMetadataConnectionsTrailer         `json:"trailer"`
	UsersWithAccess VideoMetadataConnectionsUsersWithAccess `json:"users_with_access"`
	Versions        VideoMetadataConnectionsVersions        `json:"versions"`
}

type VideoMetadataInteractionsBuyDownloadEnum string

const (
	VideoMetadataInteractionsBuyDownloadEnumAvailable   VideoMetadataInteractionsBuyDownloadEnum = "available"
	VideoMetadataInteractionsBuyDownloadEnumPurchased   VideoMetadataInteractionsBuyDownloadEnum = "purchased"
	VideoMetadataInteractionsBuyDownloadEnumRestricted  VideoMetadataInteractionsBuyDownloadEnum = "restricted"
	VideoMetadataInteractionsBuyDownloadEnumUnavailable VideoMetadataInteractionsBuyDownloadEnum = "unavailable"
)

type VideoMetadataInteractionsBuyStreamEnum string

const (
	VideoMetadataInteractionsBuyStreamEnumAvailable   VideoMetadataInteractionsBuyStreamEnum = "available"
	VideoMetadataInteractionsBuyStreamEnumPurchased   VideoMetadataInteractionsBuyStreamEnum = "purchased"
	VideoMetadataInteractionsBuyStreamEnumRestricted  VideoMetadataInteractionsBuyStreamEnum = "restricted"
	VideoMetadataInteractionsBuyStreamEnumUnavailable VideoMetadataInteractionsBuyStreamEnum = "unavailable"
)

type VideoMetadataInteractionsBuy struct {
	Currency     string                                   `json:"currency"`
	DisplayPrice string                                   `json:"display_price"`
	Download     VideoMetadataInteractionsBuyDownloadEnum `json:"download"`
	Drm          bool                                     `json:"drm"`
	Link         string                                   `json:"link"`
	Price        float64                                  `json:"price"`
	PurchaseTime string                                   `json:"purchase_time"`
	Stream       VideoMetadataInteractionsBuyStreamEnum   `json:"stream"`
	URI          string                                   `json:"uri"`
}

type VideoMetadataInteractionsChannel struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type VideoMetadataInteractionsLike struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

type VideoMetadataInteractionsRentStreamEnum string

const (
	VideoMetadataInteractionsRentStreamEnumAvailable   VideoMetadataInteractionsRentStreamEnum = "available"
	VideoMetadataInteractionsRentStreamEnumPurchased   VideoMetadataInteractionsRentStreamEnum = "purchased"
	VideoMetadataInteractionsRentStreamEnumRestricted  VideoMetadataInteractionsRentStreamEnum = "restricted"
	VideoMetadataInteractionsRentStreamEnumUnavailable VideoMetadataInteractionsRentStreamEnum = "unavailable"
)

type VideoMetadataInteractionsRent struct {
	Currency     string                                  `json:"currency"`
	DisplayPrice string                                  `json:"display_price"`
	Drm          bool                                    `json:"drm"`
	ExpiresTime  string                                  `json:"expires_time"`
	Link         string                                  `json:"link"`
	Price        float64                                 `json:"price"`
	PurchaseTime string                                  `json:"purchase_time"`
	Stream       VideoMetadataInteractionsRentStreamEnum `json:"stream"`
	URI          string                                  `json:"uri"`
}

type VideoMetadataInteractionsReport struct {
	Options []string `json:"options"`
	Reason  []string `json:"reason"`
	URI     string   `json:"uri"`
}

type VideoMetadataInteractionsSubscribe struct {
	Drm          *bool   `json:"drm,omitempty"`
	ExpiresTime  *string `json:"expires_time,omitempty"`
	PurchaseTime *string `json:"purchase_time,omitempty"`
	Stream       *string `json:"stream,omitempty"`
}

type VideoMetadataInteractionsWatched struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

type VideoMetadataInteractionsWatchlater struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

type VideoMetadataInteractions struct {
	Buy        VideoMetadataInteractionsBuy        `json:"buy"`
	Channel    VideoMetadataInteractionsChannel    `json:"channel"`
	Like       VideoMetadataInteractionsLike       `json:"like"`
	Rent       VideoMetadataInteractionsRent       `json:"rent"`
	Report     VideoMetadataInteractionsReport     `json:"report"`
	Subscribe  *VideoMetadataInteractionsSubscribe `json:"subscribe,omitempty"`
	Watched    VideoMetadataInteractionsWatched    `json:"watched"`
	Watchlater VideoMetadataInteractionsWatchlater `json:"watchlater"`
}

type VideoMetadata struct {
	Connections  VideoMetadataConnections  `json:"connections"`
	Interactions VideoMetadataInteractions `json:"interactions"`
}

type VideoParentFolderMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoParentFolderMetadataConnections struct {
	Videos VideoParentFolderMetadataConnectionsVideos `json:"videos"`
}

type VideoParentFolderMetadata struct {
	Connections VideoParentFolderMetadataConnections `json:"connections"`
}

type VideoParentFolderProject struct {
	CreatedTime  string                    `json:"created_time"`
	Metadata     VideoParentFolderMetadata `json:"metadata"`
	ModifiedTime string                    `json:"modified_time"`
	Name         string                    `json:"name"`
	ResourceKey  string                    `json:"resource_key"`
	URI          string                    `json:"uri"`
	User         User                      `json:"user"`
}

type VideoPrivacyCommentsEnum string

const (
	VideoPrivacyCommentsEnumAnybody  VideoPrivacyCommentsEnum = "anybody"
	VideoPrivacyCommentsEnumContacts VideoPrivacyCommentsEnum = "contacts"
	VideoPrivacyCommentsEnumNobody   VideoPrivacyCommentsEnum = "nobody"
)

type VideoPrivacyEmbedEnum string

const (
	VideoPrivacyEmbedEnumPrivate VideoPrivacyEmbedEnum = "private"
	VideoPrivacyEmbedEnumPublic  VideoPrivacyEmbedEnum = "public"
)

type VideoPrivacyViewEnum string

const (
	VideoPrivacyViewEnumAnybody  VideoPrivacyViewEnum = "anybody"
	VideoPrivacyViewEnumContacts VideoPrivacyViewEnum = "contacts"
	VideoPrivacyViewEnumDisable  VideoPrivacyViewEnum = "disable"
	VideoPrivacyViewEnumNobody   VideoPrivacyViewEnum = "nobody"
	VideoPrivacyViewEnumPassword VideoPrivacyViewEnum = "password"
	VideoPrivacyViewEnumUnlisted VideoPrivacyViewEnum = "unlisted"
	VideoPrivacyViewEnumUsers    VideoPrivacyViewEnum = "users"
)

type VideoPrivacy struct {
	Add      bool                     `json:"add"`
	Comments VideoPrivacyCommentsEnum `json:"comments"`
	Download bool                     `json:"download"`
	Embed    VideoPrivacyEmbedEnum    `json:"embed"`
	View     VideoPrivacyViewEnum     `json:"view"`
}

type VideoSpatialDirectorTimeline struct {
	Pitch    *float64 `json:"pitch,omitempty"`
	Roll     *float64 `json:"roll,omitempty"`
	TimeCode *float64 `json:"time_code,omitempty"`
	Yaw      *float64 `json:"yaw,omitempty"`
}

type VideoSpatialProjectionEnum string

const (
	VideoSpatialProjectionEnumCubical         VideoSpatialProjectionEnum = "cubical"
	VideoSpatialProjectionEnumCylindrical     VideoSpatialProjectionEnum = "cylindrical"
	VideoSpatialProjectionEnumDome            VideoSpatialProjectionEnum = "dome"
	VideoSpatialProjectionEnumEquirectangular VideoSpatialProjectionEnum = "equirectangular"
	VideoSpatialProjectionEnumPyramid         VideoSpatialProjectionEnum = "pyramid"
)

type VideoSpatialStereoFormatEnum string

const (
	VideoSpatialStereoFormatEnumLeftRight VideoSpatialStereoFormatEnum = "left-right"
	VideoSpatialStereoFormatEnumMono      VideoSpatialStereoFormatEnum = "mono"
	VideoSpatialStereoFormatEnumTopBottom VideoSpatialStereoFormatEnum = "top-bottom"
)

type VideoSpatial struct {
	DirectorTimeline []VideoSpatialDirectorTimeline `json:"director_timeline"`
	FieldOfView      float64                        `json:"field_of_view"`
	Projection       VideoSpatialProjectionEnum     `json:"projection"`
	StereoFormat     VideoSpatialStereoFormatEnum   `json:"stereo_format"`
}

type VideoStats struct {
	Plays float64 `json:"plays"`
}

type VideoStatusEnum string

const (
	VideoStatusEnumAvailable         VideoStatusEnum = "available"
	VideoStatusEnumQuotaExceeded     VideoStatusEnum = "quota_exceeded"
	VideoStatusEnumTotalCapExceeded  VideoStatusEnum = "total_cap_exceeded"
	VideoStatusEnumTranscodeStarting VideoStatusEnum = "transcode_starting"
	VideoStatusEnumTranscoding       VideoStatusEnum = "transcoding"
	VideoStatusEnumTranscodingError  VideoStatusEnum = "transcoding_error"
	VideoStatusEnumUnavailable       VideoStatusEnum = "unavailable"
	VideoStatusEnumUploading         VideoStatusEnum = "uploading"
	VideoStatusEnumUploadingError    VideoStatusEnum = "uploading_error"
)

type VideoTranscodeStatusEnum string

const (
	VideoTranscodeStatusEnumComplete   VideoTranscodeStatusEnum = "complete"
	VideoTranscodeStatusEnumError      VideoTranscodeStatusEnum = "error"
	VideoTranscodeStatusEnumInProgress VideoTranscodeStatusEnum = "in_progress"
)

type VideoTranscode struct {
	Status *VideoTranscodeStatusEnum `json:"status,omitempty"`
}

type VideoUploadApproachEnum string

const (
	VideoUploadApproachEnumPost      VideoUploadApproachEnum = "post"
	VideoUploadApproachEnumPull      VideoUploadApproachEnum = "pull"
	VideoUploadApproachEnumStreaming VideoUploadApproachEnum = "streaming"
	VideoUploadApproachEnumTus       VideoUploadApproachEnum = "tus"
)

type VideoUploadStatusEnum string

const (
	VideoUploadStatusEnumComplete   VideoUploadStatusEnum = "complete"
	VideoUploadStatusEnumError      VideoUploadStatusEnum = "error"
	VideoUploadStatusEnumInProgress VideoUploadStatusEnum = "in_progress"
)

type VideoUpload struct {
	Approach    *VideoUploadApproachEnum `json:"approach,omitempty"`
	CompleteURI *string                  `json:"complete_uri,omitempty"`
	Form        *string                  `json:"form,omitempty"`
	Link        *string                  `json:"link,omitempty"`
	RedirectURL *string                  `json:"redirect_url,omitempty"`
	Size        *float64                 `json:"size,omitempty"`
	Status      VideoUploadStatusEnum    `json:"status"`
	UploadLink  *string                  `json:"upload_link,omitempty"`
}

type VideoUserAccountEnum string

const (
	VideoUserAccountEnumBasic        VideoUserAccountEnum = "basic"
	VideoUserAccountEnumBusiness     VideoUserAccountEnum = "business"
	VideoUserAccountEnumLiveBusiness VideoUserAccountEnum = "live_business"
	VideoUserAccountEnumLivePremium  VideoUserAccountEnum = "live_premium"
	VideoUserAccountEnumLivePro      VideoUserAccountEnum = "live_pro"
	VideoUserAccountEnumPlus         VideoUserAccountEnum = "plus"
	VideoUserAccountEnumPro          VideoUserAccountEnum = "pro"
	VideoUserAccountEnumProUnlimited VideoUserAccountEnum = "pro_unlimited"
	VideoUserAccountEnumProducer     VideoUserAccountEnum = "producer"
)

type VideoUserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataConnections struct {
	Albums              VideoUserMetadataConnectionsAlbums              `json:"albums"`
	Appearances         VideoUserMetadataConnectionsAppearances         `json:"appearances"`
	Block               VideoUserMetadataConnectionsBlock               `json:"block"`
	Categories          VideoUserMetadataConnectionsCategories          `json:"categories"`
	Channels            VideoUserMetadataConnectionsChannels            `json:"channels"`
	Feed                VideoUserMetadataConnectionsFeed                `json:"feed"`
	Folders             VideoUserMetadataConnectionsFolders             `json:"folders"`
	Followers           VideoUserMetadataConnectionsFollowers           `json:"followers"`
	Following           VideoUserMetadataConnectionsFollowing           `json:"following"`
	Groups              VideoUserMetadataConnectionsGroups              `json:"groups"`
	Likes               VideoUserMetadataConnectionsLikes               `json:"likes"`
	ModeratedChannels   VideoUserMetadataConnectionsModeratedChannels   `json:"moderated_channels"`
	Pictures            VideoUserMetadataConnectionsPictures            `json:"pictures"`
	Portfolios          VideoUserMetadataConnectionsPortfolios          `json:"portfolios"`
	RecommendedChannels VideoUserMetadataConnectionsRecommendedChannels `json:"recommended_channels"`
	RecommendedUsers    VideoUserMetadataConnectionsRecommendedUsers    `json:"recommended_users"`
	Shared              VideoUserMetadataConnectionsShared              `json:"shared"`
	Videos              VideoUserMetadataConnectionsVideos              `json:"videos"`
	WatchedVideos       VideoUserMetadataConnectionsWatchedVideos       `json:"watched_videos"`
	Watchlater          VideoUserMetadataConnectionsWatchlater          `json:"watchlater"`
}

type VideoUserMetadataInteractionsAddPrivacyUser struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

type VideoUserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

type VideoUserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataInteractionsReport struct {
	Options []string `json:"options"`
	Reason  []string `json:"reason"`
	URI     string   `json:"uri"`
}

type VideoUserMetadataInteractions struct {
	AddPrivacyUser *VideoUserMetadataInteractionsAddPrivacyUser `json:"add_privacy_user,omitempty"`
	Block          VideoUserMetadataInteractionsBlock           `json:"block"`
	Follow         VideoUserMetadataInteractionsFollow          `json:"follow"`
	Report         VideoUserMetadataInteractionsReport          `json:"report"`
}

type VideoUserMetadata struct {
	Connections  VideoUserMetadataConnections  `json:"connections"`
	Interactions VideoUserMetadataInteractions `json:"interactions"`
}

type VideoUserPreferencesVideosPrivacyCommentsEnum string

const (
	VideoUserPreferencesVideosPrivacyCommentsEnumAnybody  VideoUserPreferencesVideosPrivacyCommentsEnum = "anybody"
	VideoUserPreferencesVideosPrivacyCommentsEnumContacts VideoUserPreferencesVideosPrivacyCommentsEnum = "contacts"
	VideoUserPreferencesVideosPrivacyCommentsEnumNobody   VideoUserPreferencesVideosPrivacyCommentsEnum = "nobody"
)

type VideoUserPreferencesVideosPrivacyEmbedEnum string

const (
	VideoUserPreferencesVideosPrivacyEmbedEnumPrivate   VideoUserPreferencesVideosPrivacyEmbedEnum = "private"
	VideoUserPreferencesVideosPrivacyEmbedEnumPublic    VideoUserPreferencesVideosPrivacyEmbedEnum = "public"
	VideoUserPreferencesVideosPrivacyEmbedEnumWhitelist VideoUserPreferencesVideosPrivacyEmbedEnum = "whitelist"
)

type VideoUserPreferencesVideosPrivacyViewEnum string

const (
	VideoUserPreferencesVideosPrivacyViewEnumAnybody  VideoUserPreferencesVideosPrivacyViewEnum = "anybody"
	VideoUserPreferencesVideosPrivacyViewEnumContacts VideoUserPreferencesVideosPrivacyViewEnum = "contacts"
	VideoUserPreferencesVideosPrivacyViewEnumDisable  VideoUserPreferencesVideosPrivacyViewEnum = "disable"
	VideoUserPreferencesVideosPrivacyViewEnumNobody   VideoUserPreferencesVideosPrivacyViewEnum = "nobody"
	VideoUserPreferencesVideosPrivacyViewEnumPassword VideoUserPreferencesVideosPrivacyViewEnum = "password"
	VideoUserPreferencesVideosPrivacyViewEnumUnlisted VideoUserPreferencesVideosPrivacyViewEnum = "unlisted"
	VideoUserPreferencesVideosPrivacyViewEnumUsers    VideoUserPreferencesVideosPrivacyViewEnum = "users"
)

type VideoUserPreferencesVideosPrivacy struct {
	Add      *bool                                          `json:"add,omitempty"`
	Comments *VideoUserPreferencesVideosPrivacyCommentsEnum `json:"comments,omitempty"`
	Download *bool                                          `json:"download,omitempty"`
	Embed    *VideoUserPreferencesVideosPrivacyEmbedEnum    `json:"embed,omitempty"`
	View     *VideoUserPreferencesVideosPrivacyViewEnum     `json:"view,omitempty"`
}

type VideoUserPreferencesVideos struct {
	Privacy *VideoUserPreferencesVideosPrivacy `json:"privacy,omitempty"`
}

type VideoUserPreferences struct {
	Videos *VideoUserPreferencesVideos `json:"videos,omitempty"`
}

type VideoUserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

type VideoUserUploadQuotaPeriodic struct {
	Free      float64 `json:"free"`
	Max       float64 `json:"max"`
	ResetDate string  `json:"reset_date"`
	Used      float64 `json:"used"`
}

type VideoUserUploadQuotaSpaceShowingEnum string

const (
	VideoUserUploadQuotaSpaceShowingEnumLifetime VideoUserUploadQuotaSpaceShowingEnum = "lifetime"
	VideoUserUploadQuotaSpaceShowingEnumPeriodic VideoUserUploadQuotaSpaceShowingEnum = "periodic"
)

type VideoUserUploadQuotaSpace struct {
	Free    float64                              `json:"free"`
	Max     float64                              `json:"max"`
	Showing VideoUserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                              `json:"used"`
}

type VideoUserUploadQuota struct {
	Lifetime VideoUserUploadQuotaLifetime `json:"lifetime"`
	Periodic VideoUserUploadQuotaPeriodic `json:"periodic"`
	Space    VideoUserUploadQuotaSpace    `json:"space"`
}

type VideoUserWebsites struct {
	Description string `json:"description"`
	Link        string `json:"link"`
	Name        string `json:"name"`
}

type VideoUserUser struct {
	Account       VideoUserAccountEnum  `json:"account"`
	Bio           string                `json:"bio"`
	ContentFilter []string              `json:"content_filter,omitempty"`
	CreatedTime   string                `json:"created_time"`
	Email         *string               `json:"email,omitempty"`
	Link          string                `json:"link"`
	Location      string                `json:"location"`
	Metadata      VideoUserMetadata     `json:"metadata"`
	Name          string                `json:"name"`
	Pictures      Picture               `json:"pictures"`
	Preferences   *VideoUserPreferences `json:"preferences,omitempty"`
	ResourceKey   string                `json:"resource_key"`
	UploadQuota   VideoUserUploadQuota  `json:"upload_quota"`
	URI           string                `json:"uri"`
	Websites      []VideoUserWebsites   `json:"websites"`
}

type Video struct {
	Categories              []Category                `json:"categories"`
	ContentRating           []string                  `json:"content_rating"`
	Context                 VideoContext              `json:"context"`
	CreatedTime             string                    `json:"created_time"`
	Description             string                    `json:"description"`
	Duration                float64                   `json:"duration"`
	Embed                   EmbedSettings             `json:"embed"`
	Height                  float64                   `json:"height"`
	Language                string                    `json:"language"`
	LastUserActionEventDate *string                   `json:"last_user_action_event_date,omitempty"`
	License                 VideoLicenseEnum          `json:"license"`
	Link                    string                    `json:"link"`
	Metadata                VideoMetadata             `json:"metadata"`
	ModifiedTime            string                    `json:"modified_time"`
	Name                    string                    `json:"name"`
	ParentFolder            *VideoParentFolderProject `json:"parent_folder,omitempty"`
	Password                *string                   `json:"password,omitempty"`
	Pictures                Picture                   `json:"pictures"`
	Privacy                 VideoPrivacy              `json:"privacy"`
	ReleaseTime             string                    `json:"release_time"`
	ResourceKey             string                    `json:"resource_key"`
	Spatial                 VideoSpatial              `json:"spatial"`
	Stats                   VideoStats                `json:"stats"`
	Status                  VideoStatusEnum           `json:"status"`
	Tags                    []Tag                     `json:"tags"`
	Transcode               VideoTranscode            `json:"transcode"`
	Upload                  VideoUpload               `json:"upload"`
	URI                     string                    `json:"uri"`
	User                    VideoUserUser             `json:"user"`
	Width                   float64                   `json:"width"`
}
