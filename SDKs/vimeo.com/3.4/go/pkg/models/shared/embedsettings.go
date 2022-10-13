package shared

type EmbedSettingsButtons struct {
	Embed      bool `json:"embed"`
	Fullscreen bool `json:"fullscreen"`
	Hd         bool `json:"hd"`
	Like       bool `json:"like"`
	Scaling    bool `json:"scaling"`
	Share      bool `json:"share"`
	Watchlater bool `json:"watchlater"`
}

type EmbedSettingsLogosCustom struct {
	Active bool   `json:"active"`
	Link   string `json:"link"`
	Sticky bool   `json:"sticky"`
}

type EmbedSettingsLogos struct {
	Custom EmbedSettingsLogosCustom `json:"custom"`
	Vimeo  bool                     `json:"vimeo"`
}

type EmbedSettingsTitleNameEnum string

const (
	EmbedSettingsTitleNameEnumHide EmbedSettingsTitleNameEnum = "hide"
	EmbedSettingsTitleNameEnumShow EmbedSettingsTitleNameEnum = "show"
	EmbedSettingsTitleNameEnumUser EmbedSettingsTitleNameEnum = "user"
)

type EmbedSettingsTitleOwnerEnum string

const (
	EmbedSettingsTitleOwnerEnumHide EmbedSettingsTitleOwnerEnum = "hide"
	EmbedSettingsTitleOwnerEnumShow EmbedSettingsTitleOwnerEnum = "show"
	EmbedSettingsTitleOwnerEnumUser EmbedSettingsTitleOwnerEnum = "user"
)

type EmbedSettingsTitlePortraitEnum string

const (
	EmbedSettingsTitlePortraitEnumHide EmbedSettingsTitlePortraitEnum = "hide"
	EmbedSettingsTitlePortraitEnumShow EmbedSettingsTitlePortraitEnum = "show"
	EmbedSettingsTitlePortraitEnumUser EmbedSettingsTitlePortraitEnum = "user"
)

type EmbedSettingsTitle struct {
	Name     EmbedSettingsTitleNameEnum     `json:"name"`
	Owner    EmbedSettingsTitleOwnerEnum    `json:"owner"`
	Portrait EmbedSettingsTitlePortraitEnum `json:"portrait"`
}

type EmbedSettings struct {
	Buttons EmbedSettingsButtons `json:"buttons"`
	Color   string               `json:"color"`
	Logos   EmbedSettingsLogos   `json:"logos"`
	Playbar bool                 `json:"playbar"`
	Speed   bool                 `json:"speed"`
	Title   EmbedSettingsTitle   `json:"title"`
	URI     *string              `json:"uri"`
	Volume  bool                 `json:"volume"`
}
