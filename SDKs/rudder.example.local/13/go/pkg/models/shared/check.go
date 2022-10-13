package shared

type CheckStatusEnum string

const (
	CheckStatusEnumCritical CheckStatusEnum = "Critical"
	CheckStatusEnumWarning  CheckStatusEnum = "Warning"
	CheckStatusEnumOk       CheckStatusEnum = "Ok"
)

type Check struct {
	Msg    string          `json:"msg"`
	Name   string          `json:"name"`
	Status CheckStatusEnum `json:"status"`
}
