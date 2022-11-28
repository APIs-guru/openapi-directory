package shared

// GroupMetadataConnectionsUsers
// Information about the members or moderators of this group.
type GroupMetadataConnectionsUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupMetadataConnectionsVideos
// Information about the videos contained within this group.
type GroupMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupMetadataConnections
// A collection of information that is connected to this resource.
type GroupMetadataConnections struct {
	Users  GroupMetadataConnectionsUsers  `json:"users"`
	Videos GroupMetadataConnectionsVideos `json:"videos"`
}

type GroupMetadataInteractionsJoinTypeEnum string

const (
	GroupMetadataInteractionsJoinTypeEnumMember    GroupMetadataInteractionsJoinTypeEnum = "member"
	GroupMetadataInteractionsJoinTypeEnumModerator GroupMetadataInteractionsJoinTypeEnum = "moderator"
)

// GroupMetadataInteractionsJoin
// An action indicating that someone has joined the group. This data requires a bearer token with the `private` scope.
type GroupMetadataInteractionsJoin struct {
	Added     bool                                  `json:"added"`
	AddedTime string                                `json:"added_time"`
	Title     string                                `json:"title"`
	Type      GroupMetadataInteractionsJoinTypeEnum `json:"type"`
	URI       string                                `json:"uri"`
}

// GroupMetadataInteractions
// User actions that have involved the group. This data requires a bearer token with the `private` scope.
type GroupMetadataInteractions struct {
	Join GroupMetadataInteractionsJoin `json:"join"`
}

// GroupMetadata
// Metadata about the group.
type GroupMetadata struct {
	Connections  GroupMetadataConnections  `json:"connections"`
	Interactions GroupMetadataInteractions `json:"interactions"`
}

type GroupPrivacyCommentEnum string

const (
	GroupPrivacyCommentEnumAll     GroupPrivacyCommentEnum = "all"
	GroupPrivacyCommentEnumMembers GroupPrivacyCommentEnum = "members"
)

type GroupPrivacyInviteEnum string

const (
	GroupPrivacyInviteEnumAll     GroupPrivacyInviteEnum = "all"
	GroupPrivacyInviteEnumMembers GroupPrivacyInviteEnum = "members"
)

type GroupPrivacyJoinEnum string

const (
	GroupPrivacyJoinEnumAnybody GroupPrivacyJoinEnum = "anybody"
	GroupPrivacyJoinEnumMembers GroupPrivacyJoinEnum = "members"
)

type GroupPrivacyVideosEnum string

const (
	GroupPrivacyVideosEnumAll     GroupPrivacyVideosEnum = "all"
	GroupPrivacyVideosEnumMembers GroupPrivacyVideosEnum = "members"
)

type GroupPrivacyViewEnum string

const (
	GroupPrivacyViewEnumAnybody GroupPrivacyViewEnum = "anybody"
	GroupPrivacyViewEnumMembers GroupPrivacyViewEnum = "members"
)

// GroupPrivacy
// The group's privacy settings.
type GroupPrivacy struct {
	Comment GroupPrivacyCommentEnum `json:"comment"`
	Invite  GroupPrivacyInviteEnum  `json:"invite"`
	Join    GroupPrivacyJoinEnum    `json:"join"`
	Videos  GroupPrivacyVideosEnum  `json:"videos"`
	View    GroupPrivacyViewEnum    `json:"view"`
}

type GroupUserAccountEnum string

const (
	GroupUserAccountEnumBasic        GroupUserAccountEnum = "basic"
	GroupUserAccountEnumBusiness     GroupUserAccountEnum = "business"
	GroupUserAccountEnumLiveBusiness GroupUserAccountEnum = "live_business"
	GroupUserAccountEnumLivePremium  GroupUserAccountEnum = "live_premium"
	GroupUserAccountEnumLivePro      GroupUserAccountEnum = "live_pro"
	GroupUserAccountEnumPlus         GroupUserAccountEnum = "plus"
	GroupUserAccountEnumPro          GroupUserAccountEnum = "pro"
	GroupUserAccountEnumProUnlimited GroupUserAccountEnum = "pro_unlimited"
	GroupUserAccountEnumProducer     GroupUserAccountEnum = "producer"
)

