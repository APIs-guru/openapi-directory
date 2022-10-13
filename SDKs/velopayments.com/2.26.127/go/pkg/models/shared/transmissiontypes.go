package shared

type TransmissionTypes struct {
	Ach        bool `json:"ACH"`
	SameDayAch bool `json:"SAME_DAY_ACH"`
	Wire       bool `json:"WIRE"`
}
