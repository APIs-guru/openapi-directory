package shared




type AudioAssetEffectEnum string

const (
    AudioAssetEffectEnumFadeIn AudioAssetEffectEnum = "fadeIn"
AudioAssetEffectEnumFadeOut AudioAssetEffectEnum = "fadeOut"
AudioAssetEffectEnumFadeInFadeOut AudioAssetEffectEnum = "fadeInFadeOut"
)


type AudioAsset struct {
    Effect *AudioAssetEffectEnum `json:"effect,omitempty"`
    Src string `json:"src"`
    Trim *float64 `json:"trim,omitempty"`
    Type string `json:"type"`
    Volume *float64 `json:"volume,omitempty"`
    
}

