package shared

// PresetsMetadataConnectionsVideos
// Information about the videos in this preset.
type PresetsMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsMetadataConnections
// A list of resource URIs related to the album.
type PresetsMetadataConnections struct {
	Videos PresetsMetadataConnectionsVideos `json:"videos"`
}

// PresetsMetadata
// Metadata about the album.
type PresetsMetadata struct {
	Connections PresetsMetadataConnections `json:"connections"`
}

type PresetsSettingsButtons struct {
	Embed      bool `json:"embed"`
	Hd         bool `json:"hd"`
	Like       bool `json:"like"`
	Share      bool `json:"share"`
	Vote       bool `json:"vote"`
	Watchlater bool `json:"watchlater"`
}

type PresetsSettingsLogos struct {
	Custom       bool `json:"custom"`
	StickyCustom bool `json:"sticky_custom"`
	Vimeo        bool `json:"vimeo"`
}

// PresetsSettingsOutroLink
// The outro link settings. Present only if the type is `link`.
type PresetsSettingsOutroLink struct {
	Name *string `json:"name,omitempty"`
	URL  *string `json:"url,omitempty"`
}

type PresetsSettingsOutroTypeEnum string

const (
	PresetsSettingsOutroTypeEnumLink           PresetsSettingsOutroTypeEnum = "link"
	PresetsSettingsOutroTypeEnumNoIdea         PresetsSettingsOutroTypeEnum = "no idea"
	PresetsSettingsOutroTypeEnumText           PresetsSettingsOutroTypeEnum = "text"
	PresetsSettingsOutroTypeEnumUploadedClips  PresetsSettingsOutroTypeEnum = "uploaded_clips"
	PresetsSettingsOutroTypeEnumUploadedVideos PresetsSettingsOutroTypeEnum = "uploaded_videos"
)

type PresetsSettingsOutro struct {
	Clips  *string                      `json:"clips,omitempty"`
	Link   *PresetsSettingsOutroLink    `json:"link,omitempty"`
	Text   *string                      `json:"text,omitempty"`
	Type   PresetsSettingsOutroTypeEnum `json:"type"`
	Videos *string                      `json:"videos,omitempty"`
}

// PresetsSettings
// The contents of the presets group.
type PresetsSettings struct {
	Buttons PresetsSettingsButtons `json:"buttons"`
	Logos   PresetsSettingsLogos   `json:"logos"`
	Outro   PresetsSettingsOutro   `json:"outro"`
}

type PresetsUserAccountEnum string

const (
	PresetsUserAccountEnumBasic        PresetsUserAccountEnum = "basic"
	PresetsUserAccountEnumBusiness     PresetsUserAccountEnum = "business"
	PresetsUserAccountEnumLiveBusiness PresetsUserAccountEnum = "live_business"
	PresetsUserAccountEnumLivePremium  PresetsUserAccountEnum = "live_premium"
	PresetsUserAccountEnumLivePro      PresetsUserAccountEnum = "live_pro"
	PresetsUserAccountEnumPlus         PresetsUserAccountEnum = "plus"
	PresetsUserAccountEnumPro          PresetsUserAccountEnum = "pro"
	PresetsUserAccountEnumProUnlimited PresetsUserAccountEnum = "pro_unlimited"
	PresetsUserAccountEnumProducer     PresetsUserAccountEnum = "producer"
)

