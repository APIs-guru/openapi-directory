package shared



type AlbumPictureSizes struct {
    Height float64 `json:"height"`
    Link string `json:"link"`
    LinkWithPlayButton *string `json:"link_with_play_button,omitempty"`
    Width float64 `json:"width"`
    
}


type AlbumPictureTypeEnum string

const (
    AlbumPictureTypeEnumCaution AlbumPictureTypeEnum = "caution"
AlbumPictureTypeEnumCustom AlbumPictureTypeEnum = "custom"
AlbumPictureTypeEnumDefault AlbumPictureTypeEnum = "default"
)


type AlbumPicture struct {
    Active bool `json:"active"`
    Link *string `json:"link,omitempty"`
    ResourceKey string `json:"resource_key"`
    Sizes []AlbumPictureSizes `json:"sizes"`
    Type AlbumPictureTypeEnum `json:"type"`
    URI string `json:"uri"`
    
}

type AlbumEmbed struct {
    HTML string `json:"html"`
    
}


type AlbumLayoutEnum string

const (
    AlbumLayoutEnumGrid AlbumLayoutEnum = "grid"
AlbumLayoutEnumPlayer AlbumLayoutEnum = "player"
)


type AlbumMetadataConnectionsVideos struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type AlbumMetadataConnections struct {
    Videos AlbumMetadataConnectionsVideos `json:"videos"`
    
}

type AlbumMetadataInteractionsAddCustomThumbnails struct {
    Options []string `json:"options"`
    URI string `json:"uri"`
    
}

type AlbumMetadataInteractionsAddLogos struct {
    Options []string `json:"options"`
    URI string `json:"uri"`
    
}

type AlbumMetadataInteractionsAddVideos struct {
    Options []string `json:"options"`
    URI string `json:"uri"`
    
}

type AlbumMetadataInteractions struct {
    AddCustomThumbnails AlbumMetadataInteractionsAddCustomThumbnails `json:"add_custom_thumbnails"`
    AddLogos AlbumMetadataInteractionsAddLogos `json:"add_logos"`
    AddVideos AlbumMetadataInteractionsAddVideos `json:"add_videos"`
    
}

type AlbumMetadata struct {
    Connections AlbumMetadataConnections `json:"connections"`
    Interactions AlbumMetadataInteractions `json:"interactions"`
    
}


type AlbumPrivacyViewEnum string

const (
    AlbumPrivacyViewEnumAnybody AlbumPrivacyViewEnum = "anybody"
AlbumPrivacyViewEnumEmbedOnly AlbumPrivacyViewEnum = "embed_only"
AlbumPrivacyViewEnumPassword AlbumPrivacyViewEnum = "password"
)


type AlbumPrivacy struct {
    Password *string `json:"password,omitempty"`
    View AlbumPrivacyViewEnum `json:"view"`
    
}


type AlbumSortEnum string

const (
    AlbumSortEnumAddedFirst AlbumSortEnum = "added_first"
AlbumSortEnumAddedLast AlbumSortEnum = "added_last"
AlbumSortEnumAlphabetical AlbumSortEnum = "alphabetical"
AlbumSortEnumArranged AlbumSortEnum = "arranged"
AlbumSortEnumComments AlbumSortEnum = "comments"
AlbumSortEnumLikes AlbumSortEnum = "likes"
AlbumSortEnumNewest AlbumSortEnum = "newest"
AlbumSortEnumOldest AlbumSortEnum = "oldest"
AlbumSortEnumPlays AlbumSortEnum = "plays"
)



type AlbumThemeEnum string

const (
    AlbumThemeEnumDark AlbumThemeEnum = "dark"
AlbumThemeEnumStandard AlbumThemeEnum = "standard"
)


type Album struct {
    AllowContinuousPlay bool `json:"allow_continuous_play"`
    AllowDownloads bool `json:"allow_downloads"`
    AllowShare bool `json:"allow_share"`
    BrandColor string `json:"brand_color"`
    CreatedTime string `json:"created_time"`
    CustomLogo AlbumPicture `json:"custom_logo"`
    Description string `json:"description"`
    Domain string `json:"domain"`
    Duration float64 `json:"duration"`
    Embed AlbumEmbed `json:"embed"`
    EmbedBrandColor bool `json:"embed_brand_color"`
    EmbedCustomLogo bool `json:"embed_custom_logo"`
    HideNav bool `json:"hide_nav"`
    HideVimeoLogo bool `json:"hide_vimeo_logo"`
    Layout AlbumLayoutEnum `json:"layout"`
    Link string `json:"link"`
    Metadata AlbumMetadata `json:"metadata"`
    ModifiedTime string `json:"modified_time"`
    Name string `json:"name"`
    Pictures Picture `json:"pictures"`
    Privacy AlbumPrivacy `json:"privacy"`
    ResourceKey string `json:"resource_key"`
    ReviewMode bool `json:"review_mode"`
    Sort AlbumSortEnum `json:"sort"`
    Theme AlbumThemeEnum `json:"theme"`
    URI string `json:"uri"`
    URL string `json:"url"`
    UseCustomDomain bool `json:"use_custom_domain"`
    User User `json:"user"`
    WebBrandColor bool `json:"web_brand_color"`
    WebCustomLogo bool `json:"web_custom_logo"`
    
}

