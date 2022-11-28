package shared

// OnDemandSeasonMetadataConnectionsVideos
// The Videos connection.
type OnDemandSeasonMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonMetadataConnections struct {
	Videos OnDemandSeasonMetadataConnectionsVideos `json:"videos"`
}

type OnDemandSeasonMetadata struct {
	Connections OnDemandSeasonMetadataConnections `json:"connections"`
}

type OnDemandSeasonUserAccountEnum string

const (
	OnDemandSeasonUserAccountEnumBasic        OnDemandSeasonUserAccountEnum = "basic"
	OnDemandSeasonUserAccountEnumBusiness     OnDemandSeasonUserAccountEnum = "business"
	OnDemandSeasonUserAccountEnumLiveBusiness OnDemandSeasonUserAccountEnum = "live_business"
	OnDemandSeasonUserAccountEnumLivePremium  OnDemandSeasonUserAccountEnum = "live_premium"
	OnDemandSeasonUserAccountEnumLivePro      OnDemandSeasonUserAccountEnum = "live_pro"
	OnDemandSeasonUserAccountEnumPlus         OnDemandSeasonUserAccountEnum = "plus"
	OnDemandSeasonUserAccountEnumPro          OnDemandSeasonUserAccountEnum = "pro"
	OnDemandSeasonUserAccountEnumProUnlimited OnDemandSeasonUserAccountEnum = "pro_unlimited"
	OnDemandSeasonUserAccountEnumProducer     OnDemandSeasonUserAccountEnum = "producer"
)

// OnDemandSeasonUserMetadataConnectionsAlbums
// Information about the albums created by this user.
type OnDemandSeasonUserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsAppearances
// Information about the appearances of this user in other videos.
type OnDemandSeasonUserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsBlock
// Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
type OnDemandSeasonUserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsCategories
// Information about this user's followed categories.
type OnDemandSeasonUserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsChannels
// Information about this user's subscribed channels.
type OnDemandSeasonUserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsFeed
// Information about this user's feed.
type OnDemandSeasonUserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsFolders
// Information about this user's folders.
type OnDemandSeasonUserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsFollowers
// Information about the user's followers.
type OnDemandSeasonUserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsFollowing
// Information about the users that the current user is following.
type OnDemandSeasonUserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsGroups
// Information about the groups created by this user.
type OnDemandSeasonUserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsLikes
// Information about the videos that this user has liked.
type OnDemandSeasonUserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsModeratedChannels
// Information about the channels that this user moderates.
type OnDemandSeasonUserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsPictures
// Information about this user's portraits.
type OnDemandSeasonUserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsPortfolios
// Information about this user's portfolios.
type OnDemandSeasonUserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsRecommendedChannels
// A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
type OnDemandSeasonUserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsRecommendedUsers
// A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
type OnDemandSeasonUserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsShared
// Information about the videos that have been shared with this user.
type OnDemandSeasonUserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsVideos
// Information about the videos uploaded by this user.
type OnDemandSeasonUserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsWatchedVideos
// Information about the videos that this user has watched.
type OnDemandSeasonUserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnectionsWatchlater
// Information about the videos that this user wants to watch later.
type OnDemandSeasonUserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataConnections
// The list of resource URIs related to the user.
type OnDemandSeasonUserMetadataConnections struct {
	Albums              OnDemandSeasonUserMetadataConnectionsAlbums              `json:"albums"`
	Appearances         OnDemandSeasonUserMetadataConnectionsAppearances         `json:"appearances"`
	Block               OnDemandSeasonUserMetadataConnectionsBlock               `json:"block"`
	Categories          OnDemandSeasonUserMetadataConnectionsCategories          `json:"categories"`
	Channels            OnDemandSeasonUserMetadataConnectionsChannels            `json:"channels"`
	Feed                OnDemandSeasonUserMetadataConnectionsFeed                `json:"feed"`
	Folders             OnDemandSeasonUserMetadataConnectionsFolders             `json:"folders"`
	Followers           OnDemandSeasonUserMetadataConnectionsFollowers           `json:"followers"`
	Following           OnDemandSeasonUserMetadataConnectionsFollowing           `json:"following"`
	Groups              OnDemandSeasonUserMetadataConnectionsGroups              `json:"groups"`
	Likes               OnDemandSeasonUserMetadataConnectionsLikes               `json:"likes"`
	ModeratedChannels   OnDemandSeasonUserMetadataConnectionsModeratedChannels   `json:"moderated_channels"`
	Pictures            OnDemandSeasonUserMetadataConnectionsPictures            `json:"pictures"`
	Portfolios          OnDemandSeasonUserMetadataConnectionsPortfolios          `json:"portfolios"`
	RecommendedChannels OnDemandSeasonUserMetadataConnectionsRecommendedChannels `json:"recommended_channels"`
	RecommendedUsers    OnDemandSeasonUserMetadataConnectionsRecommendedUsers    `json:"recommended_users"`
	Shared              OnDemandSeasonUserMetadataConnectionsShared              `json:"shared"`
	Videos              OnDemandSeasonUserMetadataConnectionsVideos              `json:"videos"`
	WatchedVideos       OnDemandSeasonUserMetadataConnectionsWatchedVideos       `json:"watched_videos"`
	Watchlater          OnDemandSeasonUserMetadataConnectionsWatchlater          `json:"watchlater"`
}

