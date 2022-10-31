package shared



type ChannelMetadataConnectionsPrivacyUsers struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type ChannelMetadataConnectionsUsers struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type ChannelMetadataConnectionsVideos struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type ChannelMetadataConnections struct {
    PrivacyUsers ChannelMetadataConnectionsPrivacyUsers `json:"privacy_users"`
    Users ChannelMetadataConnectionsUsers `json:"users"`
    Videos ChannelMetadataConnectionsVideos `json:"videos"`
    
}

type ChannelMetadataInteractionsAddModerators struct {
    Options []string `json:"options"`
    URI string `json:"uri"`
    
}

type ChannelMetadataInteractionsAddTo struct {
    Options []string `json:"options"`
    URI string `json:"uri"`
    
}


type ChannelMetadataInteractionsFollowTypeEnum string

const (
    ChannelMetadataInteractionsFollowTypeEnumModerator ChannelMetadataInteractionsFollowTypeEnum = "moderator"
ChannelMetadataInteractionsFollowTypeEnumSubscriber ChannelMetadataInteractionsFollowTypeEnum = "subscriber"
)


type ChannelMetadataInteractionsFollow struct {
    Added bool `json:"added"`
    AddedTime string `json:"added_time"`
    Type ChannelMetadataInteractionsFollowTypeEnum `json:"type"`
    URI string `json:"uri"`
    
}

type ChannelMetadataInteractionsModerateVideos struct {
    Options []string `json:"options"`
    URI string `json:"uri"`
    
}

type ChannelMetadataInteractions struct {
    AddModerators ChannelMetadataInteractionsAddModerators `json:"add_moderators"`
    AddTo ChannelMetadataInteractionsAddTo `json:"add_to"`
    Follow ChannelMetadataInteractionsFollow `json:"follow"`
    ModerateVideos ChannelMetadataInteractionsModerateVideos `json:"moderate_videos"`
    
}

type ChannelMetadata struct {
    Connections ChannelMetadataConnections `json:"connections"`
    Interactions ChannelMetadataInteractions `json:"interactions"`
    
}


type ChannelPrivacyViewEnum string

const (
    ChannelPrivacyViewEnumAnybody ChannelPrivacyViewEnum = "anybody"
ChannelPrivacyViewEnumModerators ChannelPrivacyViewEnum = "moderators"
ChannelPrivacyViewEnumUsers ChannelPrivacyViewEnum = "users"
)


type ChannelPrivacy struct {
    View ChannelPrivacyViewEnum `json:"view"`
    
}

type Channel struct {
    Categories []Category `json:"categories"`
    CreatedTime string `json:"created_time"`
    Description string `json:"description"`
    Header Picture `json:"header"`
    Link string `json:"link"`
    Metadata ChannelMetadata `json:"metadata"`
    ModifiedTime string `json:"modified_time"`
    Name string `json:"name"`
    Pictures Picture `json:"pictures"`
    Privacy ChannelPrivacy `json:"privacy"`
    ResourceKey string `json:"resource_key"`
    Tags []Tag `json:"tags"`
    URI string `json:"uri"`
    User User `json:"user"`
    
}

