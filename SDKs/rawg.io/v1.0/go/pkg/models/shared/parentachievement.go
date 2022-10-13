package shared

type ParentAchievement struct {
	Description *string `json:"description"`
	ID          *int64  `json:"id"`
	Image       *string `json:"image"`
	Name        *string `json:"name"`
	Percent     *string `json:"percent"`
}
