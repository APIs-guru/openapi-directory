package shared

type Error struct {
	Code     *string   `json:"code"`
	Field    *string   `json:"field"`
	Message  *string   `json:"message"`
	Solution *Solution `json:"solution"`
}
