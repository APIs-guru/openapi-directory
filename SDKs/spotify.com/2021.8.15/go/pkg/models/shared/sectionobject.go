package shared

type SectionObject struct {
	Confidence              *float64 `json:"confidence,omitempty"`
	Duration                *float64 `json:"duration,omitempty"`
	Key                     *int32   `json:"key,omitempty"`
	KeyConfidence           *float64 `json:"key_confidence,omitempty"`
	Loudness                *float64 `json:"loudness,omitempty"`
	Mode                    *int32   `json:"mode,omitempty"`
	ModeConfidence          *float64 `json:"mode_confidence,omitempty"`
	Start                   *float64 `json:"start,omitempty"`
	Tempo                   *float64 `json:"tempo,omitempty"`
	TempoConfidence         *float64 `json:"tempo_confidence,omitempty"`
	TimeSignature           *int32   `json:"time_signature,omitempty"`
	TimeSignatureConfidence *float64 `json:"time_signature_confidence,omitempty"`
}
