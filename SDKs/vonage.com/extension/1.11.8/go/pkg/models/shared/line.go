package shared

type Line struct {
	HandsetName *string `json:"handset_name,omitempty"`
	SipID       *string `json:"sip_id,omitempty"`
}
