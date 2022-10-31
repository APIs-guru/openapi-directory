package shared



type MemberItem struct {
    Links []Link `json:"links,omitempty"`
    Value *Member `json:"value,omitempty"`
    
}

