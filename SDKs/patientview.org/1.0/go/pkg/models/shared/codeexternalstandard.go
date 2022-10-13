package shared

type CodeExternalStandard struct {
	CodeString       *string           `json:"codeString"`
	ExternalStandard *ExternalStandard `json:"externalStandard"`
	ID               *int64            `json:"id"`
}
