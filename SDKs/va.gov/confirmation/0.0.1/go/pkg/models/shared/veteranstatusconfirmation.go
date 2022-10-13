package shared

type VeteranStatusConfirmationVeteranStatusEnum string

const (
	VeteranStatusConfirmationVeteranStatusEnumConfirmed    VeteranStatusConfirmationVeteranStatusEnum = "confirmed"
	VeteranStatusConfirmationVeteranStatusEnumNotConfirmed VeteranStatusConfirmationVeteranStatusEnum = "not confirmed"
)

type VeteranStatusConfirmation struct {
	VeteranStatus *VeteranStatusConfirmationVeteranStatusEnum `json:"veteran_status"`
}
