package shared

type PagedPayeeInvitationStatusResponse2 struct {
	Content []PayeeInvitationStatusResponse2 `json:"content,omitempty"`
	Links   []interface{}                    `json:"links,omitempty"`
	Page    *interface{}                     `json:"page,omitempty"`
}
