package shared




type PayorV2LanguageEnum string

const (
    PayorV2LanguageEnumEn PayorV2LanguageEnum = "EN"
PayorV2LanguageEnumFr PayorV2LanguageEnum = "FR"
)


type PayorV2 struct {
    Address *PayorAddressV2 `json:"address,omitempty"`
    AllowsLanguageChoice *bool `json:"allowsLanguageChoice,omitempty"`
    CollectiveAlias *string `json:"collectiveAlias,omitempty"`
    DbaName *string `json:"dbaName,omitempty"`
    IncludesReports *bool `json:"includesReports,omitempty"`
    KycState *KycStateEnum `json:"kycState,omitempty"`
    Language *PayorV2LanguageEnum `json:"language,omitempty"`
    ManualLockout *bool `json:"manualLockout,omitempty"`
    MaxMasterPayorAdmins *int64 `json:"maxMasterPayorAdmins,omitempty"`
    PayeeGracePeriodDays *int64 `json:"payeeGracePeriodDays,omitempty"`
    PayeeGracePeriodProcessingEnabled *bool `json:"payeeGracePeriodProcessingEnabled,omitempty"`
    PaymentRails *PaymentRailsEnum `json:"paymentRails,omitempty"`
    PayorID string `json:"payorId"`
    PayorName string `json:"payorName"`
    PayorXid *string `json:"payorXid,omitempty"`
    PrimaryContactEmail *string `json:"primaryContactEmail,omitempty"`
    PrimaryContactName *string `json:"primaryContactName,omitempty"`
    PrimaryContactPhone *string `json:"primaryContactPhone,omitempty"`
    ReminderEmailsOptOut *bool `json:"reminderEmailsOptOut,omitempty"`
    RemoteSystemIds []string `json:"remoteSystemIds,omitempty"`
    SupportContact *string `json:"supportContact,omitempty"`
    TransmissionTypes *TransmissionTypes2 `json:"transmissionTypes,omitempty"`
    WuCustomerID *string `json:"wuCustomerId,omitempty"`
    
}

