package shared

// VideoVersionsMetadataConnectionsVideo
// Data from video associated with version
type VideoVersionsMetadataConnectionsVideo struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsMetadataConnections struct {
	Video VideoVersionsMetadataConnectionsVideo `json:"video"`
}

// VideoVersionsMetadata
// The video version's metadata.
type VideoVersionsMetadata struct {
	Connections VideoVersionsMetadataConnections `json:"connections"`
}

type VideoVersionsUploadApproachEnum string

const (
	VideoVersionsUploadApproachEnumPost      VideoVersionsUploadApproachEnum = "post"
	VideoVersionsUploadApproachEnumPull      VideoVersionsUploadApproachEnum = "pull"
	VideoVersionsUploadApproachEnumStreaming VideoVersionsUploadApproachEnum = "streaming"
	VideoVersionsUploadApproachEnumTus       VideoVersionsUploadApproachEnum = "tus"
)

type VideoVersionsUploadStatusEnum string

const (
	VideoVersionsUploadStatusEnumComplete   VideoVersionsUploadStatusEnum = "complete"
	VideoVersionsUploadStatusEnumError      VideoVersionsUploadStatusEnum = "error"
	VideoVersionsUploadStatusEnumInProgress VideoVersionsUploadStatusEnum = "in_progress"
)

// VideoVersionsUpload
// The upload information for this version.
type VideoVersionsUpload struct {
	Approach    *VideoVersionsUploadApproachEnum `json:"approach,omitempty"`
	CompleteURI *string                          `json:"complete_uri,omitempty"`
	Form        *string                          `json:"form,omitempty"`
	Link        *string                          `json:"link,omitempty"`
	RedirectURL *string                          `json:"redirect_url,omitempty"`
	Size        *float64                         `json:"size,omitempty"`
	Status      VideoVersionsUploadStatusEnum    `json:"status"`
	UploadLink  *string                          `json:"upload_link,omitempty"`
}

type VideoVersionsUserAccountEnum string

const (
	VideoVersionsUserAccountEnumBasic        VideoVersionsUserAccountEnum = "basic"
	VideoVersionsUserAccountEnumBusiness     VideoVersionsUserAccountEnum = "business"
	VideoVersionsUserAccountEnumLiveBusiness VideoVersionsUserAccountEnum = "live_business"
	VideoVersionsUserAccountEnumLivePremium  VideoVersionsUserAccountEnum = "live_premium"
	VideoVersionsUserAccountEnumLivePro      VideoVersionsUserAccountEnum = "live_pro"
	VideoVersionsUserAccountEnumPlus         VideoVersionsUserAccountEnum = "plus"
	VideoVersionsUserAccountEnumPro          VideoVersionsUserAccountEnum = "pro"
	VideoVersionsUserAccountEnumProUnlimited VideoVersionsUserAccountEnum = "pro_unlimited"
	VideoVersionsUserAccountEnumProducer     VideoVersionsUserAccountEnum = "producer"
)

// VideoVersionsUserMetadataConnectionsAlbums
// Information about the albums created by this user.
type VideoVersionsUserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsAppearances
// Information about the appearances of this user in other videos.
type VideoVersionsUserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsBlock
// Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
type VideoVersionsUserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsCategories
// Information about this user's followed categories.
type VideoVersionsUserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsChannels
// Information about this user's subscribed channels.
type VideoVersionsUserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsFeed
// Information about this user's feed.
type VideoVersionsUserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsFolders
// Information about this user's folders.
type VideoVersionsUserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsFollowers
// Information about the user's followers.
type VideoVersionsUserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsFollowing
// Information about the users that the current user is following.
type VideoVersionsUserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsGroups
// Information about the groups created by this user.
type VideoVersionsUserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsLikes
// Information about the videos that this user has liked.
type VideoVersionsUserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsModeratedChannels
// Information about the channels that this user moderates.
type VideoVersionsUserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsPictures
// Information about this user's portraits.
type VideoVersionsUserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsPortfolios
// Information about this user's portfolios.
type VideoVersionsUserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsRecommendedChannels
// A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
type VideoVersionsUserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsRecommendedUsers
// A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
type VideoVersionsUserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsShared
// Information about the videos that have been shared with this user.
type VideoVersionsUserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsVideos
// Information about the videos uploaded by this user.
type VideoVersionsUserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsWatchedVideos
// Information about the videos that this user has watched.
type VideoVersionsUserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnectionsWatchlater
// Information about the videos that this user wants to watch later.
type VideoVersionsUserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataConnections
// The list of resource URIs related to the user.
type VideoVersionsUserMetadataConnections struct {
	Albums              VideoVersionsUserMetadataConnectionsAlbums              `json:"albums"`
	Appearances         VideoVersionsUserMetadataConnectionsAppearances         `json:"appearances"`
	Block               VideoVersionsUserMetadataConnectionsBlock               `json:"block"`
	Categories          VideoVersionsUserMetadataConnectionsCategories          `json:"categories"`
	Channels            VideoVersionsUserMetadataConnectionsChannels            `json:"channels"`
	Feed                VideoVersionsUserMetadataConnectionsFeed                `json:"feed"`
	Folders             VideoVersionsUserMetadataConnectionsFolders             `json:"folders"`
	Followers           VideoVersionsUserMetadataConnectionsFollowers           `json:"followers"`
	Following           VideoVersionsUserMetadataConnectionsFollowing           `json:"following"`
	Groups              VideoVersionsUserMetadataConnectionsGroups              `json:"groups"`
	Likes               VideoVersionsUserMetadataConnectionsLikes               `json:"likes"`
	ModeratedChannels   VideoVersionsUserMetadataConnectionsModeratedChannels   `json:"moderated_channels"`
	Pictures            VideoVersionsUserMetadataConnectionsPictures            `json:"pictures"`
	Portfolios          VideoVersionsUserMetadataConnectionsPortfolios          `json:"portfolios"`
	RecommendedChannels VideoVersionsUserMetadataConnectionsRecommendedChannels `json:"recommended_channels"`
	RecommendedUsers    VideoVersionsUserMetadataConnectionsRecommendedUsers    `json:"recommended_users"`
	Shared              VideoVersionsUserMetadataConnectionsShared              `json:"shared"`
	Videos              VideoVersionsUserMetadataConnectionsVideos              `json:"videos"`
	WatchedVideos       VideoVersionsUserMetadataConnectionsWatchedVideos       `json:"watched_videos"`
	Watchlater          VideoVersionsUserMetadataConnectionsWatchlater          `json:"watchlater"`
}

