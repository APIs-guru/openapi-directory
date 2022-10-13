package shared

type GroupMembershipCriteriaMembershipTypeEnum string

const (
	GroupMembershipCriteriaMembershipTypeEnumSearchMembershipCriteria    GroupMembershipCriteriaMembershipTypeEnum = "SearchMembershipCriteria"
	GroupMembershipCriteriaMembershipTypeEnumIPAddressMembershipCriteria GroupMembershipCriteriaMembershipTypeEnum = "IPAddressMembershipCriteria"
)

type GroupMembershipCriteria struct {
	IPAddressMembershipCriteria *IPAddressMembershipCriteria               `json:"ip_address_membership_criteria"`
	MembershipType              *GroupMembershipCriteriaMembershipTypeEnum `json:"membership_type"`
	SearchMembershipCriteria    *SearchMembershipCriteria                  `json:"search_membership_criteria"`
}
