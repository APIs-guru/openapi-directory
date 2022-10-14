package shared

type ReportRecipientTypeEnum string

const (
	ReportRecipientTypeEnumEmail ReportRecipientTypeEnum = "Email"
	ReportRecipientTypeEnumSlack ReportRecipientTypeEnum = "Slack"
)

type ReportRecipient struct {
	RecipientConfigJSON *ReportRecipientConfigJSON `json:"recipient_config_json,omitempty"`
	Type                ReportRecipientTypeEnum    `json:"type"`
}
