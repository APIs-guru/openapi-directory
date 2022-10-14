package shared

type APIV2010AccountSipSipIPAccessControlListSipIPAddress struct {
	AccountSid             *string `json:"account_sid,omitempty"`
	CidrPrefixLength       *int64  `json:"cidr_prefix_length,omitempty"`
	DateCreated            *string `json:"date_created,omitempty"`
	DateUpdated            *string `json:"date_updated,omitempty"`
	FriendlyName           *string `json:"friendly_name,omitempty"`
	IPAccessControlListSid *string `json:"ip_access_control_list_sid,omitempty"`
	IPAddress              *string `json:"ip_address,omitempty"`
	Sid                    *string `json:"sid,omitempty"`
	URI                    *string `json:"uri,omitempty"`
}
