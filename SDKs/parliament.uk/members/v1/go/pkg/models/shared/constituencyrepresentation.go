package shared

type ConstituencyRepresentation struct {
	Member         *MemberItem      `json:"member"`
	Representation *HouseMembership `json:"representation"`
}
