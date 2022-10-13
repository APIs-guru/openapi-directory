package shared

type APIV2010AccountSipSipIPAccessControlListSipIPAddress struct {
	AccountSid             *string `json:"account_sid"`
	CidrPrefixLength       *int64  `json:"cidr_prefix_length"`
	DateCreated            *string `json:"date_created"`
	DateUpdated            *string `json:"date_updated"`
	FriendlyName           *string `json:"friendly_name"`
	IPAccessControlListSid *string `json:"ip_access_control_list_sid"`
	IPAddress              *string `json:"ip_address"`
	Sid                    *string `json:"sid"`
	URI                    *string `json:"uri"`
}
