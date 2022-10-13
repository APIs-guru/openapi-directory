package shared

type PagedPayeeInvitationStatusResponse struct {
	Content []PayeeInvitationStatusResponse `json:"content"`
	Links   []interface{}                   `json:"links"`
	Page    *interface{}                    `json:"page"`
}