// GroupUserMetadataConnectionsAlbums
// Information about the albums created by this user.
type GroupUserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsAppearances
// Information about the appearances of this user in other videos.
type GroupUserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsBlock
// Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
type GroupUserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsCategories
// Information about this user's followed categories.
type GroupUserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsChannels
// Information about this user's subscribed channels.
type GroupUserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsFeed
// Information about this user's feed.
type GroupUserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsFolders
// Information about this user's folders.
type GroupUserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsFollowers
// Information about the user's followers.
type GroupUserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsFollowing
// Information about the users that the current user is following.
type GroupUserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsGroups
// Information about the groups created by this user.
type GroupUserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsLikes
// Information about the videos that this user has liked.
type GroupUserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsModeratedChannels
// Information about the channels that this user moderates.
type GroupUserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsPictures
// Information about this user's portraits.
type GroupUserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsPortfolios
// Information about this user's portfolios.
type GroupUserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsRecommendedChannels
// A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
type GroupUserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsRecommendedUsers
// A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
type GroupUserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsShared
// Information about the videos that have been shared with this user.
type GroupUserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsVideos
// Information about the videos uploaded by this user.
type GroupUserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsWatchedVideos
// Information about the videos that this user has watched.
type GroupUserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnectionsWatchlater
// Information about the videos that this user wants to watch later.
type GroupUserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataConnections
// The list of resource URIs related to the user.
type GroupUserMetadataConnections struct {
	Albums              GroupUserMetadataConnectionsAlbums              `json:"albums"`
	Appearances         GroupUserMetadataConnectionsAppearances         `json:"appearances"`
	Block               GroupUserMetadataConnectionsBlock               `json:"block"`
	Categories          GroupUserMetadataConnectionsCategories          `json:"categories"`
	Channels            GroupUserMetadataConnectionsChannels            `json:"channels"`
	Feed                GroupUserMetadataConnectionsFeed                `json:"feed"`
	Folders             GroupUserMetadataConnectionsFolders             `json:"folders"`
	Followers           GroupUserMetadataConnectionsFollowers           `json:"followers"`
	Following           GroupUserMetadataConnectionsFollowing           `json:"following"`
	Groups              GroupUserMetadataConnectionsGroups              `json:"groups"`
	Likes               GroupUserMetadataConnectionsLikes               `json:"likes"`
	ModeratedChannels   GroupUserMetadataConnectionsModeratedChannels   `json:"moderated_channels"`
	Pictures            GroupUserMetadataConnectionsPictures            `json:"pictures"`
	Portfolios          GroupUserMetadataConnectionsPortfolios          `json:"portfolios"`
	RecommendedChannels GroupUserMetadataConnectionsRecommendedChannels `json:"recommended_channels"`
	RecommendedUsers    GroupUserMetadataConnectionsRecommendedUsers    `json:"recommended_users"`
	Shared              GroupUserMetadataConnectionsShared              `json:"shared"`
	Videos              GroupUserMetadataConnectionsVideos              `json:"videos"`
	WatchedVideos       GroupUserMetadataConnectionsWatchedVideos       `json:"watched_videos"`
	Watchlater          GroupUserMetadataConnectionsWatchlater          `json:"watchlater"`
}

type GroupUserMetadataInteractionsAddPrivacyUser struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

// GroupUserMetadataInteractionsBlock
// Information related to the block status of this user.
type GroupUserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

