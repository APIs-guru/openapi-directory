package shared

type SoundtrackEffectEnum string

const (
	SoundtrackEffectEnumFadeIn        SoundtrackEffectEnum = "fadeIn"
	SoundtrackEffectEnumFadeOut       SoundtrackEffectEnum = "fadeOut"
	SoundtrackEffectEnumFadeInFadeOut SoundtrackEffectEnum = "fadeInFadeOut"
)

// Soundtrack
// A music or audio file in mp3 format that plays for the duration of the rendered video or the length of the audio file, which ever is shortest.
type Soundtrack struct {
	Effect *SoundtrackEffectEnum `json:"effect,omitempty"`
	Src    string                `json:"src"`
	Volume *float64              `json:"volume,omitempty"`
}
