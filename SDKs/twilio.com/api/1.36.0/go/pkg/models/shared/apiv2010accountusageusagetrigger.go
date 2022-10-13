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
	AccountSid     *string                                             `json:"account_sid"`
	APIVersion     *string                                             `json:"api_version"`
	CallbackMethod *APIV2010AccountUsageUsageTriggerCallbackMethodEnum `json:"callback_method"`
	CallbackURL    *string                                             `json:"callback_url"`
	CurrentValue   *string                                             `json:"current_value"`
	DateCreated    *string                                             `json:"date_created"`
	DateFired      *string                                             `json:"date_fired"`
	DateUpdated    *string                                             `json:"date_updated"`
	FriendlyName   *string                                             `json:"friendly_name"`
	Recurring      *UsageTriggerEnumRecurringEnum                      `json:"recurring"`
	Sid            *string                                             `json:"sid"`
	TriggerBy      *UsageTriggerEnumTriggerFieldEnum                   `json:"trigger_by"`
	TriggerValue   *string                                             `json:"trigger_value"`
	URI            *string                                             `json:"uri"`
	UsageCategory  *UsageTriggerEnumUsageCategoryEnum                  `json:"usage_category"`
	UsageRecordURI *string                                             `json:"usage_record_uri"`
}
