package shared

type UpdateContinuousCheckInputStatusEnum string

const (
	UpdateContinuousCheckInputStatusEnumEnabled  UpdateContinuousCheckInputStatusEnum = "enabled"
	UpdateContinuousCheckInputStatusEnumDisabled UpdateContinuousCheckInputStatusEnum = "disabled"
)

type UpdateContinuousCheckInput struct {
	Frequency string                               `form:"name=frequency"`
	Status    UpdateContinuousCheckInputStatusEnum `form:"name=status"`
}
