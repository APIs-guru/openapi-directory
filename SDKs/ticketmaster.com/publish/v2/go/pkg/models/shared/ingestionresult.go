package shared

type IngestionResultStatusEnum string

const (
	IngestionResultStatusEnumError          IngestionResultStatusEnum = "Error"
	IngestionResultStatusEnumSuccessWarning IngestionResultStatusEnum = "SuccessWarning"
	IngestionResultStatusEnumSuccess        IngestionResultStatusEnum = "Success"
)

// IngestionResult
// This class defines the IngestionResult on the Publish API
type IngestionResult struct {
	ID                *string
	IgnoredProperties map[string]map[string]interface{}
	InvalidProperties map[string]map[string]interface{}
	InvalidValues     map[string]map[string]interface{}
	MissingProperties map[string]map[string]interface{}
	Status            IngestionResultStatusEnum
	UnknownProperties map[string]map[string]interface{}
}
