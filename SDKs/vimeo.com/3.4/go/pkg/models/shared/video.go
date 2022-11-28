package shared

type VideoContextActionEnum string

const (
	VideoContextActionEnumAddedTo      VideoContextActionEnum = "Added to"
	VideoContextActionEnumAppearanceBy VideoContextActionEnum = "Appearance by"
	VideoContextActionEnumLikedBy      VideoContextActionEnum = "Liked by"
	VideoContextActionEnumUploadedBy   VideoContextActionEnum = "Uploaded by"
)

// VideoContext
// The context of the video's subscription, if this video is part of a subscription.
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

// VideoMetadataConnectionsComments
// Information about the comments on this video.
type VideoMetadataConnectionsComments struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoMetadataConnectionsCredits
// Information about the users credited in this video.
type VideoMetadataConnectionsCredits struct {
	Options []string `json:"options,omitempty"`
	Total   *float64 `json:"total,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

// VideoMetadataConnectionsLikes
// Information about the users who have liked this video.
type VideoMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoMetadataConnectionsOndemand
// Information about this video's ondemand data.
type VideoMetadataConnectionsOndemand struct {
	Options     []string `json:"options"`
	ResourceKey string   `json:"resource_key"`
	URI         string   `json:"uri"`
}

// VideoMetadataConnectionsPictures
// Information about this video's thumbnails.
type VideoMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoMetadataConnectionsPlayback
// The DRM playback status connection for this video.
type VideoMetadataConnectionsPlayback struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// VideoMetadataConnectionsRecommendations
// The recommendations for this video.
type VideoMetadataConnectionsRecommendations struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

// VideoMetadataConnectionsRelated
// Related content for this video.
type VideoMetadataConnectionsRelated struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

// VideoMetadataConnectionsSeason
// Information about the video's season.
type VideoMetadataConnectionsSeason struct {
	Name    string   `json:"name"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// VideoMetadataConnectionsTexttracks
// Information about this video's text tracks.
type VideoMetadataConnectionsTexttracks struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoMetadataConnectionsTrailer
// Information about this video's VOD trailer.
type VideoMetadataConnectionsTrailer struct {
	Options     []string `json:"options"`
	ResourceKey string   `json:"resource_key"`
	URI         string   `json:"uri"`
}

// VideoMetadataConnectionsUsersWithAccess
// Information about the user privacy of this video, if the video privacy is `users`.
type VideoMetadataConnectionsUsersWithAccess struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoMetadataConnectionsVersions
// Information about the versions of this video.
type VideoMetadataConnectionsVersions struct {
	CurrentURI *string  `json:"current_uri,omitempty"`
	Options    []string `json:"options"`
	Total      float64  `json:"total"`
	URI        string   `json:"uri"`
}

// VideoMetadataConnections
// A list of resource URIs related to the video.
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

// VideoMetadataInteractionsBuy
// The Buy interaction for a On Demand video.
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

// VideoMetadataInteractionsChannel
// When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
type VideoMetadataInteractionsChannel struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// VideoMetadataInteractionsLike
// Information about whether the authenticated user has liked this video.
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

// VideoMetadataInteractionsRent
// The Rent interaction for an On Demand video.
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

// VideoMetadataInteractionsReport
// Information about where and how to report a video.
type VideoMetadataInteractionsReport struct {
	Options []string `json:"options"`
	Reason  []string `json:"reason"`
	URI     string   `json:"uri"`
}

// VideoMetadataInteractionsSubscribe
// Subscription information for an On Demand video.
type VideoMetadataInteractionsSubscribe struct {
	Drm          *bool   `json:"drm,omitempty"`
	ExpiresTime  *string `json:"expires_time,omitempty"`
	PurchaseTime *string `json:"purchase_time,omitempty"`
	Stream       *string `json:"stream,omitempty"`
}

// VideoMetadataInteractionsWatched
// Information about removing this video from the user's list of watched videos.
type VideoMetadataInteractionsWatched struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

// VideoMetadataInteractionsWatchlater
// Information about whether this video appears on the authenticated user's Watch Later list.
type VideoMetadataInteractionsWatchlater struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

// VideoMetadataInteractions
// A list of resource URIs related to the video.
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

// VideoMetadata
// The video's metadata.
type VideoMetadata struct {
	Connections  VideoMetadataConnections  `json:"connections"`
	Interactions VideoMetadataInteractions `json:"interactions"`
}

// VideoProjectMetadataConnectionsVideos
// A standard connection object indicating how to get all the videos in this project.
type VideoProjectMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoProjectMetadataConnections
// A list of resource URIs related to the project.
type VideoProjectMetadataConnections struct {
	Videos VideoProjectMetadataConnectionsVideos `json:"videos"`
}

// VideoProjectMetadata
// The project's metadata.
type VideoProjectMetadata struct {
	Connections VideoProjectMetadataConnections `json:"connections"`
}

// VideoProject
// Information about the folder that contains this video.
type VideoProject struct {
	CreatedTime  string               `json:"created_time"`
	Metadata     VideoProjectMetadata `json:"metadata"`
	ModifiedTime string               `json:"modified_time"`
	Name         string               `json:"name"`
	ResourceKey  string               `json:"resource_key"`
	URI          string               `json:"uri"`
	User         User                 `json:"user"`
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

// VideoPrivacy
// The video's privacy setting.
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

// VideoSpatial
// 360 spatial data.
type VideoSpatial struct {
	DirectorTimeline []VideoSpatialDirectorTimeline `json:"director_timeline"`
	FieldOfView      float64                        `json:"field_of_view"`
	Projection       VideoSpatialProjectionEnum     `json:"projection"`
	StereoFormat     VideoSpatialStereoFormatEnum   `json:"stereo_format"`
}

// VideoStats
// A collection of stats associated with this video.
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

// VideoTranscode
// The transcode information for a video upload.
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

// VideoUpload
// The upload information for this video.
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

// VideoUserMetadataConnectionsAlbums
// Information about the albums created by this user.
type VideoUserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsAppearances
// Information about the appearances of this user in other videos.
type VideoUserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsBlock
// Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
type VideoUserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsCategories
// Information about this user's followed categories.
type VideoUserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsChannels
// Information about this user's subscribed channels.
type VideoUserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsFeed
// Information about this user's feed.
type VideoUserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsFolders
// Information about this user's folders.
type VideoUserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsFollowers
// Information about the user's followers.
type VideoUserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsFollowing
// Information about the users that the current user is following.
type VideoUserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsGroups
// Information about the groups created by this user.
type VideoUserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsLikes
// Information about the videos that this user has liked.
type VideoUserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsModeratedChannels
// Information about the channels that this user moderates.
type VideoUserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsPictures
// Information about this user's portraits.
type VideoUserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsPortfolios
// Information about this user's portfolios.
type VideoUserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsRecommendedChannels
// A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
type VideoUserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsRecommendedUsers
// A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
type VideoUserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsShared
// Information about the videos that have been shared with this user.
type VideoUserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsVideos
// Information about the videos uploaded by this user.
type VideoUserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsWatchedVideos
// Information about the videos that this user has watched.
type VideoUserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnectionsWatchlater
// Information about the videos that this user wants to watch later.
type VideoUserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataConnections
// The list of resource URIs related to the user.
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

// VideoUserMetadataInteractionsBlock
// Information related to the block status of this user.
type VideoUserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

// VideoUserMetadataInteractionsFollow
// Information related to the followed status of this user.
type VideoUserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// VideoUserMetadataInteractionsReport
// Information regarding where and how to report a user.
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

// VideoUserMetadata
// The user's metadata.
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

// VideoUserUploadQuotaLifetime
// Information about the user's lifetime upload usage.
type VideoUserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

// VideoUserUploadQuotaPeriodic
// Information about the user's usage for the current period.
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

// VideoUserUploadQuotaSpace
// Information about the user's upload space remaining for the current period.
type VideoUserUploadQuotaSpace struct {
	Free    float64                              `json:"free"`
	Max     float64                              `json:"max"`
	Showing VideoUserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                              `json:"used"`
}

// VideoUserUploadQuota
// Appears only when the user has upload access and is looking at their own user record.
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

// VideoUser
// The video owner.
type VideoUser struct {
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
	Categories              []Category       `json:"categories"`
	ContentRating           []string         `json:"content_rating"`
	Context                 VideoContext     `json:"context"`
	CreatedTime             string           `json:"created_time"`
	Description             string           `json:"description"`
	Duration                float64          `json:"duration"`
	Embed                   EmbedSettings    `json:"embed"`
	Height                  float64          `json:"height"`
	Language                string           `json:"language"`
	LastUserActionEventDate *string          `json:"last_user_action_event_date,omitempty"`
	License                 VideoLicenseEnum `json:"license"`
	Link                    string           `json:"link"`
	Metadata                VideoMetadata    `json:"metadata"`
	ModifiedTime            string           `json:"modified_time"`
	Name                    string           `json:"name"`
	ParentFolder            *VideoProject    `json:"parent_folder,omitempty"`
	Password                *string          `json:"password,omitempty"`
	Pictures                Picture          `json:"pictures"`
	Privacy                 VideoPrivacy     `json:"privacy"`
	ReleaseTime             string           `json:"release_time"`
	ResourceKey             string           `json:"resource_key"`
	Spatial                 VideoSpatial     `json:"spatial"`
	Stats                   VideoStats       `json:"stats"`
	Status                  VideoStatusEnum  `json:"status"`
	Tags                    []Tag            `json:"tags"`
	Transcode               VideoTranscode   `json:"transcode"`
	Upload                  VideoUpload      `json:"upload"`
	URI                     string           `json:"uri"`
	User                    VideoUser        `json:"user"`
	Width                   float64          `json:"width"`
}
