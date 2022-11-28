package shared

// PagedPayeeInvitationStatusResponse
// List Payees Invitation Status Object
type PagedPayeeInvitationStatusResponse struct {
	Content []PayeeInvitationStatusResponse `json:"content,omitempty"`
	Links   []interface{}                   `json:"links,omitempty"`
	Page    *interface{}                    `json:"page,omitempty"`
}
