package shared

// ChannelMetadataConnectionsPrivacyUsers
// Information provided to channel moderators about which users they have specifically permitted to access a private channel. This data requires a bearer token with the `private` scope.
type ChannelMetadataConnectionsPrivacyUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// ChannelMetadataConnectionsUsers
// Information about the users following or moderating this channel.
type ChannelMetadataConnectionsUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// ChannelMetadataConnectionsVideos
// Information about the videos that belong to this channel.
type ChannelMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// ChannelMetadataConnections
// A collection of information that is connected to this resource.
type ChannelMetadataConnections struct {
	PrivacyUsers ChannelMetadataConnectionsPrivacyUsers `json:"privacy_users"`
	Users        ChannelMetadataConnectionsUsers        `json:"users"`
	Videos       ChannelMetadataConnectionsVideos       `json:"videos"`
}

// ChannelMetadataInteractionsAddModerators
// An action indicating that the authenticated user is the owner of the channel and may therefore add other users as channel moderators. This data requires a bearer token with the `private` scope.
type ChannelMetadataInteractionsAddModerators struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// ChannelMetadataInteractionsAddTo
// When a channel appears in the context of adding or removing a video from it (`/videos/{video_id}/available_channels`), include information about adding or removing the video. This data requires a bearer token with the `private` scope.
type ChannelMetadataInteractionsAddTo struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type ChannelMetadataInteractionsFollowTypeEnum string

const (
	ChannelMetadataInteractionsFollowTypeEnumModerator  ChannelMetadataInteractionsFollowTypeEnum = "moderator"
	ChannelMetadataInteractionsFollowTypeEnumSubscriber ChannelMetadataInteractionsFollowTypeEnum = "subscriber"
)

// ChannelMetadataInteractionsFollow
// An action indicating if the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
type ChannelMetadataInteractionsFollow struct {
	Added     bool                                      `json:"added"`
	AddedTime string                                    `json:"added_time"`
	Type      ChannelMetadataInteractionsFollowTypeEnum `json:"type"`
	URI       string                                    `json:"uri"`
}

// ChannelMetadataInteractionsModerateVideos
// An action indicating that the authenticated user is a moderator of the channel and may therefore add or remove videos from the channel. This data requires a bearer token with the `private` scope.
type ChannelMetadataInteractionsModerateVideos struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// ChannelMetadataInteractions
// A list of resource URIs related to the channel.
type ChannelMetadataInteractions struct {
	AddModerators  ChannelMetadataInteractionsAddModerators  `json:"add_moderators"`
	AddTo          ChannelMetadataInteractionsAddTo          `json:"add_to"`
	Follow         ChannelMetadataInteractionsFollow         `json:"follow"`
	ModerateVideos ChannelMetadataInteractionsModerateVideos `json:"moderate_videos"`
}

// ChannelMetadata
// Metadata about the channel.
type ChannelMetadata struct {
	Connections  ChannelMetadataConnections  `json:"connections"`
	Interactions ChannelMetadataInteractions `json:"interactions"`
}

type ChannelPrivacyViewEnum string

const (
	ChannelPrivacyViewEnumAnybody    ChannelPrivacyViewEnum = "anybody"
	ChannelPrivacyViewEnumModerators ChannelPrivacyViewEnum = "moderators"
	ChannelPrivacyViewEnumUsers      ChannelPrivacyViewEnum = "users"
)

// ChannelPrivacy
// The privacy settings of the channel.
type ChannelPrivacy struct {
	View ChannelPrivacyViewEnum `json:"view"`
}

type Channel struct {
	Categories   []Category      `json:"categories"`
	CreatedTime  string          `json:"created_time"`
	Description  string          `json:"description"`
	Header       Picture         `json:"header"`
	Link         string          `json:"link"`
	Metadata     ChannelMetadata `json:"metadata"`
	ModifiedTime string          `json:"modified_time"`
	Name         string          `json:"name"`
	Pictures     Picture         `json:"pictures"`
	Privacy      ChannelPrivacy  `json:"privacy"`
	ResourceKey  string          `json:"resource_key"`
	Tags         []Tag           `json:"tags"`
	URI          string          `json:"uri"`
	User         User            `json:"user"`
}