// PresetsUserMetadataConnectionsAlbums
// Information about the albums created by this user.
type PresetsUserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsAppearances
// Information about the appearances of this user in other videos.
type PresetsUserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsBlock
// Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
type PresetsUserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsCategories
// Information about this user's followed categories.
type PresetsUserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsChannels
// Information about this user's subscribed channels.
type PresetsUserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsFeed
// Information about this user's feed.
type PresetsUserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsFolders
// Information about this user's folders.
type PresetsUserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsFollowers
// Information about the user's followers.
type PresetsUserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsFollowing
// Information about the users that the current user is following.
type PresetsUserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsGroups
// Information about the groups created by this user.
type PresetsUserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsLikes
// Information about the videos that this user has liked.
type PresetsUserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsModeratedChannels
// Information about the channels that this user moderates.
type PresetsUserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsPictures
// Information about this user's portraits.
type PresetsUserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsPortfolios
// Information about this user's portfolios.
type PresetsUserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsRecommendedChannels
// A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
type PresetsUserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsRecommendedUsers
// A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
type PresetsUserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsShared
// Information about the videos that have been shared with this user.
type PresetsUserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsVideos
// Information about the videos uploaded by this user.
type PresetsUserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsWatchedVideos
// Information about the videos that this user has watched.
type PresetsUserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnectionsWatchlater
// Information about the videos that this user wants to watch later.
type PresetsUserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataConnections
// The list of resource URIs related to the user.
type PresetsUserMetadataConnections struct {
	Albums              PresetsUserMetadataConnectionsAlbums              `json:"albums"`
	Appearances         PresetsUserMetadataConnectionsAppearances         `json:"appearances"`
	Block               PresetsUserMetadataConnectionsBlock               `json:"block"`
	Categories          PresetsUserMetadataConnectionsCategories          `json:"categories"`
	Channels            PresetsUserMetadataConnectionsChannels            `json:"channels"`
	Feed                PresetsUserMetadataConnectionsFeed                `json:"feed"`
	Folders             PresetsUserMetadataConnectionsFolders             `json:"folders"`
	Followers           PresetsUserMetadataConnectionsFollowers           `json:"followers"`
	Following           PresetsUserMetadataConnectionsFollowing           `json:"following"`
	Groups              PresetsUserMetadataConnectionsGroups              `json:"groups"`
	Likes               PresetsUserMetadataConnectionsLikes               `json:"likes"`
	ModeratedChannels   PresetsUserMetadataConnectionsModeratedChannels   `json:"moderated_channels"`
	Pictures            PresetsUserMetadataConnectionsPictures            `json:"pictures"`
	Portfolios          PresetsUserMetadataConnectionsPortfolios          `json:"portfolios"`
	RecommendedChannels PresetsUserMetadataConnectionsRecommendedChannels `json:"recommended_channels"`
	RecommendedUsers    PresetsUserMetadataConnectionsRecommendedUsers    `json:"recommended_users"`
	Shared              PresetsUserMetadataConnectionsShared              `json:"shared"`
	Videos              PresetsUserMetadataConnectionsVideos              `json:"videos"`
	WatchedVideos       PresetsUserMetadataConnectionsWatchedVideos       `json:"watched_videos"`
	Watchlater          PresetsUserMetadataConnectionsWatchlater          `json:"watchlater"`
}

type PresetsUserMetadataInteractionsAddPrivacyUser struct {
	Options []string `json:"options,omitempty"`
	URI     *string  `json:"uri,omitempty"`
}

// PresetsUserMetadataInteractionsBlock
// Information related to the block status of this user.
type PresetsUserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

