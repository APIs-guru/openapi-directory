package shared

type AudioAssetEffectEnum string

const (
	AudioAssetEffectEnumFadeIn        AudioAssetEffectEnum = "fadeIn"
	AudioAssetEffectEnumFadeOut       AudioAssetEffectEnum = "fadeOut"
	AudioAssetEffectEnumFadeInFadeOut AudioAssetEffectEnum = "fadeInFadeOut"
)

// AudioAsset
// The AudioAsset is used to add sound effects and audio at specific intervals on the timeline. The src must be a publicly accessible URL to an audio resource such  as an mp3 file.
type AudioAsset struct {
	Effect *AudioAssetEffectEnum `json:"effect,omitempty"`
	Src    string                `json:"src"`
	Trim   *float64              `json:"trim,omitempty"`
	Type   string                `json:"type"`
	Volume *float64              `json:"volume,omitempty"`
}
