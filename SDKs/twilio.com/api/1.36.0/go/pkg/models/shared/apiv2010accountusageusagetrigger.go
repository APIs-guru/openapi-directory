package shared

type APIV2010AccountUsageUsageTriggerCallbackMethodEnum string

const (
	APIV2010AccountUsageUsageTriggerCallbackMethodEnumHead   APIV2010AccountUsageUsageTriggerCallbackMethodEnum = "HEAD"
	APIV2010AccountUsageUsageTriggerCallbackMethodEnumGet    APIV2010AccountUsageUsageTriggerCallbackMethodEnum = "GET"
	APIV2010AccountUsageUsageTriggerCallbackMethodEnumPost   APIV2010AccountUsageUsageTriggerCallbackMethodEnum = "POST"
	APIV2010AccountUsageUsageTriggerCallbackMethodEnumPatch  APIV2010AccountUsageUsageTriggerCallbackMethodEnum = "PATCH"
	APIV2010AccountUsageUsageTriggerCallbackMethodEnumPut    APIV2010AccountUsageUsageTriggerCallbackMethodEnum = "PUT"
	APIV2010AccountUsageUsageTriggerCallbackMethodEnumDelete APIV2010AccountUsageUsageTriggerCallbackMethodEnum = "DELETE"
)

type APIV2010AccountUsageUsageTrigger struct {
	AccountSid     *string                                             `json:"account_sid,omitempty"`
	APIVersion     *string                                             `json:"api_version,omitempty"`
	CallbackMethod *APIV2010AccountUsageUsageTriggerCallbackMethodEnum `json:"callback_method,omitempty"`
	CallbackURL    *string                                             `json:"callback_url,omitempty"`
	CurrentValue   *string                                             `json:"current_value,omitempty"`
	DateCreated    *string                                             `json:"date_created,omitempty"`
	DateFired      *string                                             `json:"date_fired,omitempty"`
	DateUpdated    *string                                             `json:"date_updated,omitempty"`
	FriendlyName   *string                                             `json:"friendly_name,omitempty"`
	Recurring      *UsageTriggerEnumRecurringEnum                      `json:"recurring,omitempty"`
	Sid            *string                                             `json:"sid,omitempty"`
	TriggerBy      *UsageTriggerEnumTriggerFieldEnum                   `json:"trigger_by,omitempty"`
	TriggerValue   *string                                             `json:"trigger_value,omitempty"`
	URI            *string                                             `json:"uri,omitempty"`
	UsageCategory  *UsageTriggerEnumUsageCategoryEnum                  `json:"usage_category,omitempty"`
	UsageRecordURI *string                                             `json:"usage_record_uri,omitempty"`
}
