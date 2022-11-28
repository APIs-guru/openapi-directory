package shared

// CommentMetadataConnectionsReplies
// Information about this comment's replies.
type CommentMetadataConnectionsReplies struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type CommentMetadataConnections struct {
	Replies CommentMetadataConnectionsReplies `json:"replies"`
}

type CommentMetadata struct {
	Connections CommentMetadataConnections `json:"connections"`
}

type CommentTypeEnum string

const (
	CommentTypeEnumVideo CommentTypeEnum = "video"
)

type CommentUserAccountEnum string

const (
	CommentUserAccountEnumBasic        CommentUserAccountEnum = "basic"
	CommentUserAccountEnumBusiness     CommentUserAccountEnum = "business"
	CommentUserAccountEnumLiveBusiness CommentUserAccountEnum = "live_business"
	CommentUserAccountEnumLivePremium  CommentUserAccountEnum = "live_premium"
	CommentUserAccountEnumLivePro      CommentUserAccountEnum = "live_pro"
	CommentUserAccountEnumPlus         CommentUserAccountEnum = "plus"
	CommentUserAccountEnumPro          CommentUserAccountEnum = "pro"
	CommentUserAccountEnumProUnlimited CommentUserAccountEnum = "pro_unlimited"
	CommentUserAccountEnumProducer     CommentUserAccountEnum = "producer"
)

// CommentUserMetadataConnectionsAlbums
// Information about the albums created by this user.
type CommentUserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsAppearances
// Information about the appearances of this user in other videos.
type CommentUserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsBlock
// Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
type CommentUserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsCategories
// Information about this user's followed categories.
type CommentUserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsChannels
// Information about this user's subscribed channels.
type CommentUserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsFeed
// Information about this user's feed.
type CommentUserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsFolders
// Information about this user's folders.
type CommentUserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsFollowers
// Information about the user's followers.
type CommentUserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsFollowing
// Information about the users that the current user is following.
type CommentUserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsGroups
// Information about the groups created by this user.
type CommentUserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsLikes
// Information about the videos that this user has liked.
type CommentUserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsModeratedChannels
// Information about the channels that this user moderates.
type CommentUserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsPictures
// Information about this user's portraits.
type CommentUserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsPortfolios
// Information about this user's portfolios.
type CommentUserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsRecommendedChannels
// A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
type CommentUserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsRecommendedUsers
// A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
type CommentUserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsShared
// Information about the videos that have been shared with this user.
type CommentUserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsVideos
// Information about the videos uploaded by this user.
type CommentUserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsWatchedVideos
// Information about the videos that this user has watched.
type CommentUserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnectionsWatchlater
// Information about the videos that this user wants to watch later.
type CommentUserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataConnections
// The list of resource URIs related to the user.
type CommentUserMetadataConnections struct {
	Albums              CommentUserMetadataConnectionsAlbums              `json:"albums"`
	Appearances         CommentUserMetadataConnectionsAppearances         `json:"appearances"`
	Block               CommentUserMetadataConnectionsBlock               `json:"block"`
	Categories          CommentUserMetadataConnectionsCategories          `json:"categories"`
	Channels            CommentUserMetadataConnectionsChannels            `json:"channels"`
	Feed                CommentUserMetadataConnectionsFeed                `json:"feed"`
	Folders             CommentUserMetadataConnectionsFolders             `json:"folders"`
	Followers           CommentUserMetadataConnectionsFollowers           `json:"followers"`
	Following           CommentUserMetadataConnectionsFollowing           `json:"following"`
	Groups              CommentUserMetadataConnectionsGroups              `json:"groups"`
	Likes               CommentUserMetadataConnectionsLikes               `json:"likes"`
	ModeratedChannels   CommentUserMetadataConnectionsModeratedChannels   `json:"moderated_channels"`
	Pictures            CommentUserMetadataConnectionsPictures            `json:"pictures"`
	Portfolios          CommentUserMetadataConnectionsPortfolios          `json:"portfolios"`
	RecommendedChannels CommentUserMetadataConnectionsRecommendedChannels `json:"recommended_channels"`
	RecommendedUsers    CommentUserMetadataConnectionsRecommendedUsers    `json:"recommended_users"`
	Shared              CommentUserMetadataConnectionsShared              `json:"shared"`
	Videos              CommentUserMetadataConnectionsVideos              `json:"videos"`
	WatchedVideos       CommentUserMetadataConnectionsWatchedVideos       `json:"watched_videos"`
	Watchlater          CommentUserMetadataConnectionsWatchlater          `json:"watchlater"`
}

type CommentUserMetadataInteractionsAddPrivacyUser struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

// CommentUserMetadataInteractionsBlock
// Information related to the block status of this user.
type CommentUserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

// CommentUserMetadataInteractionsFollow
// Information related to the followed status of this user.
type CommentUserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// CommentUserMetadataInteractionsReport
// Information regarding where and how to report a user.
type CommentUserMetadataInteractionsReport struct {
	Options []string `json:"options"`
	Reason  []string `json:"reason"`
	URI     string   `json:"uri"`
}

type CommentUserMetadataInteractions struct {
	AddPrivacyUser *CommentUserMetadataInteractionsAddPrivacyUser `json:"add_privacy_user,omitempty"`
	Block          CommentUserMetadataInteractionsBlock           `json:"block"`
	Follow         CommentUserMetadataInteractionsFollow          `json:"follow"`
	Report         CommentUserMetadataInteractionsReport          `json:"report"`
}

// CommentUserMetadata
// The user's metadata.
type CommentUserMetadata struct {
	Connections  CommentUserMetadataConnections  `json:"connections"`
	Interactions CommentUserMetadataInteractions `json:"interactions"`
}

