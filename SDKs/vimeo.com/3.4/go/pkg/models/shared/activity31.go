package shared



type Activity31MetadataConnectionsRelated struct {
    Options []string `json:"options"`
    URI string `json:"uri"`
    
}

type Activity31MetadataConnections struct {
    Related Activity31MetadataConnectionsRelated `json:"related"`
    
}

type Activity31Metadata struct {
    Connections Activity31MetadataConnections `json:"connections"`
    
}


type Activity31TypeEnum string

const (
    Activity31TypeEnumAppearance Activity31TypeEnum = "appearance"
Activity31TypeEnumCategory Activity31TypeEnum = "category"
Activity31TypeEnumChannel Activity31TypeEnum = "channel"
Activity31TypeEnumFacebookFeed Activity31TypeEnum = "facebook_feed"
Activity31TypeEnumGroup Activity31TypeEnum = "group"
Activity31TypeEnumLike Activity31TypeEnum = "like"
Activity31TypeEnumOndemand Activity31TypeEnum = "ondemand"
Activity31TypeEnumShare Activity31TypeEnum = "share"
Activity31TypeEnumTag Activity31TypeEnum = "tag"
Activity31TypeEnumTwitterTimeline Activity31TypeEnum = "twitter_timeline"
Activity31TypeEnumUpload Activity31TypeEnum = "upload"
)


type Activity31 struct {
    Category *Category `json:"category,omitempty"`
    Channel *Channel `json:"channel,omitempty"`
    Clip Video `json:"clip"`
    Group *Group `json:"group,omitempty"`
    Metadata Activity31Metadata `json:"metadata"`
    Tag *Tag `json:"tag,omitempty"`
    Time string `json:"time"`
    Type Activity31TypeEnum `json:"type"`
    User *User `json:"user,omitempty"`
    
}

