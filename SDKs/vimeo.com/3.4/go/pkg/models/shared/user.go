package shared




type UserAccountEnum string

const (
    UserAccountEnumBasic UserAccountEnum = "basic"
UserAccountEnumBusiness UserAccountEnum = "business"
UserAccountEnumLiveBusiness UserAccountEnum = "live_business"
UserAccountEnumLivePremium UserAccountEnum = "live_premium"
UserAccountEnumLivePro UserAccountEnum = "live_pro"
UserAccountEnumPlus UserAccountEnum = "plus"
UserAccountEnumPro UserAccountEnum = "pro"
UserAccountEnumProUnlimited UserAccountEnum = "pro_unlimited"
UserAccountEnumProducer UserAccountEnum = "producer"
)


type UserMetadataConnectionsAlbums struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsAppearances struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsBlock struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsCategories struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsChannels struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsFeed struct {
    Options []string `json:"options"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsFolders struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsFollowers struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsFollowing struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsGroups struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsLikes struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsModeratedChannels struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsPictures struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsPortfolios struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsRecommendedChannels struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsRecommendedUsers struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsShared struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsVideos struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsWatchedVideos struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnectionsWatchlater struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type UserMetadataConnections struct {
    Albums UserMetadataConnectionsAlbums `json:"albums"`
    Appearances UserMetadataConnectionsAppearances `json:"appearances"`
    Block UserMetadataConnectionsBlock `json:"block"`
    Categories UserMetadataConnectionsCategories `json:"categories"`
    Channels UserMetadataConnectionsChannels `json:"channels"`
    Feed UserMetadataConnectionsFeed `json:"feed"`
    Folders UserMetadataConnectionsFolders `json:"folders"`
    Followers UserMetadataConnectionsFollowers `json:"followers"`
    Following UserMetadataConnectionsFollowing `json:"following"`
    Groups UserMetadataConnectionsGroups `json:"groups"`
    Likes UserMetadataConnectionsLikes `json:"likes"`
    ModeratedChannels UserMetadataConnectionsModeratedChannels `json:"moderated_channels"`
    Pictures UserMetadataConnectionsPictures `json:"pictures"`
    Portfolios UserMetadataConnectionsPortfolios `json:"portfolios"`
    RecommendedChannels UserMetadataConnectionsRecommendedChannels `json:"recommended_channels"`
    RecommendedUsers UserMetadataConnectionsRecommendedUsers `json:"recommended_users"`
    Shared UserMetadataConnectionsShared `json:"shared"`
    Videos UserMetadataConnectionsVideos `json:"videos"`
    WatchedVideos UserMetadataConnectionsWatchedVideos `json:"watched_videos"`
    Watchlater UserMetadataConnectionsWatchlater `json:"watchlater"`
    
}

type UserMetadataInteractionsAddPrivacyUser struct {
    Options []string `json:"options,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type UserMetadataInteractionsBlock struct {
    Added bool `json:"added"`
    AddedTime string `json:"added_time"`
    Options []string `json:"options"`
    URI string `json:"uri"`
    
}

type UserMetadataInteractionsFollow struct {
    Added bool `json:"added"`
    Options []string `json:"options"`
    URI string `json:"uri"`
    
}

type UserMetadataInteractionsReport struct {
    Options []string `json:"options"`
    Reason []string `json:"reason"`
    URI string `json:"uri"`
    
}

type UserMetadataInteractions struct {
    AddPrivacyUser *UserMetadataInteractionsAddPrivacyUser `json:"add_privacy_user,omitempty"`
    Block UserMetadataInteractionsBlock `json:"block"`
    Follow UserMetadataInteractionsFollow `json:"follow"`
    Report UserMetadataInteractionsReport `json:"report"`
    
}

type UserMetadata struct {
    Connections UserMetadataConnections `json:"connections"`
    Interactions UserMetadataInteractions `json:"interactions"`
    
}


type UserPreferencesVideosPrivacyCommentsEnum string

const (
    UserPreferencesVideosPrivacyCommentsEnumAnybody UserPreferencesVideosPrivacyCommentsEnum = "anybody"
UserPreferencesVideosPrivacyCommentsEnumContacts UserPreferencesVideosPrivacyCommentsEnum = "contacts"
UserPreferencesVideosPrivacyCommentsEnumNobody UserPreferencesVideosPrivacyCommentsEnum = "nobody"
)



