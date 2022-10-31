package shared

type BillingProperties struct {
	BillingType  *string `json:"billingType,omitempty"`
	ChannelType  *string `json:"channelType,omitempty"`
	PaymentType  *string `json:"paymentType,omitempty"`
	Tier         *string `json:"tier,omitempty"`
	WorkloadType *string `json:"workloadType,omitempty"`
}