type OnDemandSeasonUserMetadataInteractionsAddPrivacyUser struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

// OnDemandSeasonUserMetadataInteractionsBlock
// Information related to the block status of this user.
type OnDemandSeasonUserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

// OnDemandSeasonUserMetadataInteractionsFollow
// Information related to the followed status of this user.
type OnDemandSeasonUserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// OnDemandSeasonUserMetadataInteractionsReport
// Information regarding where and how to report a user.
type OnDemandSeasonUserMetadataInteractionsReport struct {
	Options []string `json:"options"`
	Reason  []string `json:"reason"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataInteractions struct {
	AddPrivacyUser *OnDemandSeasonUserMetadataInteractionsAddPrivacyUser `json:"add_privacy_user,omitempty"`
	Block          OnDemandSeasonUserMetadataInteractionsBlock           `json:"block"`
	Follow         OnDemandSeasonUserMetadataInteractionsFollow          `json:"follow"`
	Report         OnDemandSeasonUserMetadataInteractionsReport          `json:"report"`
}

// OnDemandSeasonUserMetadata
// The user's metadata.
type OnDemandSeasonUserMetadata struct {
	Connections  OnDemandSeasonUserMetadataConnections  `json:"connections"`
	Interactions OnDemandSeasonUserMetadataInteractions `json:"interactions"`
}

type OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum string

const (
	OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnumAnybody  OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum = "anybody"
	OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnumContacts OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum = "contacts"
	OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnumNobody   OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum = "nobody"
)

type OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum string

const (
	OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnumPrivate   OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum = "private"
	OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnumPublic    OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum = "public"
	OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnumWhitelist OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum = "whitelist"
)

type OnDemandSeasonUserPreferencesVideosPrivacyViewEnum string

const (
	OnDemandSeasonUserPreferencesVideosPrivacyViewEnumAnybody  OnDemandSeasonUserPreferencesVideosPrivacyViewEnum = "anybody"
	OnDemandSeasonUserPreferencesVideosPrivacyViewEnumContacts OnDemandSeasonUserPreferencesVideosPrivacyViewEnum = "contacts"
	OnDemandSeasonUserPreferencesVideosPrivacyViewEnumDisable  OnDemandSeasonUserPreferencesVideosPrivacyViewEnum = "disable"
	OnDemandSeasonUserPreferencesVideosPrivacyViewEnumNobody   OnDemandSeasonUserPreferencesVideosPrivacyViewEnum = "nobody"
	OnDemandSeasonUserPreferencesVideosPrivacyViewEnumPassword OnDemandSeasonUserPreferencesVideosPrivacyViewEnum = "password"
	OnDemandSeasonUserPreferencesVideosPrivacyViewEnumUnlisted OnDemandSeasonUserPreferencesVideosPrivacyViewEnum = "unlisted"
	OnDemandSeasonUserPreferencesVideosPrivacyViewEnumUsers    OnDemandSeasonUserPreferencesVideosPrivacyViewEnum = "users"
)

type OnDemandSeasonUserPreferencesVideosPrivacy struct {
	Add      *bool                                                   `json:"add,omitempty"`
	Comments *OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum `json:"comments,omitempty"`
	Download *bool                                                   `json:"download,omitempty"`
	Embed    *OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum    `json:"embed,omitempty"`
	View     *OnDemandSeasonUserPreferencesVideosPrivacyViewEnum     `json:"view,omitempty"`
}

type OnDemandSeasonUserPreferencesVideos struct {
	Privacy *OnDemandSeasonUserPreferencesVideosPrivacy `json:"privacy,omitempty"`
}

type OnDemandSeasonUserPreferences struct {
	Videos *OnDemandSeasonUserPreferencesVideos `json:"videos,omitempty"`
}

// OnDemandSeasonUserUploadQuotaLifetime
// Information about the user's lifetime upload usage.
type OnDemandSeasonUserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

// OnDemandSeasonUserUploadQuotaPeriodic
// Information about the user's usage for the current period.
type OnDemandSeasonUserUploadQuotaPeriodic struct {
	Free      float64 `json:"free"`
	Max       float64 `json:"max"`
	ResetDate string  `json:"reset_date"`
	Used      float64 `json:"used"`
}

type OnDemandSeasonUserUploadQuotaSpaceShowingEnum string

const (
	OnDemandSeasonUserUploadQuotaSpaceShowingEnumLifetime OnDemandSeasonUserUploadQuotaSpaceShowingEnum = "lifetime"
	OnDemandSeasonUserUploadQuotaSpaceShowingEnumPeriodic OnDemandSeasonUserUploadQuotaSpaceShowingEnum = "periodic"
)

// OnDemandSeasonUserUploadQuotaSpace
// Information about the user's upload space remaining for the current period.
type OnDemandSeasonUserUploadQuotaSpace struct {
	Free    float64                                       `json:"free"`
	Max     float64                                       `json:"max"`
	Showing OnDemandSeasonUserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                                       `json:"used"`
}

// OnDemandSeasonUserUploadQuota
// Appears only when the user has upload access and is looking at their own user record.
type OnDemandSeasonUserUploadQuota struct {
	Lifetime OnDemandSeasonUserUploadQuotaLifetime `json:"lifetime"`
	Periodic OnDemandSeasonUserUploadQuotaPeriodic `json:"periodic"`
	Space    OnDemandSeasonUserUploadQuotaSpace    `json:"space"`
}

type OnDemandSeasonUserWebsites struct {
	Description string `json:"description"`
	Link        string `json:"link"`
	Name        string `json:"name"`
}

// OnDemandSeasonUser
// The creator of this On Demand page.
type OnDemandSeasonUser struct {
	Account       OnDemandSeasonUserAccountEnum  `json:"account"`
	Bio           string                         `json:"bio"`
	ContentFilter []string                       `json:"content_filter,omitempty"`
	CreatedTime   string                         `json:"created_time"`
	Email         *string                        `json:"email,omitempty"`
	Link          string                         `json:"link"`
	Location      string                         `json:"location"`
	Metadata      OnDemandSeasonUserMetadata     `json:"metadata"`
	Name          string                         `json:"name"`
	Pictures      Picture                        `json:"pictures"`
	Preferences   *OnDemandSeasonUserPreferences `json:"preferences,omitempty"`
	ResourceKey   string                         `json:"resource_key"`
	UploadQuota   OnDemandSeasonUserUploadQuota  `json:"upload_quota"`
	URI           string                         `json:"uri"`
	Websites      []OnDemandSeasonUserWebsites   `json:"websites"`
}

type OnDemandSeason struct {
	Description string                 `json:"description"`
	Metadata    OnDemandSeasonMetadata `json:"metadata"`
	Name        string                 `json:"name"`
	Position    float64                `json:"position"`
	ResourceKey string                 `json:"resource_key"`
	Type        string                 `json:"type"`
	URI         string                 `json:"uri"`
	User        OnDemandSeasonUser     `json:"user"`
}
