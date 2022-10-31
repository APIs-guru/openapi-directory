package shared




type APIV2010AccountShortCodeSmsFallbackMethodEnum string

const (
    APIV2010AccountShortCodeSmsFallbackMethodEnumHead APIV2010AccountShortCodeSmsFallbackMethodEnum = "HEAD"
APIV2010AccountShortCodeSmsFallbackMethodEnumGet APIV2010AccountShortCodeSmsFallbackMethodEnum = "GET"
APIV2010AccountShortCodeSmsFallbackMethodEnumPost APIV2010AccountShortCodeSmsFallbackMethodEnum = "POST"
APIV2010AccountShortCodeSmsFallbackMethodEnumPatch APIV2010AccountShortCodeSmsFallbackMethodEnum = "PATCH"
APIV2010AccountShortCodeSmsFallbackMethodEnumPut APIV2010AccountShortCodeSmsFallbackMethodEnum = "PUT"
APIV2010AccountShortCodeSmsFallbackMethodEnumDelete APIV2010AccountShortCodeSmsFallbackMethodEnum = "DELETE"
)



type APIV2010AccountShortCodeSmsMethodEnum string

const (
    APIV2010AccountShortCodeSmsMethodEnumHead APIV2010AccountShortCodeSmsMethodEnum = "HEAD"
APIV2010AccountShortCodeSmsMethodEnumGet APIV2010AccountShortCodeSmsMethodEnum = "GET"
APIV2010AccountShortCodeSmsMethodEnumPost APIV2010AccountShortCodeSmsMethodEnum = "POST"
APIV2010AccountShortCodeSmsMethodEnumPatch APIV2010AccountShortCodeSmsMethodEnum = "PATCH"
APIV2010AccountShortCodeSmsMethodEnumPut APIV2010AccountShortCodeSmsMethodEnum = "PUT"
APIV2010AccountShortCodeSmsMethodEnumDelete APIV2010AccountShortCodeSmsMethodEnum = "DELETE"
)


type APIV2010AccountShortCode struct {
    AccountSid *string `json:"account_sid,omitempty"`
    APIVersion *string `json:"api_version,omitempty"`
    DateCreated *string `json:"date_created,omitempty"`
    DateUpdated *string `json:"date_updated,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    ShortCode *string `json:"short_code,omitempty"`
    Sid *string `json:"sid,omitempty"`
    SmsFallbackMethod *APIV2010AccountShortCodeSmsFallbackMethodEnum `json:"sms_fallback_method,omitempty"`
    SmsFallbackURL *string `json:"sms_fallback_url,omitempty"`
    SmsMethod *APIV2010AccountShortCodeSmsMethodEnum `json:"sms_method,omitempty"`
    SmsURL *string `json:"sms_url,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

