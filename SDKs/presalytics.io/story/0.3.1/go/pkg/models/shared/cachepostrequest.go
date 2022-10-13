package shared

type CachePostRequest struct {
	CurrentUserID *string `json:"current_user_id"`
	Nonce         *string `json:"nonce"`
	Subdocument   *string `json:"subdocument"`
}
