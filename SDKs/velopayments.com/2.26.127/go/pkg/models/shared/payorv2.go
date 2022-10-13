package shared

type PayorV2LanguageEnum string

const (
	PayorV2LanguageEnumEn PayorV2LanguageEnum = "EN"
	PayorV2LanguageEnumFr PayorV2LanguageEnum = "FR"
)

type PayorV2 struct {
	Address                           *PayorAddressV2      `json:"address"`
	AllowsLanguageChoice              *bool                `json:"allowsLanguageChoice"`
	CollectiveAlias                   *string              `json:"collectiveAlias"`
	DbaName                           *string              `json:"dbaName"`
	IncludesReports                   *bool                `json:"includesReports"`
	KycState                          *KycStateEnum        `json:"kycState"`
	Language                          *PayorV2LanguageEnum `json:"language"`
	ManualLockout                     *bool                `json:"manualLockout"`
	MaxMasterPayorAdmins              *int64               `json:"maxMasterPayorAdmins"`
	PayeeGracePeriodDays              *int64               `json:"payeeGracePeriodDays"`
	PayeeGracePeriodProcessingEnabled *bool                `json:"payeeGracePeriodProcessingEnabled"`
	PaymentRails                      *PaymentRailsEnum    `json:"paymentRails"`
	PayorID                           string               `json:"payorId"`
	PayorName                         string               `json:"payorName"`
	PayorXid                          *string              `json:"payorXid"`
	PrimaryContactEmail               *string              `json:"primaryContactEmail"`
	PrimaryContactName                *string              `json:"primaryContactName"`
	PrimaryContactPhone               *string              `json:"primaryContactPhone"`
	ReminderEmailsOptOut              *bool                `json:"reminderEmailsOptOut"`
	RemoteSystemIds                   []string             `json:"remoteSystemIds"`
	SupportContact                    *string              `json:"supportContact"`
	TransmissionTypes                 *TransmissionTypes2  `json:"transmissionTypes"`
	WuCustomerID                      *string              `json:"wuCustomerId"`
}
