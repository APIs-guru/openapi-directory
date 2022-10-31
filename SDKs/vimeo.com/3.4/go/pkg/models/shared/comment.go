package shared



type CommentMetadataConnectionsReplies struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
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
    CommentUserAccountEnumBasic CommentUserAccountEnum = "basic"
CommentUserAccountEnumBusiness CommentUserAccountEnum = "business"
CommentUserAccountEnumLiveBusiness CommentUserAccountEnum = "live_business"
CommentUserAccountEnumLivePremium CommentUserAccountEnum = "live_premium"
CommentUserAccountEnumLivePro CommentUserAccountEnum = "live_pro"
CommentUserAccountEnumPlus CommentUserAccountEnum = "plus"
CommentUserAccountEnumPro CommentUserAccountEnum = "pro"
CommentUserAccountEnumProUnlimited CommentUserAccountEnum = "pro_unlimited"
CommentUserAccountEnumProducer CommentUserAccountEnum = "producer"
)


type CommentUserMetadataConnectionsAlbums struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsAppearances struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsBlock struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsCategories struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsChannels struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsFeed struct {
    Options []string `json:"options"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsFolders struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsFollowers struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsFollowing struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsGroups struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsLikes struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsModeratedChannels struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsPictures struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsPortfolios struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsRecommendedChannels struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsRecommendedUsers struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsShared struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsVideos struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsWatchedVideos struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnectionsWatchlater struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataConnections struct {
    Albums CommentUserMetadataConnectionsAlbums `json:"albums"`
    Appearances CommentUserMetadataConnectionsAppearances `json:"appearances"`
    Block CommentUserMetadataConnectionsBlock `json:"block"`
    Categories CommentUserMetadataConnectionsCategories `json:"categories"`
    Channels CommentUserMetadataConnectionsChannels `json:"channels"`
    Feed CommentUserMetadataConnectionsFeed `json:"feed"`
    Folders CommentUserMetadataConnectionsFolders `json:"folders"`
    Followers CommentUserMetadataConnectionsFollowers `json:"followers"`
    Following CommentUserMetadataConnectionsFollowing `json:"following"`
    Groups CommentUserMetadataConnectionsGroups `json:"groups"`
    Likes CommentUserMetadataConnectionsLikes `json:"likes"`
    ModeratedChannels CommentUserMetadataConnectionsModeratedChannels `json:"moderated_channels"`
    Pictures CommentUserMetadataConnectionsPictures `json:"pictures"`
    Portfolios CommentUserMetadataConnectionsPortfolios `json:"portfolios"`
    RecommendedChannels CommentUserMetadataConnectionsRecommendedChannels `json:"recommended_channels"`
    RecommendedUsers CommentUserMetadataConnectionsRecommendedUsers `json:"recommended_users"`
    Shared CommentUserMetadataConnectionsShared `json:"shared"`
    Videos CommentUserMetadataConnectionsVideos `json:"videos"`
    WatchedVideos CommentUserMetadataConnectionsWatchedVideos `json:"watched_videos"`
    Watchlater CommentUserMetadataConnectionsWatchlater `json:"watchlater"`
    
}

type CommentUserMetadataInteractionsAddPrivacyUser struct {
    Options []string `json:"options,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type CommentUserMetadataInteractionsBlock struct {
    Added bool `json:"added"`
    AddedTime string `json:"added_time"`
    Options []string `json:"options"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataInteractionsFollow struct {
    Added bool `json:"added"`
    Options []string `json:"options"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataInteractionsReport struct {
    Options []string `json:"options"`
    Reason []string `json:"reason"`
    URI string `json:"uri"`
    
}

type CommentUserMetadataInteractions struct {
    AddPrivacyUser *CommentUserMetadataInteractionsAddPrivacyUser `json:"add_privacy_user,omitempty"`
    Block CommentUserMetadataInteractionsBlock `json:"block"`
    Follow CommentUserMetadataInteractionsFollow `json:"follow"`
    Report CommentUserMetadataInteractionsReport `json:"report"`
    
}

type CommentUserMetadata struct {
    Connections CommentUserMetadataConnections `json:"connections"`
    Interactions CommentUserMetadataInteractions `json:"interactions"`
    
}


type CommentUserPreferencesVideosPrivacyCommentsEnum string

const (
    CommentUserPreferencesVideosPrivacyCommentsEnumAnybody CommentUserPreferencesVideosPrivacyCommentsEnum = "anybody"
CommentUserPreferencesVideosPrivacyCommentsEnumContacts CommentUserPreferencesVideosPrivacyCommentsEnum = "contacts"
CommentUserPreferencesVideosPrivacyCommentsEnumNobody CommentUserPreferencesVideosPrivacyCommentsEnum = "nobody"
)



type CommentUserPreferencesVideosPrivacyEmbedEnum string

const (
    CommentUserPreferencesVideosPrivacyEmbedEnumPrivate CommentUserPreferencesVideosPrivacyEmbedEnum = "private"
CommentUserPreferencesVideosPrivacyEmbedEnumPublic CommentUserPreferencesVideosPrivacyEmbedEnum = "public"
CommentUserPreferencesVideosPrivacyEmbedEnumWhitelist CommentUserPreferencesVideosPrivacyEmbedEnum = "whitelist"
)



type CommentUserPreferencesVideosPrivacyViewEnum string

const (
    CommentUserPreferencesVideosPrivacyViewEnumAnybody CommentUserPreferencesVideosPrivacyViewEnum = "anybody"
CommentUserPreferencesVideosPrivacyViewEnumContacts CommentUserPreferencesVideosPrivacyViewEnum = "contacts"
CommentUserPreferencesVideosPrivacyViewEnumDisable CommentUserPreferencesVideosPrivacyViewEnum = "disable"
CommentUserPreferencesVideosPrivacyViewEnumNobody CommentUserPreferencesVideosPrivacyViewEnum = "nobody"
CommentUserPreferencesVideosPrivacyViewEnumPassword CommentUserPreferencesVideosPrivacyViewEnum = "password"
CommentUserPreferencesVideosPrivacyViewEnumUnlisted CommentUserPreferencesVideosPrivacyViewEnum = "unlisted"
CommentUserPreferencesVideosPrivacyViewEnumUsers CommentUserPreferencesVideosPrivacyViewEnum = "users"
)


type CommentUserPreferencesVideosPrivacy struct {
    Add *bool `json:"add,omitempty"`
    Comments *CommentUserPreferencesVideosPrivacyCommentsEnum `json:"comments,omitempty"`
    Download *bool `json:"download,omitempty"`
    Embed *CommentUserPreferencesVideosPrivacyEmbedEnum `json:"embed,omitempty"`
    View *CommentUserPreferencesVideosPrivacyViewEnum `json:"view,omitempty"`
    
}

type CommentUserPreferencesVideos struct {
    Privacy *CommentUserPreferencesVideosPrivacy `json:"privacy,omitempty"`
    
}

type CommentUserPreferences struct {
    Videos *CommentUserPreferencesVideos `json:"videos,omitempty"`
    
}

type CommentUserUploadQuotaLifetime struct {
    Free float64 `json:"free"`
    Max float64 `json:"max"`
    Used float64 `json:"used"`
    
}

type CommentUserUploadQuotaPeriodic struct {
    Free float64 `json:"free"`
    Max float64 `json:"max"`
    ResetDate string `json:"reset_date"`
    Used float64 `json:"used"`
    
}


type CommentUserUploadQuotaSpaceShowingEnum string

const (
    CommentUserUploadQuotaSpaceShowingEnumLifetime CommentUserUploadQuotaSpaceShowingEnum = "lifetime"
CommentUserUploadQuotaSpaceShowingEnumPeriodic CommentUserUploadQuotaSpaceShowingEnum = "periodic"
)


type CommentUserUploadQuotaSpace struct {
    Free float64 `json:"free"`
    Max float64 `json:"max"`
    Showing CommentUserUploadQuotaSpaceShowingEnum `json:"showing"`
    Used float64 `json:"used"`
    
}

type CommentUserUploadQuota struct {
    Lifetime CommentUserUploadQuotaLifetime `json:"lifetime"`
    Periodic CommentUserUploadQuotaPeriodic `json:"periodic"`
    Space CommentUserUploadQuotaSpace `json:"space"`
    
}

type CommentUserWebsites struct {
    Description string `json:"description"`
    Link string `json:"link"`
    Name string `json:"name"`
    
}

type CommentUser struct {
    Account CommentUserAccountEnum `json:"account"`
    Bio string `json:"bio"`
    ContentFilter []string `json:"content_filter,omitempty"`
    CreatedTime string `json:"created_time"`
    Email *string `json:"email,omitempty"`
    Link string `json:"link"`
    Location string `json:"location"`
    Metadata CommentUserMetadata `json:"metadata"`
    Name string `json:"name"`
    Pictures Picture `json:"pictures"`
    Preferences *CommentUserPreferences `json:"preferences,omitempty"`
    ResourceKey string `json:"resource_key"`
    UploadQuota CommentUserUploadQuota `json:"upload_quota"`
    URI string `json:"uri"`
    Websites []CommentUserWebsites `json:"websites"`
    
}

type Comment struct {
    CreatedOn string `json:"created_on"`
    Metadata CommentMetadata `json:"metadata"`
    ResourceKey string `json:"resource_key"`
    Text string `json:"text"`
    Type CommentTypeEnum `json:"type"`
    URI string `json:"uri"`
    User CommentUser `json:"user"`
    
}

