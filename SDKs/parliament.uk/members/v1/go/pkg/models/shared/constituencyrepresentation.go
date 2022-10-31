package shared



type ConstituencyRepresentation struct {
    Member *MemberItem `json:"member,omitempty"`
    Representation *HouseMembership `json:"representation,omitempty"`
    
}

