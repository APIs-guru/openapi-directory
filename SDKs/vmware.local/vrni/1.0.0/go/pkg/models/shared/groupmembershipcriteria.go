package shared

type GroupMembershipCriteriaMembershipTypeEnum string

const (
	GroupMembershipCriteriaMembershipTypeEnumSearchMembershipCriteria    GroupMembershipCriteriaMembershipTypeEnum = "SearchMembershipCriteria"
	GroupMembershipCriteriaMembershipTypeEnumIPAddressMembershipCriteria GroupMembershipCriteriaMembershipTypeEnum = "IPAddressMembershipCriteria"
)

// GroupMembershipCriteria
// EntityType currently restricted to VirtualMachine
type GroupMembershipCriteria struct {
	IPAddressMembershipCriteria *IPAddressMembershipCriteria               `json:"ip_address_membership_criteria,omitempty"`
	MembershipType              *GroupMembershipCriteriaMembershipTypeEnum `json:"membership_type,omitempty"`
	SearchMembershipCriteria    *SearchMembershipCriteria                  `json:"search_membership_criteria,omitempty"`
}
