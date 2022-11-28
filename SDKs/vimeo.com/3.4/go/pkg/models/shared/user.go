package shared

type UserAccountEnum string

const (
	UserAccountEnumBasic        UserAccountEnum = "basic"
	UserAccountEnumBusiness     UserAccountEnum = "business"
	UserAccountEnumLiveBusiness UserAccountEnum = "live_business"
	UserAccountEnumLivePremium  UserAccountEnum = "live_premium"
	UserAccountEnumLivePro      UserAccountEnum = "live_pro"
	UserAccountEnumPlus         UserAccountEnum = "plus"
	UserAccountEnumPro          UserAccountEnum = "pro"
	UserAccountEnumProUnlimited UserAccountEnum = "pro_unlimited"
	UserAccountEnumProducer     UserAccountEnum = "producer"
)

// UserMetadataConnectionsAlbums
// Information about the albums created by this user.
type UserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsAppearances
// Information about the appearances of this user in other videos.
type UserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsBlock
// Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
type UserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsCategories
// Information about this user's followed categories.
type UserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsChannels
// Information about this user's subscribed channels.
type UserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsFeed
// Information about this user's feed.
type UserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsFolders
// Information about this user's folders.
type UserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsFollowers
// Information about the user's followers.
type UserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsFollowing
// Information about the users that the current user is following.
type UserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsGroups
// Information about the groups created by this user.
type UserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsLikes
// Information about the videos that this user has liked.
type UserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsModeratedChannels
// Information about the channels that this user moderates.
type UserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsPictures
// Information about this user's portraits.
type UserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsPortfolios
// Information about this user's portfolios.
type UserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsRecommendedChannels
// A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
type UserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsRecommendedUsers
// A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
type UserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsShared
// Information about the videos that have been shared with this user.
type UserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsVideos
// Information about the videos uploaded by this user.
type UserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsWatchedVideos
// Information about the videos that this user has watched.
type UserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnectionsWatchlater
// Information about the videos that this user wants to watch later.
type UserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// UserMetadataConnections
// The list of resource URIs related to the user.
type UserMetadataConnections struct {
	Albums              UserMetadataConnectionsAlbums              `json:"albums"`
	Appearances         UserMetadataConnectionsAppearances         `json:"appearances"`
	Block               UserMetadataConnectionsBlock               `json:"block"`
	Categories          UserMetadataConnectionsCategories          `json:"categories"`
	Channels            UserMetadataConnectionsChannels            `json:"channels"`
	Feed                UserMetadataConnectionsFeed                `json:"feed"`
	Folders             UserMetadataConnectionsFolders             `json:"folders"`
	Followers           UserMetadataConnectionsFollowers           `json:"followers"`
	Following           UserMetadataConnectionsFollowing           `json:"following"`
	Groups              UserMetadataConnectionsGroups              `json:"groups"`
	Likes               UserMetadataConnectionsLikes               `json:"likes"`
	ModeratedChannels   UserMetadataConnectionsModeratedChannels   `json:"moderated_channels"`
	Pictures            UserMetadataConnectionsPictures            `json:"pictures"`
	Portfolios          UserMetadataConnectionsPortfolios          `json:"portfolios"`
	RecommendedChannels UserMetadataConnectionsRecommendedChannels `json:"recommended_channels"`
	RecommendedUsers    UserMetadataConnectionsRecommendedUsers    `json:"recommended_users"`
	Shared              UserMetadataConnectionsShared              `json:"shared"`
	Videos              UserMetadataConnectionsVideos              `json:"videos"`
	WatchedVideos       UserMetadataConnectionsWatchedVideos       `json:"watched_videos"`
	Watchlater          UserMetadataConnectionsWatchlater          `json:"watchlater"`
}

type UserMetadataInteractionsAddPrivacyUser struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

// UserMetadataInteractionsBlock
// Information related to the block status of this user.
type UserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

// UserMetadataInteractionsFollow
// Information related to the followed status of this user.
type UserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// UserMetadataInteractionsReport
// Information regarding where and how to report a user.
type UserMetadataInteractionsReport struct {
	Options []string `json:"options"`
	Reason  []string `json:"reason"`
	URI     string   `json:"uri"`
}

type UserMetadataInteractions struct {
	AddPrivacyUser *UserMetadataInteractionsAddPrivacyUser `json:"add_privacy_user,omitempty"`
	Block          UserMetadataInteractionsBlock           `json:"block"`
	Follow         UserMetadataInteractionsFollow          `json:"follow"`
	Report         UserMetadataInteractionsReport          `json:"report"`
}

// UserMetadata
// The user's metadata.
type UserMetadata struct {
	Connections  UserMetadataConnections  `json:"connections"`
	Interactions UserMetadataInteractions `json:"interactions"`
}

type UserPreferencesVideosPrivacyCommentsEnum string

