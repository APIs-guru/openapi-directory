package shared

type SectionObject struct {
	Confidence              *float64 `json:"confidence"`
	Duration                *float64 `json:"duration"`
	Key                     *int32   `json:"key"`
	KeyConfidence           *float64 `json:"key_confidence"`
	Loudness                *float64 `json:"loudness"`
	Mode                    *int32   `json:"mode"`
	ModeConfidence          *float64 `json:"mode_confidence"`
	Start                   *float64 `json:"start"`
	Tempo                   *float64 `json:"tempo"`
	TempoConfidence         *float64 `json:"tempo_confidence"`
	TimeSignature           *int32   `json:"time_signature"`
	TimeSignatureConfidence *float64 `json:"time_signature_confidence"`
}
