package shared



type PagedPayeeInvitationStatusResponse struct {
    Content []PayeeInvitationStatusResponse `json:"content,omitempty"`
    Links []interface{} `json:"links,omitempty"`
    Page *interface{} `json:"page,omitempty"`
    
}

