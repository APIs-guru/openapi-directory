package shared

type VeteranStatusConfirmationVeteranStatusEnum string

const (
	VeteranStatusConfirmationVeteranStatusEnumConfirmed    VeteranStatusConfirmationVeteranStatusEnum = "confirmed"
	VeteranStatusConfirmationVeteranStatusEnumNotConfirmed VeteranStatusConfirmationVeteranStatusEnum = "not confirmed"
)

// VeteranStatusConfirmation
// Veteran status confirmation for an individual
type VeteranStatusConfirmation struct {
	VeteranStatus *VeteranStatusConfirmationVeteranStatusEnum `json:"veteran_status,omitempty"`
}