type UserPreferencesVideosPrivacyEmbedEnum string

const (
    UserPreferencesVideosPrivacyEmbedEnumPrivate UserPreferencesVideosPrivacyEmbedEnum = "private"
UserPreferencesVideosPrivacyEmbedEnumPublic UserPreferencesVideosPrivacyEmbedEnum = "public"
UserPreferencesVideosPrivacyEmbedEnumWhitelist UserPreferencesVideosPrivacyEmbedEnum = "whitelist"
)



type UserPreferencesVideosPrivacyViewEnum string

const (
    UserPreferencesVideosPrivacyViewEnumAnybody UserPreferencesVideosPrivacyViewEnum = "anybody"
UserPreferencesVideosPrivacyViewEnumContacts UserPreferencesVideosPrivacyViewEnum = "contacts"
UserPreferencesVideosPrivacyViewEnumDisable UserPreferencesVideosPrivacyViewEnum = "disable"
UserPreferencesVideosPrivacyViewEnumNobody UserPreferencesVideosPrivacyViewEnum = "nobody"
UserPreferencesVideosPrivacyViewEnumPassword UserPreferencesVideosPrivacyViewEnum = "password"
UserPreferencesVideosPrivacyViewEnumUnlisted UserPreferencesVideosPrivacyViewEnum = "unlisted"
UserPreferencesVideosPrivacyViewEnumUsers UserPreferencesVideosPrivacyViewEnum = "users"
)


type UserPreferencesVideosPrivacy struct {
    Add *bool `json:"add,omitempty"`
    Comments *UserPreferencesVideosPrivacyCommentsEnum `json:"comments,omitempty"`
    Download *bool `json:"download,omitempty"`
    Embed *UserPreferencesVideosPrivacyEmbedEnum `json:"embed,omitempty"`
    View *UserPreferencesVideosPrivacyViewEnum `json:"view,omitempty"`
    
}

type UserPreferencesVideos struct {
    Privacy *UserPreferencesVideosPrivacy `json:"privacy,omitempty"`
    
}

type UserPreferences struct {
    Videos *UserPreferencesVideos `json:"videos,omitempty"`
    
}

type UserUploadQuotaLifetime struct {
    Free float64 `json:"free"`
    Max float64 `json:"max"`
    Used float64 `json:"used"`
    
}

type UserUploadQuotaPeriodic struct {
    Free float64 `json:"free"`
    Max float64 `json:"max"`
    ResetDate string `json:"reset_date"`
    Used float64 `json:"used"`
    
}


type UserUploadQuotaSpaceShowingEnum string

const (
    UserUploadQuotaSpaceShowingEnumLifetime UserUploadQuotaSpaceShowingEnum = "lifetime"
UserUploadQuotaSpaceShowingEnumPeriodic UserUploadQuotaSpaceShowingEnum = "periodic"
)


type UserUploadQuotaSpace struct {
    Free float64 `json:"free"`
    Max float64 `json:"max"`
    Showing UserUploadQuotaSpaceShowingEnum `json:"showing"`
    Used float64 `json:"used"`
    
}

type UserUploadQuota struct {
    Lifetime UserUploadQuotaLifetime `json:"lifetime"`
    Periodic UserUploadQuotaPeriodic `json:"periodic"`
    Space UserUploadQuotaSpace `json:"space"`
    
}

type UserWebsites struct {
    Description string `json:"description"`
    Link string `json:"link"`
    Name string `json:"name"`
    
}

type User struct {
    Account UserAccountEnum `json:"account"`
    Bio string `json:"bio"`
    ContentFilter []string `json:"content_filter,omitempty"`
    CreatedTime string `json:"created_time"`
    Email *string `json:"email,omitempty"`
    Link string `json:"link"`
    Location string `json:"location"`
    Metadata UserMetadata `json:"metadata"`
    Name string `json:"name"`
    Pictures Picture `json:"pictures"`
    Preferences *UserPreferences `json:"preferences,omitempty"`
    ResourceKey string `json:"resource_key"`
    UploadQuota UserUploadQuota `json:"upload_quota"`
    URI string `json:"uri"`
    Websites []UserWebsites `json:"websites"`
    
}