// GroupUserMetadataInteractionsFollow
// Information related to the followed status of this user.
type GroupUserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// GroupUserMetadataInteractionsReport
// Information regarding where and how to report a user.
type GroupUserMetadataInteractionsReport struct {
	Options []string `json:"options"`
	Reason  []string `json:"reason"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataInteractions struct {
	AddPrivacyUser *GroupUserMetadataInteractionsAddPrivacyUser `json:"add_privacy_user,omitempty"`
	Block          GroupUserMetadataInteractionsBlock           `json:"block"`
	Follow         GroupUserMetadataInteractionsFollow          `json:"follow"`
	Report         GroupUserMetadataInteractionsReport          `json:"report"`
}

// GroupUserMetadata
// The user's metadata.
type GroupUserMetadata struct {
	Connections  GroupUserMetadataConnections  `json:"connections"`
	Interactions GroupUserMetadataInteractions `json:"interactions"`
}

type GroupUserPreferencesVideosPrivacyCommentsEnum string

const (
	GroupUserPreferencesVideosPrivacyCommentsEnumAnybody  GroupUserPreferencesVideosPrivacyCommentsEnum = "anybody"
	GroupUserPreferencesVideosPrivacyCommentsEnumContacts GroupUserPreferencesVideosPrivacyCommentsEnum = "contacts"
	GroupUserPreferencesVideosPrivacyCommentsEnumNobody   GroupUserPreferencesVideosPrivacyCommentsEnum = "nobody"
)

type GroupUserPreferencesVideosPrivacyEmbedEnum string

const (
	GroupUserPreferencesVideosPrivacyEmbedEnumPrivate   GroupUserPreferencesVideosPrivacyEmbedEnum = "private"
	GroupUserPreferencesVideosPrivacyEmbedEnumPublic    GroupUserPreferencesVideosPrivacyEmbedEnum = "public"
	GroupUserPreferencesVideosPrivacyEmbedEnumWhitelist GroupUserPreferencesVideosPrivacyEmbedEnum = "whitelist"
)

type GroupUserPreferencesVideosPrivacyViewEnum string

const (
	GroupUserPreferencesVideosPrivacyViewEnumAnybody  GroupUserPreferencesVideosPrivacyViewEnum = "anybody"
	GroupUserPreferencesVideosPrivacyViewEnumContacts GroupUserPreferencesVideosPrivacyViewEnum = "contacts"
	GroupUserPreferencesVideosPrivacyViewEnumDisable  GroupUserPreferencesVideosPrivacyViewEnum = "disable"
	GroupUserPreferencesVideosPrivacyViewEnumNobody   GroupUserPreferencesVideosPrivacyViewEnum = "nobody"
	GroupUserPreferencesVideosPrivacyViewEnumPassword GroupUserPreferencesVideosPrivacyViewEnum = "password"
	GroupUserPreferencesVideosPrivacyViewEnumUnlisted GroupUserPreferencesVideosPrivacyViewEnum = "unlisted"
	GroupUserPreferencesVideosPrivacyViewEnumUsers    GroupUserPreferencesVideosPrivacyViewEnum = "users"
)

type GroupUserPreferencesVideosPrivacy struct {
	Add      *bool                                          `json:"add,omitempty"`
	Comments *GroupUserPreferencesVideosPrivacyCommentsEnum `json:"comments,omitempty"`
	Download *bool                                          `json:"download,omitempty"`
	Embed    *GroupUserPreferencesVideosPrivacyEmbedEnum    `json:"embed,omitempty"`
	View     *GroupUserPreferencesVideosPrivacyViewEnum     `json:"view,omitempty"`
}

type GroupUserPreferencesVideos struct {
	Privacy *GroupUserPreferencesVideosPrivacy `json:"privacy,omitempty"`
}

type GroupUserPreferences struct {
	Videos *GroupUserPreferencesVideos `json:"videos,omitempty"`
}

// GroupUserUploadQuotaLifetime
// Information about the user's lifetime upload usage.
type GroupUserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

// GroupUserUploadQuotaPeriodic
// Information about the user's usage for the current period.
type GroupUserUploadQuotaPeriodic struct {
	Free      float64 `json:"free"`
	Max       float64 `json:"max"`
	ResetDate string  `json:"reset_date"`
	Used      float64 `json:"used"`
}

type GroupUserUploadQuotaSpaceShowingEnum string

const (
	GroupUserUploadQuotaSpaceShowingEnumLifetime GroupUserUploadQuotaSpaceShowingEnum = "lifetime"
	GroupUserUploadQuotaSpaceShowingEnumPeriodic GroupUserUploadQuotaSpaceShowingEnum = "periodic"
)

// GroupUserUploadQuotaSpace
// Information about the user's upload space remaining for the current period.
type GroupUserUploadQuotaSpace struct {
	Free    float64                              `json:"free"`
	Max     float64                              `json:"max"`
	Showing GroupUserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                              `json:"used"`
}

// GroupUserUploadQuota
// Appears only when the user has upload access and is looking at their own user record.
type GroupUserUploadQuota struct {
	Lifetime GroupUserUploadQuotaLifetime `json:"lifetime"`
	Periodic GroupUserUploadQuotaPeriodic `json:"periodic"`
	Space    GroupUserUploadQuotaSpace    `json:"space"`
}

type GroupUserWebsites struct {
	Description string `json:"description"`
	Link        string `json:"link"`
	Name        string `json:"name"`
}

// GroupUser
// The owner of the group.
type GroupUser struct {
	Account       GroupUserAccountEnum  `json:"account"`
	Bio           string                `json:"bio"`
	ContentFilter []string              `json:"content_filter,omitempty"`
	CreatedTime   string                `json:"created_time"`
	Email         *string               `json:"email,omitempty"`
	Link          string                `json:"link"`
	Location      string                `json:"location"`
	Metadata      GroupUserMetadata     `json:"metadata"`
	Name          string                `json:"name"`
	Pictures      Picture               `json:"pictures"`
	Preferences   *GroupUserPreferences `json:"preferences,omitempty"`
	ResourceKey   string                `json:"resource_key"`
	UploadQuota   GroupUserUploadQuota  `json:"upload_quota"`
	URI           string                `json:"uri"`
	Websites      []GroupUserWebsites   `json:"websites"`
}

type Group struct {
	CreatedTime  string        `json:"created_time"`
	Description  string        `json:"description"`
	Link         string        `json:"link"`
	Metadata     GroupMetadata `json:"metadata"`
	ModifiedTime string        `json:"modified_time"`
	Name         string        `json:"name"`
	Pictures     Picture       `json:"pictures"`
	Privacy      GroupPrivacy  `json:"privacy"`
	ResourceKey  string        `json:"resource_key"`
	URI          string        `json:"uri"`
	User         *GroupUser    `json:"user,omitempty"`
}
