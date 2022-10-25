package shared

type GroupMetadataConnectionsUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupMetadataConnections struct {
	Users  GroupMetadataConnectionsUsers  `json:"users"`
	Videos GroupMetadataConnectionsVideos `json:"videos"`
}

type GroupMetadataInteractionsJoinTypeEnum string

const (
	GroupMetadataInteractionsJoinTypeEnumMember    GroupMetadataInteractionsJoinTypeEnum = "member"
	GroupMetadataInteractionsJoinTypeEnumModerator GroupMetadataInteractionsJoinTypeEnum = "moderator"
)

type GroupMetadataInteractionsJoin struct {
	Added     bool                                  `json:"added"`
	AddedTime string                                `json:"added_time"`
	Title     string                                `json:"title"`
	Type      GroupMetadataInteractionsJoinTypeEnum `json:"type"`
	URI       string                                `json:"uri"`
}

type GroupMetadataInteractions struct {
	Join GroupMetadataInteractionsJoin `json:"join"`
}

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

type GroupUserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type GroupUserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

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

type GroupUserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

type GroupUserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

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

type GroupUserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

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

type GroupUserUploadQuotaSpace struct {
	Free    float64                              `json:"free"`
	Max     float64                              `json:"max"`
	Showing GroupUserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                              `json:"used"`
}

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
