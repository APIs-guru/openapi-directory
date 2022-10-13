package shared

type FirewallActionEnum string

const (
	FirewallActionEnumAllow         FirewallActionEnum = "ALLOW"
	FirewallActionEnumAccept        FirewallActionEnum = "ACCEPT"
	FirewallActionEnumDeny          FirewallActionEnum = "DENY"
	FirewallActionEnumDrop          FirewallActionEnum = "DROP"
	FirewallActionEnumReject        FirewallActionEnum = "REJECT"
	FirewallActionEnumRedirect      FirewallActionEnum = "REDIRECT"
	FirewallActionEnumDoNotRedirect FirewallActionEnum = "DO_NOT_REDIRECT"
)
