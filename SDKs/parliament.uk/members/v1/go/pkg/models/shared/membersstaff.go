package shared

type MembersStaff struct {
	Member *Member `json:"member"`
	Staff  []Staff `json:"staff"`
}
