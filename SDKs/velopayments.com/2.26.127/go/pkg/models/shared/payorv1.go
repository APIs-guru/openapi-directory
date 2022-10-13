package shared

type PayorV1LanguageEnum string

const (
	PayorV1LanguageEnumEn PayorV1LanguageEnum = "EN"
	PayorV1LanguageEnumFr PayorV1LanguageEnum = "FR"
)

type PayorV1 struct {
	Address                           *PayorAddress        `json:"address"`
	AllowsLanguageChoice              *bool                `json:"allowsLanguageChoice"`
	CollectiveAlias                   *string              `json:"collectiveAlias"`
	DbaName                           *string              `json:"dbaName"`
	FundingAccountAccountName         *string              `json:"fundingAccountAccountName"`
	FundingAccountAccountNumber       *string              `json:"fundingAccountAccountNumber"`
	FundingAccountRoutingNumber       *string              `json:"fundingAccountRoutingNumber"`
	IncludesReports                   *bool                `json:"includesReports"`
	KycState                          *KycStateEnum        `json:"kycState"`
	Language                          *PayorV1LanguageEnum `json:"language"`
	ManualLockout                     *bool                `json:"manualLockout"`
	MaxMasterPayorAdmins              *int64               `json:"maxMasterPayorAdmins"`
	PayeeGracePeriodDays              *int64               `json:"payeeGracePeriodDays"`
	PayeeGracePeriodProcessingEnabled *bool                `json:"payeeGracePeriodProcessingEnabled"`
	PayorID                           *string              `json:"payorId"`
	PayorName                         string               `json:"payorName"`
	PrimaryContactEmail               *string              `json:"primaryContactEmail"`
	PrimaryContactName                *string              `json:"primaryContactName"`
	PrimaryContactPhone               *string              `json:"primaryContactPhone"`
	ReminderEmailsOptOut              *bool                `json:"reminderEmailsOptOut"`
	SupportContact                    *string              `json:"supportContact"`
	TransmissionTypes                 *TransmissionTypes   `json:"transmissionTypes"`
}
