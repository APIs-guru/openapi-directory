package shared

type BiographyExperience struct {
	EndMonth     *int32  `json:"endMonth,omitempty"`
	EndYear      *int32  `json:"endYear,omitempty"`
	ID           *int32  `json:"id,omitempty"`
	Organisation *string `json:"organisation,omitempty"`
	StartMonth   *int32  `json:"startMonth,omitempty"`
	StartYear    *int32  `json:"startYear,omitempty"`
	Title        *string `json:"title,omitempty"`
	Type         *string `json:"type,omitempty"`
	TypeID       *int32  `json:"typeId,omitempty"`
}
