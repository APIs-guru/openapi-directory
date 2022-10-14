package shared

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

type OnDemandSeasonUserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type OnDemandSeasonUserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

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

type OnDemandSeasonUserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

type OnDemandSeasonUserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

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

type OnDemandSeasonUserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

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

type OnDemandSeasonUserUploadQuotaSpace struct {
	Free    float64                                       `json:"free"`
	Max     float64                                       `json:"max"`
	Showing OnDemandSeasonUserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                                       `json:"used"`
}

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

type OnDemandSeasonUserUser struct {
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
	User        OnDemandSeasonUserUser `json:"user"`
}
