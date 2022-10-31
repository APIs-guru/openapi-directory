package shared



type MembersStaff struct {
    Member *Member `json:"member,omitempty"`
    Staff []Staff `json:"staff,omitempty"`
    
}

