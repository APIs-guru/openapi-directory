package shared

type PagedPayeeInvitationStatusResponse2 struct {
	Content []PayeeInvitationStatusResponse2 `json:"content"`
	Links   []interface{}                    `json:"links"`
	Page    *interface{}                     `json:"page"`
}
