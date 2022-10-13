package shared

type BillingProperties struct {
	BillingType  *string `json:"billingType"`
	ChannelType  *string `json:"channelType"`
	PaymentType  *string `json:"paymentType"`
	Tier         *string `json:"tier"`
	WorkloadType *string `json:"workloadType"`
}
