package shared




type Snmp3ConfigAuthenticationTypeEnum string

const (
    Snmp3ConfigAuthenticationTypeEnumNoAuth Snmp3ConfigAuthenticationTypeEnum = "NO_AUTH"
Snmp3ConfigAuthenticationTypeEnumMd5 Snmp3ConfigAuthenticationTypeEnum = "MD5"
Snmp3ConfigAuthenticationTypeEnumSha Snmp3ConfigAuthenticationTypeEnum = "SHA"
)



type Snmp3ConfigPrivacyTypeEnum string

const (
    Snmp3ConfigPrivacyTypeEnumAes Snmp3ConfigPrivacyTypeEnum = "AES"
Snmp3ConfigPrivacyTypeEnumDes Snmp3ConfigPrivacyTypeEnum = "DES"
Snmp3ConfigPrivacyTypeEnumAes128 Snmp3ConfigPrivacyTypeEnum = "AES128"
Snmp3ConfigPrivacyTypeEnumAes192 Snmp3ConfigPrivacyTypeEnum = "AES192"
Snmp3ConfigPrivacyTypeEnumAes256 Snmp3ConfigPrivacyTypeEnum = "AES256"
Snmp3ConfigPrivacyTypeEnumThreeDes Snmp3ConfigPrivacyTypeEnum = "3DES"
Snmp3ConfigPrivacyTypeEnumNoPriv Snmp3ConfigPrivacyTypeEnum = "NO_PRIV"
)


type Snmp3Config struct {
    AuthenticationPassword *string `json:"authentication_password,omitempty"`
    AuthenticationType *Snmp3ConfigAuthenticationTypeEnum `json:"authentication_type,omitempty"`
    ContextName *string `json:"context_name,omitempty"`
    PrivacyPassword *string `json:"privacy_password,omitempty"`
    PrivacyType *Snmp3ConfigPrivacyTypeEnum `json:"privacy_type,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