type CommentUserPreferencesVideosPrivacyCommentsEnum string

const (
	CommentUserPreferencesVideosPrivacyCommentsEnumAnybody  CommentUserPreferencesVideosPrivacyCommentsEnum = "anybody"
	CommentUserPreferencesVideosPrivacyCommentsEnumContacts CommentUserPreferencesVideosPrivacyCommentsEnum = "contacts"
	CommentUserPreferencesVideosPrivacyCommentsEnumNobody   CommentUserPreferencesVideosPrivacyCommentsEnum = "nobody"
)

type CommentUserPreferencesVideosPrivacyEmbedEnum string

const (
	CommentUserPreferencesVideosPrivacyEmbedEnumPrivate   CommentUserPreferencesVideosPrivacyEmbedEnum = "private"
	CommentUserPreferencesVideosPrivacyEmbedEnumPublic    CommentUserPreferencesVideosPrivacyEmbedEnum = "public"
	CommentUserPreferencesVideosPrivacyEmbedEnumWhitelist CommentUserPreferencesVideosPrivacyEmbedEnum = "whitelist"
)

type CommentUserPreferencesVideosPrivacyViewEnum string

const (
	CommentUserPreferencesVideosPrivacyViewEnumAnybody  CommentUserPreferencesVideosPrivacyViewEnum = "anybody"
	CommentUserPreferencesVideosPrivacyViewEnumContacts CommentUserPreferencesVideosPrivacyViewEnum = "contacts"
	CommentUserPreferencesVideosPrivacyViewEnumDisable  CommentUserPreferencesVideosPrivacyViewEnum = "disable"
	CommentUserPreferencesVideosPrivacyViewEnumNobody   CommentUserPreferencesVideosPrivacyViewEnum = "nobody"
	CommentUserPreferencesVideosPrivacyViewEnumPassword CommentUserPreferencesVideosPrivacyViewEnum = "password"
	CommentUserPreferencesVideosPrivacyViewEnumUnlisted CommentUserPreferencesVideosPrivacyViewEnum = "unlisted"
	CommentUserPreferencesVideosPrivacyViewEnumUsers    CommentUserPreferencesVideosPrivacyViewEnum = "users"
)

type CommentUserPreferencesVideosPrivacy struct {
	Add      *bool                                            `json:"add,omitempty"`
	Comments *CommentUserPreferencesVideosPrivacyCommentsEnum `json:"comments,omitempty"`
	Download *bool                                            `json:"download,omitempty"`
	Embed    *CommentUserPreferencesVideosPrivacyEmbedEnum    `json:"embed,omitempty"`
	View     *CommentUserPreferencesVideosPrivacyViewEnum     `json:"view,omitempty"`
}

type CommentUserPreferencesVideos struct {
	Privacy *CommentUserPreferencesVideosPrivacy `json:"privacy,omitempty"`
}

type CommentUserPreferences struct {
	Videos *CommentUserPreferencesVideos `json:"videos,omitempty"`
}

// CommentUserUploadQuotaLifetime
// Information about the user's lifetime upload usage.
type CommentUserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

// CommentUserUploadQuotaPeriodic
// Information about the user's usage for the current period.
type CommentUserUploadQuotaPeriodic struct {
	Free      float64 `json:"free"`
	Max       float64 `json:"max"`
	ResetDate string  `json:"reset_date"`
	Used      float64 `json:"used"`
}

type CommentUserUploadQuotaSpaceShowingEnum string

const (
	CommentUserUploadQuotaSpaceShowingEnumLifetime CommentUserUploadQuotaSpaceShowingEnum = "lifetime"
	CommentUserUploadQuotaSpaceShowingEnumPeriodic CommentUserUploadQuotaSpaceShowingEnum = "periodic"
)

// CommentUserUploadQuotaSpace
// Information about the user's upload space remaining for the current period.
type CommentUserUploadQuotaSpace struct {
	Free    float64                                `json:"free"`
	Max     float64                                `json:"max"`
	Showing CommentUserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                                `json:"used"`
}

// CommentUserUploadQuota
// Appears only when the user has upload access and is looking at their own user record.
type CommentUserUploadQuota struct {
	Lifetime CommentUserUploadQuotaLifetime `json:"lifetime"`
	Periodic CommentUserUploadQuotaPeriodic `json:"periodic"`
	Space    CommentUserUploadQuotaSpace    `json:"space"`
}

type CommentUserWebsites struct {
	Description string `json:"description"`
	Link        string `json:"link"`
	Name        string `json:"name"`
}

// CommentUser
// The user who posted the comment.
type CommentUser struct {
	Account       CommentUserAccountEnum  `json:"account"`
	Bio           string                  `json:"bio"`
	ContentFilter []string                `json:"content_filter,omitempty"`
	CreatedTime   string                  `json:"created_time"`
	Email         *string                 `json:"email,omitempty"`
	Link          string                  `json:"link"`
	Location      string                  `json:"location"`
	Metadata      CommentUserMetadata     `json:"metadata"`
	Name          string                  `json:"name"`
	Pictures      Picture                 `json:"pictures"`
	Preferences   *CommentUserPreferences `json:"preferences,omitempty"`
	ResourceKey   string                  `json:"resource_key"`
	UploadQuota   CommentUserUploadQuota  `json:"upload_quota"`
	URI           string                  `json:"uri"`
	Websites      []CommentUserWebsites   `json:"websites"`
}

type Comment struct {
	CreatedOn   string          `json:"created_on"`
	Metadata    CommentMetadata `json:"metadata"`
	ResourceKey string          `json:"resource_key"`
	Text        string          `json:"text"`
	Type        CommentTypeEnum `json:"type"`
	URI         string          `json:"uri"`
	User        CommentUser     `json:"user"`
}
