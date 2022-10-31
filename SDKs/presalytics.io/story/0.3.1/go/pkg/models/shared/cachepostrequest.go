package shared

type CachePostRequest struct {
	CurrentUserID *string `json:"current_user_id,omitempty"`
	Nonce         *string `json:"nonce,omitempty"`
	Subdocument   *string `json:"subdocument,omitempty"`
}