const (
	UserPreferencesVideosPrivacyCommentsEnumAnybody  UserPreferencesVideosPrivacyCommentsEnum = "anybody"
	UserPreferencesVideosPrivacyCommentsEnumContacts UserPreferencesVideosPrivacyCommentsEnum = "contacts"
	UserPreferencesVideosPrivacyCommentsEnumNobody   UserPreferencesVideosPrivacyCommentsEnum = "nobody"
)

type UserPreferencesVideosPrivacyEmbedEnum string

const (
	UserPreferencesVideosPrivacyEmbedEnumPrivate   UserPreferencesVideosPrivacyEmbedEnum = "private"
	UserPreferencesVideosPrivacyEmbedEnumPublic    UserPreferencesVideosPrivacyEmbedEnum = "public"
	UserPreferencesVideosPrivacyEmbedEnumWhitelist UserPreferencesVideosPrivacyEmbedEnum = "whitelist"
)

type UserPreferencesVideosPrivacyViewEnum string

const (
	UserPreferencesVideosPrivacyViewEnumAnybody  UserPreferencesVideosPrivacyViewEnum = "anybody"
	UserPreferencesVideosPrivacyViewEnumContacts UserPreferencesVideosPrivacyViewEnum = "contacts"
	UserPreferencesVideosPrivacyViewEnumDisable  UserPreferencesVideosPrivacyViewEnum = "disable"
	UserPreferencesVideosPrivacyViewEnumNobody   UserPreferencesVideosPrivacyViewEnum = "nobody"
	UserPreferencesVideosPrivacyViewEnumPassword UserPreferencesVideosPrivacyViewEnum = "password"
	UserPreferencesVideosPrivacyViewEnumUnlisted UserPreferencesVideosPrivacyViewEnum = "unlisted"
	UserPreferencesVideosPrivacyViewEnumUsers    UserPreferencesVideosPrivacyViewEnum = "users"
)

type UserPreferencesVideosPrivacy struct {
	Add      *bool                                     `json:"add,omitempty"`
	Comments *UserPreferencesVideosPrivacyCommentsEnum `json:"comments,omitempty"`
	Download *bool                                     `json:"download,omitempty"`
	Embed    *UserPreferencesVideosPrivacyEmbedEnum    `json:"embed,omitempty"`
	View     *UserPreferencesVideosPrivacyViewEnum     `json:"view,omitempty"`
}

type UserPreferencesVideos struct {
	Privacy *UserPreferencesVideosPrivacy `json:"privacy,omitempty"`
}

type UserPreferences struct {
	Videos *UserPreferencesVideos `json:"videos,omitempty"`
}

// UserUploadQuotaLifetime
// Information about the user's lifetime upload usage.
type UserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

// UserUploadQuotaPeriodic
// Information about the user's usage for the current period.
type UserUploadQuotaPeriodic struct {
	Free      float64 `json:"free"`
	Max       float64 `json:"max"`
	ResetDate string  `json:"reset_date"`
	Used      float64 `json:"used"`
}

type UserUploadQuotaSpaceShowingEnum string

const (
	UserUploadQuotaSpaceShowingEnumLifetime UserUploadQuotaSpaceShowingEnum = "lifetime"
	UserUploadQuotaSpaceShowingEnumPeriodic UserUploadQuotaSpaceShowingEnum = "periodic"
)

// UserUploadQuotaSpace
// Information about the user's upload space remaining for the current period.
type UserUploadQuotaSpace struct {
	Free    float64                         `json:"free"`
	Max     float64                         `json:"max"`
	Showing UserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                         `json:"used"`
}

// UserUploadQuota
// Appears only when the user has upload access and is looking at their own user record.
type UserUploadQuota struct {
	Lifetime UserUploadQuotaLifetime `json:"lifetime"`
	Periodic UserUploadQuotaPeriodic `json:"periodic"`
	Space    UserUploadQuotaSpace    `json:"space"`
}

type UserWebsites struct {
	Description string `json:"description"`
	Link        string `json:"link"`
	Name        string `json:"name"`
}

type User struct {
	Account       UserAccountEnum  `json:"account"`
	Bio           string           `json:"bio"`
	ContentFilter []string         `json:"content_filter,omitempty"`
	CreatedTime   string           `json:"created_time"`
	Email         *string          `json:"email,omitempty"`
	Link          string           `json:"link"`
	Location      string           `json:"location"`
	Metadata      UserMetadata     `json:"metadata"`
	Name          string           `json:"name"`
	Pictures      Picture          `json:"pictures"`
	Preferences   *UserPreferences `json:"preferences,omitempty"`
	ResourceKey   string           `json:"resource_key"`
	UploadQuota   UserUploadQuota  `json:"upload_quota"`
	URI           string           `json:"uri"`
	Websites      []UserWebsites   `json:"websites"`
}
