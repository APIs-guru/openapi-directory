package shared

type PresetsMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsMetadataConnections struct {
	Videos PresetsMetadataConnectionsVideos `json:"videos"`
}

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

type PresetsUserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PresetsUserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

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

type PresetsUserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

type PresetsUserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

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

type PresetsUserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

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

type PresetsUserUploadQuotaSpace struct {
	Free    float64                                `json:"free"`
	Max     float64                                `json:"max"`
	Showing PresetsUserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                                `json:"used"`
}

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

type PresetsUserUser struct {
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
	User     PresetsUserUser `json:"user"`
}
