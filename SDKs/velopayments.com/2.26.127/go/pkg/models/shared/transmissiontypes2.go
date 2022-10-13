package shared

type TransmissionTypes2 struct {
	Ach        bool `json:"ACH"`
	SameDayAch bool `json:"SAME_DAY_ACH"`
	Wire       bool `json:"WIRE"`
}
