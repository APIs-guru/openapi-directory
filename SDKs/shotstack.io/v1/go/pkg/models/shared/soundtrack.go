package shared

type SoundtrackEffectEnum string

const (
	SoundtrackEffectEnumFadeIn        SoundtrackEffectEnum = "fadeIn"
	SoundtrackEffectEnumFadeOut       SoundtrackEffectEnum = "fadeOut"
	SoundtrackEffectEnumFadeInFadeOut SoundtrackEffectEnum = "fadeInFadeOut"
)

type Soundtrack struct {
	Effect *SoundtrackEffectEnum `json:"effect"`
	Src    string                `json:"src"`
	Volume *float64              `json:"volume"`
}
