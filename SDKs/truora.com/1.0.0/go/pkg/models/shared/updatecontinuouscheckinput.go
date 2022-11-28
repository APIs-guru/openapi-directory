package shared

type UpdateContinuousCheckInputStatusEnum string

const (
	UpdateContinuousCheckInputStatusEnumEnabled  UpdateContinuousCheckInputStatusEnum = "enabled"
	UpdateContinuousCheckInputStatusEnumDisabled UpdateContinuousCheckInputStatusEnum = "disabled"
)

// UpdateContinuousCheckInput
//
//	Represents to UpdateContinuousCheckInput
type UpdateContinuousCheckInput struct {
	Frequency string                               `form:"name=frequency"`
	Status    UpdateContinuousCheckInputStatusEnum `form:"name=status"`
}
