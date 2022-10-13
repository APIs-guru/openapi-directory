package shared

type BiographyExperience struct {
	EndMonth     *int32  `json:"endMonth"`
	EndYear      *int32  `json:"endYear"`
	ID           *int32  `json:"id"`
	Organisation *string `json:"organisation"`
	StartMonth   *int32  `json:"startMonth"`
	StartYear    *int32  `json:"startYear"`
	Title        *string `json:"title"`
	Type         *string `json:"type"`
	TypeID       *int32  `json:"typeId"`
}