// PresetsUserMetadataInteractionsFollow
// Information related to the followed status of this user.
type PresetsUserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// PresetsUserMetadataInteractionsReport
// Information regarding where and how to report a user.
type PresetsUserMetadataInteractionsReport struct {
	Options []string `json:"options"`
	Reason  []string `json:"reason"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataInteractions struct {
	AddPrivacyUser *PresetsUserMetadataInteractionsAddPrivacyUser `json:"add_privacy_user,omitempty"`
	Block          PresetsUserMetadataInteractionsBlock           `json:"block"`
	Follow         PresetsUserMetadataInteractionsFollow          `json:"follow"`
	Report         PresetsUserMetadataInteractionsReport          `json:"report"`
}

// PresetsUserMetadata
// The user's metadata.
type PresetsUserMetadata struct {
	Connections  PresetsUserMetadataConnections  `json:"connections"`
	Interactions PresetsUserMetadataInteractions `json:"interactions"`
}

type PresetsUserPreferencesVideosPrivacyCommentsEnum string

const (
	PresetsUserPreferencesVideosPrivacyCommentsEnumAnybody  PresetsUserPreferencesVideosPrivacyCommentsEnum = "anybody"
	PresetsUserPreferencesVideosPrivacyCommentsEnumContacts PresetsUserPreferencesVideosPrivacyCommentsEnum = "contacts"
	PresetsUserPreferencesVideosPrivacyCommentsEnumNobody   PresetsUserPreferencesVideosPrivacyCommentsEnum = "nobody"
)

type PresetsUserPreferencesVideosPrivacyEmbedEnum string

const (
	PresetsUserPreferencesVideosPrivacyEmbedEnumPrivate   PresetsUserPreferencesVideosPrivacyEmbedEnum = "private"
	PresetsUserPreferencesVideosPrivacyEmbedEnumPublic    PresetsUserPreferencesVideosPrivacyEmbedEnum = "public"
	PresetsUserPreferencesVideosPrivacyEmbedEnumWhitelist PresetsUserPreferencesVideosPrivacyEmbedEnum = "whitelist"
)

type PresetsUserPreferencesVideosPrivacyViewEnum string

const (
	PresetsUserPreferencesVideosPrivacyViewEnumAnybody  PresetsUserPreferencesVideosPrivacyViewEnum = "anybody"
	PresetsUserPreferencesVideosPrivacyViewEnumContacts PresetsUserPreferencesVideosPrivacyViewEnum = "contacts"
	PresetsUserPreferencesVideosPrivacyViewEnumDisable  PresetsUserPreferencesVideosPrivacyViewEnum = "disable"
	PresetsUserPreferencesVideosPrivacyViewEnumNobody   PresetsUserPreferencesVideosPrivacyViewEnum = "nobody"
	PresetsUserPreferencesVideosPrivacyViewEnumPassword PresetsUserPreferencesVideosPrivacyViewEnum = "password"
	PresetsUserPreferencesVideosPrivacyViewEnumUnlisted PresetsUserPreferencesVideosPrivacyViewEnum = "unlisted"
	PresetsUserPreferencesVideosPrivacyViewEnumUsers    PresetsUserPreferencesVideosPrivacyViewEnum = "users"
)

type PresetsUserPreferencesVideosPrivacy struct {
	Add      *bool                                            `json:"add,omitempty"`
	Comments *PresetsUserPreferencesVideosPrivacyCommentsEnum `json:"comments,omitempty"`
	Download *bool                                            `json:"download,omitempty"`
	Embed    *PresetsUserPreferencesVideosPrivacyEmbedEnum    `json:"embed,omitempty"`
	View     *PresetsUserPreferencesVideosPrivacyViewEnum     `json:"view,omitempty"`
}

type PresetsUserPreferencesVideos struct {
	Privacy *PresetsUserPreferencesVideosPrivacy `json:"privacy,omitempty"`
}

type PresetsUserPreferences struct {
	Videos *PresetsUserPreferencesVideos `json:"videos,omitempty"`
}

// PresetsUserUploadQuotaLifetime
// Information about the user's lifetime upload usage.
type PresetsUserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

// PresetsUserUploadQuotaPeriodic
// Information about the user's usage for the current period.
type PresetsUserUploadQuotaPeriodic struct {
	Free      float64 `json:"free"`
	Max       float64 `json:"max"`
	ResetDate string  `json:"reset_date"`
	Used      float64 `json:"used"`
}

type PresetsUserUploadQuotaSpaceShowingEnum string

const (
	PresetsUserUploadQuotaSpaceShowingEnumLifetime PresetsUserUploadQuotaSpaceShowingEnum = "lifetime"
	PresetsUserUploadQuotaSpaceShowingEnumPeriodic PresetsUserUploadQuotaSpaceShowingEnum = "periodic"
)

// PresetsUserUploadQuotaSpace
// Information about the user's upload space remaining for the current period.
type PresetsUserUploadQuotaSpace struct {
	Free    float64                                `json:"free"`
	Max     float64                                `json:"max"`
	Showing PresetsUserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                                `json:"used"`
}

// PresetsUserUploadQuota
// Appears only when the user has upload access and is looking at their own user record.
type PresetsUserUploadQuota struct {
	Lifetime PresetsUserUploadQuotaLifetime `json:"lifetime"`
	Periodic PresetsUserUploadQuotaPeriodic `json:"periodic"`
	Space    PresetsUserUploadQuotaSpace    `json:"space"`
}

type PresetsUserWebsites struct {
	Description string `json:"description"`
	Link        string `json:"link"`
	Name        string `json:"name"`
}

// PresetsUser
// The owner of the preset.
type PresetsUser struct {
	Account       PresetsUserAccountEnum  `json:"account"`
	Bio           string                  `json:"bio"`
	ContentFilter []string                `json:"content_filter,omitempty"`
	CreatedTime   string                  `json:"created_time"`
	Email         *string                 `json:"email,omitempty"`
	Link          string                  `json:"link"`
	Location      string                  `json:"location"`
	Metadata      PresetsUserMetadata     `json:"metadata"`
	Name          string                  `json:"name"`
	Pictures      Picture                 `json:"pictures"`
	Preferences   *PresetsUserPreferences `json:"preferences,omitempty"`
	ResourceKey   string                  `json:"resource_key"`
	UploadQuota   PresetsUserUploadQuota  `json:"upload_quota"`
	URI           string                  `json:"uri"`
	Websites      []PresetsUserWebsites   `json:"websites"`
}

type Presets struct {
	Metadata PresetsMetadata `json:"metadata"`
	Name     string          `json:"name"`
	Settings PresetsSettings `json:"settings"`
	URI      string          `json:"uri"`
	User     PresetsUser     `json:"user"`
}
