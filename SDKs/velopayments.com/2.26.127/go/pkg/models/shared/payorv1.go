package shared

type PayorV1LanguageEnum string

const (
	PayorV1LanguageEnumEn PayorV1LanguageEnum = "EN"
	PayorV1LanguageEnumFr PayorV1LanguageEnum = "FR"
)

type PayorV1 struct {
	Address                           *PayorAddress        `json:"address,omitempty"`
	AllowsLanguageChoice              *bool                `json:"allowsLanguageChoice,omitempty"`
	CollectiveAlias                   *string              `json:"collectiveAlias,omitempty"`
	DbaName                           *string              `json:"dbaName,omitempty"`
	FundingAccountAccountName         *string              `json:"fundingAccountAccountName,omitempty"`
	FundingAccountAccountNumber       *string              `json:"fundingAccountAccountNumber,omitempty"`
	FundingAccountRoutingNumber       *string              `json:"fundingAccountRoutingNumber,omitempty"`
	IncludesReports                   *bool                `json:"includesReports,omitempty"`
	KycState                          *KycStateEnum        `json:"kycState,omitempty"`
	Language                          *PayorV1LanguageEnum `json:"language,omitempty"`
	ManualLockout                     *bool                `json:"manualLockout,omitempty"`
	MaxMasterPayorAdmins              *int64               `json:"maxMasterPayorAdmins,omitempty"`
	PayeeGracePeriodDays              *int64               `json:"payeeGracePeriodDays,omitempty"`
	PayeeGracePeriodProcessingEnabled *bool                `json:"payeeGracePeriodProcessingEnabled,omitempty"`
	PayorID                           *string              `json:"payorId,omitempty"`
	PayorName                         string               `json:"payorName"`
	PrimaryContactEmail               *string              `json:"primaryContactEmail,omitempty"`
	PrimaryContactName                *string              `json:"primaryContactName,omitempty"`
	PrimaryContactPhone               *string              `json:"primaryContactPhone,omitempty"`
	ReminderEmailsOptOut              *bool                `json:"reminderEmailsOptOut,omitempty"`
	SupportContact                    *string              `json:"supportContact,omitempty"`
	TransmissionTypes                 *TransmissionTypes   `json:"transmissionTypes,omitempty"`
}
