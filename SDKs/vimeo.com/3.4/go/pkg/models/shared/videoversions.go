package shared

type VideoVersionsMetadataConnectionsVideo struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsMetadataConnections struct {
	Video VideoVersionsMetadataConnectionsVideo `json:"video"`
}

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

type VideoVersionsUserMetadataConnectionsAlbums struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsAppearances struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsBlock struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsCategories struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsFeed struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsFolders struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsFollowers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsFollowing struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsLikes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsModeratedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsPictures struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsPortfolios struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsRecommendedChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsRecommendedUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsShared struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsWatchedVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type VideoVersionsUserMetadataConnectionsWatchlater struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

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

type VideoVersionsUserMetadataInteractionsBlock struct {
	Added     bool     `json:"added"`
	AddedTime string   `json:"added_time"`
	Options   []string `json:"options"`
	URI       string   `json:"uri"`
}

type VideoVersionsUserMetadataInteractionsFollow struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

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

type VideoVersionsUserUploadQuotaLifetime struct {
	Free float64 `json:"free"`
	Max  float64 `json:"max"`
	Used float64 `json:"used"`
}

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

type VideoVersionsUserUploadQuotaSpace struct {
	Free    float64                                      `json:"free"`
	Max     float64                                      `json:"max"`
	Showing VideoVersionsUserUploadQuotaSpaceShowingEnum `json:"showing"`
	Used    float64                                      `json:"used"`
}

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
