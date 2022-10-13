package shared

type MediaTypeEnum string

const (
	MediaTypeEnumYoutube          MediaTypeEnum = "youtube"
	MediaTypeEnumCdphotothread    MediaTypeEnum = "cdphotothread"
	MediaTypeEnumImgur            MediaTypeEnum = "imgur"
	MediaTypeEnumFacebookProfile  MediaTypeEnum = "facebook-profile"
	MediaTypeEnumYoutubeChannel   MediaTypeEnum = "youtube-channel"
	MediaTypeEnumTwitterProfile   MediaTypeEnum = "twitter-profile"
	MediaTypeEnumGithubProfile    MediaTypeEnum = "github-profile"
	MediaTypeEnumInstagramProfile MediaTypeEnum = "instagram-profile"
	MediaTypeEnumPeriscopeProfile MediaTypeEnum = "periscope-profile"
	MediaTypeEnumGrabcad          MediaTypeEnum = "grabcad"
	MediaTypeEnumInstagramImage   MediaTypeEnum = "instagram-image"
	MediaTypeEnumExternalLink     MediaTypeEnum = "external-link"
	MediaTypeEnumAvatar           MediaTypeEnum = "avatar"
)

type Media struct {
	Details    map[string]interface{} `json:"details"`
	DirectURL  *string                `json:"direct_url"`
	ForeignKey string                 `json:"foreign_key"`
	Preferred  *bool                  `json:"preferred"`
	Type       MediaTypeEnum          `json:"type"`
	ViewURL    *string                `json:"view_url"`
}