type VideoVersionsUserMetadataInteractionsAddPrivacyUser struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

// VideoVersionsUserMetadataInteractionsBlock
// Information related to the block status of this user.
type VideoVersionsUserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

// VideoVersionsUserMetadataInteractionsFollow
// Information related to the followed status of this user.
type VideoVersionsUserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// VideoVersionsUserMetadataInteractionsReport
// Information regarding where and how to report a user.
type VideoVersionsUserMetadataInteractionsReport struct {
	Options []string `json:"options"`
	Reason  []string `json:"reason"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataInteractions struct {
	AddPrivacyUser *VideoVersionsUserMetadataInteractionsAddPrivacyUser `json:"add_privacy_user,omitempty"`
	Block          VideoVersionsUserMetadataInteractionsBlock           `json:"block"`
	Follow         VideoVersionsUserMetadataInteractionsFollow          `json:"follow"`
	Report         VideoVersionsUserMetadataInteractionsReport          `json:"report"`
}

// VideoVersionsUserMetadata
// The user's metadata.
type VideoVersionsUserMetadata struct {
	Connections  VideoVersionsUserMetadataConnections  `json:"connections"`
	Interactions VideoVersionsUserMetadataInteractions `json:"interactions"`
}

type VideoVersionsUserPreferencesVideosPrivacyCommentsEnum string

const (
	VideoVersionsUserPreferencesVideosPrivacyCommentsEnumAnybody  VideoVersionsUserPreferencesVideosPrivacyCommentsEnum = "anybody"
	VideoVersionsUserPreferencesVideosPrivacyCommentsEnumContacts VideoVersionsUserPreferencesVideosPrivacyCommentsEnum = "contacts"
	VideoVersionsUserPreferencesVideosPrivacyCommentsEnumNobody   VideoVersionsUserPreferencesVideosPrivacyCommentsEnum = "nobody"
)

type VideoVersionsUserPreferencesVideosPrivacyEmbedEnum string

const (
	VideoVersionsUserPreferencesVideosPrivacyEmbedEnumPrivate   VideoVersionsUserPreferencesVideosPrivacyEmbedEnum = "private"
	VideoVersionsUserPreferencesVideosPrivacyEmbedEnumPublic    VideoVersionsUserPreferencesVideosPrivacyEmbedEnum = "public"
	VideoVersionsUserPreferencesVideosPrivacyEmbedEnumWhitelist VideoVersionsUserPreferencesVideosPrivacyEmbedEnum = "whitelist"
)

type VideoVersionsUserPreferencesVideosPrivacyViewEnum string

const (
	VideoVersionsUserPreferencesVideosPrivacyViewEnumAnybody  VideoVersionsUserPreferencesVideosPrivacyViewEnum = "anybody"
	VideoVersionsUserPreferencesVideosPrivacyViewEnumContacts VideoVersionsUserPreferencesVideosPrivacyViewEnum = "contacts"
	VideoVersionsUserPreferencesVideosPrivacyViewEnumDisable  VideoVersionsUserPreferencesVideosPrivacyViewEnum = "disable"
	VideoVersionsUserPreferencesVideosPrivacyViewEnumNobody   VideoVersionsUserPreferencesVideosPrivacyViewEnum = "nobody"
	VideoVersionsUserPreferencesVideosPrivacyViewEnumPassword VideoVersionsUserPreferencesVideosPrivacyViewEnum = "password"
	VideoVersionsUserPreferencesVideosPrivacyViewEnumUnlisted VideoVersionsUserPreferencesVideosPrivacyViewEnum = "unlisted"
	VideoVersionsUserPreferencesVideosPrivacyViewEnumUsers    VideoVersionsUserPreferencesVideosPrivacyViewEnum = "users"
)

type VideoVersionsUserPreferencesVideosPrivacy struct {
	Add      *bool                                                  `json:"add,omitempty"`
	Comments *VideoVersionsUserPreferencesVideosPrivacyCommentsEnum `json:"comments,omitempty"`
	Download *bool                                                  `json:"download,omitempty"`
	Embed    *VideoVersionsUserPreferencesVideosPrivacyEmbedEnum    `json:"embed,omitempty"`
	View     *VideoVersionsUserPreferencesVideosPrivacyViewEnum     `json:"view,omitempty"`
}

type VideoVersionsUserPreferencesVideos struct {
	Privacy *VideoVersionsUserPreferencesVideosPrivacy `json:"privacy,omitempty"`
}

type VideoVersionsUserPreferences struct {
	Videos *VideoVersionsUserPreferencesVideos `json:"videos,omitempty"`
}

// VideoVersionsUserUploadQuotaLifetime
// Information about the user's lifetime upload usage.
type VideoVersionsUserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

// VideoVersionsUserUploadQuotaPeriodic
// Information about the user's usage for the current period.
type VideoVersionsUserUploadQuotaPeriodic struct {
	Free      float64 `json:"free"`
	Max       float64 `json:"max"`
	ResetDate string  `json:"reset_date"`
	Used      float64 `json:"used"`
}

type VideoVersionsUserUploadQuotaSpaceShowingEnum string

const (
	VideoVersionsUserUploadQuotaSpaceShowingEnumLifetime VideoVersionsUserUploadQuotaSpaceShowingEnum = "lifetime"
	VideoVersionsUserUploadQuotaSpaceShowingEnumPeriodic VideoVersionsUserUploadQuotaSpaceShowingEnum = "periodic"
)

// VideoVersionsUserUploadQuotaSpace
// Information about the user's upload space remaining for the current period.
type VideoVersionsUserUploadQuotaSpace struct {
	Free    float64                                      `json:"free"`
	Max     float64                                      `json:"max"`
	Showing VideoVersionsUserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                                      `json:"used"`
}

// VideoVersionsUserUploadQuota
// Appears only when the user has upload access and is looking at their own user record.
type VideoVersionsUserUploadQuota struct {
	Lifetime VideoVersionsUserUploadQuotaLifetime `json:"lifetime"`
	Periodic VideoVersionsUserUploadQuotaPeriodic `json:"periodic"`
	Space    VideoVersionsUserUploadQuotaSpace    `json:"space"`
}

type VideoVersionsUserWebsites struct {
	Description string `json:"description"`
	Link        string `json:"link"`
	Name        string `json:"name"`
}

// VideoVersionsUser
// The owner of the video version.
type VideoVersionsUser struct {
	Account       VideoVersionsUserAccountEnum  `json:"account"`
	Bio           string                        `json:"bio"`
	ContentFilter []string                      `json:"content_filter,omitempty"`
	CreatedTime   string                        `json:"created_time"`
	Email         *string                       `json:"email,omitempty"`
	Link          string                        `json:"link"`
	Location      string                        `json:"location"`
	Metadata      VideoVersionsUserMetadata     `json:"metadata"`
	Name          string                        `json:"name"`
	Pictures      Picture                       `json:"pictures"`
	Preferences   *VideoVersionsUserPreferences `json:"preferences,omitempty"`
	ResourceKey   string                        `json:"resource_key"`
	UploadQuota   VideoVersionsUserUploadQuota  `json:"upload_quota"`
	URI           string                        `json:"uri"`
	Websites      []VideoVersionsUserWebsites   `json:"websites"`
}

type VideoVersions struct {
	Active       bool                  `json:"active"`
	App          APIApp                `json:"app"`
	CreatedTime  string                `json:"created_time"`
	Duration     float64               `json:"duration"`
	Filename     string                `json:"filename"`
	Filesize     float64               `json:"filesize"`
	Metadata     VideoVersionsMetadata `json:"metadata"`
	ModifiedTime string                `json:"modified_time"`
	Play         Play                  `json:"play"`
	Upload       VideoVersionsUpload   `json:"upload"`
	UploadDate   string                `json:"upload_date"`
	URI          string                `json:"uri"`
	User         VideoVersionsUser     `json:"user"`
}
