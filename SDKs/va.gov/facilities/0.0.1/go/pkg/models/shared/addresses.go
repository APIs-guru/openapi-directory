package shared

type Addresses struct {
	Mailing  *Address `json:"mailing,omitempty"`
	Physical *Address `json:"physical,omitempty"`
}
